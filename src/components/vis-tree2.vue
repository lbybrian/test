<template>
	<!--<div id="tree" style="width: 100%;min-height: 500px;"></div>-->
	<div id="mynetwork2" class="myChart" :style="{width: '100%', height: '45vh'}"></div>
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
			makeVis2() {
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
					},
					{
						id: 6,
						label: 'Node 6'
					},
					{
						id: 7,
						label: 'Node 7'
					}
				];
				var edges = [ // 每行加上label: '关系名称'，则会在线中间显示节点关系名
					{
						from: 3,
						to: 1,
						label: '担保',
						title: 'dsjkdjksa'
					},
					{
						from: 3,
						to: 2,
						label: '客户'
					},
					{
						from: 3,
						to: 6,
						label: '担保'
					},
					{
						from: 3,
						to: 7
					},
					{
						from: 3,
						to: 4
					},
					{
						from: 3,
						to: 5
					}
				];
				var data = {
					nodes: nodes,
					edges: edges
				};
				var container = document.getElementById('mynetwork2');
				var options = {
					nodes: {
						shape: 'ellipse', //节点形状dot,circularImage,ellipse,cicle,database,box,text,image,diamond,star,triangle
						font: {
							color: '#000', // 字体的颜色
							size: 16 // 显示字体大小
						},
					},
					physics: {
						barnesHut: {
							gravitationalConstant: -2000,
							springConstant: 0.1,
							springLength: 200
						},
						stabilization: false,//是否静态
					},
					edges: {
						color: { // 连接线的样式
							color: '#aaa',
							highlight: '#000',
							hover: '#848484',
							inherit: 'from',
							opacity: 1
						},

						shadow: false, //连接线阴影配置
						smooth: true, //是否显示方向箭头
						arrows: {
							to: true
						} //箭头指向from节点

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
			this.makeVis2()
		}
	}
</script>

<style>

</style>