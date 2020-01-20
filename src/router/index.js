import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/index',
            name: 'index',
            component: () => import('@/views/index'),
            meta: {
                menuShow: true,
                menuName: '首页'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/about'),
            meta: {
                menuShow: true,
                menuName: '关于'
            }
        },
        {
            path: '*',
            redirect: '/index'
        }
    ]
})