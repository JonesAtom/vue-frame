import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// 用户模块
import user from './modules/user'
// 店铺模块
import shop from './modules/shop'
// 当前路由模块
import routeState from './modules/routeState'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        shop,
        routeState
    },
    getters
})