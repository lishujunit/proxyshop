<template>
    <div class="content-wrapper">
        <section class="wrapper image-wrapper bg-image bg-overlay bg-overlay-light-600 text-white"
            data-image-src="./assets/img/photos/bg18.png">
            <div class="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h1 class="display-1 mb-3">Sign Up</h1>
                        <nav class="d-inline-block" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Sign Up</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

        <section class="wrapper bg-light">
            <div class="container pb-14 pb-md-16">
                <div class="row">
                    <div class="col-lg-7 col-xl-6 col-xxl-5 mx-auto mt-n20">
                        <div class="card">
                            <div class="card-body p-11 text-center">
                                <h2 class="mb-3 text-start">Sign up to ProxyShop</h2>
                                <p class="lead mb-6 text-start">Registration takes less than a minute.</p>
                                <form class="text-start mb-3 needs-validation">
                                    <!-- <div class="form-floating mb-4">
                                        <input type="text" v-model="userForm.username" class="form-control" placeholder="Name" id="loginName">
                                        <label for="loginName">Name</label>
                                    </div> -->
                                    <div class="form-floating mb-4">
                                        <input type="email" v-model="userForm.username" class="form-control" placeholder="Email" id="loginEmail">
                                        <label for="loginEmail">Email</label>
                                        <div class="invalid-feedback">3434</div>
                                    </div>
                                    <div class="form-floating password-field mb-4">
                                        <input type="password" v-model="userForm.password" class="form-control" placeholder="Password"
                                            id="loginPassword">
                                        <!-- <span class="password-toggle"><i class="uil uil-eye-slash"></i></span> -->
                                        <label for="loginPassword">Password</label>
                                    </div>
                                    <!-- <div class="form-floating password-field mb-4">
                                        <input type="password" class="form-control" placeholder="Confirm Password"
                                            id="loginPasswordConfirm">
                                        <span class="password-toggle"><i class="uil uil-eye"></i></span>
                                        <label for="loginPasswordConfirm">Confirm Password</label>
                                    </div> -->
                                    <div class="form-floating mb-4">
                                        <input type="text" v-model="userForm.first_name" class="form-control" placeholder="First Name" id="first_name">
                                        <label for="first_name">First Name</label>
                                    </div>
                                    <div class="form-floating mb-4">
                                        <input type="text" v-model="userForm.last_name" class="form-control" placeholder="Last Name" id="last_name">
                                        <label for="last_name">Last Name</label>
                                    </div>
                                    <div class="mb-4">
                                        <select class="form-select" v-model="userForm.country">
                                            <option disabled value="">Country</option>
                                            <option v-for="item in countryList" :value="item.code">{{item.name}}</option>
                                        </select>
                                    </div>
                                    <div class="form-floating mb-4">
                                        <input type="text" v-model="userForm.invite_code" class="form-control" placeholder="Invite code" id="invite_code">
                                        <label for="invite_code">Invite code</label>
                                    </div>
                                    <a class="btn btn-primary rounded-pill btn-login w-100 mb-2" @click="handleRegister">Sign Up</a>
                                    <a v-if="resendEmailShow" class="btn btn-primary rounded-pill btn-login w-100 mb-2" @click="handleResendEmail">Resend activation email</a>
                                    <!-- <button class="btn btn-primary" type="submit">Submit form</button> -->
                                </form>
                                <!-- /form -->
                                <p class="mb-0">Already have an account? <router-link class="hover" to="/web/signin">Sign in</router-link>
                                </p>
                                <!-- <div class="divider-icon my-4">or</div>
                                <nav class="nav social justify-content-center text-center">
                                    <a href="#" class="btn btn-circle btn-sm btn-google"><i class="uil uil-google"></i></a>
                                    <a href="#" class="btn btn-circle btn-sm btn-facebook-f"><i
                                            class="uil uil-facebook-f"></i></a>
                                    <a href="#" class="btn btn-circle btn-sm btn-twitter"><i
                                            class="uil uil-twitter"></i></a>
                                </nav> -->
                                <!--/.social -->
                            </div>
                            <!--/.card-body -->
                        </div>
                        <!--/.card -->
                    </div>
                    <!-- /column -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container -->
        </section>
    </div>

    <el-dialog
        v-model="dialogVisible"
        title="Activate Your Account"
        width="500"
        :before-close="handleClose"
    >
        <span>
            Dear User, Thank you for registering with our service! To complete the account activation, please go to your email and click on the link to activate.
        </span>
        <template #footer>
        <div class="dialog-footer">
            <!-- <el-button @click="dialogVisible = false">Cancel</el-button> -->
            <el-button type="primary" @click="dialogVisible = false">
                Confirm
            </el-button>
        </div>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { register, resendemail, limited, country } from "@/api/front/user";
import { ElMessage } from 'element-plus'
// import { useCounterStore } from '@/stores/counter';

// const counter = useCounterStore();

const router = useRouter();

const dialogVisible = ref(false);

const resendEmailShow = ref(false);

const userForm = ref({
    "username": "",
    "password": "",
    "first_name": "",
    "last_name": "",
    "country": "",
    "invite_code": "",
    // "emailactivate_code": "",
});

userForm.value.invite_code = router.currentRoute.value.query.invitecode || '';


const countryList = ref();

const handleClose = () => {
    dialogVisible.value = false;
}

const getCountry =  async () => {
    const res = await country();
    if(res) {
        countryList.value = res;
    }
}

const handleRegister = async () => {
    let params = userForm.value;
    params.emailactivate_code = generateUUID();
    try {
        const res = await register(params);
        if(res) {
            dialogVisible.value = true;
            userForm.value = {
                "username": "",
                "password": "",
                "first_name": "",
                "last_name": "",
                "country": "",
                "invite_code": "",
            }
        }
    } catch(err) {
        const msg = err.response.data.detail;
        if(msg === 'Username already registered') {
            resendEmailShow.value = true;
        }
    }
}

const handleResendEmail = async () => {
    const email = userForm.value.username;
    if(email) {
        let params = {
            email
        }
        const res = await resendemail(params);
        if(res.status == 1) {
            ElMessage.success(res.message);
        }
    }
}

function generateUUID() {
  const chars = '0123456789abcdef';
  const uuid = new Array(36);

  for (let i = 0; i < uuid.length; i++) {
    uuid[i] = chars[Math.floor(Math.random() * 16)];
  }

  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';

  return uuid.join('');
}

getCountry();
</script>

<style lang="less" scoped>
.image-wrapper {
    background-image: url(@/assets/img/bg18.png);
}
</style>