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

                            <h5 class="card-title">Invoice Details</h5>

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



                            <button class="btn btn-primary btn-login mb-2" type="button" @click="handleSave">Save</button>
                       
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