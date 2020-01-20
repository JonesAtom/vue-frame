const getters = {
    // user
    token: state => state.user.token,
    // shop
    shopInfo: state => state.shop.shopInfo,           // 店铺信息
    shopList: state => state.shop.shopList,           // 所有店铺
    // routeState
    activeMenu: state => state.routeState.activeMenu,   // 当前主路由
    activeSubMenu: state => state.routeState.activeSubMenu, // 当前子路由
    // palte
    couponTypeList: state => state.plate.couponTypeList
}

export default getters