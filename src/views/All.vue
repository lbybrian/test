<template>
	<div>
		<zz />
		<hr color="#0000FF" style=" border: 1px solid #000000;" />
		<so />
		<p>这是什么？{{ dat }}</p>
		<h2 style="color: #999AAA;font-family:'dsdigital';">Show SomeThing：今天是（{{ timeStr }}）</h2>
		<el-button @click="getSomething">滴滴滴</el-button>
		<!-- hr粗细和颜色 -->
		<hr color="#FF0000" style="height: 1px; border: 0;" />
		<hr color="#0000FF" style=" border: 1px solid #000000;" />
		<hr color="#FFFF00" style="height: 1px; border: 0;" />
		<hr color="#0000FF" style="height: 1px; " />
		<!-- 三角形 -->
		<!-- <div id="" class="box">
			<div class="san"><span class="txt">壹</span></div>
		</div> -->
		<!-- 表格横竖 -->
		<!-- <tables style="width: 600px;height: 600px;"></tables> -->
		<!-- 弹窗 -->
		<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
		<br />
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<span>这是一段信息</span>
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="活动名称">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
			</el-form>
			<hr color="#FF0000" class="hro" />
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			</span>
		</el-dialog>
		<!-- 打开外部文件 -->
		<el-button type="primary" @click="doti">点击打开baidu</el-button>
		<!-- element穿梭框 -->
		<el-button type="success" @click="transferFlag=true">点击打开穿梭框</el-button>
		<el-dialog title="穿梭框" :visible.sync="transferFlag" width="50%">
			<el-transfer v-model="value" :data="det"></el-transfer>
		</el-dialog>
		<wc />
	</div>
</template>

<script>
	export default {
		data() {
			// 穿梭框数据
			const generateData = _ => {
				const det = [];
				for(let i = 1; i <= 15; i++) {
					det.push({
						key: i,
						label: `备选项 ${i}`,
						disabled: i % 4 === 0
					});
				}
				return det;
			};
			return {
				dat: null,
				transferFlag: false,
				det: generateData(), //穿梭框数据
				value: [1, 2, 5], //穿梭框初始值
				timeStr: '',
				dialogVisible: false,
				form: {
					name: ''
				}
			};
		},
		components: {
			// tables: ()=> import('@/components/table-col'),
			wc: () => import('@/components/wordCloud'),
			so: () => import('@/components/so'),
			zz: () => import('@/components/zz'),
		},
		created() {
			let date = new Date();
			let nian = date.getFullYear();
			let yue = date.getMonth() + 1;
			let ri = date.getDate();
			let zhou = date.getDay();

			this.timeStr = nian + '年' + yue + '月' + ri + '日 周' + zhou;
			if(zhou == 0) {
				zhou = '日';
			}
			console.log(this.timeStr);
		},
		methods: {
			getSomething() {
				this.$axios
					.get('http:/geoMap.json', {
						header: 'Content-Type = application/x-www-form-urlencoded'
					})
					.then(res => {
						console.log('$_2222', res.data);
					})
					.catch(err => {
						console.log(err);
					});
			},
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(_ => {
						done();
					})
					.catch(_ => {});
			},
			doti() {
				window.open('https://www.baidu.com', '_blank', 'width=600,height=400,top=100px,left=100px', 'false');
			}
		},
		mounted() {
			//			this.getSomething();
			//			this.$axios.get('../test-html/echarts-liuneColor/test.json').then((result)=>{
			//			this.$axios.get("http://localhost:8080/static/geoMap.json",{}).then(function(res){
			//			this.$axios.get("http://localhost:8080/static/geoMap.json").then((res)=>{
			//			window.onload = function() {
			//				var url = "../test-html/echarts-liuneColor/test.json" /*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
			//				var request = new XMLHttpRequest();
			//				request.open("get", url); /*设置请求方法与路径*/
			//				request.send(null); /*不发送数据到服务器*/
			//				request.onload = function() { /*XHR对象获取到返回信息后执行*/
			//					if(request.status == 200) { /*返回状态为200，即为数据获取成功*/
			//						console.log(1111111111,request.responseText)
			//						var json = JSON.parse(request.responseText);
			//						for(var i = 0; i < json.length; i++) {
			//							console.log(json[i].name);
			//						}
			//						console.log(json);
			//					}
			//				}
			//			}
		}
	};
</script>

<style>
	/* hr */
	
	.hro {
		/* 在dialog/form中因为默认padding存在,hr显示不是100%时 */
		height: 1px;
		border: 0;
		width: 107.5%;
		margin-left: -20px;
	}
	/* 方框的三角 */
	
	.box {
		width: 300px;
		height: 300px;
		border: 1px solid blue;
		position: relative;
	}
	
	.san {
		width: 0;
		height: 0;
		border: 100px solid;
		border-color: transparent skyblue transparent transparent;
		position: absolute;
		transform: rotate(135deg);
		right: -100px;
		top: -100px;
	}
	
	.txt {
		transform: rotate(-135deg);
		font-size: 40px;
		color: azure;
		position: absolute;
		bottom: -35px;
		left: 40px;
	}
	/* dialog圆角 */
	
	.el-dialog {
		border-radius: 8px;
	}
	
	.el-dialog__header {
		background-color: #2f9ecb;
		border-radius: 8px 8px 0 0;
	}
</style>