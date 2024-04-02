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
                        <h5 class="card-title">{{ product_name }}</h5>
                        <p>{{ product_desc }}</p>
                        <form class="text-start mb-3" id="order-form">
                            <label for="id_payment_plan">Plan</label>
                            <div class="form-select-wrapper mb-4">
                                <select name="payment_plan" v-model="payment_plan" class="form-control" id="id_payment_plan" @change="handleChangePlan">
                                    <option value="day">day</option>

                                    <option value="week">week</option>

                                    <option value="month">month</option>

                                </select>
                            </div>

                            <label for="item_num">Number</label>
                            <div class="form-input-wrapper mb-4">
                                <el-input-number  id="item_num" v-model="formData.item_num" :step="1" step-strictly :min="1" :max="10" @change="handleChangeNum" />
                                <!-- <input v-model="formData.item_num" @change="handleChangeNum" type="number" class="form-control" id="item_num"> -->
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
                                            <!-- <span class="password-toggle"><i class="uil uil-eye"></i></span> -->
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


                            <label for="">Discount Code</label>
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
                                <label for="rotate_minute">Minimum time between IP rotations</label>
                                <div class="form-select-wrapper mb-4">
                                    <!-- <select name="addon_min_rotation_time" v-model="formData.rotate_minute"
                                        class="form-control" id="rotate_minute">
                                        <option :value="item.value" v-for="item in rotate_minute_options">{{ item.label }}</option>
                                    </select> -->
                                    <el-input-number v-model="formData.rotate_minute" :min="3" :max="30" step="1" />
                                </div>
                            </template>


                            <div class="form-check mb-4">
                                <input class="form-check-input" :disabled="!is_autorenew" v-model="formData.is_autorenew" type="checkbox" name="auto_renew" id="is_autorenew">
                                <label class="form-check-label" for="is_autorenew">Auto Renew</label>
                            </div>


                            <label for="proxy_type">Proxy Type</label>
                            <div class="form-select-wrapper mb-4">
                                <select name="proxy_type" v-model="formData.proxy_type" class="form-control" id="proxy_type">
                                    <option value="http">HTTP Proxy</option>

                                    <option value="socks5">SOCKS Proxy</option>

                                </select>
                            </div>


                            

                            <h1 id="price-display" class="display-5 text-primary">Price: {{ order_price }} </h1>
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
import { orderprice, order, productInfosList } from '@/api/front/product.js'
import { ElMessage } from "element-plus"

const user = useStore();
const router = useRouter();
const query = router.currentRoute.value.query;

const order_price = ref(0);

const rotate_minute_options = [
    {value: 3, label: '3 minutes'},
    {value: 4, label: '4 minutes'},
    {value: 5, label: '5 minutes'},
    {value: 6, label: '6 minutes'},
    {value: 7, label: '7 minutes'},
    {value: 8, label: '8 minutes'},
    {value: 9, label: '9 minutes'},
    {value: 10, label: '10 minutes'},
    {value: 11, label: '11 minutes'},
    {value: 12, label: '12 minutes'},
    {value: 13, label: '13 minutes'},
    {value: 14, label: '14 minutes'},
    {value: 15, label: '15 minutes'},
    {value: 16, label: '16 minutes'},
    {value: 17, label: '17 minutes'},
    {value: 18, label: '18 minutes'},
    {value: 19, label: '19 minutes'},
    {value: 20, label: '20 minutes'},
    {value: 21, label: '21 minutes'},
    {value: 22, label: '22 minutes'},
    {value: 23, label: '23 minutes'},
    {value: 24, label: '24 minutes'},
    {value: 25, label: '25 minutes'},
    {value: 26, label: '26 minutes'},
    {value: 27, label: '27 minutes'},
    {value: 28, label: '28 minutes'},
    {value: 29, label: '29 minutes'},
    {value: 30, label: '30 minutes'},
]

const formData = ref({
    user_id: user.userData?.user.user_id,
    product_id: query.product_id,
    // plan: query.payment_plan,
    item_num: 1,
    discount_code: '',
    auth_method: 'user',
    auth_account: '',
    auth_pwd: '',
    allowed_ips: '',
    is_autorenew: false,
    proxy_type: 'socks5',
    rotate_minute: 5,
    is_rotateip: '0',
    product_code: query.product_code,
});


const product_name = ref(query.product_name);
const payment_plan = ref(query.payment_plan);
const product_desc = ref(query.product_desc);
const is_autorenew = ref(false);

const getOrderprice = async () => {
    let params = {
        product_id: formData.value.product_id,
        item_num: formData.value.item_num,
        discount_code: formData.value.discount_code,
    };
    const res = await orderprice(params);
    if(res && res.status === 1) {
        order_price.value = res.order_price;
    }
};

const handleChangeNum = () => {
    getOrderprice();
};

const submitOrder = async () => {
    let params = {
        user_id: formData.value.user_id,
    };
    let data = formData.value;
    data.is_autorenew = data.is_autorenew ? 1 : 0;
    // auth_account
    // auth_pwd
    let reg = /^[a-zA-Z0-9]{6,20}$/;

    if(!reg.test(data.auth_account)) {
        ElMessage.error('Account should be 6 to 20 characters long and only contain letters and numbers.');
        return;
    }
    if(!reg.test(data.auth_pwd)) {
        ElMessage.error('Password should be 6 to 20 characters long and only contain letters and numbers.');
        return;
    }
    
    const res = await order(params, data);
    if(res && res.status) {
        ElMessage.success(res.message);
        setTimeout(() => {
            router.push({
                path: '/dashboard'
            })
        }, 500)
    }
}

const handleChangePlan = async () => { 
    let params = {
        product_code: formData.value.product_code,
        payment_plan: payment_plan.value,
    }
    const res = await productInfosList(params);
    if(res && res.length) {
        formData.value.product_id = res[0].id;
        product_desc.value = res[0].product_desc;
        formData.value.is_autorenew = res[0].is_autorenew;
        is_autorenew.value = res[0].is_autorenew;
        getOrderprice();
    }
}
handleChangePlan();

</script>