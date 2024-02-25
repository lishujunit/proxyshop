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


                        <form method="post" action="?" novalidate="">


                            <input type="hidden" name="action" value="user_update">
                            <input type="hidden" name="csrfmiddlewaretoken"
                                value="DtukxhSx1rKxbrGiVZCdezyclJcarJE2OxFHzSg5iKH88wrcZX62zZRJbvObfZYJ">
                            <div class="form-floating mb-4">
                                <input type="text" name="first_name" value="shujun" class="form-control" required=""
                                    id="id_first_name">
                                <label for="id_first_name">First Name</label>
                            </div>


                            <div class="form-floating mb-4">
                                <input type="text" name="last_name" value="li" class="form-control" required=""
                                    id="id_last_name">
                                <label for="id_last_name">Last Name</label>
                            </div>


                            <div class="form-floating mb-4">
                                <input type="email" name="email" value="12324324@qq.com" class="form-control" required=""
                                    id="id_email">
                                <label for="id_email">Email</label>
                            </div>

                            <div class="form-floating mb-4">
                                <!-- Name to appear on invoice(eg.company name)选填 -->
                                <input type="text" name="name" value="lsj" class="form-control" id="id_name">
                                <label for="id_name">Name</label>
                            </div>

                            <div class="form-floating mb-4">
                                <!-- Address to appear on invoice(include TAX information here too) -->
                                <input type="text" name="name" value="---" class="form-control" required="" id="idAddress">
                                <label for="id_Address">Address</label>
                            </div>


                            <div class="form-floating mb-4">

                                <select name="country_code" class="form-control" required="" disabled=""
                                    id="id_country_code">
                                    <option value="">---------</option>

                                    <option value="AF" selected>Afghanistan</option>

                                </select>
                                <label for="id_country_code">Country of Residence</label>
                            </div>



                            <button class="btn btn-primary btn-login mb-2" type="submit">Save</button>
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
            <div class="row mb-10">
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

                            <p class="card-text">What should I do if I forget my old password? <a href="#"><u>Click here</u></a> to reset your password，You will receive an email from the administrator within a few minutes with your new password.</p>

                            


                            <button class="btn btn-primary btn-login mb-2" type="submit">Change</button>
                        </form>

                        <!-- <script>
                            $('#id_old_password').addClass('form-control');
                            $('#id_new_password1').addClass('form-control');
                            $('#id_new_password2').addClass('form-control');

                        </script> -->

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
        </div>
    </div>
</section></template>