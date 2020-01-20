import { getStoreDetail, getShopList } from '@/api/shop'
const shop = {
    state: {
        shopInfo: null,      // 店铺详情
        shopList: null       // 所有店铺
    },

    mutations: {
        SET_SHOPINFO: (state, data) => {
            state.shopInfo = data
        },

        SET_SHOPLIST: (state, data) => {
            state.shopList = data
        }
    },

    actions: {
        // 获取店铺详情
        GetShopInfo({ state, commit }) {
            return new Promise(resolve => {
                if (!state.shopInfo) {
                    getStoreDetail().then(res => {
                        let data = {
                            name: res.data.name,
                            logo: res.data.full_logo,
                            id: res.data.id,
                            service_tel: res.data.service_tel,
                            status: res.data.status
                        }
                        commit('SET_SHOPINFO', data)
                        resolve(data)
                    })
                } else {
                    resolve(state.shopInfo)
                }
            })
        },

        // 获取账号下所有店铺
        GetShopList({ state, commit }) {
            return new Promise(resolve => {
                if (!state.shopList) {
                    getShopList().then(res => {
                        // 数据过滤 store_type 保留 餐饮 2 + 零售店铺 9
                        let data = res.data.filter(item => item.store_type === 2 || item.store_type === 9)
                        let list = data.map(item => {
                            return {
                                name: item.name,
                                id: item.id,
                                sellerType: item.store_type
                            }
                        })
                        commit('SET_SHOPLIST', list)
                    })
                } else {
                    resolve(state.shopList)
                }
            })
        }
    }
}

export default shop