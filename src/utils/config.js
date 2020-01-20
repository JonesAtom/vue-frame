export function getAppConfig() {
    let config = {
        loginUrl: '//account.qmai.cn?callback=https://site.qmai.cn',
        baseUrl: '//site.qmai.cn/api',
        imgUrl: '//img-shop.qmimg.cn',
        host: 'qmai.cn',
        protocol: 'https:'
    }
    try {
        const hostName = window.location.hostname
        if (hostName !== 'localhost') {
            const n = hostName.indexOf('.')
            if (n) {
                const host = hostName.substring(n + 1, hostName.length)
                if (host.length > 0) {
                    config.loginUrl = '//account.' + host + '?callback=https://site.' + host
                    config.baseUrl = '//inapi.' + host + '/web'
                    config.host = host
                    config.protocol = window.location.protocol
                }
            }
        } else {
            config.loginUrl = '//debug.zvcms.com/index/inapi/store?callback=http://site.bbc.co'
            config.baseUrl = '//inapi.zvcms.com/web'
            // qmai.co  qimai.shop zvcms.com
        }
        return config
    } catch (e) {
        return config
    }
}