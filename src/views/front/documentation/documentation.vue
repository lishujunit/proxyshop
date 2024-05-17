<template>
    <section class="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white bg-img">
        <div class="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h1 class="display-1 mb-3 text-white">Documentation</h1>
                    <nav class="d-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb text-white">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">documentation</li>
                        </ol>
                    </nav>
                    <!-- /nav -->
                </div>
                <!-- /column -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </section>

    <section class="wrapper bg-light angled upper-end">
        <div class="container pb-11 floating-wraper">
            <div class="floating-sidebar-container">
                <nav class="floating-sidebar inactive" data-js-floating-sidebar="" style="position: relative; top: 0px;">
                    <ul class="sections">
                        <li data-js-floating-sidebar-sectionid="h-what-is-a-mobile-proxy" class="onIt active">
                            <div class="section">
                                <div class="left">
                                    <div class="dot"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="9" fill="#ffffff" stroke="#101050" stroke-width="2">
                                            </circle>
                                        </svg> </div>
                                    <div class="progress"> <svg width="2" height="32" viewBox="0 0 2 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle r="1" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1 1)"
                                                fill="#CECECE">
                                            </circle>
                                            <circle r="1" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1 7)"
                                                fill="#CECECE">
                                            </circle>
                                            <circle r="1" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1 13)"
                                                fill="#CECECE">
                                            </circle>
                                            <circle r="1" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1 19)"
                                                fill="#CECECE">
                                            </circle>
                                            <circle r="1" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1 25)"
                                                fill="#CECECE">
                                            </circle>
                                            <circle r="1" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1 31)"
                                                fill="#CECECE">
                                            </circle>
                                        </svg> </div>
                                </div>
                                <div class="right"> <a class="sidebar-anchor fs-14" @click="intoView('Proxy')">What Is a Mobile Proxy?</a> </div>
                            </div>
                        </li>
                        <li data-js-floating-sidebar-sectionid="h-how-do-mobile-proxies-work" class="">
                            <div class="section">
                                <div class="left">
                                    <div class="dot"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="10" cy="10" r="9" fill="#ffffff" stroke="#101050" stroke-width="2">
                                            </circle>
                                        </svg> </div>
                                    <div class="progress"> <svg width="2" height="32" viewBox="0 0 2 32" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle r="1" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1 1)"
                                                fill="#CECECE">
                                            </circle>
                                            <circle r="1" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1 7)"
                                                fill="#CECECE">
                                            </circle>
                                            <circle r="1" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1 13)"
                                                fill="#CECECE">
                                            </circle>
                                            <circle r="1" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1 19)"
                                                fill="#CECECE">
                                            </circle>
                                            <circle r="1" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1 25)"
                                                fill="#CECECE">
                                            </circle>
                                            <circle r="1" transform="matrix(-1 8.74228e-08 8.74228e-08 1 1 31)"
                                                fill="#CECECE">
                                            </circle>
                                        </svg> </div>
                                </div>
                                <div class="right"> <a class="sidebar-anchor fs-14" @click="intoView('Proxy2')"> What Is The Value Of Mobile Proxies? </a> </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="floating-right">
                <h2 id="Proxy">How Are Mobile Proxies Set Up?</h2>
                <p>Unlike data center and residential proxies, mobile proxies utilize the bandwidth and IP address of a mobile telecom provider plan (think T-Mobile, Verizon, AT&T, etc.). When a cell phone user purchases such a plan, they are given a SIM card for their phone, which provides a way to connect to the telecom provider’s satellites and mobile cellphone towers. Our proxy software allows us to use real phones and their SIM cards, so when you buy a mobile proxy, you are using a real IP address from the telecom provider. This gives you more anonymity while scraping for the data you need.</p>
                <h2 id="Proxy2">What Is The Value Of Mobile Proxies?</h2>
                <p>All telecom providers use a technology called Carrier Grade NAT, or CGNAT – the magic little acronym that makes mobile proxies so valuable. CGNAT is a type of network address translation in IPv4 network design which allows many users to use a single output IP address.</p>
                <p>Here’s what this means: if a website sees scraping activity from an IP address, they will normally choose to ban said IP. But if the site was to ban a mobile IP, they would also be banning hundreds or even thousands of other real cell phone consumers! Website owners will be more hesitant to ban an IP address if it knows that legitimate consumers are using it, so when you use mobile proxies, bans will occur less frequently. This lets you efficiently acquire all you the data you’re scraping for!</p>
            </div>
        </div>
</section></template>

<script setup lang="ts">
const intoView = (id) => {
    const el = document.querySelector('#'+id);
    el?.scrollIntoView({block: 'start', behavior: "smooth"});
}
</script>

<style lang="less" scoped>
.bg-img {
    background-image: url(../../../assets/img/bg2.jpg);
}
.floating-sidebar-container {
    position: sticky;
    left: 0;
    top: 20px;
    float: left;
}
.floating-wraper {
    position: relative;
}

.floating-right {
    margin-left: 270px;
}
</style>