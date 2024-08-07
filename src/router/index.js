import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [{
      name: 'home',
      path: '/home',
      component: () => import('@/views/home/index.vue')
    }, {
      name: 'person',
      path: '/person',
      component: () => import('@/views/person/index.vue')
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
