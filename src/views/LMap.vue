<template>
	<!--<div class="lmap" id="map"></div>-->
	<div class="lmap" id="mapBox"></div>
</template>

<script>
	import L from 'leaflet';
	import '../../node_modules/leaflet/dist/leaflet.css';
	import mapData from '@/assets/datas/MapData.js';
	export default {
		data() {
			return {
				map: null,
				url: "./leaflet/newtask/{z}/{x}/{y}.jpg", //'.//maptile/{z}/{x}/{y}.png'
			}
		},
		methods: {
			initMap() {
				if(!this.map) {
					this.map = L.map('mapBox').setView([29.5, 110.5], 10);
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
			moveMap() {
				let url = "./leaflet/newtask/{z}/{x}/{y}.jpg"; //'.//maptile/{z}/{x}/{y}.png'
				let mymap = new L.map('mapBox').setView([29.5, 110.5], 10);
				L.tileLayer(url, {
					minZoom: 2,
					maxZoom: 6,
				}).addTo(mymap);
			},
			ThreeMap() {
				var mapBox = L.map('mapBox').setView([29.5, 110.5], 10);
				L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					//					minZoom: 2,
					//					maxZoom: 6,
				}).addTo(mapBox);
				L.marker([51.5, -0.09]).addTo(mapBox)
					.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
					.openPopup();
			}
			//			resize(){
			//				this.map.invalidateSize();
			//			}
		},
		mounted() {
			//			this.initMap();
			//			this.moveMap();
			this.ThreeMap();
		},
		beforeDestroy() {
			if(this.map) {
				this.map = null;
			}
		}
	}
</script>

<style>
	.lmap {
		/*min-height: 600px;*/
		height: 100vh!important;
	}
</style>