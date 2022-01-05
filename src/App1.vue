<template>
	<div id="app">
		<div id="nav" class="common-util">
			<router-link to="/"><span>Home</span></router-link> |
			<!--<router-link to="/about">线上Map</router-link> | 
      <router-link to="/this">离线Map</router-link> | 
      <router-link to="/3d">3DMap</router-link> | -->
			<router-link to="/vis"><span>Vis</span></router-link> |
			<router-link to="/leaflet">LMap</router-link> |
			<router-link to="/emap">EMap</router-link> |
			<!--<DropdownMenu slot="list">
				<DropdownItem @click.native="theme('iview')">默认</DropdownItem>
				<DropdownItem @click.native="theme('light')">浅色</DropdownItem>
				<DropdownItem @click.native="theme('dark')">深色</DropdownItem>
			</DropdownMenu>-->
			<button @click='themea()'>切换主题</button>
			<!--<button @click='themea2("white","skyblue")'>切换主题2222</button>-->
		</div>
		<router-view  class="common-util"/>
	</div>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		computed:{
			
		},
		methods: {
			themea2(color,bk){
//      		@include bk_primary(color,bk);
			},
			//换主题
			//		theme(type) {
			//		this.$store.commit('upDate', {themeType: type});
			//		window.document.documentElement.setAttribute( "data-theme", type );
			//		}

			themea() {
				let theme = localStorage.getItem('theme');
				console.log('-----------themea:',theme)
				if(!theme||theme === 'dark') {
					window.document.documentElement.setAttribute('data-theme', 'dark')
					localStorage.setItem('theme','dark');
				} 
//				else if(){
//					window.document.documentElement.setAttribute('data-theme', 'dark')
//					localStorage.setItem('theme','light');
//				}
				else if(theme === 'light'){
					window.document.documentElement.setAttribute('data-theme', 'light')
					localStorage.setItem('theme','light');
				}
			}

		},
		created() {
			let theme = localStorage.getItem('theme');
			console.log('-----------created:',theme);
//			this.themea()
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

<style lang="scss" scoped>
	@import "./styles/_handle.scss";
	/*.common-util {
		font-size: 18px;
		@include font_color("font_color1");
		@include background_color("background_color1");
		@include border_color("border_color1");
	}*/
</style>