<template>
    <section class="wrapper bg-light">
        <div class="container pt-10 pb-14 pb-md-18">
            <div class="row mb-10">
                <div class="col-2">
                    <router-link to="/dashboard" class="btn btn-outline-secondary">
                        <i class="uil uil-angle-left-b pe-1"></i>
                        Back
                    </router-link>
                </div>
            </div>
            <div class="row">
                <h2 class="mb-10">Pick your proxy type</h2>

                <template v-for="item in infosData" :key="item.id">
                    <div class="col-lg-4 mb-4">
                        <!-- card-border-start border-soft-primary -->
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.product_name }}</h5>
                                <p class="card-text mb-8">{{item.payment_plan}}</p>
                                <p class="card-text mb-8">{{ item.product_desc }}</p>

                                <router-link :to="`/dashboard/order?product_id=${item.id}&product_code=${item.product_code}&network_type=${item.network_type}`"
                                    class="btn btn-primary btn-lg d-block w-100 mb-4">Select</router-link>

                                <!-- <a href="/4g-uk-mobile-proxies"
                                    class="float-end btn btn-outline-secondary btn-lg d-block w-100">Learn more</a> -->

                            </div>
                        </div>
                    </div>
                </template>
                


            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { productInfosList } from "@/api/front/product.js"

const infosData = ref();

const getProductInfosList = async () => {
    const res = await productInfosList();
    if(res) {
        infosData.value = res;
    }
}
getProductInfosList();
</script>