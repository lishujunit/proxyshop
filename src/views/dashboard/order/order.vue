<template>
    <section class="wrapper bg-light">
        <div class="container pt-10 pb-14 pb-md-18">
            <div class="row mb-10">
                <div class="col-2">

                    <router-link to="/dashboard/new-order" class="btn btn-outline-secondary">
                        <i class="uil uil-angle-left-b pe-1"></i>
                        Back
                    </router-link>

                </div>
            </div>
            <div class="row">

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ formData.product_code }}</h5>

                        <form class="text-start mb-3" id="order-form">
                            <label for="item_num">Number</label>
                            <div class="form-input-wrapper mb-4">
                                <input v-model="formData.item_num" type="number" class="form-control" id="item_num">
                            </div>

                            


                            <label for="">Authentication Method:</label>
                            <div class="form-check">
                                <input class="form-check-input" v-model="formData.auth_method" type="radio" name="auth-method" value="user"
                                    id="username-pass" checked="">
                                <label class="form-check-label" for="username-pass">Username and password</label>
                            </div>
                            <div class="form-check mb-4">
                                <input class="form-check-input" v-model="formData.auth_method" type="radio" name="auth-method" value="ip" id="ipwhitelist">
                                <label class="form-check-label" for="ipwhitelist">Allowed IP</label>
                            </div>

                            <div id="user-controls" v-if="formData.auth_method === 'user'">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-floating mb-4">
                                            <input type="text" v-model="formData.auth_account" name="auth_account" class="form-control" id="auth_account"
                                                required="">
                                            <label for="auth_account">Proxy Username</label>
                                        </div>


                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-floating password-field mb-4">
                                            <input type="text" v-model="formData.auth_pwd" name="auth_pwd" class="form-control" id="auth_pwd"
                                                required="">
                                            <span class="password-toggle"><i class="uil uil-eye"></i></span>
                                            <label for="auth_pwd">Proxy Password</label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div id="ip-controls" v-if="formData.auth_method === 'ip'">
                                <p>You can supply multiple IP addresses by separating them with a comma. e.g.
                                    192.168.0.1,127.0.0.1</p>
                                <div class="form-floating mb-4">
                                    <input type="text" v-model="formData.allowed_ips" name="allowed_ips" class="form-control" id="allowed_ips">
                                    <label for="allowed_ips">Allowed IP</label>
                                </div>

                            </div>


                            <div class="form-floating mb-4">
                                <input type="text" name="discount_code" v-model="formData.discount_code" class="form-control" id="discount_code">
                                <label for="discount_code">Discount Code</label>
                            </div>




                            <!-- <label for="id_payment_plan">Plan</label>
                            <div class="form-select-wrapper mb-4">
                                <select name="payment_plan" class="form-control" id="id_payment_plan">
                                    <option value="4">Hourly</option>

                                    <option value="5">Weekly</option>

                                    <option value="6">Monthly</option>

                                </select>
                            </div> -->

                            <label for="">Whether to rotate the IP:</label>
                            <div class="form-check">
                                <input class="form-check-input" v-model="formData.is_rotateip" type="radio" name="is_rotateip" value="0"
                                    id="no-rotate" checked="">
                                <label class="form-check-label" for="no-rotate">No IP rotation</label>
                            </div>
                            <div class="form-check mb-4">
                                <input class="form-check-input" v-model="formData.is_rotateip" type="radio" name="is_rotateip" value="1" id="rotate">
                                <label class="form-check-label" for="rotate">Rotate IPs</label>
                            </div>

                            <template v-if="formData.is_rotateip == '1'">
                                <label for="rotate_minute">Setup time</label>
                                <div class="form-select-wrapper mb-4">
                                    <select name="addon_min_rotation_time" v-model="formData.rotate_minute"
                                        class="form-control" id="rotate_minute">
                                        <option value="5">5 minutes</option>

                                        <option value="4">4 minutes</option>

                                        <option value="3">3 minutes</option>

                                        <option value="2">2 minutes</option>

                                        <option value="1">1 minutes</option>

                                    </select>
                                </div>
                            </template>


                            <div class="form-check mb-4">
                                <input class="form-check-input" v-model="formData.is_autorenew" type="checkbox" name="auto_renew" id="is_autorenew">
                                <label class="form-check-label" for="is_autorenew">Auto Renew</label>
                            </div>


                            <label for="proxy_type">Proxy Type</label>
                            <div class="form-select-wrapper mb-4">
                                <select name="proxy_type" v-model="formData.proxy_type" class="form-control" id="proxy_type">
                                    <option value="HTTP">HTTP Proxy</option>

                                    <option value="SOCKS">SOCKS Proxy</option>

                                </select>
                            </div>


                            

                            <h1 id="price-display" class="display-5 text-primary">Price: £1 per hour </h1>
                            <br>
                            <button class="btn btn-primary btn-login mb-2" type="button" @click="submitOrder">Purchase</button>
                        </form>
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
import { orderprice, order } from '@/api/front/product.js'

const user = useStore();
const router = useRouter();
const query = router.currentRoute.value.query;

const formData = ref({
    user_id: user.userData?.user.user_id,
    product_id: query.product_id,
    item_num: 1,
    discount_code: '',
    auth_method: 'user',
    auth_account: '',
    auth_pwd: '',
    allowed_ips: '',
    is_autorenew: true,
    proxy_type: 'HTTP',
    rotate_minute: '5',
    is_rotateip: '0',
    product_code: query.product_code,
});

const network_type = ref(query.network_type);

const getOrderprice = async () => {
    let params = {
        product_id: formData.value.product_id,
        item_num: formData.value.item_num,
        discount_code: formData.value.discount_code,
    };
    const res = await orderprice(params);
};

const submitOrder = async () => {
    let params = {
        user_id: formData.value.user_id,
    };
    let data = formData.value;
    data.is_autorenew = data.is_autorenew ? 1 : 0;
    const res = await order(params, data);
}

getOrderprice();

</script>