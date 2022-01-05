import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect:'/login'
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import( /* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import( /* webpackChunkName: "about" */ '../views/Login.vue'),
		meta: {
			isShow: false
		}
	},
	{
		path: '/register',
		name: 'Register',
		component: () =>
			import( /* webpackChunkName: "about" */ '../views/Register.vue'),
	},
	{
		path: '/this',
		name: 'This',
		component: () =>
			import('@/views/This.vue')
	},
	{
		path: '/3d',
		name: '3d',
		component: () =>
			import('@/views/3d.vue')
	},
	{
		path: '/vis',
		name: 'vis',
		component: () =>
			import('@/views/Vis.vue')
	},
	{
		path: '/leaflet',
		name: 'leaflet',
		component: () =>
			import('@/views/LMap.vue')
	},
	{
		path: '/emap',
		name: 'emap',
		component: () =>
			import('@/views/EMap.vue')
	},
	{
		path: '/all',
		name: 'all',
		component: () =>
			import('@/views/All.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;