<template>
    <section class="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white bg-img" >
      <div class="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h1 class="display-1 mb-3 text-white">Feedback</h1>
            <nav class="d-inline-block" aria-label="breadcrumb">
              <ol class="breadcrumb text-white">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">feedback</li>
              </ol>
            </nav>
            <!-- /nav -->
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>

    <section class="wrapper bg-light angled upper-end">
      <div class="container pb-11">
        <div class="row">
          <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <h2 class="display-4 mb-3 text-center">Drop Us a Line</h2>
            <p class="lead text-center mb-10">Reach out to us from our contact form and we will get back to you shortly.</p>
            <form class="contact-form needs-validation" method="post" novalidate="">
              <div class="messages"></div>
              <div class="row gx-4">
                <!-- <div class="col-md-6">
                  <div class="form-floating mb-4">
                    <input id="form_name" type="text" name="name" class="form-control" placeholder="Jane" required="">
                    <label for="form_name">First Name *</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please enter your first name. </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="form-floating mb-4">
                    <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Doe" required="">
                    <label for="form_lastname">Last Name *</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please enter your last name. </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="form-floating mb-4">
                    <input id="form_email" type="email" name="email" class="form-control" placeholder="jane.doe@example.com" required="">
                    <label for="form_email">Email *</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please provide a valid email address. </div>
                  </div>
                </div>
                
                <div class="col-md-6">
                  <div class="form-select-wrapper mb-4">
                    <select class="form-select" id="form-select" name="department" required="">
                      <option selected="" disabled="" value="">Select a department</option>
                      <option value="Sales">Sales</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Customer Support">Customer Support</option>
                    </select>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please select a department. </div>
                  </div>
                </div> -->
                <div class="col-12">
                  <div class="form-floating mb-4">
                    <input id="feed_title" v-model="formData.feed_title" type="text" name="title" class="form-control" placeholder="" required="">
                    <label for="feed_title">Title *</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please enter your last name. </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-4">
                    <textarea id="feed_msg" v-model="formData.feed_msg" name="message" class="form-control" placeholder="Your message" style="height: 150px" required=""></textarea>
                    <label for="feed_msg">Message *</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please enter your messsage. </div>
                  </div>
                </div>
                <!-- /column -->
                <div class="col-12 text-center">
                  <input type="button" @click="submit" class="btn btn-primary rounded-pill btn-send mb-3" value="Send message">
                  <p class="text-muted"><strong>*</strong> These fields are required.</p>
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </form>
            <!-- /form -->
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from '@/stores/user';
import { feedback } from '@/api/front/user';
import { ElMessage } from 'element-plus';

const user = useStore();

const formData = ref(
  {
    feed_title: '',
    feed_msg: ''
  }
);

const submit = async () => {
  let user_id = user.userData?.user.user_id;
  if(!user_id) return;
  let data = formData.value;
  const res = await feedback(user_id, data);
  if(res && res.status == 1) {
    ElMessage.success(res.message);
    formData.value.feed_title = '';
    formData.value.feed_msg = '';
  }
};
</script>

<style scoped>
.bg-img {
  background-image: url(../../../assets/img/bg3.jpg);
}
</style>