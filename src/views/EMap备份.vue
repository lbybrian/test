<template>
	<div class="emap">
		可以了吗????????
		<div id="worldMap"></div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
//	import geoMap from './geoMap.json'
	export default {
		name: "emap",
		data() {
			return {
				worldMap: null,
				geoMap:require('@/assets/datas/geoMap.json'),
//				mapData: [1164383, 401471, -11, -13, 1, -49, -26, -14, 99, -170, 4, -36, 87, -2, 16, -141, -2, -15, -47, -6, -168, -9, -2, 22, -74, -4, -138, 10, 12, -152, 9, -55, -17, -111, 13, -176, -20, -38, 1, -57, 31, -54, 28, -85, -5, -126, -13, -62, 1, -34, -84, 1, -3, -218, 15, 6, 78, 2, 4, -52, 70, 1, 7, -142, 99, 2, 21, -5, 229, -150, 16, -23, 0, -180, 168, 1, -4, -257, 82, 0, 33, -22, 78, 20],
				mapData: {
					CHN: [{
						country: 'CHN',
						id: 1,
						//						news_guid:"iuwfie-feifben-342-nf",
						news_time: "2012-07-13",
						news_title: '这是一句话',
						source_author: "飞虎网"
					}, {
						country: 'CHN',
						id: 2,
						//						news_guid:"iuwfie-feifben-342-nf",
						news_time: "2012-01-12",
						news_title: '外大后方公司放哪句话',
						source_author: "飞虎网"
					}, {
						country: 'CHN',
						id: 3,
						//						news_guid:"iuwfie-feifben-342-nf",
						news_time: "2012-06-23",
						news_title: '已度搜发你服务',
						source_author: "飞虎网"
					}],
					USA: [{
						country: 'USA',
						id: 11,
						//						news_guid:"iuwfie-feifben-342-nf",
						news_time: "2012-07-13",
						news_title: 'ASDHH这是一句话',
						source_author: "飞虎网"
					}, {
						country: 'USA',
						id: 22,
						//						news_guid:"iuwfie-feifben-342-nf",
						news_time: "2012-01-12",
						news_title: '外DASDAD大后方公司放哪句话',
						source_author: "飞虎网"
					}, {
						country: 'USA',
						id: 33,
						//						news_guid:"iuwfie-feifben-342-nf",
						news_time: "2012-06-23",
						news_title: 'DASDAS已度搜发你服务',
						source_author: "飞虎网"
					}]
				},
//				Option: {
//					visualMap: {
//						show: false,
//						min: 2,
//						max: 6,
//						calculable: true,
//						inRange: {
//							color: ['#fff']
//						},
//						textStyle: {
//							color: '#fff'
//						}
//					},
//					geo: {
//						type: 'map',
//						map: 'worldGeo',
//						roam: false,
//						label: {
//							normal: {
//								show: false
//							},
//							emphasis: {
//								show: false
//							}
//						},
//						itemStyle: {
//							normal: {
//								areaColor: '#ccc',
//								borderColor: '#111'
//							},
//							emphasis: {
//								areaColor: '#ccc',
//							}
//						},
//						regions: function(item) {
//							return {
//								name: 'GoodName',
//								itemStyle: {
//									normal: {
//										areaColor: '#1c8210',
//									},
//									emphasis: {
//										areaColor: '#1c8210',
//									}
//								},
//							}
//						},
//						//						regions:this.mapData.map(item => {
//						//							return {
//						//								//								name:countries[item.name],
//						//								name: 'GoodName',
//						//								itemStyle: {
//						//									normal: {
//						//										areaColor: '#1c8210',
//						//									},
//						//									emphasis: {
//						//										areaColor: '#1c8210',
//						//									}
//						//								},
//						//							}
//						//						}),
//						left: 2,
//						right: 2,
//						top: 2,
//						bottom: 5,
//					},
//					series: [{
//						type: 'effectScatter',
//						coordinateSystem: 'geo',
//						rippleErffect: {
//							brushType: 'stroke',
//							period: 5,
//							scale: 6
//						},
//						label: {
//							normal: {
//								show: true,
//								position: 'right',
//								formatter: function(item) {
//									return item.data.num
//								},
//								textStyle: {
//									color: '#000'
//								}
//							},
//							emphasis: {
//								show: true,
//								position: 'right',
//								formatter: '{b}',
//								textStyle: {
//									color: '#000'
//								}
//							}
//						},
//						showEffectOn: 'render',
//						data: []
//					}]
//				}
			}
		},
		methods: {
			initMap() {
				let mapD = [];
				let minCount = Number.POSITIVE_INFINITY;
				let maxCount =0;
				for(let country in this.mapData) {
					let num = this.mapData[country].length;
					minCount =Math.min(minCount,Math.sqrt(num));
					maxCount =Math.max(minCount,Math.sqrt(num));
						mapD.push({
							name: country,
							num: num
						});
				}
				let minSize =0;
				let maxSize =16;
				let getSize =function(count){
					return (count-minCount)*(maxSize - minSize) / (maxCount - minCount) +minCount;
				}
				mapD.map(item => {
					item.symbolSize = getSize(Math.sqrt(item.num));
				})
				echarts.registerMap('worldGeo',this.geoMap)
				let geoList ={};
				let countries =[];
				this.geoMap.features.map(geoItem =>{
					geoList[geoItem.properties.name]=geoItem.id;
					countries[geoItem.id] = geoItem.properties.name;
				})
//				this.Option.data = mapD;
				let Option ={
					visualMap: {
						show: false,
						min: 2,
						max: 6,
						calculable: true,
						inRange: {
							color: ['#fff']
						},
						textStyle: {
							color: '#fff'
						}
					},
					geo: {
						type: 'map',
						map: 'worldGeo',
						roam: false,
						label: {
							normal: {
								show: false
							},
							emphasis: {
								show: false
							}
						},
						itemStyle: {
							normal: {
								areaColor: '#ccc',
								borderColor: '#111'
							},
							emphasis: {
								areaColor: '#ccc',
							}
						},
						regions: function(item) {
							return {
								name: 'GoodName',
								itemStyle: {
									normal: {
										areaColor: '#1c8210',
									},
									emphasis: {
										areaColor: '#1c8210',
									}
								},
							}
						},
						//						regions:this.mapData.map(item => {
						//							return {
						//								//								name:countries[item.name],
						//								name: 'GoodName',
						//								itemStyle: {
						//									normal: {
						//										areaColor: '#1c8210',
						//									},
						//									emphasis: {
						//										areaColor: '#1c8210',
						//									}
						//								},
						//							}
						//						}),
						left: 2,
						right: 2,
						top: 2,
						bottom: 5,
					},
					series: [{
						type: 'effectScatter',
						coordinateSystem: 'geo',
						rippleErffect: {
							brushType: 'stroke',
							period: 5,
							scale: 6
						},
						label: {
							normal: {
								show: true,
								position: 'right',
								formatter: function(item) {
									return item.data.num
								},
								textStyle: {
									color: '#000'
								}
							},
							emphasis: {
								show: true,
								position: 'right',
								formatter: '{b}',
								textStyle: {
									color: '#000'
								}
							}
						},
						showEffectOn: 'render',
						data: mapD
					}]
				}

				if(!this.worldMap) {
					this.worldMap = echarts.init(document.getElementById('worldMap'))
				}
				//				let option = {}
				this.worldMap.setOption(Option)
			}
		},
		mounted() {
			this.initMap()
		},
		beforeDestroy() {
			if(this.worldMap) {
				this.worldMap.dispose();
			}
		}
	}
</script>

<style>
.emap,#worldMap{
	min-height: 600px;
}
</style>