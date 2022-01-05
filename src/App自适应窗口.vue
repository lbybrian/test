<template>
  <div id="app"
  	:style="styleObj"
  >

  </div>
</template>

<script>

	export default {
		data(){
			return{
				scale:this.getscale(),
				width:1920,
				height:1080,
			}
		},
		computed:{
			styleObj(){
				return {
					transform:`scale(${this.scale})translate(-50%,-50%)`,
					width:this.width+'px',
					height:this.height+'px',
				}
			}
		},
		mounted(){
			this.setscale();
			window.onresize=()=>{
				this.setscale();
			}
		},
		methods:{
			getscale(){
				let ww =window.innerWidth / this.width;
				let ww =window.innerHeight / this.height;
				return ww <wh ? ww :wh;
			},
			setscale(){
				let scale = this.getscale();
				this.scale =scale
			}
		}
	};
</script>

<style lang="scss">
#app {
  
    box-sizing: border-box;
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
  transform-origin: 0 0;
    transition: 0.3s;
    overflow: hidden;
}


</style>
