const routeState = {
    state: {
        activeMenu: '', // 当前主路由
        activeSubMenu: '' // 当前子路由
    },
    
    mutations: {
        SET_ROUTE: (state, data) => {
            let idx = data.indexOf('?')
            if (idx > -1) {
                data = data.substring(0, idx)
            }
            let arr = data.split('/')
            // 匹配到二级路由
            if (arr.length > 2) {
                state.activeMenu = arr.slice(0, 2).join('/')
                state.activeSubMenu = arr.slice(0, 3).join('/')
            } else {
                state.activeMenu = data
                state.activeSubMenu = ''
            }
        }
    }
}

export default routeState