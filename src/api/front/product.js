import service from "@/utils/http";

// 产品列表
export const productList = () => {
    return service({
        url: '/product/list',
        method: 'get'
    })
}

// 代理产品信息
export const productInfosList = (data) => {
    return service({
        url: '/product/infos',
        method: 'get',
        params: data
    })
}


