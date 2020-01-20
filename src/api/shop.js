import fetch from '@/utils/fetch'

/**
 * 获取店铺详情
 */
export function getStoreDetail() {
    return fetch({
        url: '/seller/store/detail'
    })
}

/**
 * 切换门店
 */
export function switchShop() {
    return fetch({
        url: '/seller/store/switch-shop',
        method: 'GET'
    })
}

/**
 * 退出
 */
export function userLogout() {
    return fetch({
        url: '/seller/user/logout',
        method: 'POST'
    })
}

/**
 * 获取账号下所有店铺
 * 店铺行业ID, 1:电商, 2:餐饮, 3:美业, 4:门店, 5:企业, 6:同城信息, 7:酒店, 8:知识付费, 9:零售行业
 */
export function getShopList() {
    return fetch({
        url: '/coupon-center/seller/list',
        method: 'GET'
    })
}