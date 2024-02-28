<template>
    <section class="wrapper bg-light">
        <div class="container pt-10 pb-14 pb-md-18">
            <div class="row mb-10">

                <div class="col-md-12">


                    <!-- <div class="alert alert-success alert-icon">
                        <p class="pt-4">
                            Welcome to GridPanel! 💙
                        </p>
                        <p>
                            <strong>
                                Get started and head <a href="/bhw">here</a> to get some <a href="/bhw">FREE
                                    credit</a> 🚀
                            </strong>
                        </p>
                    </div> -->


                    <!-- <div class="alert alert-secondary alert-icon" role="alert">
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
                    </div> -->

                </div>
                <div class="col-md-4 mb-8">
                    <div class="card card-border-top border-green">
                        <div class="card-body">
                            <h5 class="card-title">Paid Proxies</h5>
                            <h3 class="text-center card-text">11</h3>
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
                                <router-link to="/dashboard/Add-funds" class="btn btn-outline-primary btn-lg">Make a
                                    deposit</router-link>
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
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Plan</th>
                                        <th scope="col">Network</th>
                                        <th scope="col">Port</th>
                                        <th scope="col">Expires</th>
                                        <th scope="col">Operate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>CA proxy</td>
                                        <td>succeed</td>
                                        <td>@mdo</td>
                                        <td>4G</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false"
                                                    style="--bs-btn-padding-y: .10rem; --bs-btn-padding-x: .3rem; --bs-btn-font-size: .5rem;">
                                                    Create Order
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Connection Details</a></li>
                                                    <li><a class="dropdown-item" href="#">Configuration</a></li>
                                                    <li><a class="dropdown-item" href="#">Troubleshooting</a></li>
                                                    <li><a class="dropdown-item" href="#">Billing</a></li>
                                                    <li><a class="dropdown-item" href="#">Daily Usage</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br>
                            <router-link to="/dashboard/new-order" class="btn btn-outline-primary">
                                <i class="uil uil-plus pe-1"></i>
                                Create Order
                            </router-link>
                            <!-- <a href="/dashboard/export-proxies" class="btn btn-secondary float-md-end">
                                <i class="uil uil-export pe-1"></i>
                                Export
                            </a> -->
                            <br>
                            <br>


                            <!-- <div class="alert alert-info alert-icon" role="alert">
                                <i class="uil uil-exclamation-circle"></i> You do not have any orders.
                            </div> -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>