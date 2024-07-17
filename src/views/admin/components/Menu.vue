<template>
    <div class="col-auto col-md-2 px-0 bg-soft-primary" style="max-width: 200px">
        <div class="d-flex flex-column align-items-center align-items-sm-start pt-4 text-white min-vh-100">
            <a href="/#/admin" class="px-4">
                <img class="d-none d-md-block" src="../../../assets/img/logo1.jpg" alt=""
                    width="100%" height="auto">
            </a>
            <ul class="nav nav-pills flex-column mt-4" style="width: 100%;">
                <li v-for="item in navList" :key="item.name" class="nav-item" :class="{'dash-nav-item-active': item.paths.includes(itemActivePath), 'dash-nav-item-disabled': item.disabled}">
                    <router-link class="nav-link" :class="{'dash-nav-link-active': item.paths.includes(itemActivePath)}" :to="item.link">
                        <i :class="['uil', item.class, 'pe-1', 'd-none', 'd-md-inline']"></i>
                        <i :class="['uil', item.class, 'pe-1', 'd-sm-inline', 'd-md-none', 'fs-12']"></i>
                        <span class="lead fs-lg d-none d-md-inline">{{ item.name }}</span>
                    </router-link>
                </li>

            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();
const itemActivePath = ref('');

watch(() => route.path, (to, from) => {
    itemActivePath.value = to;
});

itemActivePath.value = route.path;

const navList = ref([
    {name: '概览', link: '/admin/overview', paths: ['/admin/overview'], disabled: false, class: ''},
    {name: '优惠券', link: '/admin/coupon', paths: ['/admin/coupon'], disabled: false, class: ''},
    {name: '产品', link: '/admin/productList', paths: ['/admin/productList'], disabled: false, class: ''},
    {name: '设备', link: '/admin/deviceList', paths: ['/admin/deviceList'], disabled: false, class: ''},
    {name: '用户', link: '/admin/userList', paths: ['/admin/userList'], disabled: false, class: ''},
    {name: '订单', link: '/admin/orderList', paths: ['/admin/orderList'], disabled: false, class: ''},
    {name: '资金', link: '/admin/fund', paths: ['/admin/fund'], disabled: false, class: ''},
])
</script>

<style lang="less" scoped>
.dash-nav-item {
    background-color: none;
    text-align: center;
}
.dash-nav-item-disabled {
    .nav-link {
        color: #afafaf;
    }
}

.dash-nav-item-active {
    background-color: var(--bs-grape);
    text-align: center;
}

.dash-nav-item:hover {
    background-color: var(--bs-grape);
}
.dash-nav-item-disabled:hover {
    background-color: transparent;
}

.dash-nav-link {
    color: var(--bs-grape);
}

.dash-nav-link-active {
    color: var(--bs-light);
}

.dash-nav-link:hover {
    color: var(--bs-light);
}
</style>