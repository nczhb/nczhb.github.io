
console.log($("div#1").html());
$("button#4").click(function(){$("div#1").html('haha')});
//$("button").click(function(){alert('haha')});
$("button#5").click(function(){$("div#1").html('hahei')});
$("button#5").click(function(){alert($("div#1").html())});


$("button#salary").click(function(){
$("div#statistic").html('');
$("div#comment1").html('');
document.getElementById('statistic').setAttribute('_echarts_instance_', '')
dom  = echarts.init(document.getElementById("statistic"), "macarons");
option = {
  title: {
    text: '薪资水平',
  },

    tooltip: {
      trigger: 'axis'
    },

    legend: {
      data: ['深圳', '广州']
    },

    toolbox: {
      show: true,
        feature: {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },

    calculable: true,

    xAxis:[
      {
        type: 'value',
      }
    ],

    yAxis:[
      {
        type: 'value'
      }
    ],


    series:[
      {
      name: '广州',
      type: 'line',
        data: [[1.5, 2], [2.5, 3], [3.0, 4], [3.5, 1], [4.0, 4], [5.0, 12], [5.5, 2], [6.0, 5], [6.5, 4], [7.0, 11], [7.5, 5], [8.0, 6], [8.5, 4], [9.0, 18], [9.5, 3], [10.0, 13], [10.5, 4], [11.0, 3], [11.5, 18], [12.0, 4], [12.5, 14], [13.0, 1], [13.5, 2], [14.0, 3], [15.0, 34], [16.5, 2], [17.5, 11], [18.0, 1], [18.5, 1], [19.0, 2], [19.5, 1], [20.0, 15], [21.0, 2], [21.5, 1], [22.5, 15], [23.0, 1], [25.0, 4], [26.5, 1], [27.5, 2], [30.0, 7], [31.5, 1], [32.5, 2], [37.5, 5], [40.0, 1], [45.0, 1]]
      },
      
      {
        name: '深圳',
        type: 'line',
        data: [[4.0, 1], [4.5, 1], [5.0, 8], [5.5, 1], [6.0, 8], [6.5, 15], [7.0, 15], [7.5, 7], [8.0, 6], [8.5, 7], [9.0, 11], [9.5, 4], [10.0, 6], [10.5, 10], [11.0, 3], [11.5, 21], [12.0, 11], [12.5, 23], [13.0, 2], [13.5, 1], [14.0, 5], [14.5, 1], [15.0, 36], [16.0, 3], [16.5, 3], [17.0, 2], [17.5, 7], [18.0, 6], [18.5, 1], [19.0, 4], [19.5, 1], [20.0, 27], [21.5, 1], [22.5, 47], [23.0, 1], [24.0, 7], [25.0, 7], [27.0, 7], [27.5, 5], [30.0, 20], [32.5, 5], [35.0, 2], [37.5, 6], [40.0, 8], [45.0, 1], [50.0, 1], [51.5, 1], [55.0, 1], [60.0, 1], [67.5, 1], [70.0, 1], [75.0, 2], [80.0, 1]]
      }
    ]

}


dom.setOption(option);



$("div#comment1").html(`
<p>&emsp;&emsp;可以看到，深圳的岗位比广州多一些，尤其是在工资较高的档位
  深圳工资下限和上限均比广州要高，看来深圳的机会要更多一些


  `
);
});




//---------------------------------------------------



$("button#trade").click(function(){

$("div#statistic").html('');
$("div#comment1").html('');
$("div#cor_to_salary").html('');
$("div#comment2").html('');



document.getElementById('statistic').setAttribute('_echarts_instance_', '')
dom1  = echarts.init(document.getElementById("statistic"), "macarons");

option = {


  legend:{
    data:['深圳','广州']
  },


  series:[

    {
      name:'深圳',
      type:'pie',
      tooltip:{
        trigger:'item',
      },
      center:['25%','50%'],
      radius:[100,120],
      itemStyle:{
        normal:{
          labelLine:{
            length:20
          },
        },
      },
      data:[
{value:1, name:"信息安全"},
{value:2, name:"文化娱乐"},
{value:2, name:"旅游"},
{value:3, name:"广告营销"},
{value:4, name:"社交网络"},
{value:4, name:"医疗健康"},
{value:5, name:"教育"},
{value:10, name:"硬件"},
{value:10, name:"生活服务"},
{value:18, name:"其他"},
{value:28, name:"O2O"},
{value:28, name:"企业服务"},
{value:39, name:"游戏"},
{value:42, name:"数据服务"},
{value:70, name:"电子商务"},
{value:118, name:"金融"},
{value:226, name:"移动互联网"},
      ]
    },

  {
    name:'sz',
    type:'pie',
    tooltip:{
      show:false
    },
    center:['25%','50%'],
    radius:[100,100],
    itemStyle:{
      normal:{
       //color:'rgba(0,0,0,0)',
        label:{
          show:true,
          position:'center',
          fomatter:'{b}',
          textStyle:{
            fontSize:20
          },
        },
        labelLine:{
          show:false
        },
      },
    },
    data:[{value:10,name:'深圳'}],
  },
    {
      name:'广州',
      type:'pie',
      tooltip:{
        trigger:'item',
      },
      center:['75%','50%'],
      radius:[100,120],
      itemStyle:{
        normal:{
          labelLine:{
            length:20
          },
        },
      },
      data:[
{value:3, name:"信息安全"},
{value:5, name:"教育"},
{value:6, name:"硬件"},
{value:7, name:"其他"},
{value:8, name:"医疗健康"},
{value:8, name:"旅游"},
{value:9, name:"文化娱乐"},
{value:9, name:"社交网络"},
{value:9, name:"生活服务"},
{value:11, name:"O2O"},
{value:12, name:"广告营销"},
{value:21, name:"企业服务"},
{value:28, name:"游戏"},
{value:35, name:"金融"},
{value:43, name:"数据服务"},
{value:47, name:"电子商务"},
{value:114, name:"移动互联网"},
      ]
    },

  {
    name:'gz',
    type:'pie',
    tooltip:{
      show:false
    },
    center:['75%','50%'],
    radius:[100,100],
    itemStyle:{
      normal:{
       //color:'rgba(0,0,0,0)',
        label:{
          show:true,
          position:'center',
          fomatter:'{b}',
          textStyle:{
            fontSize:20
          },
        },
        labelLine:{
          show:false
        },
      },
    },
    data:[{value:10,name:'广州'}],
  },
  ],
};

dom1.setOption(option);

//trade_part2*****************************************************************************************


document.getElementById('cor_to_salary').setAttribute('_echarts_instance_', '')
dom  = echarts.init(document.getElementById("cor_to_salary"), "macarons");


std_gz = [
[0,8.770262,16.029738],
[1,3.892468,21.732532],
[2,6.982626,12.267374],
[3,1.339746,18.660254],
[4,3.551132,16.925058],
[5,3.197634,19.552366],
[6,4.734944,19.810511],
[7,7.346303,17.209253],
[8,6.912575,20.715997],
[9,3.702740,18.297260],
[10,6.677525,24.088432],
[11,5.772049,18.832603],
[12,5.911944,22.342442],
[13,9.256603,32.854508],
[14,9.351992,20.648008],
[15,6.733881,24.944691],
[16,4.593049,26.740284],
];


std_sz = [
[0,5.552923,13.247077],
[1,5.843565,14.656435],
[2,4.136039,16.863961],
[3,11.500000,11.500000],
[4,2.672579,23.648850],
[5,6.238644,22.761356],
[6,5.465227,25.749059],
[7,6.119202,25.180798],
[8,8.050311,24.661553],
[9,6.418716,27.192395],
[10,3.805989,31.651154],
[11,11.662477,24.932762],
[12,7.029755,30.726882],
[13,12.928932,27.071068],
[14,11.504387,30.495613],
[15,9.839368,32.570888],
[16,22.500000,22.500000]
];


std_combine = [
[0,8.770262,16.029738,5.552923,13.247077],
[1,3.892468,21.732532,5.843565,14.656435],
[2,6.982626,12.267374,4.136039,16.863961],
[3,1.339746,18.660254,11.500000,11.500000],
[4,3.551132,16.925058,2.672579,23.648850],
[5,3.197634,19.552366,6.238644,22.761356],
[6,4.734944,19.810511,5.465227,25.749059],
[7,7.346303,17.209253,6.119202,25.180798],
[8,6.912575,20.715997,8.050311,24.661553],
[9,3.702740,18.297260,6.418716,27.192395],
[10,6.677525,24.088432,3.805989,31.651154],
[11,5.772049,18.832603,11.662477,24.932762],
[12,5.911944,22.342442,7.029755,30.726882],
[13,9.256603,32.854508,12.928932,27.071068],
[14,9.351992,20.648008,11.504387,30.495613],
[15,6.733881,24.944691,9.839368,32.570888],
[16,4.593049,26.740284,22.500000,22.500000],
];

function renderItem(params, api) {
    var xValue = api.value(0);
    var highPoint = api.coord([xValue, api.value(1)]);
    var lowPoint = api.coord([xValue, api.value(2)]);
    var halfWidth = api.size([1, 0])[0] * 0.1;
    var style = api.style({
        stroke: api.visual('color'),
        fill: null
    });

    return {
        type: 'group',
        children: [{
            type: 'line',
            shape: {
                x1: highPoint[0] - halfWidth, y1: highPoint[1],
                x2: highPoint[0] + halfWidth, y2: highPoint[1]
            },
            style: style
        }, {
            type: 'line',
            shape: {
                x1: highPoint[0], y1: highPoint[1],
                x2: lowPoint[0], y2: lowPoint[1]
            },
            style: style
        }, {
            type: 'line',
            shape: {
                x1: lowPoint[0] - halfWidth, y1: lowPoint[1],
                x2: lowPoint[0] + halfWidth, y2: lowPoint[1]
            },
            style: style
        }]
    };
};




function renderItem_combine(params, api) {
    var xValue = api.value(0);
    var highPoint_gz = api.coord([xValue, api.value(1)]);
    var highPoint_sz = api.coord([xValue, api.value(3)]);
    var lowPoint_gz = api.coord([xValue, api.value(2)]);
    var lowPoint_sz = api.coord([xValue, api.value(4)]);
    var halfWidth = api.size([1, 0])[0] * 0.1;
    var half_group = (api.coord([2,2])[0]-api.coord([1,2])[0])/5.5;
    var style = api.style({
        stroke: '#FF6766',
        fill: null
    })
  
    var style2 = api.style({
        stroke: '#FFC78F',
        fill: null
    })
  
  ;

    return {
        type: 'group',
        children: [{
            type: 'line',
            shape: {
                x1: highPoint_gz[0] - halfWidth - half_group, y1: highPoint_gz[1],
                x2: highPoint_gz[0] + halfWidth - half_group, y2: highPoint_gz[1]
            },
            style: style
        }, {
            type: 'line',
            shape: {
                x1: highPoint_gz[0]-half_group, y1: highPoint_gz[1],
                x2: lowPoint_gz[0]-half_group, y2: lowPoint_gz[1]
            },
            style: style
        }, {
            type: 'line',
            shape: {
                x1: lowPoint_gz[0] - halfWidth-half_group, y1: lowPoint_gz[1],
                x2: lowPoint_gz[0] + halfWidth-half_group, y2: lowPoint_gz[1]
            },
            style: style
        },
         //sz 
          {
            type: 'line',
            shape: {
                x1: highPoint_sz[0] - halfWidth + half_group, y1: highPoint_sz[1],
                x2: highPoint_sz[0] + halfWidth + half_group, y2: highPoint_sz[1]
            },
            style: style2
        }, {
            type: 'line',
            shape: {
                x1: highPoint_sz[0] + half_group, y1: highPoint_sz[1],
                x2: lowPoint_sz[0] + half_group, y2: lowPoint_sz[1]
            },
            style: style2
        }, {
            type: 'line',
            shape: {
                x1: lowPoint_sz[0] - halfWidth + half_group, y1: lowPoint_sz[1],
                x2: lowPoint_sz[0] + halfWidth + half_group, y2: lowPoint_sz[1]
            },
            style: style2
        }]
    };
}




option = {

  title: {
    text: '行业对比',
  },

  tooltip:{
    trigger: 'axis',
  },

  toolbox:{
    show: true,
    feature: {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar','stack','tiled']},
          restore : {show: true},
          saveAsImage : {show: true}
        }
  },

  calculable: true,


  legend:{
    data:['深圳','广州','error', 'error(深圳)', 'error(广州)'],
    selected: {
      'error(广州)': false,
      'error(深圳)':false,
    },
  },
  

  xAxis:[
    {
      type:'category',
      splitLine:{show:false},
      data:['教育', '医疗健康', '旅游', '信息安全', '企业服务', '广告营销', 'O2O', '生活服务', '金融', '其他', '电子商务', '数据服务', '移动互联网', '社交网络', '硬件', '游戏', '文化娱乐'],
      axisLabel:{
        show:true,
        interval:0,
        rotate:-45,
    }
    }
  ],

  yAxis:[
    {
      type: 'value',
    },
  ],


  series:[
    {
      name:'广州',
      type:'bar',
      data:[12.4,12.8125,9.625,10.,10.23809524,11.375,12.27272727,12.27777778,13.81428571,11.,15.38297872,12.30232558,14.12719298,21.05555556,15.,15.83928571,15.66666667],
      barCategoryGap:'30%',
      barGap:'5%',
    },

    {
      name:'深圳',
      type:'bar',
      data:[9.4,10.25,10.5,11.5,13.16071429,14.5,15.60714286,15.65 ,16.3559322 ,16.80555556,17.72857143,18.29761905,18.87831858,20.,21.,21.20512821,22.5]
    },

{
        type: 'custom',
        name: 'error(广州)',
        itemStyle: {
            normal: {
                borderWidth: 1.5
            }
        },
        renderItem: renderItem,
        encode: {
            x: 0,
            y: [1, 2]
        },
        data: std_gz,
        z: 100,
  tooltip:{
    show:false
  },
    },



{
        type: 'custom',
        name: 'error(深圳)',
        itemStyle: {
            normal: {
                borderWidth: 1.5
            }
        },
        renderItem: renderItem,
        encode: {
            x: 0,
            y: [1, 2]
        },
        data: std_sz,
        z: 100,
  tooltip:{
    show:false
  },
    },


{
        type: 'custom',
        name: 'error',
        itemStyle: {
            normal: {
                borderWidth: 1.5
            }
        },
        renderItem: renderItem_combine,
        encode: {
            x: 0,
            y: [1, 2]
        },
        data: std_combine,
        z: 100,
  tooltip:{
    show:false
  },
    },



  ],





};
dom.setOption(option);



})
