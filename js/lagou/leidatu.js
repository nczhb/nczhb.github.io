dom = echarts.init(document.getElementById("leida"), "macarons");


option = {

  title:{
    subtext:'点击标签，选择或取消标签对应的数据',
    y:'10%',
  },

    legend: {
        data: ['移动互联网', '金融', '电子商务', '数据服务', '游戏', '企业服务']
    },
  toolbox: {
		show : true,
		feature : {
			mark : {show: true},
			dataView : {show: true, readOnly: false},
			magicType : {show: true, type: ['line', 'bar']},
			restore : {show: true},
			saveAsImage : {show: true}
		}
	},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: 'sql', max: 0.18},
           { name: 'python', max: 0.18},
           { name: 'r', max: 0.18},
           { name: 'excel', max: 0.18},
           { name: 'sas', max: 0.18},
           { name: 'spss', max: 0.18}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [0.134,  0.106,  0.0997,  0.091,  0.066,
        0.064],
                name : '移动互联网'
            },
            {
                value : [0.175,  0.110,  0.116,  0.083,  0.137,
        0.083],
                name : '金融'
            },
            {
                value : [0.152,  0.091,  0.066,  0.129,  0.071,
        0.045],
                name : '电子商务'
            },
            {
                value : [0.127,  0.111,  0.095,  0.070,  0.073,
        0.076],
                name : '数据服务'
            },
            {
                value : [0.125,  0.122,  0.087,  0.076,  0.034,
        0.057],
                name : '游戏'
            },
            {
                value : [0.150,  0.106,  0.088,  0.144,  0.056,
        0.075],
                name : '企业服务'
            },
             
        ]
    }]
};


dom.setOption(option);
