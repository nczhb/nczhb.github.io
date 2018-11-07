


function draw(sz_pie, gz_pie, error_gz, error_sz, error_combine, xAxis_data, gz_bar, sz_bar, comment1, comment2){

    $("div#statistic").html('');
    $("div#comment1").html(comment1);
    $("div#cor_to_salary").html('');
    $("div#comment2").html(comment2);



    document.getElementById('statistic').setAttribute('_echarts_instance_', '')
    dom1  = echarts.init(document.getElementById("statistic"), "macarons");

    option = {
tooltip:{
            trigger:'item',
            formatter: '{a}:{d}%',
          },

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
          radius:[73, 85],
          itemStyle:{
            normal:{
              labelLine:{
                length:20
              },
            },
          },
          data:sz_pie
},

        {
          name:'sz',
          type:'pie',
          tooltip:{
            show:false
          },
          center:['25%','50%'],
          radius:[73, 73],
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
          radius:[73,85],
          itemStyle:{
            normal:{
              labelLine:{
                length:20
              },
            },
          },
          data:gz_pie
        },

        {
          name:'gz',
          type:'pie',
          tooltip:{
            show:false
          },
          center:['75%','50%'],
          radius:[73, 73],
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

    //part2*****************************************************************************************


    document.getElementById('cor_to_salary').setAttribute('_echarts_instance_', '');
    dom  = echarts.init(document.getElementById("cor_to_salary"), "macarons");



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
        text: '薪资分布及对比',
        subtext:'单位:K'
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
          data:xAxis_data,
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
          data:gz_bar,
          barCategoryGap:'30%',
          barGap:'5%',
        },

        {
          name:'深圳',
          type:'bar',
          data:sz_bar,
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
          data: error_gz,
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
          data: error_sz,
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
          data: error_combine,
          z: 100,
          tooltip:{
            show:false
          },
        },
      ],
    };
    dom.setOption(option);



}




var sz_pie = {
'trade':[
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
          ],
  'finance':[
{value:9, name:"天使轮"},
{value:14, name:"D轮及以上"},
{value:30, name:"未融资"},
{value:42, name:"C轮"},
{value:31, name:"B轮"},
{value:43, name:"A轮"},
{value:81, name:"上市公司"},
{value:133, name:"不需要融资"},
  ],
  'experience':[
{value:5, name:"经验应届毕业生"},
{value:6, name:"经验1年以下"},
{value:38, name:"经验不限"},
{value:47, name:"经验5-10年"},
{value:143, name:"经验3-5年"},
{value:144, name:"经验1-3年"},
  ],
'size':[
{value:1, name:"少于15人"},
{value:27, name:"15-50人"},
{value:43, name:"50-150人"},
{value:70, name:"150-500人"},
{value:79, name:"500-2000人"},
{value:163, name:"2000人以上"},
],
  'education':[
{value:7, name:"不限"},
{value:15, name:"硕士"},
{value:50, name:"大专"},
{value:311, name:"本科"},
  ],

};





var gz_pie = {
  'trade':[
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
          ],
  'finance':[
{value:7, name:"天使轮"},
{value:9, name:"D轮及以上"},
{value:15, name:"B轮"},
{value:17, name:"C轮"},
{value:24, name:"A轮"},
{value:37, name:"未融资"},
{value:70, name:"不需要融资"},
{value:77, name:"上市公司"},
  ],
  'experience':[
{value:9, name:"经验1年以下"},
{value:11, name:"经验应届毕业生"},
{value:21, name:"经验5-10年"},
{value:32, name:"经验不限"},
{value:81, name:"经验3-5年"},
{value:102, name:"经验1-3年"},
  ],
'size':[
{value:2, name:"少于15人"},
{value:23, name:"15-50人"},
{value:33, name:"50-150人"},
{value:47, name:"500-2000人"},
{value:60, name:"150-500人"},
{value:91, name:"2000人以上"},
],
  'education':[
{value:5, name:"硕士"},
{value:8, name:"不限"},
{value:31, name:"大专"},
{value:212, name:"本科"},
  ],

};






var error_gz = {
  'trade':[
    [0,13.758689,14.495697],
[1,13.476712,14.151859],
[2,14.963164,15.802793],
[3,11.985933,12.618719],
[4,15.390149,16.288422],
[5,9.905406,10.570784],
[6,11.892979,12.652475],
[7,10.630489,11.369511],
[8,12.028701,12.526855],
[9,14.713635,15.286365],
[10,10.963552,11.786448],
[11,20.459618,21.651493],
[12,12.361395,13.263605],
[13,15.107365,16.225969],
[14,9.491369,9.758631],
[15,12.215728,12.584272],
[16,9.559205,10.440795],
],
  'finance':[
    [0,8.307770,12.835087],
[1,10.501978,12.789689],
[2,12.523003,16.743663],
[3,12.076717,14.923283],
[4,17.376297,24.068148],
[5,15.400918,17.339342],
[6,10.876790,13.312399],
[7,11.835058,13.593513],
  ],
  'experience':[
    [0,8.823887,10.926113],
[1,3.967319,5.669044],
[2,5.481793,7.407096],
[3,11.420249,12.648378],
[4,16.431540,17.827719],
[5,24.197827,27.706934],
  ],
  'size':[
    [0,1.500000,9.500000],
[1,9.056197,11.813368],
[2,8.202124,9.555452],
[3,12.863982,14.802685],
[4,12.834379,14.995408],
[5,16.259947,18.003789],
  ],
  'education':[
    [0,10.943297,14.306703],
[1,8.576817,10.487700],
[2,14.167157,15.271522],
[3,9.751471,18.248529],
  ],
};


var error_sz = {
  'trade':[
    [0,18.338631,19.418006],
[1,15.926459,16.785406],
[2,16.957471,18.499672],
[3,17.913256,18.681983],
[4,20.543388,21.866868],
[5,12.538358,13.783071],
[6,15.005331,16.208955],
[7,16.178064,17.433047],
[8,15.065629,16.234371],
[9,20.417787,21.582213],
[10,13.986664,15.013336],
[11,19.561471,20.438529],
[12,9.976725,10.523275],
[13,22.500000,22.500000],
[14,10.103797,10.896203],
[15,9.161872,9.638128],
[16,11.5,11.5],
],
  'finance':[
    [0,13.312621,16.909602],
[1,14.144189,16.786044],
[2,16.559640,20.601650],
[3,19.332554,22.191255],
[4,15.720041,24.851387],
[5,20.094379,22.658708],
[6,16.351395,21.848605],
[7,14.743646,16.549587],
  ],
  'experience':[
    [0,10.880116,13.251463],
[1,7.368635,20.631365],
[2,6.138437,8.528230],
[3,12.296909,13.307258],
[4,19.419171,20.573836],
[5,32.459768,37.455125],
  ],
  'size':[
    [0,40,40],
[1,12.126848,15.762041],
[2,15.659387,19.456892],
[3,14.179879,15.877263],
[4,16.502149,19.181396],
[5,19.227140,21.085743],
  ],
  'education':[
    [0,13.828541,20.457174],
[1,10.104324,12.695676],
[2,18.128935,19.385535],
[3,22.917799,29.748867],
  ],
};


var error_combine = {
  'trade':[
    [0,13.758689,14.495697,18.338631,19.418006],
[1,13.476712,14.151859,15.926459,16.785406],
[2,14.963164,15.802793,16.957471,18.499672],
[3,11.985933,12.618719,17.913256,18.681983],
[4,15.390149,16.288422,20.543388,21.866868],
[5,9.905406,10.570784,12.538358,13.783071],
[6,11.892979,12.652475,15.005331,16.208955],
[7,10.630489,11.369511,16.178064,17.433047],
[8,12.028701,12.526855,15.065629,16.234371],
[9,14.713635,15.286365,20.417787,21.582213],
[10,10.963552,11.786448,13.986664,15.013336],
[11,20.459618,21.651493,19.561471,20.438529],
[12,12.361395,13.263605,9.976725,10.523275],
[13,15.107365,16.225969,22.500000,22.500000],
[14,9.491369,9.758631,10.103797,10.896203],
[15,12.215728,12.584272,9.161872,9.638128],
[16,9.559205,10.440795,11.5,11.5],
  ],
  'finance':[
    [0,8.307770,12.835087,13.312621,16.909602],
[1,10.501978,12.789689,14.144189,16.786044],
[2,12.523003,16.743663,16.559640,20.601650],
[3,12.076717,14.923283,19.332554,22.191255],
[4,17.376297,24.068148,15.720041,24.851387],
[5,15.400918,17.339342,20.094379,22.658708],
[6,10.876790,13.312399,16.351395,21.848605],
[7,11.835058,13.593513,14.743646,16.549587],
  ],
  'experience':[
    [0,8.823887,10.926113,10.880116,13.251463],
[1,3.967319,5.669044,7.368635,20.631365],
[2,5.481793,7.407096,6.138437,8.528230],
[3,11.420249,12.648378,12.296909,13.307258],
[4,16.431540,17.827719,19.419171,20.573836],
[5,24.197827,27.706934,32.459768,37.455125],
  ],
  'size':[
    [0,1.500000,9.500000,40,40],
[1,9.056197,11.813368,12.126848,15.762041],
[2,8.202124,9.555452,15.659387,19.456892],
[3,12.863982,14.802685,14.179879,15.877263],
[4,12.834379,14.995408,16.502149,19.181396],
[5,16.259947,18.003789,19.227140,21.085743],
  ],
  'education':[
    [0,10.943297,14.306703,13.828541,20.457174],
[1,8.576817,10.487700,10.104324,12.695676],
[2,14.167157,15.271522,18.128935,19.385535],
[3,9.751471,18.248529,22.917799,29.748867],
  ],
};



var xAxis_data = {
'trade':['移动互联网', '金融', '电子商务', '数据服务', '游戏', '企业服务', 'O2O', '其他', '生活服务', '硬件', '广告营销', '社交网络', '医疗健康', '文化娱乐', '旅游', '教育', '信息安全'],
  'finance':['天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上', '上市公司', '未融资', '不需要融资'],
  'experience':['经验不限', '应届毕业生', '经验1年以下','经验1-3年', '经验3-5年', '经验5-10年'],
  'size':['少于15人', '15-50人', '50-150人', '150-500人','500-2000人', '2000人以上'],
  'education':['不限', '大专', '本科', '硕士'],

};





var gz_bar = {
'trade':[14.13,  13.81,  15.38,  12.30,
        15.84,  10.24,  12.27,  11.00        ,
        12.28,  15.00        ,  11.38     ,  21.06,
        12.81    ,  15.67,   9.63     ,  12.40       ,  10.00],
  'finance':[10.57,  11.65,  14.63,  13.50       ,
        20.72,  16.37,  12.09,  12.71],
  'experience':[  9.88     ,   4.82,   6.44,  12.03,
        17.13,  25.95],
'size':[  5.50       ,  10.43,   8.88,  13.83,
        13.91,  17.13],
  'education':[ 12.63     ,   9.53,  14.72,  14.00        ],

};




var sz_bar = {
'trade':[18.88,  16.36 ,  17.73,  18.30,
        21.21,  13.16,  15.61,  16.81,
        15.65      ,  21.00        ,  14.50       ,  20.00        ,
        10.25      ,  22.50       ,  10.50       ,   9.40       ,  11.50       ],
  'finance':[15.11,  15.47,  18.58,  20.76,
        20.29,  21.38,  19.10       ,  15.65],
'experience':[12.07,  14.00        ,   7.33,  12.80,
        20.00 ,  34.96],
  'size':[ 40.00        ,  13.94,  17.56,  15.03,
        17.84,  20.16],
  'education':[ 17.14,  11.40       ,  18.76,  26.33],

};


var comment1 = {
'experience':
  `<p>&emsp;&emsp;广州对应届毕业生和经验一年以下经验的接受度似乎更好一些</p>
<p>&emsp;&emsp;深圳对5-10年经验的需求比广州高一些</p>
<p>&emsp;&emsp;其他方面两个城市比较接近，主要招1-3年和3-5年，两者加起来超过所有岗位的百分之70,也有不少岗位可以经验不限</p>
  `,

  'education':
  `
  <p>&emsp;&emsp;本科生还是主力军，大专生也有一席之地，硕士也招但很少，不过深圳对硕士的需求比广州更高一些 </p>

  `,

  'trade':
  `
  <p>
&emsp;&emsp;两个城市占比前6的行业是一致的，分别是移动互联网、金融、电子商务、数据服务、游戏、企业服务
&emsp;&emsp;深圳的金融行业比例比广州大了不少，在深圳金融可能是一个很大的发展方向
  </p>
  `,

  'size':
  `<p>
&emsp;&emsp;提供数据分析岗位的公司里，深圳2000人以上的比广州更多一些，广州150-500的比深圳更多一些，基本上规模越大的公司数量越多
 </p>
  `,
'finance':
  `
  <p>
&emsp;&emsp;两个城市都是不需要融资和上市公司占了大头，并且在天使伦和d轮以上的公司占比都接近，越是初期的公司数量越少
  </p>
  `

};




var comment2 = {
'experience':
  `
  <p>
&emsp;&emsp;
可以看到随着经验增加工资还是有显著的上升的</br>
&emsp;&emsp;
在各个经验水平上深圳的工资都比广州高，高一点很正常，差别比较大的是应届生和5-10年经验</br>
&emsp;&emsp;
前面看到广州的岗位里应届毕业生比例高一些，但给出的工资平均不到5k，并且我看了这些岗位的要求并不低，这对应届生有点不友好呀</br>
&emsp;&emsp;
深圳给应届生的工资相当于1-3年经验，平均14k，不过error bar有点长，我觉得奇怪去看了下原始数据，这些岗位
都是要求学历大专或本科、要求几年工作经验和各种技能、能力的应届生，我想会不会是他们的招聘专员在造反</br>
&emsp;&emsp;
经验5-10年岗位，深圳给出的平均工资比广州高了10k，达到35k，我也看了下原始数据，大概两个原因：</br>
&emsp;&emsp;&emsp;&emsp;
1、深圳机会更多，天花板更高</br>
&emsp;&emsp;&emsp;&emsp;
2、深圳水更深。。。</br>
&emsp;&emsp;
经验不限的岗位也和经验1-3年的接近，其实经验不限和经验1年以下的区别就在于，一个是你能干活我允许你
工作经验少，另一个是我招的就是新手。这么看来经验不限的岗位可能可以去试试

  </p>

  `,


  'education':
  `
  <p>
&emsp;&emsp;
专科生平均能达到10k上下的工资，本科生则是16k，学历不限的介于两者之间，研究生可以达到平均26k（不看广州）</br>
&emsp;&emsp;
广州硕士的工资介于本科和大专之间，主要原因是：广州写明招硕士的岗位少，里面还有的是招实习生</br>
&emsp;&emsp;
最后，这个图还告诉我们，小心吃了文化的亏
  </p>
  `,

  'trade':
  `
  <p>
&emsp;&emsp;
  这么多行业不一一细数了，我想把他们分成'大众'行业和'小众'行业</br>
&emsp;&emsp;
占比排行前6的行业平均工资在总体里算中上水平，而游戏行业平均工资最高(广州16k，深圳21k）</br>
&emsp;&emsp;
'小众'行业的薪资水平层次不齐，硬件、社交网络、文化娱乐的水平较高，甚至可以说平超'大众'行业，
'小众'行业里最低的有旅游、教育、信息安全，平均工资在10k上下徘徊。</br>
&emsp;&emsp;
总体来说'大众'行业的平均工资要略高于'小众'行业</br>

&emsp;&emsp;
大部分情况深圳的工资略高于广州是正常的，但有3个行业深圳比广州低，社交网络低了1k，
而医疗健康和教育行业比广州低了3k，我觉得这反映了一些现实情况而不止是工作岗位的问题
  </p>
  `,
  'size':
  `
  <p>
&emsp;&emsp;
少于15人的公司没啥可比性，总共就3家，15-50人的公司参考性也不大, 因为大部分人都不会选择</br>
&emsp;&emsp;
对于规模在150以上的公司，规模越大工资会高一些，但提高的不多</br>
&emsp;&emsp;
而50-150人规模的公司，在广州工资比较低，在深圳工资却接近500-2000人的公司</br>
&emsp;&emsp;
所以如果进不了大公司，规模小一些的的公司，在待遇上还是可以接受的
  </p>
  `,

  'finance':
  `<p>
&emsp;&emsp;
从天使论到D轮，工资水平都有一个提升，并且在B轮之后的平均工资就要超过未融资和不需要融资公司的平均值，上市公司的平均工资也处于一个较高的水平
  </p>
  `

};







draw(sz_pie['experience'], gz_pie['experience'], error_gz['experience'], error_sz['experience'], error_combine['experience'], xAxis_data['experience'], gz_bar['experience'], sz_bar['experience'], comment1['experience'], comment2['experience'])
$("button.trade").click(function(){draw(sz_pie['trade'], gz_pie['trade'], error_gz['trade'], error_sz['trade'], error_combine['trade'], xAxis_data['trade'], gz_bar['trade'], sz_bar['trade'], comment1['trade'], comment2['trade'])});
$("button.experience").click(function(){draw(sz_pie['experience'], gz_pie['experience'], error_gz['experience'], error_sz['experience'], error_combine['experience'], xAxis_data['experience'], gz_bar['experience'], sz_bar['experience'], comment1['experience'], comment2['experience'])});
$("button.education").click(function(){draw(sz_pie['education'], gz_pie['education'], error_gz['education'], error_sz['education'], error_combine['education'], xAxis_data['education'], gz_bar['education'], sz_bar['education'], comment1['education'], comment2['education'])});
$("button.size").click(function(){draw(sz_pie['size'], gz_pie['size'], error_gz['size'], error_sz['size'], error_combine['size'], xAxis_data['size'], gz_bar['size'], sz_bar['size'], comment1['size'], comment2['size'])});
$("button.finance").click(function(){draw(sz_pie['finance'], gz_pie['finance'], error_gz['finance'], error_sz['finance'], error_combine['finance'], xAxis_data['finance'], gz_bar['finance'], sz_bar['finance'], comment1['finance'], comment2['finance'])});
