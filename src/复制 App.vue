<template>
	<div id="app">
		<div id="nav" class="common-util">
			<router-link to="/"><span>Home</span></router-link> |
			<router-link to="/vis"><span>Vis</span></router-link> |
			<router-link to="/leaflet">LMap</router-link> |
			<router-link to="/emap">EMap</router-link> |
		</div>
		<div class="box-body">主题切换</div>
		<button @click="change(1)">切换到浅色主题</button>
		<button @click="change(2)">切换到深色主题</button>
		<router-view  class="common-util"/>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				body_now: null
			}
		},
		methods: {
			change: function(type) {
				console.log(type,'ccccccccc',document.getElementsByClassName('theme'))
				if(type == 1) {
					document.getElementsByClassName('theme').setAttribute("href", "/static/css/theme1.css");
					localStorage.setItem("style", "/static/css/theme1.css");
				} else if(type == 2) {
					document.getElementsByClassName('theme').setAttribute("href", "/static/css/theme2.css");
					localStorage.setItem("style", "/static/css/theme2.css");
				}
			},
			// change: function(type) {
			// 	console.log(type,'ccccccccc',document.getElementById('theme'))
			// 	if(type == 1) {
			// 		document.getElementById('theme').setAttribute("href", "../static/css/theme1.css");
			// 		localStorage.setItem("style", "../static/css/theme1.css");
			// 	} else if(type == 2) {
			// 		document.getElementById('theme').setAttribute("href", "../static/css/theme2.css");
			// 		localStorage.setItem("style", "../static/css/theme2.css");
			// 	}
			// }
		},
		created() {
			var style = localStorage.getItem("style");
			if(style) {
				document.getElementsByClassName('theme').setAttribute("href", style); //实现将主题保存在内存中刷新浏览器不改变
			}
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		
	}
	
	#nav {
		padding: 30px;
	}
	
	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}
	
	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>