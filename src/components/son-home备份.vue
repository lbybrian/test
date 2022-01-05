<template>
	<div id="bar_dv" ref="chart" style="height: 400px;">
	</div>
</template>

<script>
	import * as echarts from 'echarts'
	/*默认数据*/
	const DEFAULT_DATA = {
		xAxisData: ["常州", "重庆", "西安", "福州", "杭州", "长沙", "南昌", "莱州"],
		yAxisData: [28, 43, 41.8, 41.7, 41.6, 40.6, 40.6, 50],
	};
	export default {
		//		name: 'EHistogram',
		/*接收外部传入一个label变量*/
		//  props: ['label', 'itemColor', 'backgroundColor', 'itemDataType', 'xAxisName', 'yAxisName', 'eventType'],
		props: ['Object'],
		watch: {
//			isDark: {
//				deep: true,
//				immediate: true,
//				handler(val, oval) {
//					console.log(oval, 'SON-Watch:', val);
//					//					this.sonOptions = val;
//					if(val == 'false') {
//						this.sonOptions.itemColor = 'orange';
//						this.sonOptions.backgroundColor = '#d4d4d4';
////						this.$nextTick(()=>{
////							this.drawLine();
////						})
//						this.drawLine();
////						this.$nextTick(()=>{
////							setTimeout(()=>{
////								this.drawLine();
////							},0)
////						})
//
//					} else if(val == 'true') {
//						this.sonOptions.itemColor = '#4992ff';
//						this.sonOptions.backgroundColor = '#100c2a';
////						this.$nextTick(()=>{
////							this.drawLine();
////						})
//						this.drawLine();
////						this.$nextTick(()=>{
////							setTimeout(()=>{
////								this.drawLine();
////							},0)
////						})
//					}
////					this.drawLine();
//					//					this.sonOptions=this.Object;
//					//					this.$router.go(0);	
//				},
//			},
			'$store.state.isDark': {
				deep: true,
				immediate: true,
				handler(val, oval) {
					console.log('SON-Watch:', val);
					//					this.sonOptions = val;
//					if(localStorage.getItem('isDark') == 'false') {
					if(val == 'false') {
						this.sonOptions.itemColor = 'orange';
						this.sonOptions.backgroundColor = '#d4d4d4';
//						this.$nextTick(()=>{
//							this.drawLine();
//						})
						this.drawLine();
//						this.$nextTick(()=>{
//							setTimeout(()=>{
//								this.drawLine();
//							},0)
//						})

//					} else if(localStorage.getItem('isDark') == 'true') {
					} else if(val == 'true') {
						this.sonOptions.itemColor = '#4992ff';
						this.sonOptions.backgroundColor = '#100c2a';
//						this.$nextTick(()=>{
//							this.drawLine();
//						})
						this.drawLine();
//						this.$nextTick(()=>{
//							setTimeout(()=>{
//								this.drawLine();
//							},0)
//						})
					}
//					this.drawLine();
					//					this.sonOptions=this.Object;
					//					this.$router.go(0);	
				},
			}
		},
		data() {
			return {
				//				isDark:localStorage.getItem('isDark'),
				isDark: this.$store.state.isDark,
				msg: 'Welcome to Your Vue.js App',
				sonOptions: {
					label: 'LABEL',
					//					itemColor: JSON.parse(decodeURIComponent(this.$route.query.eBarColors)).itemColor||'#4992ff',
					//					itemColor: this.$route.eBarColors.itemColor ? this.$route.eBarColors.itemColor : 'orange',
					itemColor: 'orange',
					//					backgroundColor: this.$route.query.eBarColors.bkColor||'#100c2a',
					//					backgroundColor: this.$route.eBarColors.bkColor ? this.$route.eBarColors.bkColor : '#d4d4d4',
					backgroundColor: '#d4d4d4',
					itemDataType: 'ITEM-TYPE',
					xAxisName: 'X-NAME',
					yAxisName: 'Y-NAME',
					eventType: 'click',
				}
			}
		},
		mounted() {
//			if(localStorage.getItem('isDark') == 'false') {
//				this.sonOptions.itemColor = 'orange';
//				this.sonOptions.backgroundColor = '#d4d4d4';
////				this.drawLine();
////				this.$nextTick(()=>{
//					this.drawLine();
////				})
//
//			} else if(localStorage.getItem('isDark') == 'true') {
//				this.sonOptions.itemColor = '#4992ff';
//				this.sonOptions.backgroundColor = '#100c2a';
////				this.drawLine();
////				this.$nextTick(()=>{
//					this.drawLine();
////				})
//			}
//			this.$nextTick(()=>{
//				setInterval(()=>{
//					this.drawLine();
//				},1000)
//			})
			this.drawLine();
//			console.log('Son-Mounted:', localStorage.getItem('isDark'), this.sonOptions.itemColor, this.sonOptions.bkColor);
		},
		methods: {
			drawLine() {
//				console.log('执行了！！');
				// 基于准备好的dom，初始化echarts实例
				//var bar_dv = document.getElementById('bar_dv');
				var bar_dv = this.$refs.chart;
				if(bar_dv) {
					//					console.log('bar_dv不为空');
					let myChart = new echarts.init(bar_dv)
					// 绘制图表 '火炉省会城市极端高温对比'
					myChart.setOption({
						title: {
							text: this.sonOptions.label
						},
						color: [this.sonOptions.itemColor],
						backgroundColor: [this.sonOptions.backgroundColor],
						tooltip: {},
						xAxis: {
							name: this.sonOptions.xAxisName,
							data: DEFAULT_DATA.xAxisData,
							nameTextStyle: {
								fontSize: 14,
								fontWeight: 'bolder'
							}
						},
						yAxis: {
							name: this.sonOptions.yAxisName,
							nameTextStyle: {
								fontSize: 14,
								fontWeight: 'bolder'
							}
						},
						series: [{
							name: this.sonOptions.itemDataType,
							type: 'bar',
							data: DEFAULT_DATA.yAxisData,

						}]
					},true);
					//					console.log("this.eventType:" + this.sonOptions.eventType);

					myChart.on(this.sonOptions.eventType, function(params) {
						console.log(66, params)
						window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
					});
				} else {
					console.log('bar_dv为空!');
				}

			}
		},
	}
</script>

<style scoped>

</style>