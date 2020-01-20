import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// 引入公共样式
import './assets/css/reset.scss'
import './assets/css/global.scss'
// 导入 element 组件库
import Element from 'element-ui'
import './assets/css/element-variables.scss'
// 引入滚动条插件样式
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import { getAppConfig } from '@/utils/config'
Vue.config.productionTip = false
Vue.use(Element)

const appConfig = getAppConfig()
// 定义全局的请求地址
global.BASEURL = appConfig.baseUrl
// 定义全局的图片地址
global.IMGURL = appConfig.imgUrl

// 全局路由守卫
router.beforeEach((to, from, next) => {
    store.commit('SET_ROUTE', to.fullPath)
    window.scrollTo(0, 0) // 滚动条返回顶部
    // 获取店铺信息
    store.dispatch('GetShopInfo').then(() => {
        next()
    })
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')