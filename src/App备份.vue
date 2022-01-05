<template>
	<div id="app">
		<div id="nav" class="common-util">
			<!--<router-link to="{path:'/',query:{eBarColors:JSON.stringify(eBarColors)}}"><span>Home</span></router-link> |-->
			<router-link to="/"><span>Home</span></router-link> |
			<router-link to="/vis"><span>Vis</span></router-link> |
			<router-link to="/leaflet">LMap</router-link> |
			<router-link to="/emap">EMap</router-link> |
		</div>
		<button @click="change('false')">浅色主题</button>
		<button @click="change('true')">深色主题</button>
		<router-view class="common-util" />
	</div>
</template>
<script>
	export default {
		data() {
			return {
				//				sign: null,
				isDark: this.$store.state.isDark,
				eBarColors: {
					itemColor: 'skyblue',
					bkColor: '#373b37'
				}
			}
		},
		watch: {
			isDark: {
				deep: true,
				immediate: true,
				handler(val) {
//					this.isDark = val;
//					console.log('APP-Watch', this.isDark)
					this.$nextTick(()=>{
						this.change();
					})
				}
			}
		},
		methods: {
			change(type) { //type如果是布尔值，刷新页面会重置
				let target = document.querySelector('.theme');
				let sign = localStorage.getItem('isDark');
				if(!sign || type === 'false') {
					//					window.document.documentElement.setAttribute("class", "theme theme1");
					this.$nextTick(() => {
						target.setAttribute("class", "theme theme1");
					})
					//					target.className="theme theme1"
					localStorage.setItem("isDark", 'false');
//					this.$store.state.isDark = localStorage.getItem('isDark');
										this.$store.dispatch('upDateAsync',localStorage.getItem('isDark'));
//					console.log('点击了', this.$store.state.isDark)
				} else if(type === 'true' || sign == 'true') {
					//					window.document.documentElement.setAttribute("class", "theme theme2");
					this.$nextTick(() => {
						target.setAttribute("class", "theme theme2");
					})
					//					target.className="theme theme2"
					localStorage.setItem("isDark", 'true');
//					this.$store.state.isDark = localStorage.getItem('isDark');
										this.$store.dispatch('upDateAsync',localStorage.getItem('isDark'));
//					console.log('点击了', this.$store.state.isDark)
				}
				//				console.log('APP:``type:',type,'````````',target.className,'`````sign:',sign);
				//				this.$router.go(0);
			},
		},
		created() {

			//			this.sign = localStorage.getItem('isDark');
			//			if(this.sign) {
			//				document.getElementsByClassName('theme').setAttribute("href", style); //实现将主题保存在内存中刷新浏览器不改变
			//			}
			this.change();
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
	#nav {
		padding: 30px;
		a {
			font-weight: bold;
		}
	}
</style>