<template>
	<div id="">
		<el-upload style="padding:20px" class="upload-demo" ref="upload" :before-upload="beforeUpload" :action="url" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="handleSuccess" :on-error="handleError" :file-list="fileList" :auto-upload="false" :limit="1" :data="formdata" accept=".ppt, .pptx">
			<el-button slot="trigger" type="primary">选取PPT文件</el-button>
			<el-button style="margin-left: 10px;" type="success" @click="submitUpload">上传到服务器</el-button>
		</el-upload>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//formdata:{type:0},//是否携带参数
				fileList: [],
				url: "/api/upload/uploadppt"
			};
		},
		methods: {
			handleChange(file, fileList) {
				console.log(file, fileList);
			},
			submitUpload() {
				this.$refs.upload.submit();
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log(file.name);
			},
			handleSuccess(res, file) {
				this.$message.success(file.name + " 上传成功！")
				this.$refs.upload.clearFiles();
			},
			handleError(err, file) {
				// console.log(err,file)
				this.$message.error(file.name + " 上传失败！")
			},
			beforeUpload(file) {
				var testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
				const extension = testmsg === "ppt";
				const extension2 = testmsg === "pptx";
				// const isLt2M = file.size / 1024 / 1024 < 10
				if(!extension && !extension2) {
					this.$message({
						message: "上传文件只能是 ppt、pptx格式!",
						type: "warning"
					});
				}
				// if(!isLt2M) {
				//     this.$message({
				//         message: '上传文件大小不能超过 10MB!',
				//         type: 'warning'
				//     });
				// }
				// return (extension || extension2) && isLt2M
				return extension || extension2;
			}
		}
	};
</script>

<style>

</style>