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


