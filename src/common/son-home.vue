<template>
  <div id="bar_dv"
       ref="chart"
       style="height: 400px;"
  >
  </div>
</template>
 
<script>
	import * as echarts from 'echarts'
  /*默认数据*/
  const DEFAULT_DATA = {
    xAxisData: ["重庆", "西安", "福州", "杭州", "长沙", "南昌"],
    yAxisData: [43, 41.8, 41.7, 41.6, 40.6, 40.6],
  };
  export default {
    name: 'EHistogram',
    /*接收外部传入一个label变量*/
    props: ['label', 'itemColor', 'backgroundColor', 'itemDataType', 'xAxisName', 'yAxisName', 'eventType'],
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
 
        // 基于准备好的dom，初始化echarts实例
        //var bar_dv = document.getElementById('bar_dv');
        var bar_dv = this.$refs.chart;
        if (bar_dv){
          console.log('bar_dv不为空');
          let myChart = new echarts.init(bar_dv)
          // 绘制图表 '火炉省会城市极端高温对比'
          myChart.setOption({
            title: {text: this.label},
            color: [this.itemColor],
            backgroundColor: [this.backgroundColor],
            tooltip: {},
            xAxis: {
              name: this.xAxisName,
              data: DEFAULT_DATA.xAxisData,
              nameTextStyle: {
                fontSize: 14,
                fontWeight: 'bolder'
              }
            },
            yAxis: {
              name: this.yAxisName,
              nameTextStyle: {
                fontSize: 14,
                fontWeight: 'bolder'
              }
            },
            series: [{
              name: this.itemDataType,
              type: 'bar',
              data: DEFAULT_DATA.yAxisData,
 
            }]
          });
          console.log("this.eventType:" + this.eventType);
 
          myChart.on(this.eventType, function (params) {
            window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
          });
        }else {
          console.log('bar_dv为空!');
        }
 
      }
    },
  }
</script>
 
<style scoped>
 
 
</style> 