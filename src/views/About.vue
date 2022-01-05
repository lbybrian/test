<template>
	<div class="about">
		<el-row>
			<el-upload
				class="upload-demo"
				ref="upload"
				action="https://jsonplaceholder.typicode.com/posts/"
				:data="param"
				multiple
				:on-change="fileStatusChange"
				:on-success="onSuccess"
				:on-exceed="handleExceed"
				:limit="3"
				:file-list="fileList"
				:show-file-list="false"
				:auto-upload="false"
			>
				<el-button size="small" type="primary">选择文件</el-button>
			</el-upload>
			<el-table :data="dataList" @selection-change="handleSelectionChange">
				<el-table-column label="序号" width="80" type="selection"></el-table-column>
				<el-table-column label="名称" width="180" prop="name"></el-table-column>

				<el-table-column label="RW名称" width="180" prop="rwmc">
					<template slot-scope="scope">
						<el-select v-model="scope.row.rwmc" filterable remote reserve-keyword placeholder="请输入关键词" @change="selectChange" allow-create default-first-option>
							<el-option v-for="item in optionsRWmc" :key="item.value" :label="item.label" :value="item.value"></el-option>
						</el-select>
					</template>
				</el-table-column>
				<el-table-column label="RW测试" width="180" prop="rwcs">
					<template slot-scope="scope">
						<!-- multiple -->
						<el-select v-model="scope.row.rwcs" filterable remote reserve-keyword placeholder="请输入关键词" @change="selectChange2" allow-create default-first-option>
							<el-option v-for="item in optionsRWcs" :key="item.value" :label="item.label" :value="item.label"></el-option>
						</el-select>
					</template>
				</el-table-column>
				<el-table-column label="大小" width="180" prop="date"></el-table-column>
				<el-table-column label="类型" width="180" prop="type"></el-table-column>
				<el-table-column label="操作" width="180">
					<template slot-scope="scope">
						<el-button size="small" type="" @click="doup(scope.row)">上传</el-button>
					</template>
				</el-table-column>
			</el-table>
			<!-- <el-button size="small" type="" @click="doup">上传</el-button> -->
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'about',
	data() {
		return {
			param: {},
			fileList: [],
			optionsRWmc: [
				{
					value: 'HTML',
					label: 'HTML'
				},
				{
					value: 'CSS',
					label: 'CSS'
				},
				{
					value: 'JavaScript',
					label: 'JavaScript'
				}
			],
			optionsRWcs: [
				{
					value: '选项1',
					label: '黄金糕'
				},
				{
					value: '选项2',
					label: '双皮奶'
				},
				{
					value: '选项3',
					label: '蚵仔煎'
				},
				{
					value: '选项4',
					label: '龙须面'
				}
			],
			dataList: [
				// {
				// 	index:'',
				// 	date: '2016-05-02',
				// 	name: '王小虎',
				// 	address: '上海市普陀区金沙江路 1518 弄'
				// },
				// {
				// 	index:'',
				// 	date: '2016-05-03',
				// 	name: '王小虎',
				// 	address: '上海市普陀区金沙江路 1516 弄'
				// }
			]
		};
	},
	mounted() {},
	methods: {
		fileStatusChange(file, fileList) {
			// if (file.status !== 'ready') return;//解决多次调用
			console.log('文件改变', file, fileList);
			// this.param.file = file.raw;
			// this.dataList =[];
			let dat = {};
			let names = [];
			fileList.forEach(f => {
				dat.name = f.name.split('.')[0];
				dat.type = f.name.split('.')[1];
				dat.date = f.size;
				dat.file = f;
			});
			this.dataList.forEach(item => {
				names.push(item.name);
				// if (item.name.indexOf(file.name) === -1 && item.date.indexOf(file.size) === -1) {
				// 	this.dataList.push(dat);
				// }
			});
			if (names.indexOf(file.name) === -1) {
				this.dataList.push(dat);
			}
		},
		onSuccess(f) {
			console.log('上传完成', f);
		},
		handleExceed(f, ff) {
			console.log(ff, '什么', f);
		},
		selectChange(query) {
			// console.log(111111111,query);
			// // this.param.rwmc=query
		},
		selectChange2(query) {
			// console.log(222222222,query);
			// // this.param.rwcs=query
		},
		handleSelectionChange(val) {
			console.log(33333333, val);
			let me = this;
			// val.forEach(row=>{
			// 	this.param.fileName = row.file.raw.name.split('.')[0];
			// 	this.param.type = row.file.raw.name.split('.')[1];
			// 	this.param.rwmc = row.rwmc;
			// 	this.param.rwcs = row.rwcs;
			// 	this.param.file = new FormData();
			// 	this.param.file.append('uid', row.file.raw.uid);
			// 	this.param.file.append('name', row.file.raw.name);
			// 	this.param.file.append('size', row.file.raw.size);
			// 	this.param.file.append('type', row.file.raw.type);
			// 	this.param.file.append('webkitRelativePath', row.file.raw.webkitRelativePath);
			// 	this.param.file.append('lastModified', row.file.raw.lastModified);
			// 	this.param.file.append('lastModifiedDate', row.file.raw.lastModifiedDate);				
			// })
		},
		doup(row) {
			let me = this;
			this.param.fileName = row.file.raw.name.split('.')[0];
			this.param.type = row.file.raw.name.split('.')[1];
			this.param.rwmc = row.rwmc;
			this.param.rwcs = row.rwcs;
			this.param.file = new FormData();
			this.param.file.append('uid', row.file.raw.uid);
			this.param.file.append('name', row.file.raw.name);
			this.param.file.append('size', row.file.raw.size);
			this.param.file.append('type', row.file.raw.type);
			this.param.file.append('webkitRelativePath', row.file.raw.webkitRelativePath);
			this.param.file.append('lastModified', row.file.raw.lastModified);
			this.param.file.append('lastModifiedDate', row.file.raw.lastModifiedDate);
			
			// row.rwcs.forEach(item=>{
			// 	// me.param.rwcs.push(item)
			// 	me.param.rwcs=item
			// })
			console.log(row, '开始', this.param);
			if (row.name === row.file.name.split('.')[0]) {
				// this.$refs.upload.submit();
				this.$axios.post('http://127.0.0.1:8090/uploadFile', this.param);
				this.$refs.upload.submit();
			}
		}
	}
};
</script>
