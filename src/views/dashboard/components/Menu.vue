<template>
    <div class="col-auto col-md-2 px-0 bg-soft-primary" style="max-width: 200px">
        <div class="d-flex flex-column align-items-center align-items-sm-start pt-4 text-white min-vh-100">
            <a href="/dashboard" class="px-4">
                <img class="d-none d-md-block" src="../../../assets/img/logo1.jpg" alt=""
                    width="100%" height="auto">
                <!-- <img class="d-block d-md-none" src="/img/logo-icon.jpeg" alt="" width="20px" height="16px"> -->
            </a>
            <ul class="nav nav-pills flex-column mt-4" style="width: 100%;">
                <li v-for="item in navList" :key="item.name" class="nav-item" :class="{'dash-nav-item-active': itemActivePath === item.link, 'dash-nav-item-disabled': item.disabled}">
                    <router-link class="nav-link" :class="{'dash-nav-link-active': itemActivePath === item.link}" :to="item.link">
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

watch(() => route.fullPath, (to, from) => {
    itemActivePath.value = to;
});

itemActivePath.value = route.fullPath;

const navList = ref([
    {name: 'Proxies', link: '/dashboard/proxies', disabled: false, class: 'uil-server'},
    {name: 'IPv4/IPv6', link: '', disabled: true, class: 'uil-brackets-curly'},
    {name: 'Add funds', link: '/dashboard/Add-funds', disabled: false, class: 'uil-credit-card'},
    {name: 'Affiliate', link: '/dashboard/affiliate', disabled: false, class: 'uil-dollar-sign'},
    {name: 'Settings', link: '/dashboard/settings', disabled: false, class: 'uil-cog'},
    {name: 'API', link: '/dashboard/api', disabled: false, class: 'uil-code-branch'},
    {name: 'Contact', link: '/web/contact', disabled: false, class: 'uil-fast-mail'},
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