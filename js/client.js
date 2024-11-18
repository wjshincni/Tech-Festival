window.onload = function(){
    //const fullScreen = document.getElementsByTagName('body');随机变换背景色（后续）
//显示日期
    var timeNow = new Date,
        dayNight;
    if (timeNow.getHours()<5){
        dayNight = '凌晨'
    }else
    if (timeNow.getHours()<8){
        dayNight = '早上'
    }else
    if (timeNow.getHours()<11){
        dayNight = '上午'
    }else
    if (timeNow.getHours()<13){
        dayNight = '中午'
    }else
    if (timeNow.getHours()<16){
        dayNight = '下午'
    }else
    if (timeNow.getHours()<22){
        dayNight = '晚上'
    }else{
        dayNight = '半夜'
    }
    document.getElementById("rightTopTime").innerHTML = dayNight + ' ， ' + timeNow.getFullYear() + '年 ' + (timeNow.getMonth()+1) + '月 ' + timeNow.getDate() + "日 ";

//生成图表(上次的平均分)
    const pieAverageScore = echarts.init(document.getElementById('pieAverageScore'));
    const optionOfAverageScore = {
        series: [
          {
            type: 'gauge',
            progress: {
              show: true,
              width: 18
            },
            axisLine: {
              lineStyle: {
                width: 18
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              length: 15,
              lineStyle: {
                width: 2,
                color: '#999'
              }
            },
            axisLabel: {
              distance: 25,
              color: '#999',
              fontSize: 20
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 25,
              itemStyle: {
                borderWidth: 10
              }
            },
            title: {
              show: false
            },
            detail: {
              valueAnimation: true,
              fontSize: 60,
              offsetCenter: [0, '70%']
            },
            data: [
              {
                value: 100
              }
            ]
          }
        ]
    };
    pieAverageScore.setOption(optionOfAverageScore);

//生成图表（上周的考试分数排行）
    const pieListScore = echarts.init(document.getElementById('pieListScore'));
    const optionOfListScore = {
        xAxis: {
          type: 'category',
          data: ['牢大', '未来', '过去', '奶龙', '匿名用户', 'AI小快', 'Echarts','用心恋她','旧青年','Javascript']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'bar',
            data: [
                {
                    value: 86,
                    itemStyle: {
                        color: 'green'
                    }
                },
                {
                    value: 56,
                    itemStyle: {
                        color: 'red'
                    }
                },
                {
                    value: 67,
                    itemStyle: {
                        color: 'blue'
                    }
                },
                {
                    value: 100,
                    itemStyle: {
                        color: 'rgb(255, 228, 73)'
                    }
                },
                {
                    value: 95,
                    itemStyle: {
                        color: 'green'
                    }
                },
                {
                    value: 10,
                    itemStyle: {
                        color: 'gray'
                    }
                },
                {
                    value: 45,
                    itemStyle: {
                        color: 'red'
                    }
                },
                {
                    value: 78,
                    itemStyle: {
                        color: 'blue'
                    }
                },
                {
                    value: 100,
                    itemStyle: {
                        color: 'rgb(255, 228, 73)'
                    }
                },
                {
                    value: 99,
                    itemStyle: {
                        color: 'green'
                    }
                },
            ]
          }
        ]
    };
    pieListScore.setOption(optionOfListScore);
}