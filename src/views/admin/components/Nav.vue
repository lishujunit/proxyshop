<template>
    <nav class="navbar navbar-expand-lg center-nav transparent navbar-light">
        <div class="container-fluid flex-lg-row flex-nowrap align-items-center">
            <div class="navbar-other w-100 d-flex ms-auto w-100">
                <ul class="navbar-nav flex-row align-items-center ms-auto">
                    <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#"
                            data-bs-toggle="dropdown">{{ user.userData?.user.user_name }}</a>
                        <ul class="dropdown-menu">
                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/admin">概览</router-link>
                            </li>
                            <!-- <li class="nav-item nav-item-disabled">
                                <router-link class="dropdown-item" to="">IPv4/IPv6</router-link>
                            </li> -->
                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/admin/coupon">优惠券</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/admin/productList">产品</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/admin/deviceList">设备</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/admin/userList">用户</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/admin/orderList">订单</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/admin/fund">资金</router-link>
                            </li>
                            <li class="nav-item" @click="handleLogout">
                                <router-link class="dropdown-item" to="">退出</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useStore } from '@/stores/user';

const router = useRouter();

const user = useStore();

const handleLogout = () => {
    user.updateUserData(null);
    router.push({
        path: '/web/signin'
    });
}
</script>

<style lang="less" scoped>
.nav-item-disabled {
    .dropdown-item {
        color: #afafaf;
    }
}
</style>