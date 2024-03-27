import service from "@/utils/http";

// 产品列表
export const productList = () => {
    return service({
        url: '/product/list',
        method: 'get'
    })
}

// 代理产品信息
export const productInfosList = (params) => {
    return service({
        url: '/product/infos',
        method: 'get',
        params
    })
}

// 计算订单金额
export const orderprice = (params) => {
    return service({
        url: '/product/orderprice',
        method: 'get',
        params
    })
}

// 提交订单
export const order = (params, data) => {
    return service({
        url: '/product/order',
        method: 'post',
        params,
        data
    })
}

// 已购买的代理设备列表
export const proxylist = (params) => {
    return service({
        url: '/proxy/list',
        method: 'get',
        params
    })
}

// 更新订单
export const orderUpdate = (params, data) => {
    return service({
        url: '/proxy/update',
        method: 'post',
        params,
        data
    })
}