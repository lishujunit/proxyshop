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

                        <div class="pricing card text-center" :class="{'card-disabled': item.status === 0}">
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
                                            class="price-value">{{ item.price }}/</span>
                                        <span class="price-duration">{{ item.payment_plan }}</span>
                                    </div>
                                    <!-- <div class="price price-hide price-hidden"><span class="price-currency">$</span><span
                                            class="price-value">99</span> <span class="price-duration">yr</span></div> -->
                                </div>
                                <!--/.prices -->
                                <ul class="icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start">
                                    <li v-for="(info, index) in item.plan_desc" :key="index"><i
                                            class="uil uil-check"></i><span>{{ info }}</span></li>
                                </ul>
                                <router-link
                                    v-if="item.status == 1"
                                    :to="`/dashboard/order?product_id=${item.id}&product_code=${item.product_code}&product_name=${item.product_name}&payment_plan=${item.payment_plan}&product_desc=${item.product_desc}`"
                                    class="btn btn-primary rounded-pill">Select</router-link>
                            </div>
                            <!--/.card-body -->
                        </div>

                        <!-- card-border-start border-soft-primary -->
                        <!-- <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.product_name }}</h5>
                                <p class="card-text mb-8">{{ item.payment_plan }}</p>
                                <p class="card-text mb-8">{{ item.product_desc }}</p>

                                <router-link
                                    :to="`/dashboard/order?product_id=${item.id}&product_code=${item.product_code}&network_type=${item.network_type}`"
                                    class="btn btn-primary btn-lg d-block w-100 mb-4">Select</router-link>

                            </div>
                        </div> -->

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
    if (res) {
        infosData.value = res;
    }
}
getProductInfosList();
</script>

<style lang="less" scoped>
.card-body .iconfont {
    color: #a07cc5;
    font-size: 40px;
}
.card-disabled {
    opacity: 0.5;
    user-select: none;
}
</style>