<template>
	<div id="app">
		<!--<div id="nav" class="common-util" v-show="xian">-->
		<div id="nav" class="common-util" v-show="this.$route.path!=='/login'">
			<!--<router-link to="{path:'/',query:{eBarColors:JSON.stringify(eBarColors)}}"><span>Home</span></router-link> |-->
			<router-link to="/home"><span>Home</span></router-link> |
			<router-link to="/vis"><span>Vis</span></router-link> |
			<router-link to="/leaflet">LMap</router-link> |
			<router-link to="/emap">EMap</router-link> |
			<router-link to="/all">All</router-link> |
			<router-link to="/about">ABout</router-link>&nbsp;
			<button @click="change('false')">Q</button> -
			<button @click="change('true')">S</button>
			<el-button @click="getOut()" style="float: right;">退出</el-button>
		</div>
		<router-view class="common-util" />
	</div>
</template>
<script>
	export default {
		data() {
			return {
				//				sign: null,
//				isDark: this.$store.state.isDark,
//				eBarColors: {
//					itemColor: 'skyblue',
//					bkColor: '#373b37'
//				}
				xian:false,
			}
		},
		watch: {
//			'$route.meta.isShow': {
//				deep: true,
//				immediate: true,
//				handler(val) {
//					console.log(val)
//					this.xian=val;
////					this.$nextTick(()=>{
////						this.change();
////					})
//				}
//			}
//			登录验证
//		$route(val){
//			if(!sessionStorage.getItem("token")){
//				this.$router.push('/login')
//			}
//		}
		},
		methods: {
			getOut(){
				this.$router.push('/login');
			},
			change(type) { //type如果是布尔值，刷新页面会重置
				let target = document.querySelector('.theme');
				let sign = localStorage.getItem('isDark');
//				let sign = this.$store.state.isDark;
//				console.log(sign)
				if(!sign || type === 'false') {
					//					window.document.documentElement.setAttribute("class", "theme theme1");
//					this.$nextTick(() => {
//						target.setAttribute("class", "theme theme1");
//					})
										target.className="theme theme1"
					localStorage.setItem("isDark", 'false');
//					this.$store.state.isDark = localStorage.getItem('isDark');
										this.$store.dispatch('upDateAsync','false');
//					console.log('点击了', this.$store.state.isDark)
				} else if(type === 'true' || sign == 'true') {
					//					window.document.documentElement.setAttribute("class", "theme theme2");
//					this.$nextTick(() => {
//						target.setAttribute("class", "theme theme2");
//					})
										target.className="theme theme2"
					localStorage.setItem("isDark", 'true');
//					this.$store.state.isDark = localStorage.getItem('isDark');
										this.$store.dispatch('upDateAsync','true');
//					console.log('点击了', this.$store.state.isDark)
				}
				//				console.log('APP:``type:',type,'````````',target.className,'`````sign:',sign);
				//				this.$router.go(0);
			},
		},
		created() {
//			console.log('$A333',this.$route.meta.isShow);

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