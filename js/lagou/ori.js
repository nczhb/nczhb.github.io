
option = {

    title:{
        text:'技能薪资分布',
        subtext:'单位:k',
    },

    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
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
    legend: {
        data:['两城市平均', '深圳', '广州'],
        selected:{
          '广州': false,
          '深圳': false
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['spark', 'hadoop', 'java', 'linux', 'hive', 'python', 'r', 'sas', 'sql', 'oracle', 'mysql', 'spss', 'tableau', 'ppt', 'excel']
        }
    ],
    series : [
        {
            name:'两城市平均',
            type:'bar',
            label: {
                normal: {
                    show: true
                }
            },
            data:[ 24.76,  23.07,  22.86,  22.3 ,  21.84,  19.49,  18.83,  17.8 , 17.6 ,  17.43,  17.36,  17.28,  17.18,  13.56,  13.32]
        },
        {
            name:'深圳',
            type:'bar',
            label: {
                normal: {
                    show: true
                }
            },
            data:[ 25.92,  24.1 ,  24.79,  24.52,  22.64,  21.3 ,  20.53,  19.54, 18.98,  16.88,  17.62,  19.7 ,  17.42,  15.63,  15.34]
        },
        {
            name:'广州',
            type:'bar',
            label: {
                normal: {
                    show: true
                }
            },
            data:[ 19.97,  20.99,  17.21,  17.  ,  19.86,  15.65,  15.32,  15.22, 15.41,  17.96,  17.06,  13.24,  16.36,  11.58,  11.14]
        },
    ]
};


dom3  = echarts.init(document.getElementById("ori"), "macarons");
dom3.setOption(option);
