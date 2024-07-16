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

// 更新优惠卷
export const update = (data) => {
  return service({
      url: '/admin/coupon/update',
      method: 'post',
      data
  })
}

// 删除优惠卷
export const couponDelete = (data) => {
  return service({
      url: '/admin/coupon/delete',
      method: 'post',
      data
  })
}

// 查看product列表
export const productList = (data) => {
  return service({
      url: '/admin/product/list',
      method: 'post',
      data
  })
}

// product更新
export const productUpdate = (data) => {
  return service({
      url: '/admin/product/update',
      method: 'post',
      data
  })
}

// 设备列表
export const deviceList = (data) => {
  return service({
      url: '/admin/device/list',
      method: 'post',
      data
  })
}

// 国家区域
export const countryinfos = (data) => {
  return service({
      url: '/admin/device/countryinfos',
      method: 'post',
      data
  })
}

// 设备更新
export const deviceUpdate = (data) => {
  return service({
      url: '/admin/device/update',
      method: 'post',
      data
  })
}

// 设备删除
export const deviceDel = (data) => {
  return service({
      url: '/admin/device/delete',
      method: 'post',
      data
  })
}

// admin用户列表
export const userList = (data) => {
  return service({
      url: '/admin/user/list',
      method: 'post',
      data
  })
}

// 修改密码
export const resetpassword = (data) => {
  return service({
      url: '/admin/user/resetpassword',
      method: 'post',
      data
  })
}

// 充值试用金
export const recharge = (data) => {
  return service({
      url: '/admin/user/recharge',
      method: 'post',
      data
  })
}

// 冻结/解冻账号
export const frozen = (data) => {
  return service({
      url: '/admin/user/frozen',
      method: 'post',
      data
  })
}

// 订单列表
export const orderList = (data) => {
  return service({
      url: '/admin/order/list',
      method: 'post',
      data
  })
}

// 延长订单-设备到期时间
export const extend = (data) => {
  return service({
      url: '/admin/order/extend',
      method: 'post',
      data
  })
}


// 可供切换的区域及数量
export const regionList = (params) => {
  return service({
      url: '/admin/order/region-list',
      method: 'post',
      params
  })
}

// 当前所在区域
export const getRegion = (params) => {
  return service({
      url: '/proxy/region',
      method: 'get',
      params
  })
}

// 切换设备所在区域
export const switchRegion = (params) => {
  return service({
      url: '/admin/order/switch-region',
      method: 'post',
      params
  })
}




// 充值列表
export const deposits = (data) => {
  return service({
      url: '/admin/deposits/list',
      method: 'post',
      data
  })
}



