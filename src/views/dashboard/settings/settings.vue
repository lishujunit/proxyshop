<template>
    <section class="wrapper bg-light">
        <div class="container pt-10 pb-14 pb-md-18">
            <div class="row mb-10">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Your profile</h5>




                        <!-- <div class="alert alert-danger">
                            Your profile is incomplete, please select your marketing preferences below.
                        </div> -->


                        <form method="post" novalidate="">

                            <div class="form-floating mb-4">
                                <input type="text" name="first_name" v-model="userForm.first_name" class="form-control" required=""
                                    id="first_name">
                                <label for="first_name">First Name</label>
                            </div>


                            <div class="form-floating mb-4">
                                <input type="text" name="last_name" v-model="userForm.last_name" class="form-control" required=""
                                    id="last_name">
                                <label for="last_name">Last Name</label>
                            </div>


                            <!-- <div class="form-floating mb-4">
                                <input type="email" name="email" value="12324324@qq.com" class="form-control" required=""
                                    id="id_email">
                                <label for="id_email">Email</label>
                            </div> -->

                            <div class="form-floating mb-4">
                                <!-- Name to appear on invoice(eg.company name)选填 -->
                                <input type="text" name="name" v-model="userForm.invoice_name" class="form-control" id="invoice_name">
                                <label for="invoice_name">Invoice Name</label>
                            </div>

                            <div class="form-floating mb-4">
                                <!-- Address to appear on invoice(include TAX information here too) -->
                                <input type="text" name="name" v-model="userForm.invoice_address" class="form-control" required="" id="invoice_address">
                                <label for="invoice_address">Invoice Address</label>
                            </div>

                            <div class="form-floating mb-4">
                                <input type="text" name="name" v-model="userForm.address" class="form-control" required="" id="address">
                                <label for="address">Address</label>
                            </div>


                            <div class="form-floating mb-4">

                                <select name="country" v-model="userForm.country" class="form-control" required=""
                                    id="country">
                                    <option disabled value="">Country</option>
                                    <option v-for="item in countryList" :value="item.code">{{item.name}}</option>

                                </select>
                                <label for="country">Country of Residence</label>
                            </div>



                            <button class="btn btn-primary btn-login mb-2" type="button" @click="handleSave">Save</button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- <div class="row mb-10">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Login information</h5>
                        <a href="/dashboard/change-password" class="btn btn-danger">Change Password</a>
                    </div>
                </div>
            </div> -->

            <!-- <div class="row mb-10">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Change your password</h5>
                        <form method="post">
                            <input type="hidden" name="csrfmiddlewaretoken"
                                value="jsFXNBzptk30gXNb95ORp4Crlcb9cpSZuwQkPcXXKD0Bd2y5d3iGKuVYbYNa0FcG">


                            <div class="form-floating password-field mb-4">
                                <input type="password" name="old_password" autocomplete="current-password" autofocus=""
                                    required="" id="id_old_password" class="form-control">
                                <label for="id_old_password">Old password</label>
                            </div>


                            <div class="form-floating password-field mb-4">
                                <input type="password" name="new_password1" autocomplete="new-password" required=""
                                    id="id_new_password1" class="form-control">
                                <label for="id_new_password1">New password</label>
                            </div>


                            <div class="form-floating password-field mb-4">
                                <input type="password" name="new_password2" autocomplete="new-password" required=""
                                    id="id_new_password2" class="form-control">
                                <label for="id_new_password2">New password confirmation</label>
                            </div>

                            <p class="card-text">What should I do if I forget my old password? <a href="#"><u>Click
                                        here</u></a> to reset your password，You will receive an email from the administrator
                                within a few minutes with your new password.</p>




                            <button class="btn btn-primary btn-login mb-2" type="submit">Change</button>
                        </form>

                    </div>
                </div>
            </div>

            <div class="row mb-10">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">DNS Configuration</h5>
                        <p class="card-text">You can change your DNS provider across all of your orders below.</p>
                        <p class="card-text">Provider DNS will use the mobile networks DNS for the order. For example: if
                            you have an EE order, it will use EE's nameservers.<u>Please note, this is currently only
                                supported on UK and CA Mobile proxies.</u></p>

                        <form class="text-start mb-3" method="POST" id="dns-form">

                            <input type="hidden" name="csrfmiddlewaretoken"
                                value="pMM0fHSW3Mm0y73AxpU8fU3u39cWNRpbAQXnhiguk5jBvcOuBnoXAkm1TVOXB7JS">
                            <input type="hidden" name="action" value="dns_update">


                            <div id="id_dns_server">
                                <div>
                                    <div class="form-check">
                                        <input type="radio" name="dns_server" value="google" class="form-check-input"
                                            required="" id="id_dns_server_0" checked="">
                                        <label class="form-check-label" for="id_dns_server_0">Google DNS</label>
                                    </div>
                                </div>
                                <div>
                                    <div class="form-check">
                                        <input type="radio" name="dns_server" value="provider" class="form-check-input"
                                            required="" id="id_dns_server_1">
                                        <label class="form-check-label" for="id_dns_server_1">Provider DNS</label>
                                    </div>
                                </div>
                            </div>

                            <br>

                            <button class="btn btn-primary btn-login mb-2" type="submit">Save</button>
                        </form>
                    </div>
                </div>
            </div> -->

        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from '@/stores/user';
import { userInfo, country, updateUserInfo } from '@/api/front/user.js';
import { ElMessage } from "element-plus";

const user = useStore();

const userForm = ref({
    first_name: '',
    last_name: '',
    invoice_name: '',
    invoice_address: '',
    country: '',
    address: '',

    "is_admin": false,
    "is_emailactivate": false,
});

const countryList = ref();

const getUserInfo = async () => {
    const res = await userInfo();
    if(res) {
        const {
            first_name,
            last_name,
            invoice_name,
            invoice_address,
            country,
            address,
            is_admin,
            is_emailactivate
        } = res.user;
        userForm.value.first_name = first_name;
        userForm.value.last_name = last_name;
        userForm.value.invoice_name = invoice_name;
        userForm.value.invoice_address = invoice_address;
        userForm.value.country = country;
        userForm.value.address = address;
        userForm.value.is_admin = is_admin;
        userForm.value.is_emailactivate = is_emailactivate;
    }
}

const getCountry =  async () => {
    const res = await country();
    if(res) {
        countryList.value = res;
    }
}

const handleSave = async () => {
    let user_id = user.userData?.user.user_id;
    let data = userForm.value;
    const res = await updateUserInfo(user_id, data);
    if(res) {
        ElMessage.success(res.message);
        const {
            first_name,
            last_name,
            invoice_name,
            invoice_address,
            country,
            address,
            is_admin,
            is_emailactivate
        } = res.user;
        userForm.value.first_name = first_name;
        userForm.value.last_name = last_name;
        userForm.value.invoice_name = invoice_name;
        userForm.value.invoice_address = invoice_address;
        userForm.value.country = country;
        userForm.value.address = address;
        userForm.value.is_admin = is_admin;
        userForm.value.is_emailactivate = is_emailactivate;
    }
}

getUserInfo();
getCountry();
</script>