/* MPL-2.0 — Finite revisit sites; existing home workers, paid work and auditable receipts. */
var CivilSites={
 sites:[{"id":"pump","name":"地下泵房","rank":1,"revisit":2,"texts":["交通站图纸的背面还有一道地下入口。墙上的水位线，比门把手高得多。","外间的回水阀卡住了。沿检修道慢慢排水，或打穿废弃旁路。","水退之后，两条路通到同一间控制室。上回保住的阀门还能用；破开的旁路则得另补接头。","墙上不是撤离名单，而是轮班守泵人的签字。带走档案并封好入口，或拆下停用机组。","旧阀门和轮值手册保留下来，医院的净水支路有了可核对的图样。","停用机组拆回原镇，水下控制室留下空荡的底座。"],"source":null,"scale":1},{"id":"hospital","name":"隔离医院","rank":3,"revisit":4,"texts":["封条背后是一所隔离医院，走廊的指示灯早已熄灭。","病房门外留着两条路线：修复消毒隔间，或从废物升降井绕入。","两条路线都通往样本室。完整隔间可以复用；绕行则要重新装设密封接口。","这里没有等待唤醒的病人，只有失效样本与当年的治疗记录。保全记录，或拆走空置设备。","病历中记录了变异者接受治疗的姓名。样本不带回，记录交给公共档案。","空置设备完成消毒后拆回原镇，受损病历留在封闭柜中。"],"source":"pump","scale":2},{"id":"dam","name":"跨城旧坝","rank":4,"revisit":5,"texts":["两座城的旧水图在这里断开。坝身深处，却有一条还没画出的通廊。","闸门卡在半途。先修检修道，或切开弃用溢流口绕行。","不同入口最终抵达同一座闸室。保留的检修道省下连接件，切口则需要补强。","旧调度簿记录了争水的年份。保全测量记录，或拆走已经停用的辅机。","水位刻度与调度记录一并归档，种子冷库的防洪图可以据此校核。","停用辅机拆回原镇；这不增加当前城市的发电或供水。"],"source":null,"scale":3},{"id":"seedbank","name":"种子冷库","rank":5,"revisit":5,"texts":["厚门后只剩常温空气。备用电源耗尽的日期，写在最后一张交接单上。","修好通风隔间后进入，或绕过它、从废弃装卸口破拆。","两路在检验室汇合。完整隔间便于隔离；破拆入口则要补设防污染接头。","大多数种子已经失活。保存试验与品种记录，或回收失效冷藏设备。","失活种子不会凭空长出粮食；保存的试验记录成为生态修复的参考。","失效冷藏设备拆回原镇，不能直接当作可用冷库。"],"source":"dam","scale":4},{"id":"relay","name":"机群中继站","rank":5,"revisit":6,"texts":["中继站仍重复着一条没有接收者的巡检指令。这里没有登记在册的合成人。","从维护接口逐段隔离电源，或切开停用通道避开巡检回路。","两路汇入同一个控制核心。保全的接口可校验指令；绕行留下的断线需要重接。","确认无人格的退役控制器已经停机。保留日志，或拆解硬件；不处置任何居民。","日志显示，最后一次巡检命令来自地面航天站。它的接口记录将减少下一次勘察的准备材料。","退役控制器已拆解，不增加可工作的机器人，也不改变合成人口。"],"source":null,"scale":5},{"id":"ground","name":"航天地面站","rank":6,"revisit":6,"texts":["遥测地图标出了这座地面站。入口没有星舰，只有积尘的试验记录。","恢复试验隔间后进入，或经退役冷却通道绕行。","两条路在遥测大厅汇合。完整接口可以复用，损坏接口仍需重新接线。","最后一盘记录写着未能启航的理由。归档并封存设备，或拆解退役试验件。","未能启航者的记录归入文明档案。首航仍须完成正常制造与生命保障。","退役试验件回到原镇材料库，不直接增加任何首航组件。"],"source":"relay","scale":6},{"id":"parcel","name":"遗失的邮袋","rank":1,"revisit":1,"texts":["路边有一只湿透的邮袋，封口上还写着附近营地的旧名。","晾干封皮逐一辨认收件人，或先拆开受潮的外袋寻找去向。","","地址核实了。替收件人送回邮件，或按失主许可回收废弃包装。","邮件交回失主，对方从自己的口粮中拿出谢礼。名字没有被写成失踪者。","失主取回信件后，把废包装交给勘察班；信没有被当成燃料。"],"source":null,"scale":1,"steps":2,"rewards":{"preserve":{"food":8},"salvage":{"wood":10}},"labels":{"restore":"晾干封皮","bypass":"拆开外袋","preserve":"归还邮件","salvage":"回收空包装"}},{"id":"herbal","name":"药草人的失物","rank":1,"revisit":1,"texts":["药草人丢了一个旧包，布带挂在近郊桥栏上。","先修好护栏慢慢寻找，或绕到桥下从泥里取包。","","包中只有辨认笔记和空药盒。归还笔记，或按失主约定修补药盒。","药草人收回笔记，以自己的两份药品致谢。","药盒修好后，药草人留下两件备用手工具作为报酬。"],"source":null,"scale":1,"steps":2,"rewards":{"preserve":{"medicine":2},"salvage":{"tools":2}},"labels":{"restore":"修复护栏寻包","bypass":"绕到桥下寻包","preserve":"归还笔记","salvage":"修补药盒"}},{"id":"lostcart","name":"迷路的货车","rank":2,"revisit":2,"texts":["一辆货车停在旧路岔口。车主拒绝把货物算作无人认领的物资。","先修路标确认路线，或绕过断桥勘定另一条便道。","","回到岔口，车主还在等。交付路线记录，或按约定替他拆除弃用车架。","车主自行运走货物，并从自有储备支付口粮。没有改动任何城市的在途货单。","弃用车架交回原镇，车主与货物沿已核实的便道离开。"],"source":null,"scale":2,"steps":2,"rewards":{"preserve":{"food":14},"salvage":{"scrap":12}},"labels":{"restore":"修好路标","bypass":"勘定便道","preserve":"交付路线记录","salvage":"拆除弃用车架"}},{"id":"greenhouse","name":"被封住的温室","rank":2,"revisit":2,"texts":["城镇外的废温室被藤蔓封住，灌溉记录藏在门房。","先清理检修沟，或绕到破损侧墙进入。","","两条路都来到育苗台。记录活苗来源，或回收已倒塌的空支架。","现存植株不直接变成库存粮食；灌溉试验被整理成记录。","空支架拆回原镇，没有拆走还在生长的植株。"],"source":null,"scale":2,"steps":3,"rewards":{"preserve":{"knowledge":16},"salvage":{"wood":24,"scrap":8}},"labels":{"restore":"清理检修沟","bypass":"绕行侧墙","preserve":"保存试验记录","salvage":"回收空支架"}},{"id":"tram","name":"停运的电车库","rank":3,"revisit":3,"texts":["一座停运电车库的门仍锁着。值班表背面留有钥匙柜的位置。","修好检修步道，或经废弃排水道进入。","","两条路线在检车坑汇合。保留制动试验记录，或拆解退役车的备件。","制动试验归档，不会凭空增加正在运营的车辆。","退役车辆可用备件回到原镇，原有交通班次不受影响。"],"source":null,"scale":3,"steps":3,"rewards":{"preserve":{"knowledge":24},"salvage":{"parts":5,"scrap":12}},"labels":{"restore":"修复检修步道","bypass":"绕行排水道","preserve":"保留制动记录","salvage":"拆取退役备件"}},{"id":"coast","name":"潮汐观测屋","rank":4,"revisit":4,"texts":["沿海旧观测屋里悬着退潮时才能读清的标尺。","修复步桥进入，或绕行废弃排水闸。","","两路在观测台汇合。核对潮位记录，或拆回停用仪表。","潮位记录保留下来，世界上的海水不会因此凭空降低。","停用仪表拆回原镇；其他城市的防潮设施仍照常运行。"],"source":null,"scale":4,"steps":3,"rewards":{"preserve":{"knowledge":32},"salvage":{"parts":6,"electronics":1}},"labels":{"restore":"修复步桥","bypass":"绕行排水闸","preserve":"校核潮位记录","salvage":"拆回停用仪表"}}],

 rank(s){return ['solo','village','town','city','metro','nation','space'].indexOf(CivilEncounters.stage(s));},
 data(s){return s.civilization.siteChains;},
 site(id){return this.sites.find(x=>x.id===id);},
 records(s,id){return this.data(s)?.records.filter(x=>x.site===id)||[];},
 unlocked(s,a){return s.civilization.ruleset===2&&!!s.civilization.station&&this.rank(s)>=a.rank;},
 available(s){return this.sites.some(a=>this.unlocked(s,a));},
 crew(s){return this.data(s)?.active?2:0;},
 phase(s,id){const a=this.site(id),n=this.records(s,id).length,k=a.steps||4;return n>=k?4:k===2?(n===0?1:3):k===3?(n===2?3:n):n;},
 options(s,id){return [['survey'],['restore','bypass'],['return'],['preserve','salvage'],[]][this.phase(s,id)];},
 cost(s,id,choice,at=s.civilization.elapsed){const a=this.site(id),n=a.scale,done=this.records(s,id),cost={food:2+n,tools:n};
  if(choice==='restore')cost.tools+=2;
  if(choice==='bypass')cost.scrap=2*n;
  if(choice==='return'){cost.tools+=2; if(done[1]?.choice==='bypass')cost.scrap=4*n;}
  if(['preserve','salvage'].includes(choice))cost.tools+=n;
  if(a.source&&this.records(s,a.source).some(x=>x.choice==='preserve'&&x.endedAt<=at))cost.tools=Math.max(1,cost.tools-1);
  return cost;
 },
 seconds(choice){return {survey:60,restore:120,bypass:60,return:120,preserve:120,salvage:90}[choice];},
 reward(id,choice){const n=this.site(id).scale;return this.site(id).rewards?.[choice]|| (choice==='preserve'?{knowledge:12*n}:choice==='salvage'?{scrap:8*n,tools:2*n}:{});},
 reason(s,id,choice){const a=this.site(id);if(!a||!this.unlocked(s,a))return '地点尚未发现';
  if(this.data(s)?.active)return '勘察班尚未回到原镇';
  if(!this.options(s,id).includes(choice))return '这一阶段已经处理';
  if(this.records(s,id).length>=2&&this.rank(s)<a.revisit)return '需要下一阶段的勘察条件，再回来继续';
  if(typeof CivilClock!=='undefined'&&CivilClock.paused)return '世界已暂停';
  if(CivilSociety.workforce(s)-Object.values(s.game.workers).reduce((n,v)=>n+v,0)<2)return '需两名空闲原镇成年居民';
  if(!CivilRules.canPay(s,this.cost(s,id,choice)))return '原镇库存不足';return null;
 },
 start(s,id,choice){if(this.reason(s,id,choice))return false;const c=s.civilization,cost=this.cost(s,id,choice);if(!CivilRules.pay(s,cost))return false;
  const d=c.siteChains||(c.siteChains={schema:1,records:[],active:null});d.active={site:id,choice,startedAt:c.elapsed,lastTick:c.elapsed,worked:0,paid:cost};CivilSociety.trimJobs(s);return true;
 },
 tick(s){const d=this.data(s),a=d?.active,t=s.civilization.elapsed;if(!a||a.lastTick>=t)return;a.lastTick=t;
  // These are local day-shift surveys: residents remain in home rations, not a second population or travelling convoy.
  if(s.civilization.hunger>0||CivilPopulation.workforce(s.civilization.society.cohorts)<2||CivilSociety.workforce(s)+2<Object.values(s.game.workers).reduce((n,v)=>n+v,0)+2)return;
  a.worked++;if(a.worked<this.seconds(a.choice))return;
  const record={...a,endedAt:t,reward:this.reward(a.site,a.choice)};for(const [k,n]of Object.entries(record.reward))s.stores[k]=(s.stores[k]||0)+n;
  d.records.push(record);d.active=null;Civilization.notify(this.result(record));
 },
 result(r){const a=this.site(r.site);return a.name+'：'+(r.choice==='preserve'?a.texts[4]:r.choice==='salvage'?a.texts[5]:r.choice==='survey'?'外围勘察完成，可以选择进入路线。':['restore','bypass'].includes(r.choice)?'进入路线已确认。勘察班返回原镇，后续需要再次备料回访。':'深层现场已核实，可以决定遗迹的最终用途。');},
 validate(s){const d=this.data(s);if(d===undefined)return;const fail=()=>{throw Error('遗迹任务链记录无效');},int=n=>Number.isSafeInteger(n)&&n>=0,time=n=>int(n)&&n<=s.civilization.elapsed,same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
  if(!d||d.schema!==1||!Array.isArray(d.records)||d.records.length>39)fail();const probe={...s,civilization:{...s.civilization,siteChains:{schema:1,records:[],active:null}}};let end=-1;
  for(const r of [...d.records,...(d.active?[d.active]:[])]){const a=this.site(r?.site),active=r===d.active;if(!a||!this.unlocked(s,a)||this.records(probe,r.site).length>=2&&this.rank(s)<a.revisit||!this.options(probe,r.site).includes(r.choice)||!time(r.startedAt)||r.startedAt<end||!time(r.lastTick)||r.lastTick<r.startedAt||!int(r.worked)||r.worked>this.seconds(r.choice)||r.worked>r.lastTick-r.startedAt||!same(r.paid,this.cost(probe,r.site,r.choice,r.startedAt)))fail();
   if(active){if(r.worked>=this.seconds(r.choice)||r.endedAt!==undefined||r.reward!==undefined)fail();}
   else{if(!time(r.endedAt)||r.endedAt!==r.lastTick||r.worked!==this.seconds(r.choice)||!same(r.reward,this.reward(r.site,r.choice)))fail();probe.civilization.siteChains.records.push(r);end=r.endedAt;}
  }
  if(d.active!==null&&(!d.active||typeof d.active!=='object'))fail();
 },
 selected:null,signature:null,
 refresh(){if(typeof document==='undefined'||!document.getElementById?.('roadPanel')||!this.available(State))return;
  const s=State,known=this.sites.filter(a=>this.unlocked(s,a));if(!known.some(a=>a.id===this.selected))this.selected=this.data(s)?.active?.site||known[0].id;
  let box=$('#civilSites');if(!box.length){this.signature=null;box=$('<section>').attr('id','civilSites').prependTo('#roadPanel');$('<h3>').text('遗迹勘察').appendTo(box);$('<label>').attr('for','civilSiteSelect').text('已发现地点').appendTo(box);$('<select>').attr('id','civilSiteSelect').appendTo(box).on('change',e=>{this.selected=e.target.value;this.signature=null;this.refresh();});$('<p>').attr('id','civilSiteText').appendTo(box);$('<p>').attr('id','civilSiteStatus').appendTo(box);$('<div>').attr('id','civilSiteActions').appendTo(box);const prep=$('<details>').appendTo(box);$('<summary>').text('本次准备').appendTo(prep);$('<div>').attr('id','civilSitePreparation').appendTo(prep);const fold=$('<details>').appendTo(box);$('<summary>').text('已完成勘察').appendTo(fold);$('<div>').attr('id','civilSiteRecords').appendTo(fold);}
  const a=this.site(this.selected),done=this.records(s,a.id),active=this.data(s)?.active;
  $('#civilSiteStatus').text(active?this.site(active.site).name+' · 剩余 '+(this.seconds(active.choice)-active.worked)+' 工秒'+(s.civilization.hunger?' · 先恢复原镇供养':''):this.phase(s,a.id)===4?'此处已经归档；可以回看，不再重复取材。':'勘察班两人在原镇照常领取口粮，作业期间不参与其他岗位。每次完成后返回，再决定是否回访。');
  const sig=JSON.stringify([known.map(a=>a.id),a.id,done,active?{site:active.site,choice:active.choice}:null,this.options(s,a.id).map(k=>this.reason(s,a.id,k)),CivilClock.paused]);if(sig===this.signature)return;this.signature=sig;
  const select=$('#civilSiteSelect');if(select.children().length!==known.length){select.empty();for(const k of known)$('<option>').val(k.id).text(k.name).appendTo(select);}select.val(a.id);
  $('#civilSiteText').text(this.phase(s,a.id)===4?this.result(done.at(-1)):((a.steps===2&&!done.length?a.texts[0]+'\n':'')+a.texts[this.phase(s,a.id)]));

  const labels={survey:'勘察外围',restore:'修复检修通路',bypass:'绕行破拆入口',return:'再次回访',preserve:'保全档案',salvage:'拆解退役设备'};$('#civilSiteActions').empty();$('#civilSitePreparation').empty();if(active)$('<p>').text(CivilHistory.costText(active.paid)).appendTo('#civilSitePreparation');
  for(const choice of (active?[]:this.options(s,a.id))){const cost=this.cost(s,a.id,choice),reason=this.reason(s,a.id,choice);CivilCityView.button('civilSite_'+choice,a.labels?.[choice]||labels[choice],'#civilSiteActions',reason,()=>{const ok=this.start(State,a.id,choice);this.signature=null;return ok;}).attr('title',(reason?reason+'；':'')+CivilHistory.costText(cost));if(reason)$('<p>').text(reason).appendTo('#civilSiteActions');$('<p>').text((a.labels?.[choice]||labels[choice])+'：'+CivilHistory.costText(cost)).appendTo('#civilSitePreparation');}
  $('#civilSitePreparation').parent().toggle(!!active||this.options(s,a.id).length>0);
  const log=$('#civilSiteRecords').empty();for(const record of done)$('<p>').text('重建'+Math.floor(record.endedAt/600)+'年 '+this.result(record)).appendTo(log);
 }
};
