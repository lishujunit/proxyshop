<template>
    <div class="content-wrapper">

        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div class="col-auto col-md-2 px-0 bg-soft-primary" style="max-width: 200px">
                    <div class="d-flex flex-column align-items-center align-items-sm-start pt-4 text-white min-vh-100">
                        <a href="/dashboard" class="px-4">
                            <img class="d-none d-md-block" src="/img/logo-dark.png" srcset="/img/logo-dark@2x.png 2x"
                                alt="" width="100%" height="auto">
                            <!-- <img class="d-block d-md-none" src="/img/logo-icon.jpeg" alt="" width="20px" height="16px"> -->
                        </a>
                        <ul class="nav nav-pills flex-column mt-4" style="width: 100%;">


                            <li class="nav-item dash-nav-item-active">
                                <a class="nav-link dash-nav-link-active" href="/dashboard">

                                    <i class="uil uil-server pe-1 d-none d-md-inline"></i>
                                    <i class="uil uil-server pe-1 d-sm-inline d-md-none fs-12"></i>
                                    <span class="lead fs-lg d-none d-md-inline">Proxies</span>
                                </a>
                            </li>


                            <li class="nav-item dash-nav-item">
                                <a class="nav-link dash-nav-link" href="/dashboard/scraping">

                                    <i class="uil uil-brackets-curly pe-1 d-none d-md-inline"></i>
                                    <i class="uil uil-brackets-curly pe-1 d-sm-inline d-md-none fs-12"></i>
                                    <span class="lead fs-lg d-none d-md-inline">IPv4/IPv6</span>
                                </a>
                            </li>


                            <li class="nav-item dash-nav-item">
                                <a class="nav-link dash-nav-link" href="/dashboard/deposit">

                                    <i class="uil uil-credit-card pe-1 d-none d-md-inline"></i>
                                    <i class="uil uil-credit-card pe-1 d-sm-inline d-md-none fs-12"></i>
                                    <span class="lead fs-lg d-none d-md-inline">Add funds</span>
                                </a>
                            </li>


                            <li class="nav-item dash-nav-item">
                                <a class="nav-link dash-nav-link" href="/dashboard/affiliate">

                                    <i class="uil uil-dollar-sign pe-1 d-none d-md-inline"></i>
                                    <i class="uil uil-dollar-sign pe-1 d-sm-inline d-md-none fs-12"></i>
                                    <span class="lead fs-lg d-none d-md-inline">Affiliate</span>
                                </a>
                            </li>


                            <li class="nav-item dash-nav-item">
                                <a class="nav-link dash-nav-link" href="/dashboard/settings">

                                    <i class="uil uil-cog pe-1 d-none d-md-inline"></i>
                                    <i class="uil uil-cog pe-1 d-sm-inline d-md-none fs-12"></i>
                                    <span class="lead fs-lg d-none d-md-inline">Settings</span>
                                </a>
                            </li>


                            <li class="nav-item dash-nav-item">
                                <a class="nav-link dash-nav-link" href="/dashboard/api">

                                    <i class="uil uil-code-branch pe-1 d-none d-md-inline"></i>
                                    <i class="uil uil-code-branch pe-1 d-sm-inline d-md-none fs-12"></i>
                                    <span class="lead fs-lg d-none d-md-inline">API</span>
                                </a>
                            </li>


                            <li class="nav-item dash-nav-item">
                                <a class="nav-link dash-nav-link" href="/dashboard/support">

                                    <i class="uil uil-fast-mail pe-1 d-none d-md-inline"></i>
                                    <i class="uil uil-fast-mail pe-1 d-sm-inline d-md-none fs-12"></i>
                                    <span class="lead fs-lg d-none d-md-inline">Contact</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="col py-3">
                    <nav class="navbar navbar-expand-lg center-nav transparent navbar-light">
                        <div class="container-fluid flex-lg-row flex-nowrap align-items-center">
                            <div class="navbar-other w-100 d-flex ms-auto w-100">
                                <ul class="navbar-nav flex-row align-items-center ms-auto">
                                    <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#"
                                            data-bs-toggle="dropdown">12324324@qq.com (£0.00)</a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item"><a class="dropdown-item" href="/dashboard">Dashboard</a>
                                            </li>
                                            <li class="nav-item"><a class="dropdown-item"
                                                    href="/dashboard/scraping">Scraping</a></li>
                                            <li class="nav-item"><a class="dropdown-item"
                                                    href="/dashboard/deposit">Deposit</a></li>

                                            <li class="nav-item"><a class="dropdown-item"
                                                    href="/dashboard/affiliate">Affiliate</a></li>

                                            <li class="nav-item"><a class="dropdown-item"
                                                    href="/dashboard/settings">Settings</a></li>
                                            <li class="nav-item"><a class="dropdown-item" href="/dashboard/api">API</a></li>
                                            <li class="nav-item"><a class="dropdown-item" href="/contact">Contact</a></li>
                                            <li class="nav-item"><a class="dropdown-item" href="/logout">Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>



                    <section class="wrapper bg-light">
                        <div class="container pt-10 pb-14 pb-md-18">
                            <div class="row mb-10">

                                <div class="col-md-12">


                                    <div class="alert alert-success alert-icon">
                                        <p class="pt-4">
                                            Welcome to GridPanel! 💙
                                        </p>
                                        <p>
                                            <strong>
                                                Get started and head <a href="/bhw">here</a> to get some <a href="/bhw">FREE
                                                    credit</a> 🚀
                                            </strong>
                                        </p>
                                    </div>


                                    <div class="alert alert-secondary alert-icon" role="alert">
                                        <p class="pt-4">
                                            We have good stock of 🇬🇧 UK 4G and 5G mobile proxies available for instant
                                            delivery.
                                        </p>
                                        <p>Celebrate the restock of 🇺🇸 USA 4G and 5G mobile proxies - get 25% off USA
                                            monthly 4G/5G plans with code <b>US25</b></p>
                                    </div>

                                    <div class="alert alert-icon alert-warning">
                                        <i class="uil uil-info-circle"></i> You have not specified your marketing
                                        preferences on your <a href="/dashboard/settings">settings</a> page - please take a
                                        minute to update these so we only send
                                        you the emails you want to receive.
                                    </div>

                                </div>
                                <div class="col-md-4 mb-8">
                                    <div class="card card-border-top border-green">
                                        <div class="card-body">
                                            <h5 class="card-title">Paid Proxies</h5>
                                            <h3 class="text-center card-text">0</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-8">
                                    <div class="card card-border-top border-green">
                                        <div class="card-body">
                                            <h5 class="card-title">User balance</h5>
                                            <h3 class="text-center card-text">£0.00</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card card-border-top border-green">
                                        <div class="card-body">
                                            <h5 class="card-title">Add funds</h5>
                                            <div class="text-center">
                                                <a href="/dashboard/deposit" class="btn btn-outline-primary btn-lg">Make a
                                                    deposit</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Your proxies</h5>
                                            <br>
                                            <a href="/dashboard/new-order" class="btn btn-outline-primary">
                                                <i class="uil uil-plus pe-1"></i>
                                                Create Order
                                            </a>
                                            <a href="/dashboard/export-proxies" class="btn btn-secondary float-md-end">
                                                <i class="uil uil-export pe-1"></i>
                                                Export
                                            </a>
                                            <br>
                                            <br>


                                            <div class="alert alert-info alert-icon" role="alert">
                                                <i class="uil uil-exclamation-circle"></i> You do not have any orders.
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
            </div>
        </div>


    </div>
</template>

<style lang="less" scoped>
.dash-nav-item {
    background-color: none;
    text-align: center;
}

.dash-nav-item-active {
    background-color: var(--bs-grape);
    text-align: center;
}

.dash-nav-item:hover {
    background-color: var(--bs-grape);
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