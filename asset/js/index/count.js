/* eslint-disable */

$('#chart').height(200);
let myChart = echarts.init(document.getElementById('chart'));
let option = {
  color: ['#ffffff'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    top: '3%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        show: false,
        alignWithLabel: true
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(250,250,250,0)', 'rgba(0,0,0,0.1)'],
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '浏览量',
      type: 'bar',
      barWidth: 10,
      data: [10, 52, 200, 334, 390, 330, 220],
      itemStyle: {
        normal: {
          barBorderRadius: [10, 10, 0, 0]
        }
      }
    }
  ]
};
myChart.setOption(option);
