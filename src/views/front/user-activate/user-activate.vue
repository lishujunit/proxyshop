<template>
    <section class="wrapper bg-light">
        <div class="container pt-md-10 pb-14 pb-md-16">
            <div class="row" v-if="isActivate">
                <div class="col-lg-7 col-xl-6 col-xxl-5 mx-auto">
                    <div class="card">
                        <div class="card-body p-11 text-center">
                            <h2 class="mb-3 text-start">Reset your password</h2>
                            <p class="lead mb-6 text-start">We have successfully changed your password.</p>
                            <p class="mb-0">Click here to 
                                <router-link to="/web/signin">Sign in</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { activate } from "@/api/front/user";

const router = useRouter();
const isActivate = ref(false);
const query = router.currentRoute.value.query;

if(query.userid && query.token) {
    let params = {
        userid: query.userid,
        token: query.token
    };
    activate(params).then((res) => {
        if(res) {
            isActivate.value = true;
        }
    })
}
</script>