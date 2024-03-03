<template>
    <div class="content-wrapper">
        <section class="wrapper image-wrapper bg-image bg-overlay bg-overlay-light-600 text-white">
            <div class="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h1 class="display-1 mb-3">Sign In</h1>
                        <nav class="d-inline-block" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Sign In</li>
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
                                <h2 class="mb-3 text-start">Welcome Back !</h2>
                                <p class="lead mb-6 text-start">Fill your email and password to sign in.</p>
                                <form class="text-start mb-3">
                                    <div class="form-floating mb-4">
                                        <input type="email" v-model="username" class="form-control" placeholder="Email" id="loginEmail">
                                        <label for="loginEmail">Email</label>
                                    </div>
                                    <div class="form-floating password-field mb-4">
                                        <input type="password" v-model="password" class="form-control" placeholder="Password"
                                            id="loginPassword">
                                        <span class="password-toggle"><i class="uil uil-eye"></i></span>
                                        <label for="loginPassword">Password</label>
                                    </div>
                                    <a class="btn btn-primary rounded-pill btn-login w-100 mb-2" @click="handleLogin">Sign In</a>
                                </form>
                                <!-- /form -->
                                <p class="mb-1"><router-link to="/web/forgot-password" class="hover">Forgot Password?</router-link></p>
                                <p class="mb-0">Don't have an account?  <router-link class="hover" to="/web/signup">Sign up</router-link></p>
                                <div class="divider-icon my-4">or</div>
                                <nav class="nav social justify-content-center text-center">
                                    <a href="#" class="btn btn-circle btn-sm btn-google"><i class="uil uil-google"></i></a>
                                    <a href="#" class="btn btn-circle btn-sm btn-facebook-f"><i
                                            class="uil uil-facebook-f"></i></a>
                                    <a href="#" class="btn btn-circle btn-sm btn-twitter"><i
                                            class="uil uil-twitter"></i></a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from "@/api/front/user";
import { useStore } from '@/stores/user';

 const router = useRouter();

const user = useStore();
// console.log(user.userData?.token_type, '1 token_type');

const username = ref('');
const password = ref('');

const handleLogin = async () => {
    let params = {
        username: username.value,
        password: password.value
    };
    const res = await login(params);
    if(res) {
        user.updateUserData(res);
        let query = JSON.parse(JSON.stringify(router.currentRoute.value.query));
        const next = query.next;
        if(next) {
            delete query.next;
            router.push({
                path: next,
                query
            })
        } else {
            router.push({
                path: '/dashboard',
                query
            })
        }
    }
}
</script>

<style lang="less" scoped>
.image-wrapper {
    background-image: url(@/assets/img/bg18.png);
}</style>