<template>

<section class="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 my-bg">
<div class="container pt-md-15 pb-md-10 text-center">
<div class="row">
    <div class="col-lg-8 col-xl-7 col-xxl-8 mx-auto" data-cues="slideInDown" data-group="page-title" data-disabled="true">
    <h1 class="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0" data-cue="slideInDown" data-group="page-title" data-show="true" style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">Welcome to the World's Best Mobile Proxy Service Provider <span class="underline-3 style-2 yellow"></span></h1>
    <p class="lead fs-24 text-white lh-sm mb-7 mx-md-13 mx-lg-10" data-cue="slideInDown" data-group="page-title" data-show="true" style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 300ms; animation-direction: normal; animation-fill-mode: both;">Centered around our clients, we specialize in providing the highest quality, fastest, and cleanest 4GLTE and 5G mobile proxy services all around the United States and Canada.</p>
    <div data-cue="slideInDown" data-group="page-title" data-show="true" style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 600ms; animation-direction: normal; animation-fill-mode: both;">
        <!-- <a class="btn btn-white rounded mb-10 mb-xxl-5">Read More</a> -->
        <p class="lead fs-20 text-white lh-sm mb-7 mx-md-13 mx-lg-10"><strong>Rapid Expansion:</strong> We are continually expanding our mobile proxy deployment areas at a pace of every two weeks.</p>
    </div>
    </div>
    <!-- /column -->
</div>
<!-- /.row -->
</div>
<!-- /.container -->
<div class="overflow-hidden">
<div class="divider text-light mx-n2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
    <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z"></path>
    </svg>
</div>
</div>
</section>

    <!-- <section class="wrapper bg-soft-primary">
        <div class="container pt-10 pb-10 pt-md-14 text-center">
            <h1 class="display-3 mb-3">Welcome to the World's Best Mobile Proxy Service Provider</h1>
            <div class="col-sm-9 col-md-7 col-lg-7 mx-auto pb-5">
                <p class="lead mb-0 px-xl-10 px-xxl-13">Centered around our clients, we specialize in providing the highest quality, fastest, and cleanest 4GLTE and 5G mobile proxy services all around the United States and Canada.</p>
            </div>
            
            <p><strong>Rapid Expansion:</strong> We are continually expanding our mobile proxy deployment areas at a pace of every two weeks.</p>
        </div>
    </section> -->

    <section class="wrapper bg-light my-home">
        <div class="container py-12">
            <div class="row text-center pb-15">
                <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <h1 class="display-2 mb-3">Our Pricing</h1>
                    <p class="lead mb-0 px-xl-10 px-xxl-13 text-muted">We offer prices that fit your business perfectly. Make your
                        client site a success with our products.</p>
                </div>
            </div>

            <div class="row text-center">
                <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                    <h2 class="fs-20 text-uppercase mb-3">Countries/regions</h2>
                </div>
                <!-- /column -->
            </div>

            <div class="row text-center pt-5">
                <div class="col-12">
                    <div class="scrollbar-wraper">
                        <div class="scroll-arrow arrow-left" v-if="isShowArrow" @click="leftScroll">
                            <span class="iconfont">&#xe685;</span>
                        </div>
                        <div class="d-flex flex-row scrollbar-content" id="scrollbarContent"ref="scrollbarContent">
                            <!-- <el-scrollbar ref="scrollbar" style="height: 120px;">
                                
                            </el-scrollbar> -->
                            <ul class="nav nav-tabs nav-pills scrollbar-flex-content" id="pills-tab" role="tablist">
                                    <template v-for="(item, index) in productData" :key="item.product_code">
                                        <li class="nav-item scrollbar-demo-item" role="presentation">
                                            <button class="nav-link" @click="handleProductChange(item.product_code)" :class="{active: index == 0}" data-bs-toggle="pill"
                                                type="button" role="tab" aria-selected="false" :disabled="item.network_type === '5G'">{{ item.product_name }}</button>
                                        </li>
                                    </template>
                                    
                                    <!-- <li class="nav-item scrollbar-demo-item" role="presentation">
                                        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#tab-content2" type="button"
                                            role="tab" aria-selected="false">US 4G proxy</button>
                                    </li>
                                    <li class="nav-item scrollbar-demo-item" role="presentation">
                                        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#tab-content3" type="button"
                                            role="tab" aria-selected="false" disabled>CA 5G proxy</button>
                                    </li>
                                    <li class="nav-item scrollbar-demo-item" role="presentation">
                                        <button class="nav-link" data-bs-toggle="pill" data-bs-target="#tab-content4" type="button"
                                            role="tab" aria-selected="false" disabled>US 5G proxy</button>
                                    </li> -->
                                </ul>
                        </div>
                        <div class="scroll-arrow arrow-right" v-if="isShowArrow" @click="rightScroll">
                            <span class="iconfont">&#xe687;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="wrapper bg-light">
        <div class="container pb-14 pb-md-16">
            <div class="pricing-wrapper mb-md-15">
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="tab-content1" role="tabpanel" tabindex="0">
                        <div class="row gy-6 mt-3 mt-md-5">
                            <div v-for="item in infosData" class="col-md-6 col-lg-4" :key="item.id">
                                <div class="pricing card text-center">
                                    <div class="card-body">
                                        <template v-if="item.payment_plan == 'hour'">
                                            <span class="iconfont" style="font-size: 40px;">&#xe617;</span>
                                        </template>
                                        <template v-if="item.payment_plan == 'day'">
                                            <span class="iconfont" style="font-size: 40px;">&#xe6e6;</span>
                                        </template>
                                        <template v-else-if="item.payment_plan == 'week'">
                                            <span class="iconfont" style="font-size: 40px;">&#xe6a8;</span>
                                        </template>
                                        <template v-else-if="item.payment_plan == 'month'">
                                            <span class="iconfont" style="font-size: 40px;">&#xe69d;</span>
                                        </template>
                                        
                                        <h4 class="card-title">{{ item.product_name }}</h4>
                                        <div class="prices text-dark">
                                            <div class="price price-show"><span class="price-currency">$</span><span
                                                    class="price-value">{{ item.price }}</span> <span class="price-duration">{{ item.payment_plan }}</span>
                                            </div>
                                            <!-- <div class="price price-hide price-hidden"><span class="price-currency">$</span><span
                                            class="price-value">99</span> <span class="price-duration">yr</span></div> -->
                                        </div>
                                        <!--/.prices -->
                                        <ul class="icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start">
                                            <li v-for="(info, index) in item.plan_desc" :key="index"><i class="uil uil-check"></i><span>{{ info }}</span></li>
                                        </ul>
                                        <router-link :to="`/dashboard/order?product_id=${item.id}&product_code=${item.product_code}&product_name=${item.product_name}&payment_plan=${item.payment_plan}&product_desc=${item.product_desc}`" class="btn btn-primary rounded-pill">Choose Plan</router-link>
                                    </div>
                                    <!--/.card-body -->
                                </div>
                                <!--/.pricing -->
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="wrapper bg-light">
        <div class="container pb-14 pb-md-16">
            <div class="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-19">
                <div class="col-lg-4">
                    <div class="d-flex flex-row">
                        <div>
                            <div class="icon btn btn-circle pe-none btn-primary me-4"> <i class="uil uil-phone-volume"></i>
                            </div>
                        </div>
                        <div>
                            <h4>24/7 Support</h4>
                            <p class="mb-2">We ensure 24/7 availability of our customer support and technical staff to guarantee the continuous operation of your business. Should there be any issues, they will be resolved promptly.</p>
                            <a href="#" class="more hover">Learn More</a>
                        </div>
                    </div>
                </div>
                <!--/column -->
                <div class="col-lg-4">
                    <div class="d-flex flex-row">
                        <div>
                            <div class="icon btn btn-circle pe-none btn-primary me-4"> <i class="uil uil-laptop-cloud"></i>
                            </div>
                        </div>
                        <div>
                            <h4>Daily Updates</h4>
                            <p class="mb-2">We currently cover most major cities in the United States and Canada, and we commit to expanding our mobile device geolocation every two weeks to a month, which will continue to enlarge and refresh our pool of IP addresses.</p>
                            <a href="#" class="more hover">Learn More</a>
                        </div>
                    </div>
                </div>
                <!--/column -->
                <div class="col-lg-4">
                    <div class="d-flex flex-row">
                        <div>
                            <div class="icon btn btn-circle pe-none btn-primary me-4"> <i class="uil uil-chart-line"></i>
                            </div>
                        </div>
                        <div>
                            <h4>Market Research</h4>
                            <p class="mb-2">We timely supplement mobile devices in popular cities based on customer feedback, ensuring constant updates to maximize customer value and assist in rapid escalation of commercial scale.</p>
                            <a href="#" class="more hover">Learn More</a>
                        </div>
                    </div>
                </div>
                <!--/column -->
            </div>
        </div>
    </section>


    <section class="wrapper bg-light">
        <div class="container pb-14 pb-md-16">
            <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div class="col-md-8 col-lg-6 col-xl-5 order-lg-2 position-relative">
                    <div class="shape bg-soft-primary rounded-circle rellax w-20 h-20" data-rellax-speed="1"
                        style="top: -2rem; right: -1.9rem; transform: translate3d(0px, -14px, 0px);"></div>
                    <figure class="rounded"><img src="../../../assets/img/image.png" alt="">
                    </figure>
                </div>
                <!--/column -->
                <div class="col-lg-6">
                    <h2 class="display-4 mb-3">Who Are We?</h2>
                    <!-- <p class="lead fs-lg">We are a digital and branding company that believes in the power of creative
                        strategy and along with great design.</p> -->
                    
                    <p class="mb-4">Welcome to ProxyShop.io. As a network platform specializing in providing high-quality, fast, and secure 4GLTE and 5G mobile proxy services, we are dedicated to building a shield of protection for our global customers, ensuring online privacy and security, and helping our customers achieve tremendous business growth.</p>

                    <p class="mb-4">Our team consists of a group of technology enthusiasts, they have rich experience and professional skills in the field of network security and data analysis. Our aim is to use advanced intelligent technology to provide the most convenient and reliable proxy server solutions for global users.</p>

                    <p class="mb-4">At present, we offer mobile proxy services covering most major cities in the United States and Canada. We promise that all mobile proxies are provided by genuine 4GLTE and 5G devices, ensuring a high-speed and clean IP pool.</p>

                    <p class="mb-6">Thank you for choosing ProxyShop.io, we are always ready to serve you.</p>
                    <div class="row gx-xl-10 gy-6">
                        <div class="col-md-6">
                            <div class="d-flex flex-row">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                        data-inject-url="https://sandbox.elemisthemes.com/assets/img/icons/lineal/target.svg"
                                        class="svg-inject icon-svg icon-svg-sm me-4">
                                        <circle class="lineal-fill" cx="283.8" cy="283.8" r="143"></circle>
                                        <path class="lineal-stroke"
                                            d="M283.8 441.8c-87.1 0-158-70.9-158-158s70.9-158 158-158 158 70.9 158 158-70.9 158-158 158zm0-286.1c-70.7 0-128.1 57.3-128.1 128.1S213 411.9 283.8 411.9s128.1-57.3 128.1-128.1c-.1-70.7-57.4-128-128.1-128.1z">
                                        </path>
                                        <path class="lineal-fill"
                                            d="M283.8 210.5c40.5 0 73.3 32.8 73.3 73.3s-32.8 73.3-73.3 73.3-73.3-32.8-73.3-73.3">
                                        </path>
                                        <path class="lineal-stroke"
                                            d="M283.8 372.1c-48.7-.1-88.2-39.5-88.2-88.3.2-8.2 7.1-14.8 15.3-14.5 7.9.2 14.3 6.6 14.5 14.5 0 32.2 26.1 58.4 58.4 58.4s58.4-26.1 58.4-58.4-26.1-58.4-58.4-58.4c-8.2-.2-14.8-7.1-14.5-15.3.2-7.9 6.6-14.3 14.5-14.5 48.7-.5 88.7 38.6 89.2 87.3s-38.6 88.7-87.3 89.2h-1.9z">
                                        </path>
                                        <path class="lineal-fill" d="M107.9 55.1l-5.3 47.5-47.5 5.3-40.2-40.1 52.9-52.9z">
                                        </path>
                                        <path class="lineal-stroke"
                                            d="M283.8 55.7c-55.3 0-108.8 20.1-150.4 56.7l-15.2-15.2 4.5-40.4c.5-4.5-1.1-9-4.3-12.2L78.3 4.4c-5.8-5.8-15.3-5.8-21.1 0L4.4 57.2c-5.8 5.8-5.8 15.3 0 21.1l40.1 40.1c2.8 2.8 6.6 4.4 10.6 4.4.5 0 1.1 0 1.6-.1l40.4-4.5 15.2 15.2c-36.6 41.5-56.7 95-56.7 150.4C55.7 409.6 158 512 283.8 512c66.2 0 129.1-28.7 172.4-78.7 5.6-6.1 5.1-15.6-1-21.1s-15.6-5.1-21.1 1l-.5.5c-37.7 43.4-92.3 68.4-149.8 68.4-109.3 0-198.3-89-198.3-198.3 0-47.4 17-93.3 48-129.2l140.2 140.2c5.8 5.8 15.3 5.8 21.1 0s5.8-15.3 0-21.1L154.6 133.5c35.9-31 81.8-48 129.2-48 109.4 0 198.3 89 198.3 198.3 0 8.3 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9C512 158 409.6 55.7 283.8 55.7zM36.1 67.8l31.7-31.7 24.5 24.5-3.2 28.5-28.5 3.2-24.5-24.5z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="mb-1">Our Mission</h4>
                                    <p class="mb-0">Dapibus eu leo quam ornare curabitur blandit tempus.</p>
                                </div>
                            </div>
                        </div>
                        <!--/column -->
                        <div class="col-md-6">
                            <div class="d-flex flex-row">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 404.7"
                                        data-inject-url="https://sandbox.elemisthemes.com/assets/img/icons/lineal/award-2.svg"
                                        class="svg-inject icon-svg icon-svg-sm me-4">
                                        <path class="lineal-stroke"
                                            d="M90.8 404.7c-6.5 0-12.4-4-14.7-10.1L57.7 347 10 328.7c-8.1-3.1-12.2-12.2-9-20.4.8-2 2-3.9 3.5-5.5l93.6-93.6 97.3 97.3-93.6 93.6c-2.9 2.9-6.9 4.6-11 4.6zm-60.7-93.8l39.5 15.2c4.1 1.6 7.4 4.9 9 9l15.2 39.5 68.1-68.1-63.7-63.7-68.1 68.1zm288.7 93.8c-4.2 0-8.2-1.7-11.1-4.6l-20.8-20.8 16.8-16.8 12.1 12.1 15.2-39.5c1.6-4.1 4.9-7.4 9-9l39.4-15.2-76.4-76.5 16.8-16.8 85.2 85.2c6.1 6.1 6.1 16.1 0 22.3-1.6 1.6-3.4 2.8-5.5 3.6L351.9 347l-18.3 47.6c-1.9 5-6.2 8.7-11.4 9.8-1.1.2-2.2.3-3.4.3z">
                                        </path>
                                        <path class="lineal-fill"
                                            d="M347.3 224.1c5.1-15.7 31-28.9 31-46.3s-25.9-30.6-31-46.3c-5.3-16.3 7.8-42.2-2.1-55.7s-38.6-9.2-52.4-19.2-18-38.6-34.4-43.9C242.7 7.6 222.2 28 204.8 28s-37.9-20.4-53.6-15.3c-16.3 5.3-20.8 34-34.4 43.9s-42.4 5.5-52.4 19.2 3.2 39.4-2.1 55.7c-5.1 15.7-31.1 28.8-31.1 46.3s25.9 30.6 31 46.3c5.3 16.3-7.8 42.1 2.1 55.7S103 289 116.7 299s18.1 38.6 34.4 43.9c15.7 5.1 36.2-15.3 53.6-15.3s37.9 20.4 53.6 15.3c16.3-5.3 20.8-34 34.4-43.9s42.4-5.5 52.4-19.2-3.1-39.3 2.2-55.7zm-142.5 48.7c-52.5 0-95-42.5-95-95s42.5-95 95-95 95 42.5 95 95-42.5 95-95 95z">
                                        </path>
                                        <path class="lineal-stroke"
                                            d="M253 355.7c-10.1 0-19.6-4.6-28.8-9.1-7-3.4-14.3-7-19.4-7s-12.4 3.6-19.4 7c-9.2 4.5-18.7 9.1-28.8 9.1-3.1 0-6.2-.5-9.1-1.4-13.7-4.5-20.7-17.6-26.8-29.2-3.5-6.7-7.2-13.6-10.9-16.3s-11.6-4.2-19.2-5.5c-12.8-2.2-27.4-4.8-35.8-16.3s-6.3-26-4.5-38.8c1.1-7.6 2.2-15.6.7-20.2-1.4-4.2-6.7-9.8-11.9-15.1-9.2-9.5-19.7-20.2-19.7-34.9s10.5-25.4 19.7-34.9c5.2-5.3 10.6-10.8 12-15.1 1.5-4.7.4-12.6-.7-20.2C48.6 95 46.5 80.4 54.8 69s23-14.1 35.8-16.3c7.5-1.3 15.3-2.7 19.2-5.5s7.4-9.6 10.9-16.3c6.1-11.6 13.1-24.8 26.8-29.2 2.9-1 6-1.4 9.1-1.4 10.1 0 19.6 4.6 28.8 9.1 7 3.4 14.3 7 19.4 7s12.4-3.6 19.4-7C233.4 4.6 243 0 253 0c3.1 0 6.2.5 9.1 1.4 13.7 4.5 20.7 17.6 26.8 29.2 3.5 6.7 7.2 13.6 10.9 16.3s11.6 4.2 19.2 5.5c12.9 2.2 27.4 4.8 35.8 16.3s6.3 26 4.5 38.8c-1.1 7.6-2.2 15.6-.7 20.2 1.4 4.2 6.7 9.8 11.9 15.1 9.2 9.5 19.7 20.2 19.7 34.9s-10.5 25.4-19.7 34.9c-5.2 5.3-10.6 10.9-11.9 15.1-1.5 4.7-.4 12.6.7 20.2 1.8 12.9 3.9 27.4-4.5 38.8s-23 14.1-35.8 16.3c-7.5 1.3-15.3 2.7-19.2 5.5s-7.4 9.6-10.9 16.3c-6.1 11.6-13.1 24.8-26.8 29.2-2.9 1.2-6 1.7-9.1 1.7zm-48.2-39.9c10.6 0 20.4 4.8 29.8 9.4 6.8 3.3 13.8 6.7 18.4 6.7.6 0 1.2-.1 1.7-.2 4.5-1.5 9.1-10.1 13.1-17.8 4.8-9.1 9.8-18.5 18-24.5s18.9-7.9 29.1-9.7c8.4-1.5 18-3.1 20.7-6.9s1.3-13.2.1-21.6c-1.4-10.3-2.9-21 .3-30.8 3.1-9.5 10.4-17 17.5-24.3 6.1-6.2 13-13.3 13-18.3s-6.9-12.1-13-18.3c-7.1-7.3-14.4-14.8-17.5-24.3-3.2-9.9-1.7-20.5-.3-30.8 1.2-8.4 2.5-17.9-.1-21.6s-12.3-5.4-20.7-6.9c-10.2-1.8-20.8-3.6-29.1-9.7s-13.2-15.4-18-24.5c-4-7.6-8.6-16.3-13.1-17.8-.6-.2-1.2-.3-1.8-.2-4.6 0-11.6 3.4-18.4 6.7-9.5 4.6-19.3 9.4-29.8 9.4s-20.4-4.8-29.8-9.4c-6.8-3.3-13.8-6.7-18.4-6.7-.6 0-1.2.1-1.8.2-4.5 1.5-9.1 10.1-13.1 17.8-4.8 9.1-9.8 18.5-18 24.5s-18.9 7.9-29.1 9.7c-8.4 1.5-18 3.2-20.7 6.9s-1.3 13.2-.1 21.6c1.4 10.3 2.9 21-.3 30.8-3.1 9.5-10.4 17-17.5 24.3-6 6.2-12.9 13.3-12.9 18.3s6.9 12.1 13 18.3c7.1 7.3 14.4 14.8 17.5 24.3 3.2 9.9 1.7 20.5.3 30.8-1.2 8.4-2.5 17.9.1 21.6s12.3 5.4 20.7 6.9c10.2 1.8 20.8 3.6 29.1 9.7s13.2 15.4 18 24.5c4 7.6 8.6 16.3 13.1 17.7.6.2 1.2.3 1.8.2 4.6 0 11.6-3.4 18.4-6.7 9.5-4.6 19.3-9.3 29.8-9.3z">
                                        </path>
                                        <path class="lineal-stroke"
                                            d="M204.8 284.7c-59 0-106.9-47.9-106.9-106.9 0-59 47.9-106.9 106.9-106.9 59 0 106.9 47.8 106.9 106.8v.1c-.1 59-47.9 106.9-106.9 106.9zm0-190c-45.9 0-83.2 37.2-83.2 83.1 0 45.9 37.2 83.2 83.1 83.2 45.9 0 83.2-37.2 83.2-83.1 0-25.8-12-50.1-32.4-65.9-14.4-11.2-32.3-17.3-50.7-17.3z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="mb-1">Our Values</h4>
                                    <p class="mb-0">Aenean lacinia bibendum nulla sed consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <!--/column -->
                    </div>
                    <!--/.row -->
                </div>
            </div>
        </div>
    </section>

    <section class="wrapper bg-light">
        <div class="container pb-14 pb-md-16">
            <div class="row">
                <div class="col-lg-4">
                    <h2 class="fs-15 text-uppercase text-primary mb-3">Company Facts</h2>
                    <h3 class="display-4 pe-xl-15">We are proud of our works</h3>
                </div>
                <!-- /column -->
                <div class="col-lg-8">
                    <div class="row align-items-center counter-wrapper gy-6 text-center">
                        <div class="col-md-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 409.6"
                                data-inject-url="https://sandbox.elemisthemes.com/assets/img/icons/lineal/check.svg"
                                class="svg-inject icon-svg icon-svg-lg text-primary mb-3">
                                <path class="lineal-stroke"
                                    d="M204.8 409.6C91.9 409.6 0 317.7 0 204.8c0-49.9 18.2-98.1 51.2-135.5 4.4-5 12-5.5 17-1.1s5.5 12 1.1 17c-29.1 33-45.2 75.5-45.2 119.5 0 99.6 81.1 180.7 180.7 180.7s180.7-81.1 180.7-180.7S304.4 24.1 204.8 24.1c-27.3-.1-54.2 6.1-78.7 18-6 2.9-13.2.4-16.1-5.6-2.9-6-.4-13.2 5.6-16.1C143.4 6.9 173.9-.1 204.8 0c112.9 0 204.8 91.9 204.8 204.8s-91.9 204.8-204.8 204.8z">
                                </path>
                                <path class="lineal-fill"
                                    d="M349.4 204.8c0 79.8-64.7 144.6-144.6 144.6S60.2 284.6 60.2 204.8 125 60.2 204.8 60.2 349.4 125 349.4 204.8z">
                                </path>
                                <path class="lineal-stroke"
                                    d="M204.8 361.4c-86.4 0-156.6-70.2-156.6-156.6S118.4 48.2 204.8 48.2s156.6 70.2 156.6 156.6-70.2 156.6-156.6 156.6zm0-289.1c-73.1 0-132.5 59.4-132.5 132.5s59.4 132.5 132.5 132.5 132.5-59.5 132.5-132.5S277.9 72.3 204.8 72.3z">
                                </path>
                                <path class="lineal-stroke"
                                    d="M200.9 246.7c-8.8 0-17.2-3.5-23.5-9.7L145 204.5c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0l32.5 32.5c3.6 3.5 9.3 3.5 12.8 0l49.8-49.9c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17L224.4 237c-6.2 6.2-14.7 9.7-23.5 9.7z">
                                </path>
                            </svg>
                            <h3 class="counter" style="visibility: visible;">3619</h3>
                            <p class="mb-0">Completed Projects</p>
                        </div>
                        <!--/column -->
                        <div class="col-md-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 441.4 512"
                                data-inject-url="https://sandbox.elemisthemes.com/assets/img/icons/lineal/user.svg"
                                class="svg-inject icon-svg icon-svg-lg text-primary mb-3">
                                <path class="lineal-fill"
                                    d="M254.9 457c-14.9-8.1-24.1-23.7-24.1-40.6V285.6c26.5 11.1 57.1 4.9 77.1-15.6-19-26.2-49.3-41.6-81.6-41.6H115.7c-55.7 0-100.9 45.2-100.9 100.9v167.9h312.4v-.8L254.9 457z">
                                </path>
                                <path class="lineal-stroke"
                                    d="M426.6 270.8c-8.2 0-14.8 6.6-14.9 14.8v130.7c0 11.5-6.3 22.1-16.4 27.6l-66.7 36.3-66.6-36.3c-10.1-5.5-16.4-16.1-16.4-27.6V305c4.1.6 8.2.9 12.3.9 1.3 0 2.5 0 3.8-.1h1c1.1-.1 2.2-.1 3.4-.2l1.6-.2 1.6-.2c15-2 29.3-8 41.1-17.5l1.1-.9 1.3-1.1c.9-.7 1.7-1.5 2.5-2.2l.4-.4c1-.9 1.9-1.8 2.8-2.7 3.8-3.9 7.2-8.1 10.1-12.6 7.2 10.9 16.8 19.9 28 26.5 7.1 4.1 16.2 1.8 20.3-5.3 4.1-7.1 1.8-16.2-5.3-20.3-10-5.9-17.9-14.8-22.6-25.5-2.4-5.4-7.7-8.8-13.6-8.9h-13.5c-5.9 0-11.2 3.5-13.6 8.9-.5 1-.9 2-1.4 3-12.8-12.4-28.4-21.7-45.4-27.2 17.4-16.5 27.2-39.4 27.2-63.3V87.5c-.2-8.2-7-14.7-15.2-14.5-7.9.2-14.3 6.6-14.5 14.5v68.3c0 31.6-25.5 57.4-57.1 57.8h-62c-31.6-.5-57-26.2-57-57.8V87.5c0-31.9 25.9-57.8 57.8-57.8h60.5c8.2-.2 14.7-7 14.5-15.2-.2-7.9-6.6-14.3-14.5-14.5h-60.5C92.5.1 53.3 39.2 53.3 87.5v68.3c0 23.9 9.8 46.8 27.2 63.3C32.6 234.5.1 279 0 329.3v167.9c0 8.2 6.6 14.8 14.8 14.8h313.9c2.5 0 4.9-.6 7.1-1.8l73.8-40.2c19.6-10.7 31.9-31.3 31.9-53.6V285.6c-.1-8.2-6.7-14.8-14.9-14.8zM29.7 482.3v-153c.1-47.5 38.5-85.9 86-86h40.4v144.1c0 8.2 6.6 14.8 14.8 14.8s14.8-6.6 14.8-14.8V243.3h40.4c22.6 0 44.3 9 60.4 24.8-6.3 3.9-13.3 6.4-20.6 7.5h.1c-1.1.2-2.3.3-3.5.4l-.6.1c-1.2.1-2.5.1-3.7.1h-.2c-7.3 0-14.6-1.4-21.4-4.3-7.5-3.2-16.3.3-19.4 7.9-.8 1.8-1.2 3.8-1.2 5.8v130.7c0 22.4 12.2 42.9 31.8 53.7l22.6 12.3H29.7z">
                                </path>
                                <path class="lineal-stroke"
                                    d="M327.2 405.9c-2.5 0-5-.6-7.2-1.9l-24.9-13.9c-7.2-4-9.7-13-5.7-20.2s13-9.7 20.2-5.7l15.7 8.7 34.1-30.1c6.1-5.4 15.5-4.9 21 1.3 5.4 6.1 4.9 15.5-1.3 21l-42 37.1c-2.8 2.4-6.3 3.7-9.9 3.7z">
                                </path>
                            </svg>
                            <h3 class="counter" style="visibility: visible;">1762</h3>
                            <p class="mb-0">Happy Customers</p>
                        </div>
                        <!--/column -->
                        <div class="col-md-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 380.8"
                                data-inject-url="https://sandbox.elemisthemes.com/assets/img/icons/lineal/briefcase-2.svg"
                                class="svg-inject icon-svg icon-svg-lg text-primary mb-3">
                                <path class="lineal-stroke"
                                    d="M299.9 104.7h-23.8V56.5c0-18.1-14.6-32.7-32.7-32.7h-77.2c-18 0-32.7 14.7-32.7 32.7v48.2h-23.8V56.5C109.8 25.3 135 0 166.2 0h77.2c31.2 0 56.4 25.3 56.5 56.5v48.2z">
                                </path>
                                <path class="lineal-stroke"
                                    d="M360.5 380.8H49.1c-27.1 0-49-22-49.1-49.1V119.1C0 92 22 70 49.1 70h311.5c27.1 0 49 22 49.1 49.1v212.7c-.1 27.1-22.1 49-49.2 49zM49.1 93.8c-14 0-25.3 11.3-25.3 25.3v212.7c0 14 11.3 25.3 25.3 25.3h311.5c14 0 25.3-11.3 25.3-25.3V119.1c0-14-11.3-25.3-25.3-25.3H49.1z">
                                </path>
                                <path class="lineal-fill"
                                    d="M49.2 81.7c-18.4 0-33.3 14.8-33.3 33.2 0 2.7.3 5.3.9 7.9C35.4 197.9 103.6 254 184.2 254h41.2c80.6 0 148.8-56.1 167.3-131.2 4.3-17.8-6.6-35.8-24.5-40.2-2.6-.6-5.2-.9-7.9-.9H49.2z">
                                </path>
                                <path class="lineal-stroke"
                                    d="M225.4 265.9h-41.2c-41.5-.1-81.8-14.2-114.3-40C38 200.5 15.3 165.2 5.4 125.6-.5 101.4 14.3 77 38.6 71.1c3.5-.9 7.1-1.3 10.7-1.3h311.1c24.9 0 45.2 20.2 45.2 45.1 0 3.6-.4 7.2-1.3 10.7-9.9 39.6-32.6 74.8-64.5 100.2-32.6 25.9-72.9 40-114.4 40.1zM49.2 93.6c-6.6 0-12.9 3-16.9 8.2-4.1 5.1-5.5 11.8-3.9 18.2 17.6 71.8 81.9 122.3 155.8 122.2h41.2c73.9.1 138.3-50.4 155.8-122.2 1.6-6.3.1-13-3.9-18.1-4.1-5.2-10.3-8.3-16.9-8.2l-311.2-.1z">
                                </path>
                                <path class="lineal-fill"
                                    d="M128.5 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z">
                                </path>
                                <path class="lineal-stroke"
                                    d="M128.5 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z">
                                </path>
                                <path class="lineal-fill"
                                    d="M294.9 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z">
                                </path>
                                <path class="lineal-stroke"
                                    d="M294.9 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z">
                                </path>
                            </svg>
                            <h3 class="counter" style="visibility: visible;">50+</h3>
                            <p class="mb-0">Expert Employees</p>
                        </div>
                        <!--/column -->
                    </div>
                    <!--/.row -->
                </div>
                <!-- /column -->
            </div>
        </div>
    </section>

    <section class="wrapper bg-light">
        <div class="container pb-14 pb-md-16">
            <h2 class="display-4 mb-3 text-center">Pricing FAQ</h2>
            <p class="lead text-center mb-10 px-md-16 px-lg-0">If you don't see an answer to your question, you can send us
                an email from our contact form.</p>
            <div class="row mb-14 mb-md-18">
                <div class="col-lg-6 mb-0">
                    <div id="accordion-1" class="accordion-wrapper">
                        <div class="card accordion-item">
                            <div class="card-header" id="accordion-heading-1-1">
                                <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-1"
                                    aria-expanded="false" aria-controls="accordion-collapse-1-1">Do the IPs rotate?</button>
                            </div>
                            <!-- /.card-header -->
                            <div id="accordion-collapse-1-1" class="collapse" aria-labelledby="accordion-heading-1-1"
                                data-bs-target="#accordion-1">
                                <div class="card-body">
                                    <p>Our proxies automatically rotate their IP on your schedule. This can be changed on a
                                        per-order basis including on-demand rotation via our API.</p>
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.collapse -->
                        </div>
                        <!-- /.card -->
                        <div class="card accordion-item">
                            <div class="card-header" id="accordion-heading-1-2">
                                <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-2"
                                    aria-expanded="false" aria-controls="accordion-collapse-1-2">Where are the proxies
                                    located?</button>
                            </div>
                            <!-- /.card-header -->
                            <div id="accordion-collapse-1-2" class="collapse" aria-labelledby="accordion-heading-1-2"
                                data-bs-target="#accordion-1">
                                <div class="card-body">
                                    <p>Our proxies are distributed across each country in various cities for maximum
                                        reliability and redundancy.</p>
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.collapse -->
                        </div>
                        <!-- /.card -->
                        <div class="card accordion-item">
                            <div class="card-header" id="accordion-heading-1-3">
                                <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-3"
                                    aria-expanded="false" aria-controls="accordion-collapse-1-3">Can I get a
                                    refund?</button>
                            </div>
                            <!-- /.card-header -->
                            <div id="accordion-collapse-1-3" class="collapse" aria-labelledby="accordion-heading-1-3"
                                data-bs-target="#accordion-1">
                                <div class="card-body">
                                    <p>If your proxies do not work as advertised and we cannot resolve your issues within 24
                                        hours we will provide you with a refund.</p>
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.collapse -->
                        </div>
                        <!-- /.card -->
                        <div class="card accordion-item">
                            <div class="card-header" id="accordion-heading-1-4">
                                <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-4"
                                    aria-expanded="false" aria-controls="accordion-collapse-1-4">How long will it take to
                                    receive delivery of my proxy?</button>
                            </div>
                            <!-- /.card-header -->
                            <div id="accordion-collapse-1-4" class="collapse" aria-labelledby="accordion-heading-1-4"
                                data-bs-target="#accordion-1">
                                <div class="card-body">
                                    <p>We only allow orders for proxies that are in stock, so your delivery would be in a
                                        matter of minutes.
                                        In times of high demand when stock runs low very quickly, it may take up to 24 - 48
                                        business hours to fulfil your order.</p>
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.collapse -->
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.accordion-wrapper -->
                </div>
                <!--/column -->
                <div class="col-lg-6">
                    <div id="accordion-2" class="accordion-wrapper">
                        <div class="card accordion-item">
                            <div class="card-header" id="accordion-heading-2-1">
                                <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-1"
                                    aria-expanded="false" aria-controls="accordion-collapse-2-1">What authentication methods
                                    are available?</button>
                            </div>
                            <!-- /.card-header -->
                            <div id="accordion-collapse-2-1" class="collapse" aria-labelledby="accordion-heading-2-1"
                                data-bs-target="#accordion-2">
                                <div class="card-body">
                                    <p>Our proxies support authentication through either username/password or an IP
                                        whitelist.</p>
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.collapse -->
                        </div>
                        <!-- /.card -->
                        <div class="card accordion-item">
                            <div class="card-header" id="accordion-heading-2-2">
                                <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-2"
                                    aria-expanded="false" aria-controls="accordion-collapse-2-2">Are any websites blocked or
                                    inaccessible? Can I create accounts on services?</button>
                            </div>
                            <!-- /.card-header -->
                            <div id="accordion-collapse-2-2" class="collapse" aria-labelledby="accordion-heading-2-2"
                                data-bs-target="#accordion-2">
                                <div class="card-body">
                                    <p>You can use these proxies like a real phone - you can create accounts on any service
                                        (e.g. Facebook, Twitter, etc.), scrape content, or do anything else that is legal.
                                        We do not blacklist any websites.</p>
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.collapse -->
                        </div>
                        <!-- /.card -->
                        <div class="card accordion-item">
                            <div class="card-header" id="accordion-heading-2-3">
                                <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-3"
                                    aria-expanded="false" aria-controls="accordion-collapse-2-3">Do you offer both HTTP and
                                    SOCKS5 proxy?</button>
                            </div>
                            <!-- /.card-header -->
                            <div id="accordion-collapse-2-3" class="collapse" aria-labelledby="accordion-heading-2-3"
                                data-bs-target="#accordion-2">
                                <div class="card-body">
                                    <p>Yes, you can switch your proxy type between HTTP and SOCKS5 via your dashboard.</p>
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.collapse -->
                        </div>
                        <!-- /.card -->
                        <div class="card accordion-item">
                            <div class="card-header" id="accordion-heading-2-4">
                                <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-2-4"
                                    aria-expanded="false" aria-controls="accordion-collapse-2-4">What payment method do you
                                    accept?</button>
                            </div>
                            <!-- /.card-header -->
                            <div id="accordion-collapse-2-4" class="collapse" aria-labelledby="accordion-heading-2-4"
                                data-bs-target="#accordion-2">
                                <div class="card-body">
                                    <p>The official payment methods we accept are credit cards, debit cards, and cryptocurrencies such as USDC, USDT, etc. As for other payments, please let us know how many proxies you want to purchase so we can tell you if we can consider other payments. Should you have further questions, you may reach out to us as we are available 24/7 through our contact information.<br />
                                        Telegram: <a target="_blank" href="https://t.me/tunaproxysupport">@tunaproxy</a><br />
                                        Skype: 012135647265<br />
                                        Sales Email: Sales@proxyshop.io<br />
                                        Support Email: support@proxyshop.io</p>
                                </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.collapse -->
                    </div>
                    <!-- /.card -->
                </div>
                <!-- /.accordion-wrapper -->
            </div>
            <!--/column -->
        </div>
    </div>
</section></template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import { productList, productInfosList } from "@/api/front/product.js"


const scrollbar = ref(null);
const scrollX = ref(0);
const isShowArrow = ref(false);

const productData = ref();
const infosData = ref();

const getProductList = async () => {
    const res = await productList();
    if(res) {
        productData.value = res;
        getProductInfosList(res[0].product_code);
        nextTick(() => {
            const scrollbarContent = document.querySelector('#scrollbarContent');
            const pillsTab = document.querySelector('#pills-tab');
            if(pillsTab?.scrollWidth > scrollbarContent?.clientWidth) {
                isShowArrow.value = true;
            }
        })
    }
}

const getProductInfosList = async (product_code: any) => {
    let params = {
        product_code,
        code_country: '',
        network_type: '',
        payment_plan: ''
    };
    const res = await productInfosList(params);
    if(res) {
        infosData.value = res;
    }
}

const handleProductChange = (product_code: string) => {
    getProductInfosList(product_code);
}

getProductList();

const leftScroll = () => {
    const pillsTab = document.querySelector('#pills-tab');
    if(scrollX.value == 0) return;
    scrollX.value = scrollX.value - 202;
    pillsTab.style.transform = `translateX(-${scrollX.value}px)`
}
const rightScroll = () => {
    const scrollbarContent = document.querySelector('#scrollbarContent');
    const pillsTab = document.querySelector('#pills-tab');
    if(scrollX.value >= (pillsTab?.scrollWidth - (scrollbarContent?.clientWidth + scrollX.value))) return;
    scrollX.value = scrollX.value + 202;
    pillsTab.style.transform = `translateX(-${scrollX.value}px)`
}

</script>

<style lang="less">
.my-bg {
    background-image: url('../../../assets/img/bg16.png');
}
.my-home {
    background: url(../../../assets/img/blurry.png) no-repeat;
    background-size: 90% 70%;
    background-position: center 150px;
}
.card-body {
    .iconfont {
        color: #a07cc5;
        font-size: 40px;
    }
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    background-color: #a07cc5;
    color: #fff;
}
.scrollbar-flex-content {
    display: flex !important;
    flex-wrap: nowrap !important;
    transition: all 0.5s;
    padding: 10px;
    .scrollbar-demo-item {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 202px;
        // height: 50px;
        // margin: 10px;
        button {
            width: 100%;
            justify-content: center;
        }
        }
}

.scrollbar-wraper {
    display: flex;
    box-sizing: border-box;
    margin: 0 30px;
    flex: 1;
    // overflow: hidden;
    align-items: center;
    position: relative;
    .scrollbar-content {
        flex: 1;
        overflow: hidden;
    }
    .scroll-arrow {
        position: absolute;
        z-index: 99;
        cursor: pointer;
        .iconfont {
            font-size: 30px;
        }
    }
    .arrow-left {
        left: -30px;
    }
    .arrow-right {
        right: -30px;
    }
}
</style>