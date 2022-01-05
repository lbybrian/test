<template>
	<div id="bar_dv" ref="chart" style="height: 400px;">
	</div>
</template>

<script>
	import * as echarts from 'echarts'
	const DEFAULT_DATA = {
		xAxisData: ["常州", "重庆", "西安", "福州", "杭州", "长沙", "南昌", "莱州"],
		yAxisData: [28, 43, 41.8, 41.7, 41.6, 40.6, 40.6, 50],
	};
	export default {
		props: ['Object'],
		watch: {
			'$store.state.isDark': {
				deep: true,
				immediate: true,
				handler(val, oval) {
					if(val == 'false') {
						this.sonOptions.itemColor = 'orange';
						this.sonOptions.backgroundColor = '#d4d4d4';
						this.drawLine();

					} else if(val == 'true') {
						this.sonOptions.itemColor = '#4992ff';
						this.sonOptions.backgroundColor = '#100c2a';
						this.drawLine();
					}
				},
			},
		},
		data() {
			return {
//				isDark: this.$store.state.isDark,
//				isDark2: localStorage.getItem('isDark'),
				msg: 'Welcome to Your Vue.js App',
				sonOptions: {
					label: 'LABEL',
					itemColor: 'orange',
					backgroundColor: '#d4d4d4',
					itemDataType: 'ITEM-TYPE',
					xAxisName: 'X-NAME',
					yAxisName: 'Y-NAME',
					eventType: 'click',
				}
			}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				var bar_dv = this.$refs.chart;
				if(bar_dv) {
					let myChart = new echarts.init(bar_dv)
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