<template>
	<!--<div class="lmap" id="map"></div>-->
	<div class="lmap" id="mapBox"></div>
</template>

<script>
	import L from 'leaflet';
	import '../../node_modules/leaflet/dist/leaflet.css';
	import 	mapData from '@/assets/datas/MapData.js';
	export default{
		data(){
			return {
				map:null,
				url:"./leaflet/newtask/{z}/{x}/{y}.jpg",	//'.//maptile/{z}/{x}/{y}.png'
			}
		},
		methods:{
			initMap(){
				if(!this.map){
					this.map = L.map('map').setView([29.5, 110.5], 10);
				}
//				else{
//					this.map.panTo([29.5, 110.5],{animation:true})
//				}
				console.log(this.map);
				L.tileLayer(this.url, {
					minZoom: 2,
					maxZoom: 6,
				}).addTo(this.map);
			},
			moveMap(){
				let url="./leaflet/newtask/{z}/{x}/{y}.jpg";	//'.//maptile/{z}/{x}/{y}.png'
				let mymap = new L.map('mapBox').setView([29.5, 110.5], 10);
				L.tileLayer(url, {
					minZoom: 2,
					maxZoom: 6,
				}).addTo(mymap);
			},
			resize(){
				this.map.invalidateSize();
			}
		},
		mounted(){
//			this.initMap();
			this.moveMap();
		},
		beforeDestroy(){
			if(this.map){
				this.map=null;
			}
		}
	}
</script>

<style>
.lmap{
	/*min-height: 600px;*/
	height: 100vh!important;
}
</style>