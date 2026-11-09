/* MPL-2.0 — Three explicit snapshots, independent of automatic progress.
 * Lumi has one cloud object: keep the current world and all manual slots together. */
var CivilSlots={
 rows:[null,null,null],busy:false,key:'manual-slots:v1',
 check(rows){if(!Array.isArray(rows)||rows.length!==3||rows.some(r=>r!==null&&(!r||typeof r.text!=='string'||!r.meta||typeof r.meta.savedAt!=='string')))throw Error('存档列表损坏，原数据已保留');return rows;},
 async loadLocal(){const rows=await CivilLocalSaves.readRaw(this.key);this.rows=rows===undefined?[null,null,null]:this.check(rows);},
 async unpack(text){
  let envelope;try{envelope=JSON.parse(text);}catch{ return CivilPlatform.decodeSave(text); }
  if(envelope.format!=='suiren-slots')return CivilPlatform.decodeSave(text);
  if(envelope.version!==1||typeof envelope.current!=='string')throw Error('不支持的存档列表');
  const rows=this.check(envelope.slots),state=await CivilPlatform.decodeSave(envelope.current);
  this.rows=rows;return state;
 },
 async pack(rows=this.rows,current){
  const text=JSON.stringify({format:'suiren-slots',version:1,current:current===undefined?await CivilPlatform.encode():current,slots:rows});
  if(new TextEncoder().encode(text).length>10*1024*1024)throw Error('存档空间不足，请覆盖较早的存档');return text;
 },
 async save(index){
  if(this.busy)return false;if(![0,1,2].includes(index))throw Error('存档位置无效');
  if(!CivilPlatform.loaded||State.civilization?.setup?.confirmed===false)throw Error('请先进入世界');
  this.busy=true;CivilPlatform.transitioning=true;
  try{
   await CivilPlatform.writePromise;
   const text=await CivilPlatform.encode(),rows=this.rows.slice();rows[index]={text,meta:CivilLocalSaves.metadata(State)};
   if(CivilPlatform.sdk)await CivilPlatform.sdk.writeSave(await this.pack(rows,text));
   else {await CivilLocalSaves.save(CivilLocalSaves.active||1,true);await CivilLocalSaves.writeRaw(this.key,rows);}
   this.rows=rows;return true;
  }finally{this.busy=false;CivilPlatform.transitioning=false;CivilPlatform.changed();}
 },
 async load(index){
  if(this.busy)return false;const row=this.rows[index];if(!row)throw Error('这是一个空存档');this.busy=true;
  try{
   const state=await CivilPlatform.decodeSave(row.text);
   if(CivilLanding.phase==='ready'){
    CivilLanding.state=state;CivilLanding.begin();
   }else if(!await CivilPreferences.restartWorld(state))return false;
   if(!CivilPlatform.sdk)await CivilLocalSaves.save(CivilLocalSaves.active||1,true);
   return true;
  }finally{this.busy=false;}
 },
 label(i,row){if(!row)return '存档 '+(i+1)+'　空';const m=row.meta;return '存档 '+(i+1)+'　重建 '+m.year+' 年　'+({commons:'公共路线',industry:'工业路线'}[m.route]||'前期')+'　'+new Date(m.savedAt).toLocaleString();},
 menu(mode){
  if(this.dialog||typeof Events!=='undefined'&&Events.activeEvent())return;
  const focus=document.activeElement,paused=typeof CivilClock!=='undefined'?CivilClock.paused:false;
  if(typeof CivilClock!=='undefined')CivilClock.paused=true;
  const dialog=document.createElement('dialog');this.dialog=dialog;dialog.className='civil-slots';
  const title=document.createElement('h2');title.textContent=mode==='save'?'存档':'读取存档';dialog.append(title);
  const body=document.createElement('div');body.className='civil-slots-body';dialog.append(body);
  const message=document.createElement('p');message.setAttribute('role','status');
  const close=()=>{if(this.busy)return;dialog.close();dialog.remove();this.dialog=null;if(typeof CivilClock!=='undefined')CivilClock.paused=paused;focus?.focus();};
  const button=(label,fn,parent=body)=>{const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=fn;parent.append(b);return b;};
  const render=()=>{body.replaceChildren();message.textContent='';this.rows.forEach((row,i)=>{const b=button(this.label(i,row),()=>confirm(i));b.disabled=mode==='load'&&!row;});body.append(message);button('返回',close);};
  const confirm=i=>{
   if(mode==='save'&&!this.rows[i]){run(i);return;}
   body.replaceChildren();const p=document.createElement('p');p.textContent=mode==='save'?'覆盖这个存档？':'读取这个存档？当前进度将被替换。';body.append(p,message);
   button('是',()=>run(i));button('否',render);
  };
  const run=async i=>{
   body.querySelectorAll('button').forEach(b=>b.disabled=true);message.textContent=mode==='save'?'正在保存…':'正在读取…';
   try{const ok=await this[mode](i);if(!ok)throw Error('操作未完成，当前进度保留');if(mode==='load'){close();return;}render();message.textContent='存档已保存';}
   catch(e){render();message.textContent='未能'+(mode==='save'?'保存':'读取')+'：'+e.message;}
  };
  dialog.addEventListener('cancel',e=>{e.preventDefault();close();});document.body.append(dialog);render();dialog.showModal();
 }
};
