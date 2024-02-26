<template>
    <section class="wrapper bg-light">
        <div class="container pb-14 pb-md-16">
            <div class="row">
                <div class="col-lg-7 col-xl-6 col-xxl-5 mx-auto mt-n20">
                    <div class="card">
                        <div class="card-body p-11 text-center">
                            <h2 class="mb-3 text-start">Reset your password</h2>

                            <p class="lead mb-6 text-start">Enter your new password</p>
                            <form class="text-start mb-3" method="POST">
                                <input type="hidden" name="csrfmiddlewaretoken"
                                    value="Di0VfNOThjn2wIKCySTXzvwCGi3wRcMCOmbihocryCkDtNvwCQnMUVP9w4FxFs6j">
                                <div class="form-floating password-field mb-4">
                                    <input type="password" name="new_password1" autocomplete="new-password" required=""
                                        id="id_new_password1" class="form-control" aria-autocomplete="list">
                                    <span class="password-toggle"><i class="uil uil-eye"></i></span>
                                    <label for="id_new_password1">New password</label>
                                </div>


                                <div class="form-floating password-field mb-4">
                                    <input type="password" name="new_password2" autocomplete="new-password" required=""
                                        id="id_new_password2" class="form-control">
                                    <span class="password-toggle"><i class="uil uil-eye"></i></span>
                                    <label for="id_new_password2">New password confirmation</label>
                                </div>
                                <!-- <ul class="errorlist">
                                    <li>The password is too similar to the first name.
                                        The two password fields didn’t match.
                                    </li>
                                </ul> -->


                                <button class="btn btn-primary rounded-pill btn-login w-100 mb-2"
                                    type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>