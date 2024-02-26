<template>
    <section class="wrapper bg-light">
        <div class="container pb-14 pb-md-16">
            <div class="row">
                <div class="col-lg-7 col-xl-6 col-xxl-5 mx-auto mt-n20">
                    <div class="card">
                        <div class="card-body p-11 text-center">
                            <h2 class="mb-3 text-start">Reset your password</h2>
                            <p class="lead mb-6 text-start">Type your email below to receive a password reset link</p>
                            <form class="text-start mb-3" method="POST">
                                <input type="hidden" name="csrfmiddlewaretoken"
                                    value="lfJfz3i9AOUji9oJJMvXwFeOCxjGWNwkwjUCBEGHR7RUfe9DNKZMR5xlsjVHK3Q1">

                                <div class="form-floating mb-4">
                                    <input type="email" name="email" autocomplete="email" maxlength="254"
                                        class="form-control" required="" id="id_email">
                                    <label for="id_email">Email</label>
                                </div>


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