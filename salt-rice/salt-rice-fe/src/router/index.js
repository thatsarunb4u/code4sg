import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Index',
		component: () => import(/* webpackChunkName: "connected" */ '@/views/Index.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/post',
		name: 'CreatePost',
		component: () => import(/* webpackChunkName: "connected" */ '@/views/CreatePost.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/login',
		name: 'UserAuthentication',
		component: () => import(/* webpackChunkName: "connected" */ '@/views/UserAuth.vue'),
	},
	{
		path: '/resetPassword',
		name: 'ResetPassword',
		component: () => import(/* webpackChunkName: "connected" */ '@/views/ResetPassword.vue'),
	},
	{
		path: '/post/:id',
		name: 'Post',
		component: () => import(/* webpackChunkName: "connected" */ '@/views/Post.vue'),
		meta: {
			requiresAuth: true,
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(to, from) {
		if (to.name === 'Index' && from.name === 'Post')
			return {
				selector: '.card',
				offset: { x: 0, y: 20 },
			};

		return { x: 0, y: 0 };
	},
});

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (store.getters.isLoggedIn) {
			next();
			return;
		}
		next('/login');
	} else {
		/* if(to.path === '/login'){
            console.log('target login page');
            if(store.getters.isLoggedIn){
                console.log('logged in already');
                next('/')
                return
            }   
        } */
		next();
	}
});

export default router;
