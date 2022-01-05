<template>
	<div class="fullDiv" style="height: 900px;" id="map"></div>
</template>

<script>
	import L from 'leaflet';
	import  './leaflet/ChineseTmsProviders.js';
	import '../../node_modules/leaflet/dist/leaflet.css';
	export default {
		methods: {
			initMap() {
				var lmap = L.map('map').setView([51.505, -0.09], 13);
				console.log('WHY',lmap)
//				L.tileLayer('../../static/mapCS/newtask/{z}/{x}/{y}.jpg', {
				L.tileLayer('./leaflet/newtask/{z}/{x}/{y}.jpg', {
				minZoom: 2,
				maxZoom: 6,
			}).addTo(lmap);

//				L.marker([51.5, -0.09]).addTo(map)
//					.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//					.openPopup();
			},
//			此方法线上可行2
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
			},
//			此方法线上可行
			maps(){
				var test = L.tileLayer.chinaProvider('Geoq.Normal.Map', {
					minZoom: 5,
					maxZoom: 18
				});
				//此处可以定义多个图层，并可以再页面中进行选择
				var baseLayers = {
					"测试地图": test
				}
			
				var map = L.map("map", {
					center: [39.5, 118],
					zoom: 7,
					layers: [test],
					zoomControl: false
				});
				L.control.layers(baseLayers, null).addTo(map);
				L.control.zoom({
					zoomInTitle: '放大',
					zoomOutTitle: '缩小'
				}).addTo(map);
			}
		},
		mounted() {
//			this.initMap();
			this.maps();
		}
	}
</script>

<style>

</style>