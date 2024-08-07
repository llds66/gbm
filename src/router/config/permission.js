import router from '@/router/index'
import { userStore } from "@/store/user"
const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
    const store = userStore(); // 确保Pinia实例已经注入
    // 没有登录 无token
    if (!store.token) {
        // 白名单 放行
        if (whiteList.includes(to.path)) return next()
        // 不在白名单 跳转到登录页面 
        return next('/login')
    }
    // 已经登录 有token
    if (to.path === '/login') return next('/')
    next()
});


router.afterEach(() => {
    console.log('end');
})
