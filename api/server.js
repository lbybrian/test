const express =require('express')
const app = express()
const request =require('request')
const fs = require('fs')
const path = require('path')
app.use(express.static(path.resolve(__dirname,'../')))//将gangup设为根路径
//console.log(path.resolve(__dirname,'../'))
const bodyParser = require('body-parser')
app.use(bodyParser.json())
// const imageinfo = require("imageinfo");
app.all("*",function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Methods","GET,DELETE,PUT,POST");
	res.header("Access-Control-Allow-Headers","content-type");
	next();
});

//获取及时时间
	const getTime = function(){
		let date = new Date();
		return date.getFullYear().toString().padStart(2,'0')+'-'+(date.getMonth()+1).toString().padStart(2,'0')+'-'+date.getDate().toString().padStart(2,'0')+' '+date.getHours().toString().padStart(2,'0')+':'+date.getMinutes().toString().padStart(2,'0')+':'+date.getSeconds().toString().padStart(2,'0')
	}
	

// //删除一条通过ID
// app.delete('/delete/:id',(req,res)=>{
// //	console.log(1111111111111,req.params)
// 	db.deleteOneById('csdbs','csxjh',req.params.id)
// 	.then(results=>{
// 		res.json({
// 			ok:1,
// 			msg:'删除成功',
// 			results
// 		})
// 	}).catch(err=>{res.json({ok: -1, msg: "删除失败"})})
// })

//
app.get('/getdbs', (req,res)=>{
	// console.log(req.query);
	res.json({
		ok:1,
		msg:'全部数据来了',
		// allDatas
	})
})
//上传接口
app.post('/uploadFile', (req,res)=>{
	console.log(req.body,22222222222222);
	
	if (req.body && req.body.fileName) {
		// fs.readFile(temp_path, 'utf-8', function(err, content) {
		// 	//文件的内容
		// 	console.log('content',content);
		// 	// 删除临时文件
		// 	fs.unlink(temp_path);
		// });
		res.json({
			ok:1,
			msg:'可以',
		});
	}
	
	
	// const {context} = req.body;
	// if(count>0){
	// 	res.json({
	// 		ok:-1,
	// 		msg:'您添加的数据已存在',
	// 		context,
	// 	})
	// }
	// else{
	// 	res.json({
	// 		ok:1,
	// 		cs:'添加成功',
	// 		datasss,
	// 	})
	// }
})
//修改内容
app.put('/change/:id',(req,res)=>{
//	console.log(req.params,222222222,req.body)
})


app.listen(8090,function(){
	console.log('8090服务开启！')
})
	