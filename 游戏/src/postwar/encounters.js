/* MPL-2.0 — Small, finite encounters; optional state, no population transfers. */
var CivilEncounters={
  pool:[
    ['hatch','solo','门缝里的铁片','舱门夹着一只破旧工具匣。用两份木料撑住门，可以取出四份废料。','撬开工具匣',{wood:2},{scrap:4}],
    ['branches','solo','雪后的断枝','屋后落着一捆干枝。拆掉一份废料做的铁钩，可以把六份木料拖回屋里。','做钩拖回',{scrap:1},{wood:6}],
    ['echo','solo','远处的敲击','风停时，冻土深处传来三声敲击。等你贴近舱门，它又沉寂了。'],
    ['basket','village','赶路人的篮子','赶路人愿用四份食物换八份木料。他不打算留下，只想修好手里的担架。','交换物资',{wood:8},{food:4}],
    ['hide','village','皮匠的针线','路过的皮匠愿用一份工具换三张毛皮。他会带走皮子，留下修好的手工具。','交换工具',{fur:3},{tools:1}],
    ['tracks','village','绕行的兽群','巡夜的人看见变异兽群绕过灯火。清晨，泥地上只剩下交错的足迹。'],
    ['seed','town','留种人的请求','一位留种人愿以六份食物换两份工具，好在入冬前修好筛种机。','借机交换',{tools:2},{food:6}],
    ['paper','town','旧课本的缺页','旅人带来一册残缺课本，愿换走六份食物。抄录可留下四份知识，原书仍由他带走。','供餐并抄录',{food:6},{knowledge:4}],
    ['bell','town','第一次报时','街口有人试着敲响旧钟。不同巷子里的脚步，第一次跟着同一种节奏响起来。'],
    ['clinic','city','药箱与手工具','巡回医疗队愿拿两份药品换四份工具。药箱来自他们自己的储备。','交换药品',{tools:4},{medicine:2}],
    ['drawing','city','退休技师的图纸','技师愿留下旧车床的校准笔记。花两份工具备好量具，便能整理出六份知识。','整理校准记录',{tools:2},{knowledge:6}],
    ['lights','city','晚归的窗灯','末班车开过住宅区。厨房的灯一盏盏亮起，远处的工区还没有下班。'],
    ['sample','metro','跨城样品箱','外地工坊带来两份机械零件样品，希望换走四份工具，供他们自己的检修班使用。','交换样品',{tools:4},{parts:2}],
    ['archive','metro','不同的刻度','两城的旧尺刻度不一。花四份工具比对实物，可留下八份知识供后续检定使用。','比对并记录',{tools:4},{knowledge:8}],
    ['letters','metro','送到另一座城的信','邮袋第一次不靠临时托人转交。一个孩子问，另一座城的雨是不是也刚停。'],
    ['relay','nation','民间无线电记录','无线电爱好者愿用六份知识记录交换两份机械零件，修复他们自己的接收台。','交换记录',{parts:2},{knowledge:6}],
    ['museum','nation','博物馆的修复台','馆员请求四份工具修复战前仪表。整理过程中可留下十份知识，展品仍归博物馆。','支持修复',{tools:4},{knowledge:10}],
    ['names','nation','地图上的旧名字','新版地图印出来了。校对员在边缘保留了那些小村子的旧名，字很小，却都能找到。'],
    ['filter','space','试验台的滤芯','实验室有一批可拆解的报废滤芯。投入两份工具，可分离出六份废料；它们不能用于首航。','拆解报废品',{tools:2},{scrap:6}],
    ['signal','space','没有回应的信号','旧地面站留下了一段遥测。使用两份机械零件搭起解码接口，可整理出十份知识。','整理遥测',{parts:2},{knowledge:10}],
    ['sky','space','看天空的人','夜班结束后，有人在门口多站了一会儿。天空还是那片天空，只是如今，已经有人知道怎样回去。']
  ],
  get pendingIds(){return this.pool.filter(e=>e[4]).map(e=>'encounter_'+e[0]);},
  stage(s){const c=s.civilization;
    if(c.tech?.orbital_survey)return 'space';
    if(c.polity?.foundedAt!=null||c.nation?.foundedAt!=null)return 'nation';
    if(c.conurbation?.contract||c.metro?.formedAt!=null)return 'metro';
    if(c.city?.cityAt!=null||c.urban?.city)return 'city';
    if(c.village?.town||c.urban?.chartered)return 'town';
    return s.game.population>0?'village':'solo';
  },
  init(s){return s.civilization.encounters||(s.civilization.encounters={schema:1,rng:((s.civilization.setup?.seed||s.civilization.census?.seed||1)^0x345678)>>>0,turn:0,last:null,offered:null,records:[]});},
  random(d){d.rng=(Math.imul(d.rng,1664525)+1013904223)>>>0;return d.rng/4294967296;},
  roll(s){const c=s.civilization;if(c.pending)return false;
    const d=this.init(s),stage=this.stage(s),choices=this.pool.filter(e=>e[1]===stage&&e[4]&&!d.records.some(r=>r.id===e[0]));
    // Alternate decisions and quiet observations. Finite opportunities never farm rewards.
    const available=d.turn%2===0&&choices.length?choices:this.pool.filter(e=>e[1]===stage&&!e[4]);
    const e=available[Math.floor(this.random(d)*available.length)];d.turn++;
    c.randomClock=240+Math.floor(this.random(d)*181);
    if(d.turn%6===0&&['village','town'].includes(stage)){
      if(c.tech.weather&&(s.stores.wood||0)>=4){s.stores.wood-=4;Civilization.notify('寒潮预报提前送到，值守者用四份木料加固了挡风板。');}
      else c.pending='cold';
      return true;
    }
    if(e[4]){d.offered=e[0];c.pending='encounter_'+e[0];}
    else if(d.last!==e[0]){Civilization.notify(e[3]);d.last=e[0];}
    else d.last=null;
    return true;
  },
  choose(s,id,accept){const c=s.civilization,d=c.encounters,e=this.pool.find(e=>e[0]===id);
    if(!d||!e?.[4]||d.offered!==id||c.pending!=='encounter_'+id||d.records.some(r=>r.id===id))return false;
    if(accept){if(Object.entries(e[5]).some(([k,n])=>(s.stores[k]||0)<n))return false;
      for(const [k,n] of Object.entries(e[5]))s.stores[k]-=n;
      for(const [k,n] of Object.entries(e[6]))s.stores[k]=(s.stores[k]||0)+n;
    }
    d.records.push({id,at:c.elapsed,accepted:accept});d.offered=null;return true;
  },
  event(id,done){if(!id.startsWith('encounter_'))return null;const e=this.pool.find(e=>'encounter_'+e[0]===id);if(!e?.[4])return null;
    return {title:e[2],text:[e[3]],buttons:{accept:{text:e[4],nextScene:'end',onChoose:done('事情办妥了，收支已经记下。',()=>{
      const ok=this.choose(State,e[0],true);if(!ok)Civilization.notify('物资不足，可以稍后再决定，或放弃这次机会。');return ok;
    })},decline:{text:'这次作罢',nextScene:'end',onChoose:done('这次机会留在了身后。',()=>this.choose(State,e[0],false))}}};
  },
  validate(s){const d=s.civilization.encounters;if(d===undefined){if(s.civilization.pending?.startsWith('encounter_'))throw Error('缺少偶遇记录');return;}
    const valid=id=>this.pool.some(e=>e[0]===id),fail=()=>{throw Error('偶遇记录无效');};
    if(!d||d.schema!==1||!Number.isSafeInteger(d.rng)||d.rng<0||d.rng>4294967295||!Number.isSafeInteger(d.turn)||d.turn<0||!Array.isArray(d.records)||d.records.length>14||d.last!==null&&!valid(d.last)||d.offered!==null&&!this.pendingIds.includes('encounter_'+d.offered))fail();
    const seen=new Set();for(const r of d.records){if(!this.pendingIds.includes('encounter_'+r.id)||seen.has(r.id)||typeof r.accepted!=='boolean'||!Number.isSafeInteger(r.at)||r.at<0||r.at>s.civilization.elapsed)fail();seen.add(r.id);}
    if(d.offered!==null&&(seen.has(d.offered)||s.civilization.pending!=='encounter_'+d.offered))fail();
    if(s.civilization.pending?.startsWith('encounter_')&&s.civilization.pending!=='encounter_'+d.offered)fail();
  }
};
