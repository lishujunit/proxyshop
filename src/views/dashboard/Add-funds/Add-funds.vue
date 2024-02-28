<template>
    <section class="wrapper bg-light">
        <div class="container pt-10 pb-14 pb-md-18">
            <div class="row mb-10">
                <div class="card">
                    <div class="card-body">

                        <h5 class="card-title">Add funds to your account</h5>

                        <form class="text-start mb-3" id="deposit-form">
                            <input type="hidden" name="csrfmiddlewaretoken"
                                value="6LiGyC0DP0gS11k0AEathrR6f2FofSOkhPt3Adob6jdtY65UECEiCRaD5Ohp3881">



                            <div id="id_provider">
                                <div>
                                    <div class="form-check">
                                        <input type="radio" name="provider" value="stripe" class="form-check-input"
                                            required="" id="id_provider_0" checked="">
                                        <label class="form-check-label" for="id_provider_0">Cryptocurrency（USDT）</label>
                                    </div>
                                </div>
                                <!-- <div>
                                    <div class="form-check">
                                        <input type="radio" name="provider" value="coingate" class="form-check-input"
                                            required="" id="id_provider_1">
                                        <label class="form-check-label" for="id_provider_1">Cryptocurrency</label>
                                    </div>
                                </div> -->
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
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>USDT</td>
                                    <td>succeed</td>
                                    <td>02-24-2024</td>
                                </tr>
                                <tr>
                                    <th scope="row">20</th>
                                    <td>USDT</td>
                                    <td>succeed</td>
                                    <td>02-25-2024</td>
                                </tr>
                                <tr>
                                    <th scope="row">30</th>
                                    <td>USDT</td>
                                    <td>succeed</td>
                                    <td>02-23-2024</td>
                                </tr>
                            </tbody>
                        </table>

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
import { rechargeurl } from '@/api/front/user.js'

const user = useStore();
const router = useRouter();

const user_id = user.userData?.user.user_id;
const amount = ref(10);

const handleRecharge = async () => {
    let params = {
        user_id,
        amount: amount.value
    };
    const res = await rechargeurl(params);
    if(res && res.status === 1) {
        let url = res.recharge_url;
        open(url, '_blank', 'popup=yes,width=1000,height=1000')
    }
}
</script>