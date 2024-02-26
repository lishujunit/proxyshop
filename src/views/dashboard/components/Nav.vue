<template>
    <nav class="navbar navbar-expand-lg center-nav transparent navbar-light">
        <div class="container-fluid flex-lg-row flex-nowrap align-items-center">
            <div class="navbar-other w-100 d-flex ms-auto w-100">
                <ul class="navbar-nav flex-row align-items-center ms-auto">
                    <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#"
                            data-bs-toggle="dropdown">{{ user.userData?.user.user_name }} (£ {{user.userData?.user.user_balance}})</a>
                        <ul class="dropdown-menu">
                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/dashboard">Dashboard</router-link>
                            </li>
                            <li class="nav-item nav-item-disabled">
                                <router-link class="dropdown-item" to="">IPv4/IPv6</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/dashboard/Add-funds">Add funds</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/dashboard/Affiliate">Affiliate</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/dashboard/settings">Settings</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/dashboard/api">API</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="dropdown-item" to="/web/contact">Contact</router-link>
                            </li>
                            <li class="nav-item" @click="handleLogout">
                                <router-link class="dropdown-item" to="">Logout</router-link>
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