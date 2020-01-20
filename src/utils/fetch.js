import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store/index'
import { getAppConfig } from './config'

const appConfig = getAppConfig()
const server = axios.create({
    baseURL: appConfig.baseUrl,
    timeout: 20000,
    responseType: 'json',
    withCredentials: true // 允许携带cookie
})

// 请求拦截器
server.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截器
server.interceptors.response.use(response => {
    const res = response && response.data
    if (!res.status) {
        // 异常处理
        if (res.code == '9001') {
            // 登录超时
            MessageBox.confirm('你已被登出，请重新登录', '确定登出', {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 刷新页面，更新token
                store.dispatch('FedLoginOut').then(() => {
                    window.location.href = appConfig.loginUrl
                })
            }).catch()
            return Promise.reject(res)
        } else {
            Message({
                message: res.message || '请求超时，稍后重试',
                type: 'error',
                duration: 3 * 1000
            })
            return Promise.reject(res)
        }
    } else {
        return res
    }
}, error => {
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error.data)
})

export default server