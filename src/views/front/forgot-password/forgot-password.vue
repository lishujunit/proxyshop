<template>
    <section class="wrapper image-wrapper bg-image bg-overlay bg-overlay-light-600 text-white"
        data-image-src="./assets/img/photos/bg18.png"
        style="background-image: url(&quot;./assets/img/photos/bg18.png&quot;);">
        <div class="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h1 class="display-1 mb-3">Forgot Password</h1>
                    <nav class="d-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/web">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Forgot Password</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>

    <RouterView></RouterView>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>