import service from "@/utils/http";

// 概览
export const overview = () => {
    return service({
        url: '/admin/dash/overview',
        method: 'get',
    })
}

// 用户搜索
export const users = () => {
  return service({
      url: '/admin/user/optlist',
      method: 'get',
  })
}

// 产品
export const optlist = () => {
  return service({
      url: '/admin/product/optlist',
      method: 'get',
  })
}

// 优惠券列表
export const list = (data) => {
  return service({
      url: '/admin/coupon/list',
      method: 'post',
      data
  })
}

// 新建优惠卷
export const create = (data) => {
  return service({
      url: '/admin/coupon/create',
      method: 'post',
      data
  })
}




