<template>
	<div id="timeline" style="width: 100%;min-height: 200px;"></div>
</template>

<script>
	import XDate from 'xdate';
	import vis from 'vis';
	
	export default{
		data(){
			return{
				timeline:null,
				minDate:"",
				maxDate:"",
				td:[{
					id:'11',
					content:'第一条测试数据内容',
					start:'2020-07-09 08:29',
					end:'2020-11-12 12:29',
					style:"font-size:8pt;",
					zoomKey:'ctrlKey',
					verticalScroll:true
				},{
					id:'12',
					content:'第222条测试数据内容',
					start:'2021-05-05 08:29',
					end:'2021-08-19 12:29',
					style:"font-size:8pt;",
					zoomKey:'ctrlKey',
					verticalScroll:false
				}]
			}
		},
		methods:{
			initData(td){
				let container = document.getElementById('timeline');
				let items = new vis.DataSet(td);
				if(td.length>0){
					this.minDate = td[0].start;
					this.maxDate = td[0].end;
				}
				td.map(time=>{
					let min = new XDate(this.minDate);
					let max = new XDate(this.maxDate);
					let date = new XDate(time.start);
					console.log('$A333333333',min);
					if(min.diffSeconds(date)<0){
						this.minDate = time.start;
					}
					if(max.diffSeconds(date)>0){
						this.maxDate = time.start;
					}
				});
				
				let options={
					width:'100%',
					height:'100%',
					align:'left',
					margin:{
						item:{
							vertical:3,
						}
					},
					format:{
						minorLabels:{
							millisecond:'SSS',
							second:'s',
							minute:'HH:mm',
							hour:'HH:mm',
							weekday:'MMMM月D日',
							day:'D',
							week:'w',
							month:'MMM',
							year:'YYYY'
						},
						majorLabels:{
							millisecond:'YYYY年MMMM月D日 HH:mm:ss',
							second:'YYYY年MMMM月D日 HH:mm分',
							minute:'YYYY年MMMM月D日',
							hour:'YYYY年MMMM月D日',
							weekday:'YYYY年',
							day:'YYYY年MMMM月',
							week:'YYYY年MMMM月',
							month:'YYYY年',
							year:''
						}
					},
					max:this.maxDate,
					min:this.minDate,
					showTooltips:true,
					type:"box",//'box','point','range','background'
					verticalScroll:true,
					zoomKey:'ctrlKey'
				}
				
				
				let timeline = new vis.Timeline(container,items,options);
				timeline.on('click',(val)=>{
					console.log('Time-Line:',val);
					if(val.item !=null&&val.ehat=="item"){
						let nodeId = val.item;
						this.$emit("clickItem",nodeId);
					}
				});
				
				this.timeline = timeline;
			},
			setSelected(ids){
				this.timeline.setSelection(ids,{focus:true})
			}
		},
		mounted(){
			this.initData(this.td);
		}
	}
</script>

<style>
</style>