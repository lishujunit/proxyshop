<template>
    <footer class="bg-dark text-inverse">
        <div class="container pt-13 pb-7">
            <div class="row gy-6 gy-lg-0">
                <div class="col-lg-4">
                    <div class="widget">
                        <h3 class="h2 mb-3 text-white">Join our ProxyShop</h3>
                        <p class="lead mb-5">We are trusted by over 5000+ clients. Gain access to our grid and grow your
                            business.</p>
                    </div>
                    <!-- /.widget -->
                </div>
                <!-- /column -->
                <div class="col-md-4 col-lg-2 offset-lg-2">
                    <div class="widget">
                        <h4 class="widget-title text-white mb-3">Learn More</h4>
                        <ul class="list-unstyled  mb-0">
                            <li><a href="/4g-mobile-proxies">4G Proxies</a></li>
                            <li><a href="/5g-mobile-proxies">5G Proxies</a></li>
                            <li><a href="/social-media-proxies">Social Media Proxies</a></li>
                            <li><a href="/scraping-api">Scraping API</a></li>
                            <li><a href="/use-cases">Use Cases</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                    <!-- /.widget -->
                </div>
                <!-- /column -->
                <div class="col-md-4 col-lg-2">
                    <div class="widget">
                        <h4 class="widget-title text-white mb-3">Legal</h4>
                        <ul class="list-unstyled text-reset mb-0">
                            <li><a class="service-item" @click="handleService">Terms of Service</a></li>
                            <li><a class="service-item" @click="handleService2">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <!-- /.widget -->
                </div>
                <!-- /column -->
                <div class="col-md-4 col-lg-2">
                    <div class="widget">
                        <h4 class="widget-title text-white mb-3">Get in Touch</h4>
                        <a href="/#/web/contact">Contact</a>
                    </div>
                    <!-- /.widget -->
                </div>
                <!-- /column -->
            </div>
            <!--/.row -->
            <hr class="mt-7 mb-7">
            <div class="d-md-flex align-items-center justify-content-between">
                <p class="mb-2 mb-lg-0">© 2024 ProxyShop. All rights reserved.</p>
                <nav class="nav social social-white text-md-end">
                    <a href="https://twitter.com/tunaproxy"><i class="uil uil-twitter"></i></a>
                    <!-- <a href="https://www.linkedin.com/company/gridpanel"><i class="uil uil-linkedin"></i></a> -->
                </nav>
            </div>
            <!-- /div -->
        </div>
        <!-- /.container -->
    </footer>

    <el-dialog v-model="dialogVisible1" :title="html_title" width="800">
        <div class="service-content" v-html="html_tem">
        

        </div>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dialogVisible1 = ref(false);
const html_title = ref('');
const html_tem = ref('');

const handleService = () => {
    dialogVisible1.value = true;
    html_title.value = 'Terms & Conditions'
    html_tem.value = `
    <p style="color: #9f9f9f;">Last Updated: February 2024</p>
    <p><strong>License and Service Agreement</strong></p>
    <p>This License and Service Agreement (the "Agreement") is between Proxyshop, located at 4112A Main St, Apt P60, Flushing, NY 11355, United States, and you or the entity you represent (referred to as 'Client'), effective as of the date you sign up to Proxyshop or access/use the System or Service.</p>
    <p><strong>Grant of License</strong></p>
    <p>Proxyshop offers a service enabling anonymous internet browsing by redirecting communication through other users' devices (the "System"). This service is available for commercial use under this agreement. During the term of this Agreement, Proxyshop grants the Client a limited license to access and use the System solely for internal business operations. Proxyshop reserves all rights not expressly granted.</p>
    <p><strong>Illegal and Nefarious Activities</strong></p>
    <p>Proxyshop strictly prohibits using its System or Service for illegal or nefarious purposes, including criminal acts, fraud, harassment, or any activity violating laws or regulations. Violation results in immediate termination of this Agreement.</p>
    <p><strong>Data Collection Service</strong></p>
    <p>Proxyshop provides a data collection service ("Service") gathering publicly available data ("Data"), subject to the terms herein. Proxyshop may withhold Service or Data provision if it may infringe laws, regulations, or third-party rights.</p>
    <p><strong>Disclaimer of Warranties and Terms of Service</strong></p>
    <p>Proxyshop provides access to the System and Data "as is" and disclaims all warranties, express or implied, including merchantability, fitness for purpose, and accuracy. Proxyshop does not guarantee uninterrupted use or Data delivery, nor accuracy or completeness of information.</p>
    <p><strong>Warranties and Representations by the Client</strong></p>
    <p>The Client agrees not to use the System or Service for illegal purposes, distribute malicious software, or engage in activities damaging third-party computers or services. The Client is solely responsible for actions based on System or Data use and must protect account credentials.</p>
    <p><strong>Consideration</strong></p>
    <p>Upon registration, the Client must provide a valid payment method. Subscription Fees are non-cancelable and non-refundable, as indicated in the Client's dashboard. The Client agrees to receive electronic invoices and receipts.</p>
    <p><strong>Limitation of Liability</strong></p>
    <p>Proxyshop is not liable for consequential damages. Liability is limited to fees received in the one-month period prior to the Event.</p>
    <p><strong>Temporary Suspension</strong></p>
    <p>Proxyshop may suspend access immediately if the Client poses security risks, breaches this Agreement, or violates representations and warranties.</p>
    <p><strong>Disclosure of Information</strong></p>
    <p>Proxyshop may monitor System use for billing and share information with authorities to comply with the law.</p>
    <p><strong>Term and Termination</strong></p>
    <p>This Agreement is effective until terminated. Either party may terminate with written notice. Proxyshop may terminate immediately for cause. Upon termination, outstanding fees are due, and the license terminates.</p>
    <p><strong>Miscellaneous</strong></p>
    <p>This Agreement constitutes the entire understanding between the parties. Notices are sent via email. New York law governs, and New York courts have exclusive jurisdiction. Modifications are effective upon posting, and Client's continued use constitutes acceptance.</p>
    `
}

const handleService2 = () => {
    dialogVisible1.value = true;
    html_title.value = 'Privacy Policy'
    html_tem.value = `
    <p style="color: #9f9f9f;">Last Updated: February 2024</p>
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
</script>

<style scoped lang="less">
.service-content {
    height: 500px;
    overflow-y: auto;
}
.service-item {
    cursor: pointer;
}
</style>