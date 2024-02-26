<template>
    <div class="col-auto col-md-2 px-0 bg-soft-primary" style="max-width: 200px">
        <div class="d-flex flex-column align-items-center align-items-sm-start pt-4 text-white min-vh-100">
            <a href="/dashboard" class="px-4">
                <img class="d-none d-md-block" src="/img/logo-dark.png" srcset="/img/logo-dark@2x.png 2x" alt=""
                    width="100%" height="auto">
                <!-- <img class="d-block d-md-none" src="/img/logo-icon.jpeg" alt="" width="20px" height="16px"> -->
            </a>
            <ul class="nav nav-pills flex-column mt-4" style="width: 100%;">


                <li class="nav-item dash-nav-item-active">
                    <router-link class="nav-link dash-nav-link-active" to="/dashboard">
                        <i class="uil uil-server pe-1 d-none d-md-inline"></i>
                        <i class="uil uil-server pe-1 d-sm-inline d-md-none fs-12"></i>
                        <span class="lead fs-lg d-none d-md-inline">Proxies</span>
                    </router-link>
                </li>


                <li class="nav-item dash-nav-item dash-nav-item-disabled">
                    <router-link disabled class="nav-link" to="">

                        <i class="uil uil-brackets-curly pe-1 d-none d-md-inline"></i>
                        <i class="uil uil-brackets-curly pe-1 d-sm-inline d-md-none fs-12"></i>
                        <span class="lead fs-lg d-none d-md-inline">IPv4/IPv6</span>
                    </router-link>
                </li>


                <li class="nav-item dash-nav-item">
                    <router-link class="nav-link" to="/dashboard/Add-funds">

                        <i class="uil uil-credit-card pe-1 d-none d-md-inline"></i>
                        <i class="uil uil-credit-card pe-1 d-sm-inline d-md-none fs-12"></i>
                        <span class="lead fs-lg d-none d-md-inline">Add funds</span>
                    </router-link>
                </li>


                <li class="nav-item dash-nav-item">
                    <router-link class="nav-link" to="/dashboard/affiliate">

                        <i class="uil uil-dollar-sign pe-1 d-none d-md-inline"></i>
                        <i class="uil uil-dollar-sign pe-1 d-sm-inline d-md-none fs-12"></i>
                        <span class="lead fs-lg d-none d-md-inline">Affiliate</span>
                    </router-link>
                </li>


                <li class="nav-item dash-nav-item">
                    <router-link class="nav-link" to="/dashboard/settings">

                        <i class="uil uil-cog pe-1 d-none d-md-inline"></i>
                        <i class="uil uil-cog pe-1 d-sm-inline d-md-none fs-12"></i>
                        <span class="lead fs-lg d-none d-md-inline">Settings</span>
                    </router-link>
                </li>


                <li class="nav-item dash-nav-item">
                    <router-link class="nav-link" to="/dashboard/api">

                        <i class="uil uil-code-branch pe-1 d-none d-md-inline"></i>
                        <i class="uil uil-code-branch pe-1 d-sm-inline d-md-none fs-12"></i>
                        <span class="lead fs-lg d-none d-md-inline">API</span>
                    </router-link>
                </li>


                <li class="nav-item dash-nav-item">
                    <router-link class="nav-link" to="/web/contact">

                        <i class="uil uil-fast-mail pe-1 d-none d-md-inline"></i>
                        <i class="uil uil-fast-mail pe-1 d-sm-inline d-md-none fs-12"></i>
                        <span class="lead fs-lg d-none d-md-inline">Contact</span>
                    </router-link>
                </li>

            </ul>
        </div>
    </div>
</template>

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