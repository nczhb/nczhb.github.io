
var dom = echarts.init(document.getElementById('map_wrap_s'));


data1 = [
  {name:"富途网络", value: [113.944023,22.547392, 18.0]},
  {name:"紫川软件", value: [114.102730,22.541325, 11.5]},
  {name:"试金石信用", value: [113.916242,22.491181, 22.5]},
  {name:"闻善科技", value: [114.050387,22.535462, 35.0]},
  {name:"数位科技", value: [113.940587,22.523636, 25.0]},
  {name:"深圳妈妈资本", value: [113.937086,22.522119, 18.0]},
  {name:"货拉拉手机打车软件", value: [114.060239,22.568922, 22.5]},
  {name:"武汉佰钧成技术有限公司", value: [114.066284,22.658516, 12.0]},
  {name:"RulerTech然诺", value: [114.064832,22.542644, 17.5]},
  {name:"中安信业", value: [114.023823,22.537003, 15.0]},
  {name:"小鹅（小鹅通）", value: [113.943572,22.548341, 15.0]},
  {name:"神策数据", value: [113.945036,22.528953, 20.0]},
  {name:"字节跳动", value: [113.984593,22.552792, 10.0]},
  {name:"团贷网", value: [113.950514,22.554745, 11.5]},
  {name:"佰仟金融", value: [114.069046,22.564710, 15.0]},
  {name:"众安保险", value: [113.884846,22.524049, 9.5]},
  {name:"通力互联", value: [113.934727,22.540940, 8.0]},
  {name:"云天励飞", value: [114.095788,22.542266, 22.5]},
  {name:"海南新浪爱问普惠科技有限公司", value: [113.952487,22.535129, 17.5]},
  {name:"恒信永利", value: [113.953419,22.569215, 8.5]},
  {name:"加推科技", value: [113.937833,22.522553, 14.0]},
  {name:"天天看看", value: [113.915863,22.492741, 22.5]},
  {name:"Symbio-Freeborders", value: [114.051801,22.536410, 16.5]},
  {name:"安正软件", value: [114.024618,22.534941, 17.0]},
  {name:"字节跳动", value: [113.887927,22.548676, 22.5]},
  {name:"极光", value: [113.907425,22.549936, 15.0]},
  {name:"多快好省", value: [113.946790,22.556374, 11.5]},
  {name:"前海信息", value: [113.927821,22.582070, 25.0]},
  {name:"小赢科技", value: [113.941993,22.519366, 22.5]},
  {name:"一面数据", value: [113.939945,22.540640, 15.0]},
  {name:"通力互联", value: [113.947639,22.546391, 11.5]},
  {name:"深圳链家房地产经纪有限公司", value: [114.022768,22.534784, 6.5]},
  {name:"消费保", value: [113.950723,22.557544, 6.5]},
  {name:"字节跳动", value: [113.925762,22.511996, 30.0]},
  {name:"微创", value: [113.946903,22.545540, 8.5]},
  {name:"利民网", value: [113.946790,22.556374, 10.0]},
  {name:"魅族", value: [113.952099,22.540972, 20.0]},
  {name:"云天励飞", value: [114.096060,22.542341, 22.5]},
  {name:"深圳市名瑞德国际金融服务有限公司", value: [114.026815,22.535321, 9.0]},
  {name:"中安信业", value: [114.023823,22.537003, 22.5]},
  {name:"京东集团", value: [113.885817,22.549436, 19.0]},
  {name:"中付支付", value: [114.057148,22.534135, 6.0]},
  {name:"江苏亿科达", value: [114.070519,22.549118, 15.0]},
  {name:"森香", value: [113.932925,22.541408, 5.0]},
  {name:"小满科技", value: [113.952792,22.540605, 18.0]},
  {name:"通力互联", value: [113.946903,22.545540, 12.5]},
  {name:"深圳链家房地产经纪有限公司", value: [114.022768,22.534784, 5.0]},
  {name:"字节跳动", value: [113.925762,22.511996, 30.0]},
  {name:"探娱互动科学@移动游戏发行", value: [113.954374,22.539380, 10.5]},
  {name:"一面数据", value: [113.939945,22.540640, 15.0]},
  {name:"立创商城", value: [114.042568,22.549496, 12.5]},
  {name:"百灵鸟", value: [113.952802,22.539255, 30.0]},
  {name:"江苏亿科达", value: [114.060170,22.548627, 12.5]},
  {name:"极光", value: [113.907425,22.549936, 25.0]},
  {name:"京东集团", value: [114.057987,22.604288, 15.0]},
  {name:"前海数据", value: [113.943267,22.504126, 12.5]},
  {name:"任子行", value: [113.938748,22.545024, 22.5]},
  {name:"中安信业", value: [114.023823,22.537003, 15.0]},
  {name:"招联金融", value: [113.943289,22.549041, 23.0]},
  {name:"Shopee", value: [113.944830,22.537843, 37.5]},
  {name:"深圳链家房地产经纪有限公司", value: [114.022768,22.534784, 7.0]},
  {name:"字节跳动", value: [113.887927,22.548676, 22.5]},
  {name:"万盈金融", value: [113.934099,22.517662, 8.0]},
  {name:"蓝色光标SNK", value: [113.942200,22.548780, 7.0]},
  {name:"盈富斯", value: [113.941870,22.556242, 21.5]},
  {name:"深圳刷宝科技有限公司", value: [113.922013,22.575066, 20.0]},
  {name:"中腾信", value: [113.953026,22.540908, 13.0]},
  {name:"小赢科技", value: [113.941993,22.519366, 27.5]},
  {name:"世联行", value: [114.126664,22.544902, 6.0]},
  {name:"融金所", value: [114.023226,22.531571, 11.0]},
  {name:"迅雷", value: [113.937777,22.545750, 22.5]},
  {name:"健康160（原就医160）", value: [113.919715,22.509510, 15.0]},
  {name:"平安银行信用卡中心", value: [113.920022,22.531989, 22.5]},
  {name:"希为科技", value: [114.056698,22.508255, 20.0]},
  {name:"一满乐", value: [113.937056,22.523681, 12.5]},
  {name:"深圳链家房地产经纪有限公司", value: [114.022768,22.534784, 6.5]},
  {name:"万科物业", value: [114.062472,22.568257, 20.0]},
  {name:"随手科技", value: [113.955032,22.533947, 15.0]},
  {name:"康呈祥科技有限公司", value: [113.940586,22.526910, 19.0]},
  {name:"顺丰科技有限公司", value: [113.940411,22.524234, 12.5]},
  {name:"科安数字", value: [114.069442,22.624752, 11.5]},
  {name:"极光", value: [113.907425,22.549936, 20.0]},
  {name:"买金呗", value: [114.063585,22.546124, 12.5]},
  {name:"微创", value: [113.884846,22.524049, 8.5]},
  {name:"通力互联", value: [113.952499,22.580013, 7.0]},
  {name:"360°新媒体", value: [113.956666,22.539665, 6.0]},
  {name:"科天智慧云", value: [113.952802,22.539255, 20.0]},
  {name:"武汉佰钧成技术有限公司", value: [114.069092,22.659664, 20.0]},
  {name:"买买提信息科技", value: [114.069046,22.564710, 12.5]},
  {name:"中腾信", value: [113.953026,22.540908, 10.5]},
  {name:"恒信永利", value: [113.953419,22.569215, 20.0]},
  {name:"牛鼎丰科技", value: [113.955032,22.533945, 22.5]},
  {name:"前海联动云", value: [114.107087,22.557559, 9.0]},
  {name:"共享伞：漂流伞mobrella", value: [114.031760,22.531531, 15.0]},
  {name:"康哲药业", value: [113.926031,22.549225, 12.5]},
  {name:"顺丰科技有限公司", value: [113.937985,22.523394, 17.5]},
  {name:"美联英语在线VIP", value: [114.123477,22.674657, 12.5]},
  {name:"蓝色光标SNK", value: [113.942200,22.548780, 11.0]},
  {name:"民投金服", value: [113.941282,22.543819, 14.0]},
  {name:"赫美智科", value: [114.031293,22.534145, 7.0]},
  {name:"摩根数字集团", value: [114.036640,22.656706, 9.0]},
  {name:"货拉拉手机打车软件", value: [114.060239,22.568922, 40.0]},
  {name:"微思敦", value: [113.949017,22.530684, 22.5]},
  {name:"跨越速运", value: [113.938844,22.523078, 12.5]},
  {name:"恒信永利", value: [113.953419,22.569215, 22.5]},
  {name:"顺丰科技有限公司", value: [113.940411,22.524234, 24.0]},
  {name:"4PX", value: [113.825086,22.640955, 5.5]},
  {name:"SEE小电铺", value: [113.952859,22.541203, 15.0]},
  {name:"卓世达科", value: [113.941165,22.526747, 8.0]},
  {name:"Q房网", value: [113.953026,22.540908, 9.0]},
  {name:"闪聚", value: [113.940644,22.522942, 15.0]},
  {name:"数聚能源科技", value: [114.113225,22.537888, 16.0]},
  {name:"博大智远", value: [113.932925,22.541408, 32.5]},
  {name:"深圳市规土委信息中心", value: [114.038280,22.543622, 11.5]},
  {name:"Sunvalley", value: [114.058544,22.604959, 22.5]},
  {name:"TCL电子", value: [113.928357,22.569030, 24.0]},
  {name:"友金所", value: [113.946915,22.544901, 9.5]},
  {name:"优阅达", value: [113.926974,22.516417, 6.0]},
  {name:"深圳白骑士大数据有限公司", value: [113.945772,22.545769, 5.0]},
  {name:"云之讯", value: [113.953442,22.537321, 32.5]},
  {name:"AKULAKU", value: [113.943897,22.528961, 15.0]},
  {name:"大宇无限", value: [113.932925,22.541408, 27.0]},
  {name:"一登", value: [113.940644,22.522942, 15.0]},
  {name:"天天盈球", value: [113.932777,22.540639, 10.5]},
  {name:"vivo", value: [114.060414,22.567644, 37.5]},
  {name:"iPIN.com", value: [113.943549,22.548181, 22.5]},
  {name:"网投网", value: [113.926755,22.532932, 11.5]},
  {name:"中信银行信用卡中心", value: [114.273188,30.594282, 37.5]},
  {name:"乐逗游戏", value: [113.943549,22.548181, 25.0]},
  {name:"世联行", value: [114.126664,22.544902, 6.5]},
  {name:"马上金融", value: [114.046120,22.509624, 27.5]},
  {name:"金斧子", value: [113.943289,22.549041, 11.0]},
  {name:"乐刷", value: [113.954483,22.530995, 20.0]},
  {name:"银汉", value: [113.935482,22.548625, 15.0]},
  {name:"蓝色光标SNK", value: [113.942200,22.548780, 6.5]},
  {name:"编程猫", value: [113.940808,22.509009, 4.5]},
  {name:"中腾信", value: [113.953026,22.540908, 12.0]},
  {name:"众安保险", value: [113.937072,22.522285, 12.5]},
  {name:"货拉拉手机打车软件", value: [114.060144,22.569600, 22.5]},
  {name:"微思敦", value: [113.949017,22.530684, 15.0]},
  {name:"深圳链家房地产经纪有限公司", value: [114.022768,22.534784, 6.0]},
  {name:"环球易购", value: [113.922988,22.515272, 6.5]},
  {name:"深圳白骑士大数据有限公司", value: [113.945772,22.545769, 22.5]},
  {name:"OPPO", value: [113.943145,22.518973, 22.5]},
  {name:"西遇时尚服饰", value: [114.111565,22.571088, 5.0]},
  {name:"曾点", value: [113.939679,22.525406, 8.0]},
  {name:"快找网络", value: [114.011920,22.544081, 10.0]},
  {name:"一叶知秋", value: [114.242764,22.713442, 9.0]},
  {name:"百度", value: [113.943302,22.524608, 30.0]},
  {name:"随手科技", value: [113.955032,22.533947, 22.5]},
  {name:"中安信业", value: [114.023823,22.537003, 12.5]},
  {name:"深圳市名瑞德国际金融服务有限公司", value: [114.026815,22.535321, 7.0]},
  {name:"熊猫书院", value: [113.946884,22.546158, 12.5]},
  {name:"广州瀚信", value: [114.070519,22.549118, 9.0]},
  {name:"二次元动漫", value: [113.939945,22.540640, 22.5]},
  {name:"曾点", value: [113.939679,22.525406, 6.0]},
  {name:"土巴兔", value: [113.932925,22.541408, 30.0]},
  {name:"燕文物流", value: [113.884858,22.597645, 5.0]},
  {name:"房多多", value: [113.944687,22.549143, 22.5]},
  {name:"腾讯", value: [113.943695,22.548892, 30.0]},
  {name:"百丽新零售", value: [113.938438,22.506348, 18.0]},
  {name:"脑医生", value: [114.109030,22.539959, 15.0]},
  {name:"一叶知秋", value: [114.242764,22.713442, 9.0]},
  {name:"腾讯", value: [113.935346,22.540412, 27.0]},
  {name:"顺丰科技有限公司", value: [113.939698,22.524491, 27.5]},
  {name:"法本信息", value: [113.939679,22.525406, 6.5]},
  {name:"达飞科技控股", value: [114.105904,22.556828, 10.5]},
  {name:"明源云", value: [113.952429,22.537847, 24.0]},
  {name:"shein", value: [113.971272,22.584500, 15.0]},
  {name:"吉比特", value: [113.953586,22.541961, 17.5]},
  {name:"房多多", value: [113.944687,22.549143, 22.5]},
  {name:"赫美智科", value: [114.031293,22.534145, 12.5]},
  {name:"深圳慧牛技术服务有限公司", value: [113.928758,22.515401, 40.0]},
  {name:"派鲜", value: [113.935754,22.540650, 11.5]},
  {name:"货拉拉手机打车软件", value: [114.056338,22.563540, 40.0]},
  {name:"禅游", value: [113.957553,22.538258, 15.0]},
  {name:"KLOOK 客路旅行", value: [114.030219,22.533263, 15.0]},
  {name:"腾讯", value: [113.935346,22.540412, 27.0]},
  {name:"第一波", value: [113.943572,22.548341, 15.0]},
  {name:"vivo", value: [114.060414,22.567644, 20.0]},
  {name:"熊猫书院", value: [113.946884,22.546158, 6.0]},
  {name:"艾米科技", value: [113.951368,22.541052, 6.0]},
  {name:"众禄基金", value: [114.106920,22.558331, 18.0]},
  {name:"赫美智科", value: [114.031293,22.534145, 8.5]},
  {name:"潮越互动科技", value: [113.864362,22.584097, 12.0]},
  {name:"YIDATEC", value: [113.933786,22.540941, 8.0]},
  {name:"全棉时代", value: [114.047400,22.630536, 6.5]},
  {name:"深圳中为控股有限公司", value: [113.952859,22.541203, 5.0]},
  {name:"凹客科技", value: [113.859090,22.570793, 11.5]},
  {name:"字节跳动", value: [113.887927,22.548676, 32.5]},
  {name:"一加手机", value: [114.021472,22.530013, 12.5]},
  {name:"飞贷金融科技", value: [113.944664,22.546307, 12.0]},
  {name:"Shopee", value: [113.944830,22.537843, 40.0]},
  {name:"跨海侠", value: [114.032330,22.531030, 10.0]},
  {name:"南科大数据", value: [114.031293,22.534145, 20.0]},
  {name:"浩森时贷", value: [113.867400,22.567453, 7.0]},
  {name:"吉比特", value: [113.953586,22.541961, 12.5]},
  {name:"中腾信", value: [113.953026,22.540908, 15.0]},
  {name:"腾讯", value: [113.935346,22.540412, 30.0]},
  {name:"AKULAKU", value: [113.943897,22.528961, 20.0]},
  {name:"YIDATEC", value: [113.943840,22.545057, 10.0]},
  {name:"vivo", value: [114.055036,22.521530, 22.5]},
  {name:"小黄狗环保科技有限公...", value: [113.950514,22.554745, 22.5]},
  {name:"全民通控股", value: [113.946903,22.545540, 12.5]},
  {name:"乐信", value: [113.945525,22.537987, 18.5]},
  {name:"米筐 (Ricequant)", value: [113.939679,22.525406, 12.0]},
  {name:"Shopee", value: [113.944830,22.537843, 40.0]},
  {name:"米筐 (Ricequant)", value: [113.939679,22.525406, 12.0]},
  {name:"满金坝", value: [114.087177,22.547652, 9.0]},
  {name:"阿鹿", value: [113.950496,22.558584, 5.0]},
  {name:"百丽新零售", value: [113.938438,22.506348, 15.0]},
  {name:"腾讯", value: [113.935346,22.540412, 24.0]},
  {name:"汇金智融", value: [113.943289,22.549041, 10.0]},
  {name:"一面数据", value: [113.939945,22.540640, 11.5]},
  {name:"AKULAKU", value: [113.943897,22.528961, 20.0]},
  {name:"Walmart China", value: [114.012727,22.544725, 15.0]},
  {name:"乐格信息", value: [114.025826,22.532196, 4.0]},
  {name:"吉比特", value: [113.953586,22.541961, 17.5]},
  {name:"thestudio", value: [114.123509,22.548512, 12.0]},
  {name:"蒂爵", value: [113.952494,22.529351, 7.0]},
  {name:"腾讯", value: [113.933786,22.540941, 30.0]},
  {name:"众禄基金", value: [114.106920,22.558331, 10.5]},
  {name:"银盛金融", value: [114.009054,22.635980, 6.5]},
  {name:"随手科技", value: [113.955032,22.533947, 11.5]},
  {name:"池龙服装", value: [113.921265,22.495771, 6.5]},
  {name:"尚游游戏", value: [113.951900,22.537970, 16.0]},
  {name:"极光", value: [113.907425,22.549936, 19.5]},
  {name:"一面数据", value: [113.939945,22.540640, 20.0]},
  {name:"金畅进出口", value: [114.216372,22.723884, 7.0]},
  {name:"全棉时代", value: [114.046411,22.630464, 14.0]},
  {name:"OPPO", value: [113.943145,22.518973, 30.0]},
  {name:"前海联动云", value: [114.107087,22.557559, 11.5]},
  {name:"Walmart China", value: [114.012727,22.544725, 20.0]},
  {name:"vivo", value: [114.060414,22.567644, 20.0]},
  {name:"腾讯", value: [113.933786,22.540941, 30.0]},
  {name:"尚游游戏", value: [113.951900,22.537970, 14.0]},
  {name:"随手科技", value: [113.955143,22.534424, 20.0]},
  {name:"顺丰-丰e足食", value: [113.940026,22.525989, 15.0]},
  {name:"安信小额", value: [114.048325,22.542443, 6.5]},
  {name:"深圳金夸克数字科技有限公司", value: [114.120897,22.580564, 7.0]},
  {name:"OPPO", value: [113.943145,22.518973, 7.5]},
  {name:"WeSure微保", value: [113.932777,22.540639, 22.5]},
  {name:"平安产险深圳分公司", value: [114.011330,22.544342, 12.0]},
  {name:"深圳市与杉科技有限公司", value: [113.958716,22.543615, 9.0]},
  {name:"vivo", value: [114.060414,22.567644, 30.0]},
  {name:"中证信用", value: [114.053896,22.541796, 30.0]},
  {name:"宏智力", value: [113.951733,22.553431, 7.0]},
  {name:"投哪网", value: [114.039345,22.544742, 27.0]},
  {name:"百融金服", value: [113.952800,22.541267, 15.0]},
  {name:"腾讯", value: [113.935346,22.540412, 27.0]},
  {name:"随手科技", value: [113.955143,22.534424, 19.0]},
  {name:"百融金服", value: [113.952800,22.541267, 15.0]},
  {name:"百丽新零售", value: [113.938438,22.506348, 15.0]},
  {name:"万合乾德", value: [113.940644,22.522942, 7.5]},
  {name:"广丰集团", value: [113.913728,22.515428, 30.0]},
  {name:"全棉时代", value: [114.046820,22.629792, 9.5]},
  {name:"Shopee", value: [113.944830,22.537843, 22.5]},
  {name:"vivo", value: [114.060414,22.567644, 20.0]},
  {name:"广发证券", value: [113.934266,22.517531, 35.0]},
  {name:"世联行", value: [114.126664,22.544902, 10.5]},
  {name:"平安好房", value: [114.055411,22.537967, 20.0]},
  {name:"就位网", value: [113.863767,22.567947, 7.0]},
  {name:"武汉佰钧成技术有限公司", value: [113.946903,22.545540, 8.5]},
  {name:"投哪网", value: [114.039345,22.544742, 30.0]},
  {name:"腾讯", value: [113.934457,22.540822, 22.5]},
  {name:"随手科技", value: [113.955143,22.534424, 15.0]},
  {name:"武汉佰钧成技术有限公司", value: [113.946903,22.545540, 7.5]},
  {name:"平安科技", value: [114.095167,22.561437, 17.5]},
  {name:"暴击互娱", value: [113.937985,22.523394, 5.0]},
  {name:"深圳市名瑞德国际金融服务有限公司", value: [114.026815,22.535321, 11.5]},
  {name:"友金所", value: [113.946915,22.544901, 20.0]},
  {name:"YIDATEC", value: [113.933786,22.540941, 6.5]},
  {name:"润杨金融", value: [113.943764,22.545381, 7.0]},
  {name:"云科贷", value: [113.943289,22.549041, 13.0]},
  {name:"招商证券信息技术中心", value: [113.948438,22.528171, 27.5]},
  {name:"宜搜", value: [113.931640,22.507712, 7.0]},
  {name:"OPPO", value: [113.943145,22.518973, 22.5]},
  {name:"人人聚财", value: [113.931372,22.515262, 15.0]},
  {name:"随手科技", value: [113.955032,22.533947, 22.5]},
  {name:"腾讯", value: [113.954742,22.539586, 32.5]},
  {name:"武汉佰钧成技术有限公司", value: [113.946903,22.545540, 7.5]},
  {name:"平安科技", value: [114.055639,22.533181, 12.5]},
  {name:"珍爱网", value: [113.941852,22.519462, 20.0]},
  {name:"中腾信", value: [113.953026,22.540908, 12.5]},
  {name:"土巴兔", value: [113.932925,22.541408, 30.0]},
  {name:"招商银行", value: [114.055036,22.521530, 17.5]},
  {name:"前海联动云", value: [114.107087,22.557559, 10.5]},
  {name:"银盛金融", value: [114.009054,22.635980, 9.0]},
  {name:"我来贷WeLab", value: [113.942191,22.509195, 24.0]},
  {name:"淘乐趣", value: [114.026657,22.537661, 7.0]},
  {name:"鹏元数据技术", value: [114.031287,22.533833, 15.0]},
  {name:"海云天科技", value: [113.950153,22.550392, 11.5]},
  {name:"腾讯", value: [113.954742,22.539586, 30.0]},
  {name:"DJI大疆创新", value: [113.952260,22.537100, 10.5]},
  {name:"云天励飞", value: [114.095788,22.542266, 37.5]},
  {name:"美利金融", value: [113.951368,22.541052, 12.5]},
  {name:"航路", value: [113.949382,22.541832, 12.0]},
  {name:"中腾信", value: [113.953026,22.540908, 11.5]},
  {name:"Walmart China", value: [114.012727,22.544725, 6.5]},
  {name:"御银科技", value: [114.070519,22.549118, 11.5]},
  {name:"达飞科技控股", value: [114.105293,22.556721, 11.5]},
  {name:"小窝金服", value: [113.949093,22.541131, 25.0]},
  {name:"平安科技", value: [114.095167,22.561437, 12.5]},
  {name:"顺丰科技有限公司", value: [113.937985,22.523394, 40.0]},
  {name:"京东集团", value: [113.885817,22.549436, 22.5]},
  {name:"前海云集品", value: [114.028280,22.533992, 9.0]},
  {name:"深圳刷宝科技有限公司", value: [113.922013,22.575066, 22.5]},
  {name:"腾讯", value: [113.932777,22.540639, 22.5]},
  {name:"中腾信", value: [113.957608,22.538288, 10.5]},
  {name:"Walmart China", value: [114.012727,22.544725, 25.0]},
  {name:"微创", value: [113.942196,22.541416, 9.5]},
  {name:"深圳市升值贷电子商务有限公司", value: [114.107087,22.557559, 30.0]},
  {name:"游戏科学", value: [113.927081,22.572442, 11.5]},
  {name:"深圳金夸克数字科技有限公司", value: [114.120897,22.580564, 8.0]},
  {name:"环球易购", value: [113.919050,22.508746, 32.5]},
  {name:"腾讯•大粤网", value: [113.939945,22.540640, 12.0]},
  {name:"随手科技", value: [113.955143,22.534424, 15.0]},
  {name:"江苏亿科达", value: [114.053855,22.535702, 19.0]},
  {name:"DJI大疆创新", value: [113.948805,22.529312, 15.0]},
  {name:"迷你玩", value: [113.912660,22.511595, 40.0]},
  {name:"花样年金融", value: [113.952800,22.541267, 20.0]},
  {name:"团贷网", value: [113.950514,22.554745, 22.5]},
  {name:"中腾信", value: [113.953026,22.540908, 11.5]},
  {name:"腾讯", value: [113.934457,22.540822, 37.5]},
  {name:"环球资源", value: [114.056923,22.533358, 7.5]},
  {name:"马上金融", value: [114.046116,22.509624, 18.0]},
  {name:"亿乐谷", value: [113.839890,22.606681, 14.0]},
  {name:"金证股份", value: [113.898837,22.516962, 16.0]},
  {name:"网心科技", value: [113.948410,22.529023, 24.0]},
  {name:"斯坦德集团", value: [114.023972,22.529931, 40.0]},
  {name:"深圳市丰巢科技有限公司", value: [113.919715,22.509510, 16.5]},
  {name:"斗米", value: [113.942013,22.533838, 6.5]},
  {name:"万科", value: [113.941189,22.526531, 37.5]},
  {name:"深圳金达数据科技有限公司", value: [114.059446,22.571861, 11.5]},
  {name:"爱宝惟生物科技", value: [113.873884,22.594738, 8.5]},
  {name:"招银网络科技", value: [113.935724,22.544708, 20.0]},
  {name:"腾讯", value: [113.934457,22.540822, 22.5]},
  {name:"马上金融", value: [114.046116,22.509624, 22.5]},
  {name:"随手科技", value: [113.955143,22.534424, 12.0]},
  {name:"活动行", value: [114.089599,22.545640, 22.5]},
  {name:"北斗院", value: [113.991038,22.595644, 14.5]},
  {name:"招商证券信息技术中心", value: [113.948438,22.528171, 27.5]},
  {name:"幸福商城", value: [113.944924,22.584263, 20.0]},
  {name:"富士康科技FG次集团", value: [113.943181,22.525569, 24.0]},
  {name:"光启集团", value: [113.939867,22.549182, 22.5]},
  {name:"共筑网科", value: [113.946330,22.553923, 12.5]},
  {name:"云丁", value: [114.004379,22.593130, 10.5]},
  {name:"斗米", value: [113.942013,22.533838, 7.0]},
  {name:"vivo", value: [114.060414,22.567644, 30.0]},
  {name:"慧眼云", value: [113.944826,22.535548, 11.5]},
  {name:"腾讯", value: [113.943764,22.545381, 30.0]},
  {name:"光启集团", value: [113.939867,22.549182, 22.5]},
  {name:"腾讯", value: [113.935334,22.522977, 27.0]},
  {name:"货拉拉手机打车软件", value: [114.060144,22.569600, 16.5]},
  {name:"顺丰科技有限公司", value: [113.940411,22.524234, 22.5]},
  {name:"中安信业", value: [114.023823,22.537003, 22.5]},
  {name:"极光", value: [113.907425,22.549936, 25.0]},
  {name:"极光", value: [113.907425,22.549936, 15.0]},
  {name:"中安信业", value: [114.023823,22.537003, 20.0]},
  {name:"OPPO", value: [113.943145,22.518973, 30.0]},
  {name:"OPPO", value: [114.057868,22.543099, 22.5]},
  {name:"腾讯", value: [113.935346,22.540412, 22.5]},
  {name:"货拉拉手机打车软件", value: [114.055970,22.563447, 7.5]},
  {name:"Walmart China", value: [114.012727,22.544725, 20.0]},
  {name:"通力互联", value: [113.946903,22.545540, 6.5]},
  {name:"Walmart China", value: [114.012727,22.544725, 8.5]},
  {name:"货拉拉手机打车软件", value: [114.060454,22.568661, 7.5]},
  {name:"Shopee", value: [113.944830,22.537843, 22.5]},
  {name:"中腾信", value: [113.953026,22.540908, 13.5]},
  {name:"中腾信", value: [113.953026,22.540908, 17.0]},
  {name:"顺丰科技有限公司", value: [113.937985,22.523394, 22.5]},
  {name:"腾讯", value: [113.935232,22.540260, 22.5]},
  {name:"腾讯", value: [113.935232,22.540260, 27.0]},
];

data2 = [
  {name:"宝安区", value:15.32},
  {name:"南山区", value:18.54},
  {name:"龙华区", value:9.08},
  {name:"福田区", value:19.46},
  {name:"龙岗区", value:13.17},
  //{name:"盐田区", value:0},
  //{name:"坪山区", value:},
  {name:"罗湖区", value:11.62},
];

data3 = [
  {name:"恒波集团", value: [113.945000,22.541441, 45.0]},
  {name:"投哪网", value: [114.039345,22.544742, 50.0]},
  {name:"深圳白骑士大数据有限公司", value: [113.945772,22.545769, 51.5]},
  {name:"西弗", value: [114.069046,22.564710, 55.0]},
  {name:"迷你玩", value: [113.912660,22.511595, 60.0]},
  {name:"康恩诺", value: [114.055036,22.521530, 67.5]},
  {name:"vivo", value: [114.053532,22.566459, 70.0]},
  {name:"高级算法工程师/算法专家", value: [113.943764,22.545381, 75.0]},
  {name:"康恩诺", value: [114.055036,22.521530, 75.0]},
  {name:"乐逗游戏", value: [113.942668,22.549266, 80.0]},
];
var option = {


  title:{
    text:'深圳',
    subtext:'鼠标点击拖动或滚轮缩放\n调节左下角图标或鼠标停留在特定位置',
    textStyle:{
      fontSize:30,
    },
  },


  tooltip:{
    trigger: 'item',
    formatter: function(params) {
                if (typeof(params.value)[2] == "undefined") {
                    return params.name + ' : ' + params.value + 'K';
                } else {
                    return params.name + ' : ' + params.value[2] + 'K';
                }
            },
  },

  legend:{
    left:'right',
    bottom:'bottom',
    data:['公司','top10(公司)'],
  },


  geo:{
    map:'shenzhen',
    roam:true,
    zoom:2,
    center:[114.02682, 22.604959],
			label: {
				normal: {
					show: true,
			       color:'white'
				},
        emphasis:{
          show:true,
          color:'black',
        }
      },
    itemStyle:{
      emphasis:{
        areaColor:'purple',
      },
    },
  },


  series:[
    {
      name:'公司',
      type: 'scatter',
      coordinateSystem: 'geo',
      symbol:'pin',
      data: data1

    },
    {
      name:'地区平均工资',
      type: 'map',
      map:'shenzhen',
      geoIndex:0,
      data:data2,
    },
    {

      name:'top10(公司)',
      type:'effectScatter',
      coordinateSystem:'geo',
      data:data3,
      symbolSize: function (val) {
        return val[2] / 10;
      },

      itemStyle: {
        normal: {
          color: 'purple',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },


    }

  ],

  visualMap:[
    {
      show: true,
      min: 4,
      max: 40,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
      seriesIndex: [0],                                         //指定对哪个series用，可以设置多个vm
      inRange: {
        color: ['#50a3ba','#eac736','#d94e5d']

      }
    },
    {
      show: false,
      min: 9,
      max: 20,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'], // 文本，默认为数值文本
      calculable: true,
      seriesIndex: [1],                                         //指定对哪个series用，可以设置多个vm
      inRange: {
        color: ['#0f0c29', '#302b63', '#24243e'] 
      }
    },],




};


dom.setOption(option);