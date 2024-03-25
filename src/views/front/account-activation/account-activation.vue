<template>
    <section class="wrapper bg-light">
        <div class="container pt-md-10 pb-14 pb-md-16">
            <div class="row">
                <div class="col-lg-7 col-xl-6 col-xxl-5 mx-auto">
                    <div class="card">
                        <div class="card-body p-11 text-center">
                            Account Activation
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
            // isActivate.value = true;
            router.push({
                path: '/web/signin'
            })
        }
    })
}
</script>