/* MPL-2.0 — Small, finite encounters; optional state, no population transfers. */
var CivilEncounters={
  pool:[
    ["solo_crate","solo","冻住的补给箱","冰层包着一只密封口粮箱。投入4份木料，可取得3份食物。","接下这件事",{"wood":4},{"food":3},null,{"alternate":{"text":"拆下箱壳","cost":{"wood":3},"gain":{"scrap":4}},"description":"拆下箱壳：投入3份木料，可取得4份废料。两种办法只能选一种。"}],
    ["solo_wire","solo","墙里的铜线","补给箱背面的线槽标记指向一段旧铜线。投入2份木料，可取得3份废料。","接下这件事",{"wood":2},{"scrap":3},null,{"after":"solo_crate","alternate":{"text":"描下线路","cost":{"wood":2},"gain":{"knowledge":2}},"description":"描下线路：投入2份木料，可取得2份知识。两种办法只能选一种。"}],
    ["solo_sack","solo","夹层里的麻袋","旧隔热层里塞着一只麻袋，里面有尚未腐坏的干粮。投入2份废料，可取得3份食物。","接下这件事",{"scrap":2},{"food":3}],
    ["solo_sled","solo","埋雪的拖板","一块废弃拖板压在雪下，拆开后可以当柴烧。投入2份废料，可取得8份木料。","接下这件事",{"scrap":2},{"wood":8}],
    ["solo_tin","solo","生锈的铁盒","铁盒里不是食物，而是一小包还能使用的敷料。投入3份木料，可取得1份药品。","接下这件事",{"wood":3},{"medicine":1}],
    ["solo_manual","solo","炉旁的手册","一本受潮的修补手册需要慢慢烘干。投入4份木料，可取得2份知识。","接下这件事",{"wood":4},{"knowledge":2}],
    ["solo_hinge","solo","卡住的铰链","废门上的铰链尚可拆成小件，门框却得锯断。投入2份木料，可取得2份废料。","接下这件事",{"wood":2},{"scrap":2}],
    ["solo_flint","solo","旧打火器","零件盒里有一只残缺打火器，拼好后能当手工具使用。投入4份废料，可取得1份工具。","接下这件事",{"scrap":4},{"tools":1}],
    ["village_rope","village","赶路人的绳子","行脚人带着修补工具，想换些路上吃的干粮。投入4份食物，可取得1份工具。","接下这件事",{"food":4},{"tools":1},null,{"alternate":{"text":"请他教修补","cost":{"food":3},"gain":{"knowledge":3}},"description":"请他教修补：投入3份食物，可取得3份知识。两种办法只能选一种。"}],
    ["village_mushroom","village","采菌人的标本","上次换过工具的旅人带来一位采菌人，她愿分享辨认毒菌的记录。投入3份食物，可取得2份知识。","接下这件事",{"food":3},{"knowledge":2},null,{"after":"village_rope","alternate":{"text":"借灶换干粮","cost":{"wood":4},"gain":{"food":4}},"description":"借灶换干粮：投入4份木料，可取得4份食物。两种办法只能选一种。"}],
    ["village_pots","village","破锅的把手","邻近营地愿拿废金属换木料，给自己的锅炉添柴。投入6份木料，可取得4份废料。","接下这件事",{"wood":6},{"scrap":4}],
    ["village_blanket","village","补衣人的毯子","补衣人愿留下处理好的毛皮，带走修衣用的手工具。投入1份工具，可取得3份毛皮。","接下这件事",{"tools":1},{"fur":3}],
    ["village_seeds","village","菜种与干粮","路过的园丁带来一篮食物，想换铁片修补苗床。投入4份废料，可取得5份食物。","接下这件事",{"scrap":4},{"food":5}],
    ["village_journal","village","巡路人的小本","巡路人愿让你抄下安全水源的位置，作为修好他鞋钉的谢礼。投入2份废料，可取得3份知识。","接下这件事",{"scrap":2},{"knowledge":3}],
    ["village_herbs","village","药草包","游医拿出自己的药包，希望换一张防雨毛皮。投入1份毛皮，可取得1份药品。","接下这件事",{"fur":1},{"medicine":1}],
    ["village_charcoal","village","湿掉的柴车","木料商愿便宜换出一小批柴，先补足自己的口粮。投入3份食物，可取得8份木料。","接下这件事",{"food":3},{"wood":8}],
    ["town_mill","town","磨坊旧轴","磨坊把替换下的旧轴交来，允许拆出还能用的金属。投入2份工具，可取得10份废料。","接下这件事",{"tools":2},{"scrap":10},null,{"alternate":{"text":"测绘旧轴","cost":{"tools":2},"gain":{"knowledge":6}},"description":"测绘旧轴：投入2份工具，可取得6份知识。两种办法只能选一种。"}],
    ["town_school","town","借来的地图","磨坊师傅托教师带来一张旧运输图，纸张需要修复后才能抄录。投入2份工具，可取得5份知识。","接下这件事",{"tools":2},{"knowledge":5},null,{"after":"town_mill","alternate":{"text":"交换图筒金属件","cost":{"wood":6},"gain":{"scrap":4}},"description":"交换图筒金属件：投入6份木料，可取得4份废料。两种办法只能选一种。"}],
    ["town_soap","town","制皂人的订单","制皂人想用自己的药用清洁品换木柴。投入12份木料，可取得2份药品。","接下这件事",{"wood":12},{"medicine":2}],
    ["town_weaver","town","织工的织机","织工愿以积存的食物支付一次织机修理。投入2份工具，可取得10份食物。","接下这件事",{"tools":2},{"food":10}],
    ["town_scale","town","失准的秤","集市留下了一只废秤，拆解能回收少量铁件。投入1份工具，可取得6份废料。","接下这件事",{"tools":1},{"scrap":6}],
    ["town_recipe","town","酿造人的笔记","酿造人愿分享防止食物败坏的实验记录，换取修桶工具。投入2份工具，可取得6份知识。","接下这件事",{"tools":2},{"knowledge":6}],
    ["town_medic","town","游医的讲课","游医愿讲解一套包扎手法，材料需由镇上准备。投入1份药品、3份食物，可取得6份知识。","接下这件事",{"medicine":1,"food":3},{"knowledge":6}],
    ["town_cart","town","退役的货车","车主允许拆走一辆退役木车，希望换些食物。投入6份食物，可取得18份木料。","接下这件事",{"food":6},{"wood":18}],
    ["city_lathe","city","报废车床","一台报废车床送到原镇维修所，内部还有可用备件。投入4份工具，可取得3份机械零件。","接下这件事",{"tools":4},{"parts":3},null,{"alternate":{"text":"测绘内部结构","cost":{"tools":4},"gain":{"knowledge":12}},"description":"测绘内部结构：投入4份工具，可取得12份知识。两种办法只能选一种。"}],
    ["city_lab","city","实验室的旧样品","拆车床时找到的编号，让实验室认出一批可以交付回收的旧样品。投入3份工具，可取得12份废料。","接下这件事",{"tools":3},{"scrap":12},null,{"after":"city_lathe","alternate":{"text":"协助整理记录","cost":{"tools":3},"gain":{"knowledge":10}},"description":"协助整理记录：投入3份工具，可取得10份知识。两种办法只能选一种。"}],
    ["city_book","city","教师的印刷板","教师带来旧印刷板，修好后可以拓下技术课程。投入3份工具，可取得9份知识。","接下这件事",{"tools":3},{"knowledge":9}],
    ["city_ward","city","轮诊队的器械","轮诊队愿从自己的药箱调出药品，换取一套维修工具。投入5份工具，可取得4份药品。","接下这件事",{"tools":5},{"medicine":4}],
    ["city_glass","city","仪表的玻璃罩","报废仪表的金属底座可以回收，需先安全拆去玻璃。投入2份工具，可取得8份废料。","接下这件事",{"tools":2},{"scrap":8}],
    ["city_kitchen","city","食堂的备用锅","食堂想换一件机械零件，愿用自己的库存食物支付。投入1份机械零件，可取得16份食物。","接下这件事",{"parts":1},{"food":16}],
    ["city_survey","city","旧街的测量册","测量员愿把误差校正方法抄进公共档案，需备好量具。投入4份工具，可取得10份知识。","接下这件事",{"tools":4},{"knowledge":10}],
    ["city_battery","city","损坏的蓄电箱","拆解点留下空蓄电箱，里面没有电池，却能回收金属。投入3份工具，可取得10份废料。","接下这件事",{"tools":3},{"scrap":10}],
    ["metro_gauge","metro","两城的轨距尺","外地工匠借来轨距尺，邀请原镇检修班共同核对刻度。投入5份工具，可取得12份知识。","接下这件事",{"tools":5},{"knowledge":12},null,{"alternate":{"text":"交换淘汰量具","cost":{"tools":4},"gain":{"scrap":10}},"description":"交换淘汰量具：投入4份工具，可取得10份废料。两种办法只能选一种。"}],
    ["metro_bearing","metro","样品轴承","共同核过刻度的工匠带来一批样品轴承，希望交换钢材。投入3份钢材，可取得4份机械零件。","接下这件事",{"steel":3},{"parts":4},null,{"after":"metro_gauge","alternate":{"text":"做一次拆解测绘","cost":{"tools":4},"gain":{"knowledge":12}},"description":"做一次拆解测绘：投入4份工具，可取得12份知识。两种办法只能选一种。"}],
    ["metro_pack","metro","包装试验","原镇公仓有一批废包装架，可付出工具拆回木料。投入3份工具，可取得24份木料。","接下这件事",{"tools":3},{"wood":24}],
    ["metro_repair","metro","外地检修册","巡回检修员愿留下故障记录，作为食宿的交换。投入12份食物，可取得10份知识。","接下这件事",{"food":12},{"knowledge":10}],
    ["metro_freight","metro","退役货箱","原镇卸下的退役货箱已不载货，可以拆取废料。投入4份工具，可取得18份废料。","接下这件事",{"tools":4},{"scrap":18}],
    ["metro_ice","metro","冷藏箱样品","制冷工坊愿拿自己的食物换一件备件，好修复试验箱。投入2份机械零件，可取得24份食物。","接下这件事",{"parts":2},{"food":24}],
    ["metro_clinic","metro","联诊队的药箱","联诊队带来额外药品，希望换回检修器械的材料。投入2份机械零件、2份工具，可取得5份药品。","接下这件事",{"parts":2,"tools":2},{"medicine":5}],
    ["metro_signal","metro","旧信号灯","原镇维修台收到一盏退役信号灯，可拆出完整电路。投入4份工具，可取得1份电子元件。","接下这件事",{"tools":4},{"electronics":1}],
    ["nation_standard","nation","废弃标准器","原镇档案馆借到一台旧标准器，修好后可记录检定方法。投入3份机械零件，可取得16份知识。","接下这件事",{"parts":3},{"knowledge":16},null,{"alternate":{"text":"获准拆解旧仪器","cost":{"tools":6},"gain":{"parts":4}},"description":"获准拆解旧仪器：投入6份工具，可取得4份机械零件。两种办法只能选一种。"}],
    ["nation_radio","nation","民用电台的交换","修复标准器的记录引来民用电台，他们愿拿备用电路换零件。投入4份机械零件，可取得2份电子元件。","接下这件事",{"parts":4},{"electronics":2},null,{"after":"nation_standard","alternate":{"text":"交换电台维修记录","cost":{"parts":3},"gain":{"knowledge":14}},"description":"交换电台维修记录：投入3份机械零件，可取得14份知识。两种办法只能选一种。"}],
    ["nation_seedbank","nation","种子库的笔记","种子库愿分享保存笔记，要求自备抄录与检验工具。投入6份工具，可取得14份知识。","接下这件事",{"tools":6},{"knowledge":14}],
    ["nation_prosthetic","nation","义肢工坊的废件","原镇维修所收到一箱废弃义肢外壳，只供拆解，不涉及居民身体。投入5份工具，可取得24份废料。","接下这件事",{"tools":5},{"scrap":24}],
    ["nation_electric","nation","退役配电板","原镇卸下的旧配电板可以拆出备件，电网不受影响。投入6份工具，可取得5份机械零件。","接下这件事",{"tools":6},{"parts":5}],
    ["nation_exhibition","nation","巡展的旧机器","巡展人员邀请记录机器结构，需提供临时测绘工具。投入5份工具，可取得15份知识。","接下这件事",{"tools":5},{"knowledge":15}],
    ["nation_vaccine","nation","研究站的药品","研究站愿用自有药品交换维修实验器械的备件。投入3份机械零件，可取得6份药品。","接下这件事",{"parts":3},{"medicine":6}],
    ["nation_alloy","nation","工坊的余料","外地工坊带来一批余下钢材，希望换走手工具。投入8份工具，可取得5份钢材。","接下这件事",{"tools":8},{"steel":5}],
    ["space_suit","space","退役试验服","原镇实验台收到一件退役试验服，拆件不会影响首航装备。投入6份工具，可取得4份机械零件。","接下这件事",{"tools":6},{"parts":4},null,{"alternate":{"text":"整理磨损记录","cost":{"tools":6},"gain":{"knowledge":20}},"description":"整理磨损记录：投入6份工具，可取得20份知识。两种办法只能选一种。"}],
    ["space_telemetry","space","模拟器的磁带","试验服上的旧编号对应一盘模拟器磁带，需要电子接口才能读出。投入1份电子元件，可取得18份知识。","接下这件事",{"electronics":1},{"knowledge":18},null,{"after":"space_suit","alternate":{"text":"拆解退役读带器","cost":{"tools":4},"gain":{"electronics":1}},"description":"拆解退役读带器：投入4份工具，可取得1份电子元件。两种办法只能选一种。"}],
    ["space_ceramic","space","隔热片边角料","试制车间交来不合航天标准的边角料，只能回收。投入5份工具，可取得20份废料。","接下这件事",{"tools":5},{"scrap":20}],
    ["space_robot","space","退役巡检车","一辆无人格的退役巡检车送到原镇回收点。投入8份工具，可取得2份电子元件、3份机械零件。","接下这件事",{"tools":8},{"electronics":2,"parts":3}],
    ["space_garden","space","封闭温室的报告","试验员愿分享失败批次的记录，需补充检测器材。投入3份机械零件，可取得20份知识。","接下这件事",{"parts":3},{"knowledge":20}],
    ["space_clock","space","旧站的原子钟","一台不再服务任务的旧钟，可用备件修复后测读记录。投入4份机械零件，可取得24份知识。","接下这件事",{"parts":4},{"knowledge":24}],
    ["space_valve","space","地面试验阀","试验场交来不再承压的阀门，只能拆取材料。投入6份工具，可取得6份钢材。","接下这件事",{"tools":6},{"steel":6}],
    ["space_lens","space","天线罩下的电路","退役天线罩里留着完整电路，需拆除锈住的支架。投入6份工具、2份机械零件，可取得3份电子元件。","接下这件事",{"tools":6,"parts":2},{"electronics":3}],
    ["solo_draft_hazard","solo","裂开的挡风板","风把舱口的挡风板撕开，堆在旁边的干柴正在被吹散。投入2份废料可安全处置；撤离最多损失4份木料。","安全处置",{"scrap":2},{},{"loss":{"wood":4}}],
    ["solo_damp_hazard","solo","潮湿的口粮袋","墙角渗水，地上的口粮袋浸湿了一角。投入3份木料可安全处置；撤离最多损失2份食物。","安全处置",{"wood":3},{},{"loss":{"food":2}}],
    ["solo_loose_hazard","solo","松动的工具架","墙上的旧架子松了，铁件随时可能落进炉灰里。投入2份木料可安全处置；撤离最多损失3份废料。","安全处置",{"wood":2},{},{"loss":{"scrap":3}}],
    ["solo_soot_hazard","solo","倒灌的烟灰","烟道倒灌，留在炉边的食物就要沾上灰。投入2份废料可安全处置；撤离最多损失3份食物。","安全处置",{"scrap":2},{},{"loss":{"food":3}}],
    ["village_rain_hazard","village","露天柴垛","骤雨打湿了柴垛，临时防雨布需要支架。投入3份废料可安全处置；撤离最多损失10份木料。","安全处置",{"scrap":3},{},{"loss":{"wood":10}}],
    ["village_rats_hazard","village","粮袋上的洞","小兽咬开粮袋，剩下的粮食还来得及转移。投入4份木料可安全处置；撤离最多损失6份食物。","安全处置",{"wood":4},{},{"loss":{"food":6}}],
    ["village_burn_hazard","village","炉边翻倒的锅","炉边一口锅翻倒，热炭滚向刚晒干的毛皮。投入4份木料可安全处置；撤离最多损失3份毛皮。冒险抢救有40%概率一人受伤，休养120秒。","安全处置",{"wood":4},{},{"loss":{"fur":3},"injury":0.4}],
    ["village_shelf_hazard","village","裂开的木梯","公用储物架前的木梯开裂，上层粮袋摇摇欲坠。投入6份木料可安全处置；撤离最多损失8份食物。冒险抢救有15%概率一人遇难，另有40%概率一人受伤，休养120秒。","安全处置",{"wood":6},{},{"loss":{"food":8},"injury":0.4,"death":0.15}],
    ["town_well_hazard","town","倒塌的井棚","井棚压住了旁边存放的木料，抢取之前必须先支撑横梁。投入2份工具可安全处置；撤离最多损失16份木料。","安全处置",{"tools":2},{},{"loss":{"wood":16}}],
    ["town_mold_hazard","town","药柜里的霉斑","药柜背板返潮，尚未受潮的药包需要换到干处。投入8份木料可安全处置；撤离最多损失2份药品。","安全处置",{"wood":8},{},{"loss":{"medicine":2}}],
    ["town_kiln_hazard","town","旧炉的落砖","原镇仓边的旧炉落砖，压住了一批未入库的废料。投入10份木料、2份工具可安全处置；撤离最多损失12份废料。冒险抢救有40%概率一人受伤，休养120秒。","安全处置",{"wood":10,"tools":2},{},{"loss":{"scrap":12},"injury":0.4}],
    ["town_storm_hazard","town","掀开的粮棚顶","暴风掀开粮棚一角，横梁下的粮食正在淋雨。投入12份木料可安全处置；撤离最多损失20份食物。冒险抢救有15%概率一人遇难，另有40%概率一人受伤，休养120秒。","安全处置",{"wood":12},{},{"loss":{"food":20},"injury":0.4,"death":0.15}],
    ["city_steam_hazard","city","仓边漏汽","原镇公仓旁的旧管线漏汽，热水正漫向存货。投入2份机械零件可安全处置；撤离最多损失30份食物。","安全处置",{"parts":2},{},{"loss":{"food":30}}],
    ["city_acid_hazard","city","破裂的清洗桶","原镇维修所的清洗桶裂开，附近备件可能被腐蚀。投入4份工具可安全处置；撤离最多损失3份机械零件。","安全处置",{"tools":4},{},{"loss":{"parts":3}}],
    ["city_rack_hazard","city","高架坠物","原镇公仓一排高架变形，下面堆着尚未发出的工具。投入2份钢材、2份工具可安全处置；撤离最多损失6份工具。冒险抢救有40%概率一人受伤，休养120秒。","安全处置",{"steel":2,"tools":2},{},{"loss":{"tools":6},"injury":0.4}],
    ["city_cable_hazard","city","仓内电缆过热","原镇公仓的独立照明线过热，火花落在木箱上。投入2份机械零件、2份工具可安全处置；撤离最多损失30份木料。冒险抢救有15%概率一人遇难，另有40%概率一人受伤，休养120秒。","安全处置",{"parts":2,"tools":2},{},{"loss":{"wood":30},"injury":0.4,"death":0.15}],
    ["metro_dock_hazard","metro","装货台塌边","原镇装货台边缘塌陷，待装食物还未计入任何车队。投入20份木料、4份工具可安全处置；撤离最多损失50份食物。","安全处置",{"wood":20,"tools":4},{},{"loss":{"food":50}}],
    ["metro_rust_hazard","metro","潮气里的轴承","原镇中转棚里一批未出库轴承受潮，包装需要更换。投入12份木料、3份工具可安全处置；撤离最多损失4份机械零件。","安全处置",{"wood":12,"tools":3},{},{"loss":{"parts":4}}],
    ["metro_glass_hazard","metro","倒伏的器材箱","原镇公仓的器材箱倒伏，支架卡在破损玻璃之间。投入5份工具可安全处置；撤离最多损失2份电子元件。冒险抢救有40%概率一人受伤，休养120秒。","安全处置",{"tools":5},{},{"loss":{"electronics":2},"injury":0.4}],
    ["metro_drain_hazard","metro","堵塞的排水沟","原镇转运场的排水沟堵塞，积水即将漫进工具库。投入4份工具可安全处置；撤离最多损失8份工具。冒险抢救有15%概率一人遇难，另有40%概率一人受伤，休养120秒。","安全处置",{"tools":4},{},{"loss":{"tools":8},"injury":0.4,"death":0.15}],
    ["nation_snow_hazard","nation","旧仓雪压","积雪压弯原镇旧仓屋梁，靠墙的食物需要转移。投入30份木料、6份工具可安全处置；撤离最多损失90份食物。","安全处置",{"wood":30,"tools":6},{},{"loss":{"food":90}}],
    ["nation_spill_hazard","nation","药品库渗漏","原镇药品库的水管破裂，密封箱尚未全部进水。投入3份机械零件、4份工具可安全处置；撤离最多损失6份药品。","安全处置",{"parts":3,"tools":4},{},{"loss":{"medicine":6}}],
    ["nation_gantry_hazard","nation","吊架失稳","原镇备件库吊架倾斜，吊着的只是本地待修备件。投入4份钢材、5份工具可安全处置；撤离最多损失8份机械零件。冒险抢救有40%概率一人受伤，休养120秒。","安全处置",{"steel":4,"tools":5},{},{"loss":{"parts":8},"injury":0.4}],
    ["nation_dust_hazard","nation","过滤器积尘","原镇电子备件柜的过滤器堵塞，粉尘正在落入接点。投入3份机械零件可安全处置；撤离最多损失3份电子元件。冒险抢救有15%概率一人遇难，另有40%概率一人受伤，休养120秒。","安全处置",{"parts":3},{},{"loss":{"electronics":3},"injury":0.4,"death":0.15}],
    ["space_coolant_hazard","space","试验台冷却液","原镇地面试验台漏液，旁边是未分配给任务的普通备件。投入4份机械零件、4份工具可安全处置；撤离最多损失3份电子元件。","安全处置",{"parts":4,"tools":4},{},{"loss":{"electronics":3}}],
    ["space_pressure_hazard","space","报废罐余压","原镇回收点的报废罐仍有余压，附近堆着本地工具。投入3份机械零件、5份工具可安全处置；撤离最多损失12份工具。","安全处置",{"parts":3,"tools":5},{},{"loss":{"tools":12}}],
    ["space_static_hazard","space","静电放电","原镇备件柜的接地线脱落，存放的普通电路受到威胁。投入5份工具可安全处置；撤离最多损失4份电子元件。冒险抢救有40%概率一人受伤，休养120秒。","安全处置",{"tools":5},{},{"loss":{"electronics":4},"injury":0.4}],
    ["space_roof_hazard","space","试验棚坠梁","原镇旧试验棚的梁柱开裂，棚内只有待回收的材料。投入5份钢材、6份工具可安全处置；撤离最多损失30份废料。冒险抢救有15%概率一人遇难，另有40%概率一人受伤，休养120秒。","安全处置",{"steel":5,"tools":6},{},{"loss":{"scrap":30},"injury":0.4,"death":0.15}],
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
  eligible(s,e){return !e[8]?.after||!!s.civilization.encounters?.records.some(r=>r.id===e[8].after&&r.accepted);},
  roll(s){const c=s.civilization;if(c.pending)return false;
    const d=this.init(s),stage=this.stage(s),choices=this.pool.filter(e=>e[1]===stage&&e[4]&&this.eligible(s,e)&&!d.records.some(r=>r.id===e[0]));
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
    if(!d||!e?.[4]||!this.eligible(s,e)||d.offered!==id||c.pending!=='encounter_'+id||d.records.some(r=>r.id===id))return false;
    if(![true,false,'alternate'].includes(accept)||accept==='alternate'&&!e[8]?.alternate)return false;
    const branch=accept==='alternate'?e[8].alternate:{cost:e[5],gain:e[6]};
    if(accept){if(Object.entries(branch.cost).some(([k,n])=>(s.stores[k]||0)<n))return false;
      for(const [k,n] of Object.entries(branch.cost))s.stores[k]-=n;
      for(const [k,n] of Object.entries(branch.gain))s.stores[k]=(s.stores[k]||0)+n;
    }
    d.records.push({id,at:c.elapsed,accepted:!!accept,...(accept==='alternate'?{branch:'alternate'}:{})});d.offered=null;return true;
  },
  event(id,done){if(!id.startsWith('encounter_'))return null;const e=this.pool.find(e=>'encounter_'+e[0]===id);if(!e?.[4])return null;
    if(e[7])return this.hazardEvent(e,done);
    const event={title:e[2],text:[e[3],...(e[8]?.description?[e[8].description]:[])],buttons:{accept:{text:e[4],nextScene:'end',onChoose:done('事情办妥了，收支已经记下。',()=>{
      const ok=this.choose(State,e[0],true);if(!ok)Civilization.notify('物资不足，可以稍后再决定，或放弃这次机会。');return ok;
    })},decline:{text:'这次作罢',nextScene:'end',onChoose:done('这次机会留在了身后。',()=>this.choose(State,e[0],false))}}};
    if(e[8]?.alternate)event.buttons.alternate={text:e[8].alternate.text,nextScene:'end',onChoose:done('事情办妥了，收支已经记下。',()=>{const ok=this.choose(State,e[0],'alternate');if(!ok)Civilization.notify('物资不足，可以稍后再决定，或放弃这次机会。');return ok;})};
    return event;
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
      if(r.branch!==undefined&&(r.branch!=='alternate'||!e[8]?.alternate||!r.accepted))fail();
      if(e[8]?.after&&!d.records.some(v=>v.id===e[8].after&&v.accepted&&v.at<=r.at))fail();
      if(e[7]){if(!['protect','withdraw','risk'].includes(r.option)||r.accepted!==(r.option==='protect')||!r.loss||![0,1].includes(r.deaths)||![0,1].includes(r.injuries)||r.deaths+r.injuries>1)fail();
        if(r.option==='risk'){if(!e[7].injury||!Number.isFinite(r.roll)||r.roll<0||r.roll>=1||r.deaths!==Number(r.roll<(e[7].death||0))||r.injuries!==Number(!r.deaths&&r.roll<(e[7].death||0)+e[7].injury))fail();}
        else if(r.deaths||r.injuries)fail();
        if(Object.entries(r.loss).some(([k,n])=>!Object.hasOwn(e[7].loss,k)||!Number.isFinite(n)||n<0||n>e[7].loss[k])||r.option!=='withdraw'&&Object.keys(r.loss).length)fail();
        if(r.deaths&&!s.civilization.census?.entries.some(v=>v.kind==='death'&&v.from==='home'&&v.count===1&&v.at===r.at&&v.reason==='偶遇事故：'+e[2]))fail();
      }
      seen.add(r.id);}
    if(this.pool.find(e=>e[0]===d.offered)?.[7]?.injury&&!Number.isFinite(d.risk))fail();
    if(d.offered!==null&&(seen.has(d.offered)||!this.eligible(s,this.pool.find(e=>e[0]===d.offered))||s.civilization.pending!=='encounter_'+d.offered))fail();
    if(s.civilization.pending?.startsWith('encounter_')&&s.civilization.pending!=='encounter_'+d.offered)fail();
  }
};
