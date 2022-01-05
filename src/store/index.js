import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		upDate: '',
		isDark: localStorage.getItem('isDark'),
	},
	mutations: {
				UPDATE(state,obj) {
					state.isDark=obj;
//					console.log('VUEX执行结果',state.isDark)
				},

//		UPDATE(state, obj) {
//			let arr = Object.assign([], state.isDark, obj);
//			state.isDark = arr;
//			console.log('VUEX执行')
//		},
	},
	actions: {
		//		upDateAsync(obj) {
		//    setTimeout(() => {
		//      obj.commit('upDate');
		//    }, 0);
		//  },
		upDateAsync({
			commit
		}, obj) {
			setTimeout(() => {
				commit('UPDATE', obj);
			}, 0);
		},
	},
	modules: {}
})