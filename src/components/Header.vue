<template>
    <div class="content-wrapper">
        <nav class="navbar navbar-expand-lg center-nav transparent navbar-light">
            <div class="container flex-lg-row flex-nowrap align-items-center">
                <div class="navbar-brand w-100">
                    <a href="/">
                        <img src="/img/logo_dark.png" srcset="/img/logo-dark@2x.png 2x" alt="">
                    </a>
                </div>
                <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                    <div class="offcanvas-header d-lg-none">
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Mobile Proxies</a>
                                <div class="dropdown-menu dropdown-lg">
                                    <div class="dropdown-lg-content">
                                        <div>
                                            <h6 class="dropdown-header">Dedicated 4G</h6>
                                            <ul class="list-unstyled">
                                                <li>
                                                    <router-link class="dropdown-item" to="/web/">🇨🇦 CA 4G Mobile proxies</router-link>
                                                </li>
                                                    
                                                <li>
                                                    <router-link class="dropdown-item" to="/web/">🇺🇸 US 4G Mobile proxies</router-link>
                                                </li>
                                                    
                                                <li>
                                                    <router-link class="dropdown-item" to="/web/">🇬🇧 UK 4G Mobile proxies</router-link>
                                                </li>
                                                    
                                                <li>
                                                    <router-link class="dropdown-item" to="/web/">🇩🇪 DE 4G Mobile proxies</router-link>
                                                </li>
                                                    
                                                <li>
                                                    <router-link class="dropdown-item" to="/web/">🇳🇿 NL 4G Mobile proxies</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- /.column -->
                                        <div>
                                            <h6 class="dropdown-header">Dedicated 5G</h6>
                                            <ul class="list-unstyled">
                                                <li>
                                                    <router-link class="dropdown-item" to="/web/">>🇺🇸 US 5G Mobile proxies</router-link>
                                                </li>
                                                <li>
                                                    <router-link class="dropdown-item" to="/web/">🇬🇧 UK 5G Mobile proxies</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <!-- <div>
                                            <h6 class="dropdown-header">Social Media</h6>
                                            <ul class="list-unstyled">
                                                <li><a class="dropdown-item" href="/social-media-proxies">🇬🇧 UK Social
                                                        Media</a></li>
                                            </ul>
                                        </div> -->
                                        <!-- /.column -->
                                    </div>
                                    <!-- /auto-column -->
                                </div>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="#">IPv4/IPv6</a></li>
                            <!-- <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/use-cases"
                                    data-bs-toggle="dropdown">Use cases</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a class="dropdown-item" href="/use-cases/social-media">Social
                                            media</a></li>
                                    <li class="nav-item"><a class="dropdown-item" href="/use-cases/data-scraping">Data
                                            Scraping</a></li>
                                    <li class="nav-item"><a class="dropdown-item" href="/use-cases/ad-verification">Ad
                                            Verification</a></li>
                                </ul>
                            </li> -->

                            <!-- <li class="nav-item"><a class="nav-link" href="/contact">Use Case</a></li> -->
                            <li class="nav-item">
                                <router-link class="nav-link" to="/web/documentation">Documentation</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/web/feedback">Feedback</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/web/contact">Contact</router-link>
                            </li>
                        </ul>
                        <!-- /.navbar-nav -->
                        <div class="d-lg-none mt-auto pt-6 pb-6 order-4">
                            <a href="mailto:hello@gridpanel.net" class="link-inverse">hello@gridpanel.net</a>
                            <!-- /.social -->
                        </div>
                        <!-- /offcanvas-nav-other -->
                    </div>
                    <!-- /.offcanvas-body -->
                </div>
                <!-- /.navbar-collapse -->
                <div class="navbar-other w-100 d-flex ms-auto">
                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                        <li class="nav-item d-none d-md-block">

                            <router-link class="btn btn-sm btn-primary rounded-pill"
                                to="/web/signup">Register</router-link>&nbsp;
                            <router-link class="btn btn-sm btn-secondary rounded-pill" to="/web/signin">Login</router-link>

                        </li>
                        <li class="nav-item d-lg-none">
                            <button class="hamburger offcanvas-nav-btn"><span></span></button>
                        </li>
                    </ul>
                    <!-- /.navbar-nav -->
                </div>
                <!-- /.navbar-other -->
            </div>
            <!-- /.container -->
        </nav>
</div></template>