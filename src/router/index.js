import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    name: 'menu',
    path: '/menu',
    redirect: '/home',
    component: () => import('@/views/menu/index.vue'),
    children: [{
      name: 'home',
      path: '/home',
      component: () => import('@/views/home/index.vue')
    },{
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
