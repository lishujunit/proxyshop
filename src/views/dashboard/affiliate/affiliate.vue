<template>
    <section class="wrapper bg-light">
        <div class="container pt-10 pb-14 pb-md-18">
            <div class="row mb-10">
                <div class="col-md-6 mb-8">
                    <div class="card card-border-top border-green">
                        <div class="card-body">
                            <h5 class="card-title">Registered users</h5>
                            <h3 class="text-center card-text">{{ users }}</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-8">
                    <div class="card card-border-top border-green">
                        <div class="card-body">
                            <h5 class="card-title">Total commissions</h5>
                            <h3 class="text-center card-text">${{ commission }}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-8">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Your link</h5>
                            <div class="form-floating mb-4">
                                <input id="connection_string" type="text" class="form-control" readonly="" v-model="link">
                                <label for="connection_string">URL</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { affiliate, userInfo } from '@/api/front/user.js';

const users = ref();
const commission = ref();
const invite_code = ref();

const link = computed(() => {
    return window.location.origin + '/#/web/signup?invitecode=' + invite_code.value;
})

const getAffiliate = async () => {
    const res = await affiliate();
    if(res) {
        users.value = res.users;
        commission.value = res.commission;
    }
}
const getUserInfo = async () => {
    const res = await userInfo();
    if(res && res.user) {
        invite_code.value = res.user.invite_code
    }
}
getAffiliate();
getUserInfo();
</script>