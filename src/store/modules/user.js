import cookies from 'js-cookie'

const user = {
    state: {
        user: '',
        token: cookies.get('token')
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        }
    },

    actions: {
        // 登出 清除token
        FedLoginOut({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                cookies.remove('api_token')
                resolve()
            })
        }
    }
}
export default user