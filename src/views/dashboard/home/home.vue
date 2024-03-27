<template>
    <section class="wrapper bg-light">
        <div class="container pt-10 pb-14 pb-md-18">
            <div class="row mb-10">

                <div class="col-md-12">

                </div>
                <div class="col-md-4 mb-8">
                    <div class="card card-border-top border-green">
                        <div class="card-body">
                            <h5 class="card-title">Paid Proxies</h5>
                            <h3 class="text-center card-text"> {{ proxyData.length }} </h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-8">
                    <div class="card card-border-top border-green">
                        <div class="card-body">
                            <h5 class="card-title">User balance</h5>
                            <h3 class="text-center card-text">${{ userInfoData?.user_balance }}</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card-border-top border-green">
                        <div class="card-body">
                            <h5 class="card-title">Add funds</h5>
                            <div class="text-center">
                                <router-link to="/dashboard/Add-funds" class="btn btn-outline-primary btn-lg">Make a
                                    deposit</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Your proxies</h5>

                            <el-table :data="proxyData" border style="width: 100%">
                                <el-table-column prop="code_country" label="Country" width="180" />
                                <el-table-column prop="product_name" label="Product" width="180" />
                                <el-table-column prop="dev_virtid" label="Dev ID" width="180" />
                                <el-table-column prop="status" label="Status" width="180">
                                    <template #default="scope">
                                        {{ scope.row.status == 1 ? 'succeed' : 'failed' }}
                                    </template>
                                </el-table-column>
                                <el-table-column prop="plan" label="Plan" width="180" />
                                <el-table-column prop="network_type" label="Network" width="180" />
                                <el-table-column prop="proxy_port" label="Port" width="180" />
                                <el-table-column prop="auth_method" label="Auth Method" width="180" />
                                <el-table-column prop="proxy_type" label="Proxy Type" width="180" />
                                <el-table-column prop="is_autorenew" label="Autorenew" width="180" />
                                <el-table-column prop="is_rotateip" label="Rotateip" width="180" />
                                <el-table-column prop="end_time" label="Expires" width="180" />
                                <el-table-column label="Operate" width="150">
                                    <template #default="scope">
                                        <el-dropdown>
                                            <el-button type="primary">
                                                Operate<el-icon class="el-icon--right"><arrow-down /></el-icon>
                                            </el-button>
                                            <template #dropdown>
                                                <el-dropdown-menu>
                                                    <el-dropdown-item
                                                        @click="handleUpdate(scope.row)">Update</el-dropdown-item>
                                                    <el-dropdown-item
                                                        @click="handleInstruction">Instruction</el-dropdown-item>
                                                </el-dropdown-menu>
                                            </template>
                                        </el-dropdown>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <br>
                            <router-link to="/dashboard/new-order" class="btn btn-outline-primary">
                                <i class="uil uil-plus pe-1"></i>
                                Create Order
                            </router-link>
                            <!-- <a href="/dashboard/export-proxies" class="btn btn-secondary float-md-end">
                                <i class="uil uil-export pe-1"></i>
                                Export
                            </a> -->
                            <br>
                            <br>


                            <!-- <div class="alert alert-info alert-icon" role="alert">
                                <i class="uil uil-exclamation-circle"></i> You do not have any orders.
                            </div> -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <el-dialog v-model="dialogTableVisible" title="Instruction" width="800">
        <pre class="my-code"><code ref="myCode1"></code></pre>
    </el-dialog>

    <el-dialog v-model="dialogTableVisible2" title="Update" width="900">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ product_name }}</h5>
                <form class="text-start mb-3" id="order-form">
                    <!-- <label for="id_payment_plan">Plan</label>
                    <div class="form-select-wrapper mb-4">
                        <select name="payment_plan" v-model="formData.plan" class="form-control" id="id_payment_plan">
                            <option value="day">day</option>

                            <option value="week">week</option>

                            <option value="month">month</option>

                        </select>
                    </div> -->

                    <!-- <label for="item_num">Number</label>
                    <div class="form-input-wrapper mb-4">
                        <input v-model="formData.item_num" @change="handleChangeNum" type="number" class="form-control"
                            id="item_num">
                    </div> -->




                    <label for="">Authentication Method:</label>
                    <div class="form-check">
                        <input class="form-check-input" v-model="formData.auth_method" type="radio" name="auth-method"
                            value="user" id="username-pass" checked="">
                        <label class="form-check-label" for="username-pass">Username and password</label>
                    </div>
                    <div class="form-check mb-4">
                        <input class="form-check-input" v-model="formData.auth_method" type="radio" name="auth-method"
                            value="ip" id="ipwhitelist">
                        <label class="form-check-label" for="ipwhitelist">Allowed IP</label>
                    </div>

                    <div id="user-controls" v-if="formData.auth_method === 'user'">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-floating mb-4">
                                    <input type="text" v-model="formData.auth_account" name="auth_account"
                                        class="form-control" id="auth_account" required="">
                                    <label for="auth_account">Proxy Username</label>
                                </div>


                            </div>

                            <div class="col-md-6">
                                <div class="form-floating password-field mb-4">
                                    <input type="text" v-model="formData.auth_pwd" name="auth_pwd" class="form-control"
                                        id="auth_pwd" required="">
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
                            <input type="text" v-model="formData.allowed_ips" name="allowed_ips" class="form-control"
                                id="allowed_ips">
                            <label for="allowed_ips">Allowed IP</label>
                        </div>

                    </div>


                    <div class="form-floating mb-4">
                        <input type="text" name="discount_code" v-model="formData.discount_code" class="form-control"
                            id="discount_code">
                        <label for="discount_code">Discount Code</label>
                    </div>

                    <label for="">Whether to rotate the IP:</label>
                    <div class="form-check">
                        <input class="form-check-input" v-model="formData.is_rotateip" type="radio" name="is_rotateip"
                            :value="false" id="no-rotate" checked="">
                        <label class="form-check-label" for="no-rotate">No IP rotation</label>
                    </div>
                    <div class="form-check mb-4">
                        <input class="form-check-input" v-model="formData.is_rotateip" type="radio" name="is_rotateip"
                            :value="true" id="rotate">
                        <label class="form-check-label" for="rotate">Rotate IPs</label>
                    </div>

                    <template v-if="formData.is_rotateip">
                        <label for="rotate_minute">Minimum time between IP rotations</label>
                        <div class="form-select-wrapper mb-4">
                            <select name="addon_min_rotation_time" v-model="formData.rotate_minute" class="form-control"
                                id="rotate_minute">
                                <option :value="item.value" v-for="item in rotate_minute_options">{{ item.label }}
                                </option>
                            </select>
                        </div>
                    </template>


                    <div class="form-check mb-4">
                        <input class="form-check-input" :disabled="!is_autorenew" v-model="formData.is_autorenew"
                            type="checkbox" name="auto_renew" id="is_autorenew">
                        <label class="form-check-label" for="is_autorenew">Auto Renew</label>
                    </div>


                    <label for="proxy_type">Proxy Type</label>
                    <div class="form-select-wrapper mb-4">
                        <select name="proxy_type" v-model="formData.proxy_type" class="form-control" id="proxy_type">
                            <option value="http">HTTP Proxy</option>

                            <option value="socks5">SOCKS Proxy</option>

                        </select>
                    </div>

                    <button class="btn btn-primary btn-login mb-2" type="button" @click="submitOrder">update</button>
                </form>
            </div>
        </div>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useStore } from '@/stores/user';
import { proxylist } from '@/api/front/product.js'
import { userInfo } from '@/api/front/user.js'
import { ArrowDown } from '@element-plus/icons-vue'
import { orderUpdate } from '@/api/front/product.js'
import { ElMessage } from "element-plus"

import Prism from 'prismjs';
import 'prismjs/components/prism-bash';

const code = `## 根据 auth_method、proxy_type 拼接 代理的调用方式，拼接方法如下

# call proxy 
# auth_method：http； proxy_type：user
curl -u {auth_account}:{auth_pwd} -x http://cdn.proxyshop.io:{proxy_port} https://ipinfo.io
# http ip
curl -x http://cdn.proxyshop.io:{proxy_port} https://ipinfo.io

# socks user
curl -x socks5://{auth_account}:{auth_pwd}@cdn.proxyshop.io:{proxy_port} https://ipinfo.io
# socks ip
curl -x socks5://cdn.proxyshop.io:{proxy_port} https://ipinfo.io


# rotate the IP of your mobile proxy
curl -X 'GET' \
  'http://proxyshop.io/proxy/redial?dev_virtid={dev_virtid}&api_token={api_token}' \
  -H 'accept: application/json'`;

const proxyData = ref([]);
const userInfoData = ref();

const dialogTableVisible = ref(false);
const myCode1 = ref(null);

const dialogTableVisible2 = ref(false);

const formData = ref({

})

const baseCode = Prism.highlight(code, Prism.languages.bash, 'bash');

const is_autorenew = ref(false);

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

const getProxylist = async () => {
    let params = {
        page: 1,
        pagenum: 10
    }
    const res = await proxylist(params);
    if (res) {
        proxyData.value = res;
    }
}

const getUserInfo = async () => {
    const res = await userInfo();
    if (res) {
        userInfoData.value = res.user;
    }
};
getUserInfo();
getProxylist();

const handleInstruction = () => {
    dialogTableVisible.value = true;
    nextTick(() => {
        myCode1.value.innerHTML = baseCode;
    })
}

const handleUpdate = (row) => {
    formData.value = JSON.parse(JSON.stringify(row));

    is_autorenew.value = row.is_autorenew;

    dialogTableVisible2.value = true;
}
const submitOrder = async () => {
    let params = {
        user_id: userInfoData.value.user_id,
    };
    let data = JSON.parse(JSON.stringify(formData.value));
    data.is_autorenew = data.is_autorenew ? 1 : 0;
    const res = await orderUpdate(params, data);
    if(res && res.status) {
        ElMessage.success(res.message);
        dialogTableVisible2.value = false;
        formData.value = {};
        getProxylist();
    }
}
</script>

<style lang="less" scoped>
.my-code {
    background-color: #f5f2f0;
}
</style>