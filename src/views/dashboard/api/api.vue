<template>
    <section class="container pt-10 pb-14 pb-md-18">
        <div class="container">
            <div class="row mb-10">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">API key</h5>

                        <div class="form-floating mb-4">
                            <input id="name" type="text" class="form-control" readonly="" v-model="api_token">
                            <label for="name">API key</label>
                        </div>

                        <p>
                            The API key is needed for all endpoints below. If this key has become known to anyone except
                            yourself, you should regenerate this key immediately using the button below. This will
                            immediately invalidate access using the current key.
                        </p>

                        <p>
                            <a @click="handleCreateKey" class="btn btn-danger">Regenerate API token</a>
                        </p>
                        <p>
                            For information on how to use our API please see our <router-link
                                to="/web/documentation">documentation</router-link>.
                        </p>

                        <div style="margin-top: 50px;">

                            <h5 class="card-title">Rotate your IP address with API key</h5>
                            <h5 class="card-title">Description</h5>
                            <p>This endpoint allows you to rotate the IP of your mobile proxy.</p>
                            <p><strong>Please note that this endpoint does not require your api_key as a parameter.</strong></p>
                            <p>When you call this endpoint, it will take your proxy down for 5-10 seconds in order for us to get you a new IP address. This is because rotation involves taking the device offline then online again in quick succession.</p>
                        </div>

                        <h5 class="pt-10">cURL</h5>
                        <pre class="my-code"><code ref="myCode1"></code></pre>

                        <h5 class="pt-10">Python</h5>
                        <pre class="my-code"><code ref="myCode2"></code></pre>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from '@/stores/user';
import { updateToken, userInfo } from '@/api/front/user.js';

import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';


const code = `curl -X 'GET' \
'http://proxyshop.io/proxy/redial?dev_virtid={id}&api_token=344eb219-6a25-4402-9780-a14aefdd6291' \
-H 'accept: application/json'`;

const code2 = `import requests
params = {
    'dev_virtid': {id},
    'api_token': 'MbzOGi',
}
response = requests.get('http://proxyshop.io/proxy/redial', params=params)`;

const myCode1 = ref(null);
const myCode2 = ref(null);

onMounted(() => {
    const baseCode = Prism.highlight(code, Prism.languages.bash, 'bash');
    myCode1.value.innerHTML = baseCode

    const pythonCode = Prism.highlight(code2, Prism.languages.python, 'python');
    myCode2.value.innerHTML = pythonCode
})

const user = useStore();
const user_id = user.userData?.user.user_id;
const api_token = ref('');

const getUserInfo = async () => {
    const res = await userInfo();
    if(res && res.user) {
        api_token.value = res.user.api_token;
    }
}

const updateGetToken = async () => {
    let params = {
        api_token: generateUUID()
    };
    const res = await updateToken(user_id, params);
    if(res && res.user) {
        api_token.value = res.user.api_token;
        user.userData.user.api_token = res.user.api_token;
        // user.updateUserData(res);
    }
}

const generateUUID = () => {
  const chars = '0123456789abcdef';
  const uuid = new Array(36);

  for (let i = 0; i < uuid.length; i++) {
    uuid[i] = chars[Math.floor(Math.random() * 16)];
  }

  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';

  return uuid.join('');
}

const handleCreateKey = () => {
    const update = confirm('Are you sure? This cannot be undone and will invalidate your existing key immediately');
    if(update) {
        updateGetToken();
    }
}

getUserInfo();
</script>

<style lang="less" scoped>
.my-code {
    background-color: #f5f2f0;
}
</style>