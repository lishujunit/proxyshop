<template>
    <section class="wrapper bg-light">
        <div class="container pt-10 pb-14 pb-md-18">
            <div class="row mb-10">
                <div class="card">
                    <div class="card-body">

                        <h5 class="card-title">Add funds to your account（$USD）</h5>

                        <form class="text-start mb-3" id="deposit-form">
                            <input type="hidden" name="csrfmiddlewaretoken"
                                value="6LiGyC0DP0gS11k0AEathrR6f2FofSOkhPt3Adob6jdtY65UECEiCRaD5Ohp3881">



                            <div id="id_provider">
                                <div>
                                    <div class="form-check">
                                        <input type="radio" name="provider" value="coingate" class="form-check-input"
                                            required="" id="id_provider_1" checked="">
                                        <label class="form-check-label" for="id_provider_1">Credit or Debit Card</label>
                                    </div>
                                </div>
                                <div>
                                    <div class="form-check">
                                        <input type="radio" name="provider" value="stripe" class="form-check-input"
                                            id="id_provider_0" disabled>
                                        <label class="form-check-label" for="id_provider_0">Cryptocurrency</label>
                                    </div>
                                </div>
                            </div>

                            <br>

                            <div class="form-floating mb-4">
                                <input type="number" v-model="amount" name="amount" min="1" step="0.01" class="form-control"
                                    required="" id="id_amount">
                                <label for="id_amount">Amount</label>
                            </div>

                            <button class="btn btn-primary btn-login mb-2" type="button" @click="handleRecharge">Add Funds</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Your past deposits</h5>


                        <!-- <div class="alert alert-secondary">
                            You will not be able to download invoices until you have entered your invoice information on the
                            Settings
                            page.
                        </div> -->


                        <!-- <div class="alert alert-info alert-icon" role="alert">
                            <i class="uil uil-exclamation-circle"></i> You have not made any deposits yet.
                        </div> -->

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in rechargesList" :key="item.id">
                                    <th scope="row">{{ item.amount }}</th>
                                    <td>{{ item.recharge_type }}</td>
                                    <td>{{ item.status === 1 ? 'succeed' : 'failed' }}</td>
                                    <td>{{ item.create_time }}</td>
                                </tr>
                            </tbody>
                        </table>

                        <br>
                        <el-pagination :current-page="page" background layout="prev, pager, next" :total="total" @current-change="pangeCurrentChange" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from '@/stores/user';
import { rechargeurl, recharges, rechargesNum } from '@/api/front/user.js'

const user = useStore();
const router = useRouter();

const total = ref(0);
const page = ref(1);


const user_id = user.userData?.user.user_id;
const amount = ref(10);

const rechargesList = ref();

let frame = null;

const pangeCurrentChange = (val) => {
    page.value = val;
    getRecharges();
}

const handleRecharge = async () => {
    let params = {
        user_id,
        amount: amount.value
    };
    const res = await rechargeurl(params);
    if(res && res.status === 1) {
        let url = res.recharge_url;
        frame = open(url, '_self', 'popup=yes,width=1000,height=1000')
    }
}

const getRecharges = async () => {
    let params = {
        pagenum: 10,
        page: page.value
    };
    const res = await recharges(params);
    if(res) {
        rechargesList.value = res;
    }
}
getRecharges();
rechargesNum().then((res) => {
    total.value = res;
})
</script>