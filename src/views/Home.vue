<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<div>{{time}}</div>
		<SonTwo :dataObj='twoOptions' />
		<HelloWorld msg="Welcome to Your Vue.js App" cs="你说哩" />
		<SonOne :Object='sonOptions' />
		<!--<router-link :to="{path:'',query:}">{{}}</router-link>-->
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	import SonOne from '@/components/son-home.vue'
	import SonTwo from '@/components/two-home.vue'
	import Xdate from 'xdate'

	export default {
		name: 'Home',
		components: {
			HelloWorld,
			SonOne,
			SonTwo
		},
		watch: {
			isDark: {
				deep: true,
				handler(val) {
					console.log('HOME-Watch:',val);
//					this.sonOptions = val;
				}
			}
		},
		data() {
			return {
				time: '',
				isDark: this.$store.state.isDark,
//				isDark:localStorage.getItem('isDark'),
				twoOptions: {
        title: "某周手榴弹战损趋势",
        name: "手榴弹的战损量",
        color:['#1890ff','#2fc25b','#facc14','#223273','#8543e0','#13c2c2'],
        data: [
          {
            name: "周一",
            value: 3000,
          },
          {
            name: "周二",
            value: 2500,
          },
          {
            name: "周三",
            value: 1000,
          },
          {
            name: "周四",
            value: 8000,
          },
          {
            name: "周五",
            value: 28000,
          },
          {
            name: "周六",
            value: 12000,
          },
          {
            name: "周日",
            value: 12000,
          },
        ],
        mode: "vertical",
      },
				sonOptions: {
					label: 'LABEL',
//					itemColor: JSON.parse(decodeURIComponent(this.$route.query.eBarColors)).itemColor||'#4992ff',
//					itemColor: this.$route.eBarColors.itemColor ? this.$route.eBarColors.itemColor : 'orange',
					itemColor: localStorage.getItem('isDark')=='true' ? '#4992ff' : 'orange',
//					backgroundColor: this.$route.query.eBarColors.bkColor||'#100c2a',
//					backgroundColor: this.$route.eBarColors.bkColor ? this.$route.eBarColors.bkColor : '#d4d4d4',
					backgroundColor: localStorage.getItem('isDark')=='true' ? '#100c2a' : '#d4d4d4',
					itemDataType: 'ITEM-TYPE',
					xAxisName: 'X-NAME',
					yAxisName: 'Y-NAME',
					eventType: 'click',
				}
			}
		},
		mounted() {
			this.time = new Xdate().toString('HH:mm:ss');
//			console.log('HOME:',this.$route);	
		}
	}
</script>