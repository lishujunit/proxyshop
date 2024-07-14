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







