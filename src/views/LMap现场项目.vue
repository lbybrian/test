<template>
	<div class="fullDiv" id="map"></div>
</template>

<script>
	import L from 'leaflet';
	import '../../node_modules/leaflet/dist/leaflet.css'
	export default{
		data(){
			return {
				map:null,
				form:{
					map_options:{
						center:[0,0],
						zoom:2,
						minZoom:1,
						maxZoom:6,
						url:"./leaflet/newtask/{z}/{x}/{y}.png",	//'.//maptile/{z}/{x}/{y}.png'
						attribution:'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
						dragable:true,
						attributionControl:false,
					},
					//地图标记图标
					icon_options:{
//						iconUrl:require(''),
//						iconRetinaUrl:require(''),
//						shadowUrl:require(''),
						iconSize:[25,41],
						iconAnchor:[12,41],
						popupAnchor:[1,-34],
						tooltipAnchor:[16,-28],
						shadowSize:[41,41],
					}
				},
				mapDatas: {
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
				}
			}
		},
		methods:{
			initMap(center,markers){
				//此处逆序不能用reverse是因为会导致父级组件中数据同步变化
				center = [center[1],center[0]];
				if(!this.map){
					this.form.map_options.center = center;
					this.map = L.map("map",this.form.map_options);
				}else{
					this.map.panTo(center,{animation:true})
				}
				L.tileLayer(this.form.map_options.url,{attribution:this.form.map_options.attribution}).addTo(this.map);
				
				let myIcon = L.icon(this.form.icon_options);
				let formatMarkers = {};
				markers.map(item =>{
					item.pos = [item.pos[1],item.pos[0]];
					let posStr = item.pos.join(",");
					if(!formatMarkers[posStr]){
						formatMarkers[posStr] = []
					}
					formatMarkers[posStr].push(item);
				});
				for(let posStr in formatMarkers){
					let pos =[];
					let text = "";
					if(formatMarkers[posStr].length>5){
						formatMarkers[posStr].slice(0,5).map((item,index)=>{
							pos = item.pos;
							text += (index +1)+ "、" + item.text +"<br />"
						});
						text += "等" + formatMarkers[posStr].length + "条新闻<br />"
					}else{
						formatMarkers[posStr].map((item,index)=>{
							pos = item.pos;
							text += (index +1)+ "、" + item.text +"<br />"
						});
						let marker = L.marker(pos,{icon:myIcon}).addTo(this.map);
						marker.bindPopup(text).openPopup();
					}
				}
			},
			moveMap(newCenter,newContent){
				this.map.panTo(newCenter,{animation:true});
				this.form.marker.setLatLng(newCenter);
				if(newContent != ""){
					this.form.marker.bindPopup(newContent).openPopup()
				}
				else{
					this.form.marker.closePopup()
				}
			},
			resize(){
				this.map.invalidateSize()
			}
		},
		mounted(){
			this.initMap([0,0],[])
		}
	}
</script>

<style>
</style>