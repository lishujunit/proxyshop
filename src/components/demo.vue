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
                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Proxies</a>
                                <div class="dropdown-menu dropdown-lg">
                                    <div class="dropdown-lg-content">
                                        <div>
                                            <h6 class="dropdown-header">Dedicated 4G</h6>
                                            <ul class="list-unstyled">
                                                <li><a class="dropdown-item" href="/4g-uk-mobile-proxies">🇬🇧 UK 4G
                                                        Proxies</a></li>
                                                <li><a class="dropdown-item" href="/4g-usa-mobile-proxies">🇺🇸 USA 4G
                                                        Proxies</a></li>
                                                <li><a class="dropdown-item" href="/4g-de-mobile-proxies">🇩🇪 DE 4G
                                                        Proxies</a></li>
                                                <li><a class="dropdown-item" href="/4g-nl-mobile-proxies">🇳🇱 NL 4G
                                                        Proxies</a></li>
                                            </ul>
                                        </div>
                                        <!-- /.column -->
                                        <div>
                                            <h6 class="dropdown-header">Dedicated 5G</h6>
                                            <ul class="list-unstyled">
                                                <li><a class="dropdown-item" href="/5g-uk-mobile-proxies">🇬🇧 UK 5G
                                                        Proxies</a></li>
                                                <li><a class="dropdown-item" href="/5g-usa-mobile-proxies">🇺🇸 USA 5G
                                                        Proxies</a></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h6 class="dropdown-header">Social Media</h6>
                                            <ul class="list-unstyled">
                                                <li><a class="dropdown-item" href="/social-media-proxies">🇬🇧 UK Social
                                                        Media</a></li>
                                            </ul>
                                        </div>
                                        <!-- /.column -->
                                    </div>
                                    <!-- /auto-column -->
                                </div>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="/scraping-api">Scraping API</a></li>
                            <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="/use-cases"
                                    data-bs-toggle="dropdown">Use cases</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a class="dropdown-item" href="/use-cases/social-media">Social
                                            media</a></li>
                                    <!-- <li class="nav-item"><a class="dropdown-item" href="/use-cases/seo-monitoring">SEO Monitoring</a></li> -->
                                    <li class="nav-item"><a class="dropdown-item" href="/use-cases/data-scraping">Data
                                            Scraping</a></li>
                                    <li class="nav-item"><a class="dropdown-item" href="/use-cases/ad-verification">Ad
                                            Verification</a></li>
                                    <!-- <li class="nav-item"><a class="dropdown-item" href="/use-cases/increased-privacy">Increased Privacy</a></li> -->
                                    <li class="nav-item"><a class="dropdown-item" href="/use-cases/website-testing">Website
                                            Testing</a></li>
                                    <!-- <li class="nav-item"><a class="dropdown-item" href="/use-cases/price-comparison">Price Comparison</a></li> -->
                                    <!-- <li class="nav-item"><a class="dropdown-item" href="/use-cases/search-engine-crawling">Search Engine Crawling</a></li> -->
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="/documentation">Documentation</a></li>
                            <li class="nav-item"><a class="nav-link" href="/blog">Blog</a></li>
                            <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
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

        <section class="wrapper bg-light">
            <div class="container-card">
                <div class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 mt-2 mb-5"
                    data-image-src="/img/photos/bg22.png"
                    style="background-image: url(&quot;/img/photos/bg22.png&quot;);">
                    <div class="card-body py-14 px-0">
                        <div class="container">
                            <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center text-center text-lg-start">
                                <div class="col-lg-6" data-cues="slideInDown" data-group="page-title" data-delay="900"
                                    data-disabled="true">
                                    <h1 class="display-2 mb-4 me-xl-5 me-xxl-0" data-cue="slideInDown"
                                        data-group="page-title" data-delay="900" data-show="true"
                                        style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 900ms; animation-direction: normal; animation-fill-mode: both;">
                                        The <span class="text-gradient gradient-1">simplest</span> web
                                        scraping solution</h1>
                                    <p class="lead fs-23 lh-sm mb-7 pe-xxl-15" data-cue="slideInDown"
                                        data-group="page-title" data-delay="900" data-show="true"
                                        style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 1200ms; animation-direction: normal; animation-fill-mode: both;">
                                        Join our grid and see the web from the eyes of real users,
                                        using real device IPs from across the world</p>
                                    <div data-cue="slideInDown" data-group="page-title" data-delay="900" data-show="true"
                                        style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 1500ms; animation-direction: normal; animation-fill-mode: both;">
                                        <a href="/register" class="btn btn-lg btn-gradient gradient-1 rounded">Try GridPanel
                                            for free</a>
                                    </div>
                                </div>
                                <!--/column -->
                                <div class="col-lg-6">
                                    <img class="img-fluid mb-n18" src="/img/illustrations/3d6.png"
                                        srcset="/img/illustrations/3d6@2x.png 2x" data-cue="fadeIn"
                                        data-delay="300" alt="" data-show="true"
                                    style="animation-name: fadeIn; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 300ms; animation-direction: normal; animation-fill-mode: both;">
                            </div>
                            <!--/column -->
                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- /.container -->
                </div>
                <!--/.card-body -->
            </div>
            <!--/.card -->
        </div>
        <!-- /.container-card -->
    </section>
</div></template>





<template>
    <div class="content-wrapper">
    <header class="wrapper bg-soft-primary">
        <!-- navbar-ligh  navbar-dark -->
        <nav class="navbar navbar-expand-lg center-logo transparent position-absolute">
          <div class="container justify-content-between align-items-center">
            <div class="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none">
              <div class="navbar-brand"><a href="./index.html">
                  <img class="logo-dark" src="/img/logo_dark.png" srcset="/img/logo_dark.png 2x" alt="" />
                  <img class="logo-light" src="/img/logo_light.png" srcset="/img/logo_light.png 2x" alt="" />
                </a></div>
                <div class="navbar-other ms-auto">
                  <ul class="navbar-nav flex-row align-items-center">
                    <li class="nav-item d-lg-none">
                      <button class="hamburger offcanvas-nav-btn"><span></span></button>
                    </li>
                  </ul>
                </div>
            </div>
            <!-- /.d-flex -->
            <div class="navbar-collapse-wrapper d-flex flex-row align-items-center w-100">
              <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                <div class="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-15">
                  <a href="./index.html" class="transition-none d-none d-lg-flex"><img class="logo-dark" src="/img/logo_dark.png" srcset="/img/logo_dark.png 2x" alt="" />
                    <img class="logo-light" src="/img/logo_light.png" srcset="/img/logo_light.png 2x" alt="" /></a>
                  <h3 class="text-white fs-30 mb-0 d-lg-none">Tunaproxy</h3>
                  <button type="button" class="btn-close btn-close-white d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
                  <ul class="navbar-nav ms-lg-auto">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Mobile Proxies</a>
                      <div class="dropdown-menu dropdown-lg">
                        <div class="dropdown-lg-content">
                          <div>
                            <h6 class="dropdown-header">Dedicated 4G</h6>
                            <ul class="list-unstyled">
                              <li><a class="dropdown-item" href="/pages/pricing">🇬🇧 UK 4G Proxies</a></li>
                              <li><a class="dropdown-item" href="/pages/pricing">🇺🇸 USA 4G Proxies</a></li>
                              <li><a class="dropdown-item" href="/pages/pricing">🇩🇪 DE 4G Proxies</a></li>
                              <li><a class="dropdown-item" href="/pages/pricing">🇳🇱 NL 4G Proxies</a></li>
                              <li><a class="dropdown-item" href="/pages/pricing">🇨🇦 CA 4G Proxies</a></li>
                            </ul>
                          </div>
                          <!-- /.column -->
                          <div>
                            <h6 class="dropdown-header">Dedicated 5G</h6>
                            <ul class="list-unstyled">
                              <li><a class="dropdown-item" href="#">🇬🇧 UK 5G Proxies</a></li>
                              <li><a class="dropdown-item" href="#">🇺🇸 USA 5G Proxies</a></li>
                            </ul>
                          </div>
                          <div>
                            <h6 class="dropdown-header">Social Media</h6>
                            <ul class="list-unstyled">
                              <li><a class="dropdown-item" href="#">🇬🇧 UK Social Media</a></li>
                            </ul>
                          </div>
                          <!-- /.column -->
                        </div>                      <!-- /auto-column -->
                      </div>
                    </li>

                    <li class="nav-item ">
                      <a class="nav-link " href="#">IPv4/IPv6</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Use Case</a>
                      <ul class="dropdown-menu">
                        <li class="nav-item"><a class="dropdown-item" href="./blog.html">Social Media Marketing</a></li>
                        <li class="nav-item"><a class="dropdown-item" href="./blog2.html">Data Crawling</a></li>
                        <li class="nav-item"><a class="dropdown-item" href="./blog3.html">Ad Verification</a></li>
                        <li class="nav-item"><a class="dropdown-item" href="./blog3.html">Targeted Marketing</a></li>
                      </ul>
                    </li>
                  </ul>
                  <!-- /.navbar-nav -->
                </div>
                <div class="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
                  <ul class="navbar-nav me-lg-auto">
                    <li class="nav-item ">
                      <a class="nav-link " href="#">Documentation</a>
                    </li>
                    <li class="nav-item ">
                      <a class="nav-link " href="#" >Feedback</a>
                      <!--/.dropdown-menu -->
                    </li>
                    <li class="nav-item ">
                      <a class="nav-link" href="#" >Contact</a>
                      <!--/.dropdown-menu -->
                    </li>
                  </ul>
                  <!-- /.navbar-nav -->
                </div>
                <div class="offcanvas-body d-lg-none order-4 mt-auto">
                  <div class="offcanvas-footer">
                    <div>
                      <a href="mailto:first.last@email.com" class="link-inverse">info@email.com</a>
                      <br /> 00 (123) 456 78 90 <br />
                      <nav class="nav social social-white mt-4">
                        <a href="#"><i class="uil uil-twitter"></i></a>
                        <a href="#"><i class="uil uil-facebook-f"></i></a>
                        <a href="#"><i class="uil uil-dribbble"></i></a>
                        <a href="#"><i class="uil uil-instagram"></i></a>
                        <a href="#"><i class="uil uil-youtube"></i></a>
                      </nav>
                      <!-- /.social -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.navbar-collapse -->
            </div>
            <!-- /.navbar-collapse-wrapper -->
          </div>
          <!-- /.container -->
        </nav>
        <!-- /.navbar -->
      </header>
    </div>
</template>