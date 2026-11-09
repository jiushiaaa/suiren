/* MPL-2.0 — Small, finite encounters; optional state, no population transfers. */
var CivilEncounters={
  pool:[
    ['leak','solo','屋顶漏水','融雪正滴进柴堆。花四份废料补住漏缝；也可以先撤到干处，最多损失六份木料。','补住漏缝',{scrap:4},{},{loss:{wood:6}}],
    ['beast','village','粮棚外的爪痕','变异兽钻进了粮棚。花六份木料堵住入口，或撤离并放弃最多八份食物。若强行抢粮，有一半概率一人受伤，需休养120秒。','堵住入口',{wood:6},{},{loss:{food:8},injury:.5}],
    ['collapse','town','摇晃的货架','旧库房的横梁正在开裂。花十二份木料和两份工具加固，或撤离并放弃最多二十份木料。强行抢救有四分之一概率一人遇难，另有一半概率一人受伤、休养120秒。','加固横梁',{wood:12,tools:2},{},{loss:{wood:20},death:.25,injury:.5}],
    ['fire','city','仓库里的火星','原镇公仓冒起了烟。花十二份木料和四份工具设置隔火带，或疏散人员，最多损失四十份食物与二十份木料。','设置隔火带',{wood:12,tools:4},{},{loss:{food:40,wood:20}}],
    ['rain','metro','漏雨的中转棚','原镇公仓旁的中转棚漏雨，尚未装车的储备正在受潮。花四份工具修棚，或撤走人员，最多损失六十份食物和十份废料；在途货物不受影响。','修好棚顶',{tools:4},{},{loss:{food:60,scrap:10}}],
    ['flood','nation','涨水的旧仓','洪水涌向原镇公仓。花三十份木料和八份工具筑起挡水板，或先疏散人员，最多损失一百二十份食物和四份药品。','筑起挡水板',{wood:30,tools:8},{},{loss:{food:120,medicine:4}}],
    ['short','space','备件库短路','原镇备件库出现焦味。花四份机械零件和四份工具更换隔离装置，或立即撤离并切断损坏区域，最多损失八份机械零件和三份电子元件。首航组件与在途乘员不受影响。','更换隔离装置',{parts:4,tools:4},{},{loss:{parts:8,electronics:3}}],
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
    if(e[4]){d.risk=e[7]?.injury?this.random(d):null;d.offered=e[0];c.pending='encounter_'+e[0];}
    else if(d.last!==e[0]){Civilization.notify(e[3]);d.last=e[0];}
    else d.last=null;
    return true;
  },
  choose(s,id,accept){const c=s.civilization,d=c.encounters,e=this.pool.find(e=>e[0]===id);
    if(e?.[7])return this.hazardChoose(s,id,accept?'protect':'withdraw');
    if(!d||!e?.[4]||d.offered!==id||c.pending!=='encounter_'+id||d.records.some(r=>r.id===id))return false;
    if(accept){if(Object.entries(e[5]).some(([k,n])=>(s.stores[k]||0)<n))return false;
      for(const [k,n] of Object.entries(e[5]))s.stores[k]-=n;
      for(const [k,n] of Object.entries(e[6]))s.stores[k]=(s.stores[k]||0)+n;
    }
    d.records.push({id,at:c.elapsed,accepted:accept});d.offered=null;return true;
  },
  event(id,done){if(!id.startsWith('encounter_'))return null;const e=this.pool.find(e=>'encounter_'+e[0]===id);if(!e?.[4])return null;
    if(e[7])return this.hazardEvent(e,done);
    return {title:e[2],text:[e[3]],buttons:{accept:{text:e[4],nextScene:'end',onChoose:done('事情办妥了，收支已经记下。',()=>{
      const ok=this.choose(State,e[0],true);if(!ok)Civilization.notify('物资不足，可以稍后再决定，或放弃这次机会。');return ok;
    })},decline:{text:'这次作罢',nextScene:'end',onChoose:done('这次机会留在了身后。',()=>this.choose(State,e[0],false))}}};
  },
  canRisk(s){const x=s.civilization.society,p=s.civilization.expedition;
    return !!x&&!p?.party&&!(p?.resting?.until>s.civilization.elapsed)&&s.game.population>=8&&
      CivilSociety.workforce(s)===CivilPopulation.workforce(x.cohorts)&&CivilSociety.workforce(s)>=2;
  },
  hazardChoose(s,id,option){const c=s.civilization,d=c.encounters,e=this.pool.find(e=>e[0]===id),cfg=e?.[7];
    if(!cfg||!d||d.offered!==id||c.pending!=='encounter_'+id||d.records.some(r=>r.id===id)||!['protect','withdraw','risk'].includes(option))return false;
    if(option==='risk'&&(!cfg.injury||!this.canRisk(s)||!Number.isFinite(d.risk)))return false;
    if(option==='protect'&&Object.entries(e[5]).some(([k,n])=>(s.stores[k]||0)<n))return false;
    const death=option==='risk'&&d.risk<(cfg.death||0)?1:0;
    const injury=option==='risk'&&!death&&d.risk<(cfg.death||0)+cfg.injury?1:0;
    // Record the actual home death first; a missing source aborts without changing stock or cohorts.
    if(death&&!CivilCensus.death(s,'home',1,'偶遇事故：'+e[2]))return false;
    if(option==='protect')for(const [k,n]of Object.entries(e[5]))s.stores[k]-=n;
    const loss={};if(option==='withdraw')for(const [k,n]of Object.entries(cfg.loss)){loss[k]=Math.min(s.stores[k]||0,n);s.stores[k]=(s.stores[k]||0)-loss[k];}
    if(death){const x=c.society,person=x.cohorts.find(v=>v.age>=18&&v.age<65&&v.count>0);person.count--;x.cohorts=x.cohorts.filter(v=>v.count>0);s.game.population--;CivilSociety.trimJobs(s);}
    if(injury){CivilExpedition.ensure(s).resting={count:1,until:c.elapsed+120};CivilSociety.trimJobs(s);}
    d.records.push({id,at:c.elapsed,accepted:option==='protect',option,loss,deaths:death,injuries:injury,roll:d.risk??null});d.offered=null;d.risk=null;
    return true;
  },
  hazardEvent(e,done){const s=State,buttons={},apply=option=>()=>{
    if(!this.hazardChoose(s,e[0],option)){Civilization.notify('物资或在岗人手不足，请改选撤离。');return false;}
    const r=s.civilization.encounters.records.at(-1);
    if(r.deaths)Civilization.notify('事故中一名成年居民遇难，人口与岗位名册已更新。');
    else if(r.injuries)Civilization.notify('一名居民受伤，休养120秒；期间仍需口粮，不再占用工作岗位。');
    else Civilization.notify(option==='withdraw'?'人员已经撤离，损坏物资按实际库存扣除。':'事故得到控制，没有人员伤亡。');
    return true;
  };
    buttons.protect={text:e[4],nextScene:'end',onChoose:done('这次事故已记入记录。',apply('protect'))};
    buttons.withdraw={text:'撤离，放弃受损物资',nextScene:'end',onChoose:done('这次事故已记入记录。',apply('withdraw'))};
    if(e[7].injury&&this.canRisk(s))buttons.risk={text:'冒险抢救物资',nextScene:'end',onChoose:done('这次事故已记入记录。',apply('risk'))};
    return {title:e[2],text:[e[3],...(e[7].injury&&!this.canRisk(s)?['现场人手不足，或已有居民在外与休养。只能加固或撤离。']:[])],buttons};
  },
  validate(s){const d=s.civilization.encounters;if(d===undefined){if(s.civilization.pending?.startsWith('encounter_'))throw Error('缺少偶遇记录');return;}
    const valid=id=>this.pool.some(e=>e[0]===id),fail=()=>{throw Error('偶遇记录无效');};
    if(!d||d.schema!==1||!Number.isSafeInteger(d.rng)||d.rng<0||d.rng>4294967295||!Number.isSafeInteger(d.turn)||d.turn<0||!Array.isArray(d.records)||d.records.length>this.pendingIds.length||d.last!==null&&!valid(d.last)||d.offered!==null&&!this.pendingIds.includes('encounter_'+d.offered))fail();
    if(d.risk!==undefined&&d.risk!==null&&(!Number.isFinite(d.risk)||d.risk<0||d.risk>=1))fail();
    const seen=new Set();for(const r of d.records){if(!this.pendingIds.includes('encounter_'+r.id)||seen.has(r.id)||typeof r.accepted!=='boolean'||!Number.isSafeInteger(r.at)||r.at<0||r.at>s.civilization.elapsed)fail();const e=this.pool.find(e=>e[0]===r.id);
      if(e[7]){if(!['protect','withdraw','risk'].includes(r.option)||r.accepted!==(r.option==='protect')||!r.loss||![0,1].includes(r.deaths)||![0,1].includes(r.injuries)||r.deaths+r.injuries>1)fail();
        if(r.option==='risk'){if(!e[7].injury||!Number.isFinite(r.roll)||r.roll<0||r.roll>=1||r.deaths!==Number(r.roll<(e[7].death||0))||r.injuries!==Number(!r.deaths&&r.roll<(e[7].death||0)+e[7].injury))fail();}
        else if(r.deaths||r.injuries)fail();
        if(Object.entries(r.loss).some(([k,n])=>!Object.hasOwn(e[7].loss,k)||!Number.isFinite(n)||n<0||n>e[7].loss[k])||r.option!=='withdraw'&&Object.keys(r.loss).length)fail();
        if(r.deaths&&!s.civilization.census?.entries.some(v=>v.kind==='death'&&v.from==='home'&&v.count===1&&v.at===r.at&&v.reason==='偶遇事故：'+e[2]))fail();
      }
      seen.add(r.id);}
    if(this.pool.find(e=>e[0]===d.offered)?.[7]?.injury&&!Number.isFinite(d.risk))fail();
    if(d.offered!==null&&(seen.has(d.offered)||s.civilization.pending!=='encounter_'+d.offered))fail();
    if(s.civilization.pending?.startsWith('encounter_')&&s.civilization.pending!=='encounter_'+d.offered)fail();
  }
};
