<template>
	<!--<div id="tree" style="width: 100%;min-height: 500px;"></div>-->
	<div id="mynetwork" class="myChart" :style="{width: '100%', height: '45vh'}"></div>
</template>

<script>
	import '../../node_modules/vis/dist/vis-network.min.css';
	import vis from '../../node_modules/vis/dist/vis-network.min.js';

	export default {
		data() {
			return {
				nodeImage: require('@/test-html/logo.png')
			}
		},
		methods: {
			initData() {},
			makeVis() {
				var that = this;
				// var DIR = '/jtopo/'
				var nodes = [ // 每行加上shape: 'circle' ，则节点显示圆形
					{
						id: 1,
						label: 'Node 1',
						shape: 'circularImage',
						image: this.nodeImage
					},
					{
						id: 2,
						label: 'Node 2',
						image: this.nodeImage
					},
					{
						id: 3,
						label: 'Node 3'
					},
					{
						id: 4,
						label: 'Node 4'
					},
					{
						id: 5,
						label: 'Node 5'
					}
				];
				var edges = [ // 每行加上label: '关系名称'，则会在线中间显示节点关系名
					{
						from: 1,
						to: 3,
						label: '担保',
						title: 'dsjkdjksa'
					},
					{
						from: 3,
						to: 1,
						label: '客户'
					},
					{
						from: 3,
						to: 1,
						label: '担保'
					},
					{
						from: 1,
						to: 2
					},
					{
						from: 2,
						to: 4
					},
					{
						from: 2,
						to: 5
					}
				];
				var data = {
					nodes: nodes,
					edges: edges
				};
				var container = document.getElementById('mynetwork');
				var options = {
					nodes: {
						shape: 'ellipse', //节点形状dot,circularImage,ellipse,cicle,database,box,text,image,diamond,star,triangle
						font: {
							color: '#000', // 字体的颜色
							size: 30 // 显示字体大小
						},
						scaling: {
							min: 20,
							max: 40 // 缩放效果比例
						},
						borderWidth: 1,
						color: {
							border: 'white',
							background: 'red' // 若是引用图标，背景颜色
						}
					},
//					groups: {
//						ws: { // 系统定义的形状 dot等 这些官网都可以找到
//							shape: 'dot',
//							color: 'white'
//						}
//					},
					manipulation:{
						enabled:false,//是否显示编辑功能
						initiallyActive:false,
						addNode:true,
						addEdge:true,
						editNode:function(nodeData,callback){
							nodeData.label = "hellow world";
							callback(nodeData);
						},
						editEdge:true,
						deleteNode:true,
						deleteEdge:true,
						controlNodeStyle:{
//							all node options are valid.
						}
					},
//					layout: {
//						randomSeed: 1 // 配置每次生成的节点位置都一样，参数为数字1、2等
//					},
					physics: {
//						barnesHut: { gravitationalConstant: -30000 },
						barnesHut: {
							gravitationalConstant: -20000,
							springConstant: 0.001,
							springLength: 200
						},
						stabilization: false,
//						iterations: 2500
					},
					interaction: {
						// navigationButtons: true,
						hover: true, // 鼠标移过后加粗该节点和连接线
						selectConnectedEdges: true, // 选择节点后是否显示连接线
						hoverConnectedEdges: true, // 鼠标滑动节点后是否显示连接线
						tooltipDelay: 200,
						zoomView: true // 是否能缩放画布
					},
					edges: {
						color: { // 连接线的样式
							color: '#ccc',
							highlight: '#000',
							hover: '#848484',
							inherit: 'from',
							opacity: 1.0
						},
						shadow: false, // 连接线阴影配置
//						labelHighlightBold:true,
//						hoverWidth:1.5,	
//						length:200,
//						value:1,
						//						smooth: true, // 是否显示方向箭头
						smooth: {
							enabled: true, // 是否显示方向箭头
							type: "curvedCCW",//cubicBezier,vertical,horizontal,straightCross,diagonalCross,curvedCW,curvedCCW,dynamic,continuous,discrete,
							roundness: 0 //0-1直线曲线
						},
						// arrows: {to : true }//箭头指向from节点
						arrows: { 
							to: {
								enabled: true,//箭头指向to节点
								scaleFactor: 1//箭头大小
							}
						}
					}
			};
				that.network = new vis.Network(container, data, options)
				that.network.on('click', (val) => {
					console.log(2222, val)
				})
			},

		},
		mounted() {
			//			this.initData(this.td);
			this.makeVis()
		}
	}
</script>

<style>

</style>