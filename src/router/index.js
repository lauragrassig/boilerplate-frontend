import HomeView from '../pages/HomeView.vue'

import { authenticate } from '@/auth'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../pages/AboutView.vue'),
		},
		// middleware needed to be able to authenticate locally
		{
			path: '/login/:token',
			name: 'login',
			component: HomeView,
			beforeEnter: (to, _, next) => {
				const { token } = to.params
				authenticate(token)
				next('/')
			},
		},
	],
})

export default router
