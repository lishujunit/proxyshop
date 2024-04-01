import service from "@/utils/http";

export const register = (data) => {
    return service({
        url: '/user/register',
        method: 'post',
        data
    })
}

export const limited = () => {
    return service({
        url: '/ip-limited',
        method: 'get'
    })
}

export const country = () => {
    return service({
        url: '/user/country',
        method: 'get'
    })
}

export const login = (data) => {
    return service({
        url: '/user/login',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

// 生成账户充值URL
export const rechargeurl = (params) => {
    return service({
        url: '/user/rechargeurl',
        method: 'post',
        params,
    })
}

// 获取用户信息
export const userInfo = () => {
    return service({
        url: '/user/me/',
        method: 'get'
    })
}

// 用户反馈
export const feedback = (user_id, data) => {
    return service({
        url: `/user/feedback/${user_id}`,
        method: 'post',
        data,
    })
}

// 重新发送激活电子邮件
export const resendemail = (params) => {
    return service({
        url: `/user/resendemail`,
        method: 'get',
        params,
    })
}

// 发送重置密码邮件
export const resetpassworSend = (params) => {
    return service({
        url: `/user/resetpassword`,
        method: 'post',
        params,
    })
}

// 重新设置密码
export const resetpassword = (params) => {
    return service({
        url: `/user/resetpassword/confirm`,
        method: 'post',
        params,
    })
}


// 账号激活
export const activate = (params) => {
    return service({
        url: `/user/activate`,
        method: 'get',
        params,
    })
}

// 更新用户信息
export const updateUserInfo = (user_id, data) => {
    return service({
        url: `/user/update/${user_id}`,
        method: 'post',
        data,
    })
}

// 充值记录
export const recharges = () => {
    return service({
        url: '/user/recharges',
        method: 'get',
    })
}

// commission数据获取
export const affiliate = () => {
    return service({
        url: '/user/affiliate',
        method: 'post',
    })
}

// 更新api token
export const updateToken = (id, data) => {
    return service({
        url: `/user/update/${id}`,
        method: 'post',
        data
    })
}

// api调用事例
export const apidemo = () => {
    return service({
        url: '/proxy/apidemo',
        method: 'get',
    })
}

// 代理调用 Demo
export const proxyCall = (params) => {
    return service({
        url: '/proxy/call',
        method: 'get',
        params
    })
}