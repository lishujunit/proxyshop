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
                                        <input type="email" v-model="userForm.username" class="form-control"
                                            placeholder="Email" id="loginEmail">
                                        <label for="loginEmail">Email</label>
                                    </div>
                                    <div class="form-floating password-field mb-4">
                                        <input :type="passwordType" v-model="userForm.password" class="form-control"
                                            placeholder="Password" id="loginPassword">
                                        <span @click="handlePswSlash" v-if="!slash" class="password-toggle"><i
                                                class="uil uil-eye"></i></span>
                                        <span @click="handlePswSlash" v-else class="password-toggle"><i
                                                class="uil uil-eye-slash"></i></span>
                                        <label for="loginPassword">Password</label>
                                    </div>
                                    <!-- <div class="form-floating password-field mb-4">
                                        <input type="password" class="form-control" placeholder="Confirm Password"
                                            id="loginPasswordConfirm">
                                        <span class="password-toggle"><i class="uil uil-eye"></i></span>
                                        <label for="loginPasswordConfirm">Confirm Password</label>
                                    </div> -->
                                    <div class="form-floating mb-4">
                                        <input type="text" v-model="userForm.first_name" class="form-control"
                                            placeholder="First Name" id="first_name">
                                        <label for="first_name">First Name</label>
                                    </div>
                                    <div class="form-floating mb-4">
                                        <input type="text" v-model="userForm.last_name" class="form-control"
                                            placeholder="Last Name" id="last_name">
                                        <label for="last_name">Last Name</label>
                                    </div>
                                    <div class="mb-4">
                                        <select class="form-select" v-model="userForm.country">
                                            <option disabled value="">Country</option>
                                            <option v-for="item in countryList" :value="item.code">{{ item.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="form-floating mb-4">
                                        <input type="text" v-model="userForm.invite_code" class="form-control"
                                            placeholder="Invite code" id="invite_code">
                                        <label for="invite_code">Invite code</label>
                                    </div>

                                    <!-- <p class="lead mb-0 text-start">Service Agreements</p> -->
                                    <div class="form-check mb-4">
                                        <input class="form-check-input" v-model="checkService" type="checkbox" value=""
                                            id="flexCheckDefault">
                                        <div class="form-check-label" for="flexCheckDefault">
                                            <a class="service-link" @click="handleService">Terms & Conditions</a> / 
                                            <a class="service-link" @click="handleService2">Privacy Policy </a>
                                            
                                        </div>
                                    </div>



                                    <a class="btn btn-primary rounded-pill btn-login w-100 mb-2"
                                        @click="handleRegister">Sign Up</a>
                                    <a v-if="resendEmailShow" class="btn btn-primary rounded-pill btn-login w-100 mb-2"
                                        @click="handleResendEmail">Resend activation email</a>
                                    <!-- <button class="btn btn-primary" type="submit">Submit form</button> -->
                                </form>
                                <!-- /form -->
                                <p class="mb-0">Already have an account? <router-link class="hover"
                                        to="/web/signin">Sign in</router-link>
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

    <el-dialog v-model="dialogVisible" title="Activate Your Account" width="500" :before-close="handleClose">
        <span>
            Dear User, Thank you for registering with our service! To complete the account activation, please go to your
            email and click on the link to activate.
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

    <el-dialog v-model="dialogVisible1" :title="html_title" width="800">
        <div class="service-content" v-html="html_tem">
        

        </div>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { register, resendemail, limited, country } from "@/api/front/user";
import { ElMessage } from 'element-plus'
// import { useCounterStore } from '@/stores/counter';

// const counter = useCounterStore();
const html_title = ref('');
const html_tem = ref(`
<p>This License and Service Agreement (the “Agreement”) is an agreement between Mobile Hop and the Client.
            </p>
            <p><strong>1. Grant of License</strong></p>
            <p>1.1 Mobile Hop has developed, owns and offers a service which.</p>
            <p>1.2 During the term of this Agreement Mobile Hop grants the Client.</p>
            <p>1.3 Mobile Hop reserves any and all rights not expressly granted.</p>
            <p><strong>2. Data Collection Service</strong></p>
            <p>2.1 Mobile Hop had developed, owns and offers a data collection.</p>
            <p>2.2 Mobile Hop will not provide the Service or Data where such.</p>
            <p><strong>3. Disclaimer of Warranties</strong></p>
            <p>MOBILE HOP IS PROVIDING THE USE OF THE SYSTEM AND THE DATA ON.</p>
            <p><strong>4. Warranties and Representations by the Client</strong></p>
            <p>The Client warrants, represents and covenants to Mobile Hop that.</p>
            <p>4.1 Not use the System or the Services in violation of applicable.</p>
            <p>4.2 Not use the System to: (i) distribute cracking, warez, RO.</p>
            <p>4.3 Not use other systems, products or services that infringe.</p>
            <p>4.4 Not engage in any reselling of the System in whole or in.</p>
            <p>4.5 Not, and not enable others to, copy, decompile, reverse e.</p>
            <p>Mobile Hop’s prior written approval. It is hereby clarified t.</p>
            <p>4.6 To the extent that the use of the System or the Data will.</p>
            <p>4.7 The Client will be solely responsible for any actions it.</p>
            <p>4.8 The Client is responsible for protecting its personal use.</p>
            <p><strong>5. Consideration</strong></p>
            <p>5.1 Following the free trial period (if granted by Mobile Hop.</p>
            <p>5.2 Prices are net of any withholding or other taxes and the.</p>
            <p>5.3 Client consents to receive electronic invoices and receip.</p>
            <p><strong>6. Limitation of Liability</strong></p>
            <p>In no event will Mobile Hop be liable under this Agreement fo.</p>
            <p><strong>7. Temporary Suspension</strong></p>
            <p>Mobile Hop in its sole discretion and at any time, may suspen.</p>
            <p>(a) Client’s use of or registration for the System or Service.</p>
            <p>(b) Client is in breach of this Agreement, including if Clien.</p>
            <p>(c) Client has violated any of its representation and warrant.</p>
            <p><strong>8. Disclosure of Information</strong></p>
            <p>Mobile Hop shall have the right, but not the obligation, to m.</p>
            <p><strong>9. Term and Termination</strong></p>
            <p>9.1 This Agreement commences on the Effective Date and shall.</p>
            <p>9.2 Unless agreed otherwise in a separate schedule or stateme.</p>
            <p>Mobile Hop shall be entitled to terminate this Agreement imme.</p>
            <p>regulations. Mobile Hop shall not be liable to the Client or.</p>
            <p>9.3 Upon termination, any outstanding consideration amounts s.</p>
            <p><strong>10. Miscellaneous</strong></p>
            <p>10.1 This Agreement constitutes the entire understanding betw.</p>
            <p>10.2 All notices or other communications hereunder shall be g.</p>
            <p>10.3 This Agreement shall be governed by the laws of the Stat.</p>
            <p>10.4 If any provision of this Agreement will be held by a cou.</p>
            <p>10.5 No failure or delay on the part of any party hereto in e.</p>
            <p>10.6 Mobile Hop may, at any time, and at its sole discretion.</p>

`)

const router = useRouter();

const dialogVisible = ref(false);

const slash = ref(false);
const passwordType = ref('password');

const resendEmailShow = ref(false);

const handlePswSlash = () => {
    slash.value = !slash.value;
    if (slash.value) {
        passwordType.value = 'text';
    } else {
        passwordType.value = 'password';
    }
}

const checkService = ref(false);
const dialogVisible1 = ref(false);

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

const getCountry = async () => {
    const res = await country();
    if (res) {
        countryList.value = res;
    }
}

const handleRegister = async () => {
    let params = userForm.value;
    params.emailactivate_code = generateUUID();
    if(!checkService.value) {
        ElMessage.error('The Service Agreement and Privacy Policy must be checked to continue registration');
        return;
    }
    try {
        const res = await register(params);
        if (res) {
            dialogVisible.value = true;
            // userForm.value = {
            //     "username": "",
            //     "password": "",
            //     "first_name": "",
            //     "last_name": "",
            //     "country": "",
            //     "invite_code": ""
            // }
        }
    } catch (err) {
        const msg = err.response.data.detail;
        if (msg === 'Username already registered') {
            resendEmailShow.value = true;
        }
    }
}

const handleResendEmail = async () => {
    const email = userForm.value.username;
    if (email) {
        let params = {
            email
        }
        const res = await resendemail(params);
        if (res.status == 1) {
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

const handleService = () => {
    checkService.value = true;
    dialogVisible1.value = true;
    html_title.value = 'Terms & Conditions'
    html_tem.value = `
    Last Updated: February 2024
    License and Service Agreement
    This License and Service Agreement (the "Agreement") is between Proxyshop, located at 4112A Main St, Apt P60, Flushing, NY 11355, United States, and you or the entity you represent (referred to as 'Client'), effective as of the date you sign up to Proxyshop or access/use the System or Service.
    Grant of License
    Proxyshop offers a service enabling anonymous internet browsing by redirecting communication through other users' devices (the "System"). This service is available for commercial use under this agreement. During the term of this Agreement, Proxyshop grants the Client a limited license to access and use the System solely for internal business operations. Proxyshop reserves all rights not expressly granted.
    Illegal and Nefarious Activities
    Proxyshop strictly prohibits using its System or Service for illegal or nefarious purposes, including criminal acts, fraud, harassment, or any activity violating laws or regulations. Violation results in immediate termination of this Agreement.
    Data Collection Service
    Proxyshop provides a data collection service ("Service") gathering publicly available data ("Data"), subject to the terms herein. Proxyshop may withhold Service or Data provision if it may infringe laws, regulations, or third-party rights.
    Disclaimer of Warranties and Terms of Service
    Proxyshop provides access to the System and Data "as is" and disclaims all warranties, express or implied, including merchantability, fitness for purpose, and accuracy. Proxyshop does not guarantee uninterrupted use or Data delivery, nor accuracy or completeness of information.
    Warranties and Representations by the Client
    The Client agrees not to use the System or Service for illegal purposes, distribute malicious software, or engage in activities damaging third-party computers or services. The Client is solely responsible for actions based on System or Data use and must protect account credentials.
    Consideration
    Upon registration, the Client must provide a valid payment method. Subscription Fees are non-cancelable and non-refundable, as indicated in the Client's dashboard. The Client agrees to receive electronic invoices and receipts.
    Limitation of Liability
    Proxyshop is not liable for consequential damages. Liability is limited to fees received in the one-month period prior to the Event.
    Temporary Suspension
    Proxyshop may suspend access immediately if the Client poses security risks, breaches this Agreement, or violates representations and warranties.
    Disclosure of Information
    Proxyshop may monitor System use for billing and share information with authorities to comply with the law.
    Term and Termination
    This Agreement is effective until terminated. Either party may terminate with written notice. Proxyshop may terminate immediately for cause. Upon termination, outstanding fees are due, and the license terminates.
    Miscellaneous
    This Agreement constitutes the entire understanding between the parties. Notices are sent via email. New York law governs, and New York courts have exclusive jurisdiction. Modifications are effective upon posting, and Client's continued use constitutes acceptance.
    `
}

const handleService2 = () => {
    checkService.value = true;
    dialogVisible1.value = true;
    html_title.value = 'Privacy Policy'
    html_tem.value = `
    <p>Last Updated: February 2024</p>
    <p>Thank you for using Proxyshop. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains our policies regarding the collection, use, and disclosure of information about you. Please read this Privacy Policy carefully before using our services.</p>
    <p><strong>Information Collection and Use</strong></p>
    <p>We collect personal information to provide and improve our services. By using our services, you agree to the collection and use of information. The types of information we collect include, but are not limited to:
    <ul>
        <li>· Browsing Data: We may collect and store information about the websites you visit, browser type, and operating system.</li>
        <li>· Cookies and Similar Technologies: We may use cookies and similar technologies to identify your browser or device and provide a personalized experience.</li>
    </ul>
    We do not sell or rent your personal information to third parties unless we obtain your explicit consent or are required by law.</p>

    <p><strong>Information Security</strong></p>
    <p>We take appropriate security measures to protect your personal information from unauthorized access, use, or disclosure. However, please note that the security of internet transmissions cannot be guaranteed 100%.</p>
    <p><strong>Cookie Policy</strong></p>
    <p>We use cookies and similar technologies to optimize user experience and website functionality. You can manage cookie preferences through your browser settings.</p>
    <p><strong>Children's Privacy</strong></p>
    <p>Our services are not intended for children under 18. If you are a parent or guardian of a minor and you find that your child has provided personal information to us, please contact us to take appropriate action.</p>
    <p><string>Changes to Privacy Policy</string></p>
    <p>We may update our Privacy Policy from time to time. We will post any changes on our website and update this page to reflect the changes. We recommend that you check this Privacy Policy regularly to understand how we protect your personal information.</p>
    <p><strong>Contact Us</strong></p>
    <p>If you have any questions or concerns about this Privacy Policy, please feel free to contact us via email.</p>
    `
}

getCountry();
</script>

<style lang="less" scoped>
.image-wrapper {
    background-image: url(@/assets/img/bg18.png);
}

.service-link {
    text-decoration: underline;
    cursor: pointer;
}
.service-content {
    font-size: 14px;
    padding: 0 20px;
    height: 400px;
    overflow-y: auto;
}
</style>