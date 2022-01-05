<template>
	<div class="emap">
		可以了吗????????
		<div id="worldMap"></div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
//	import $ from 'jquery';
	export default {
		name: "emap",
		data() {
			return {}
		},
		methods: {
			initMap() {let pmTypeData = [
          {value: 0, name: 'a', data: data},
          {value: 1, name: 'b', data: data},
          {value: 2, name: 'c', data: data},
      ]
let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} ({c}) {d}%'
        },
        color:[
          '#7FB1FC','#FFDF8E','#F3A4A4','#8194F9','#F9B673',
          '#E77051','#F9DB76','#F08B8B','#D176F9','#AAD28E',
          '#F4B282','#FFCD72','#FBB17A','#A0D5C3','#83A4DD',
          '#5583C8','#95C474','#E49378','#B5838D','#E5999C',
          '#5FC0B4','#A8DADC','#457B9D','#7FB1FF','#B07D62',
          '#42B3A6','#D1AF79','#64D3C7','#0097C8','#48CAE4'
        ],
        legend:{
          orient: 'vertical',
          itemHeight: 6,
          icon:'circle',
          type: 'scroll',
          align: 'auto',
          left: '65%',
          top: 'center',
          data: legendData,
          // selectedMode: true,
          formatter:(name)=>{
            var data = pmTypeData
            var tarValue = data.find(item=>item.name === name).value
            return  '{a|'+name+'}'+'{b|'+ tarValue +'个}'
          },
          textStyle:{
            rich:{
              a:{
                width:80,
                fontSize:12,
                fontFamily:'PingFangSC-Regular,PingFang SC',
                fontWeight:400,
                color:'#888888'
              },
              b:{
                fontSize:12,
                fontFamily:'PingFangSC-Regular,PingFang SC',
                fontWeight:400,
                color:'#353535',
              }
            }
          }
        },
        series: [
          {
            name: 'vpc',
            type: 'pie',
            radius:['52%', '70%'],
            center: ['40%', '50%'],
            circlePoition:'center',
            width:183,
            height:183,
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'center',
                formatter: `{a|${0}个}\n{b|可优化总数}`,
                textStyle: {
                  rich: {
                    a:{
                      fontSize:16,
                      fontFamily:'PingFangSC-Semibold,PingFang SC',
                      fontWeight:600,
                      color:'#000000',
                    },
                    c: {
                      fontSize:16,
                      fontFamily:'PingFangSC-Semibold,PingFang SC',
                      fontWeight:600,
                      color:'#000000',
                    },
                    b:{
                      height:20,
                      fontSize:12,
                      fontFamily:'PingFangSC-Regular,PingFang SC',
                      fontWeight:400,
                      color:'#818181',
                      lineHeight:20
                    },
                  }
                }
              }
            },
            data: pmTypeData
          }
        ]
      }
    // 点击饼图事件
      this.echarts_disk.on('click',(params) => {})
    // 图例改变事件（与中间总数数据或其他数据联动）
      myChart.on('legendselectchanged', function(params) {
        var option_reset = this.getOption();
        let select_value = Object.values(params.selected);
        let total_reset = 0; //  重置合计
        if (select_value && select_value.length) {
        for (var index = 0; index < select_value.length; index++) {
            if (select_value[index] !== false) {
                total_reset += option_reset.series[0].data[index].value
            }
          }
        }
        //修改合计值为修改后的值
        option_reset.series[0].label.formatter = `{a|${total_reset}个}\n{b|可优化总数}`
        this.setOption(option_reset);
      });}
		},
		mounted() {
			this.initMap()
		},
	}
</script>

<style>
	.emap,
	#worldMap {
		min-height: 600px;
	}
</style>