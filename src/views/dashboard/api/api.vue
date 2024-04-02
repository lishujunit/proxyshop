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
                            <p><strong>Please note that this endpoint require your api_key as a parameter.</strong></p>
                            <p>When you call this endpoint, it will take your proxy down for 5-10 seconds in order for us to get you a new IP address. This is because rotation involves taking the device offline then online again in quick succession.</p>
                        </div>

                        <div class="example">
                            <h3>Example</h3>
                            <el-tabs v-model="activeName" class="demo-tabs">
                                <el-tab-pane v-for="item in myCodes" :key="item.language" :label="item.language" :name="item.language">
                                    <pre class="my-code"><code :ref="(el) => {setTtemRefs(el, item.language, item.code)}">{{item.code}}</code></pre>
                                </el-tab-pane>
                            </el-tabs>
                            <br>
                            <h3>Response</h3>
                            <p>In the case of a successful rotation you will receive the following response.</p>
                            <pre class="my-code"><code ref="response1"></code></pre>
                            <br>
                            <p>If you attempt to rotate to frequently or some other problems, you will receive the following fail response.</p>
                            <pre class="my-code"><code ref="response2"></code></pre>
                        </div>
                        

                        <!-- <div v-for="item in myCodes" :key="item.language">
                            <h5 class="pt-10">{{ item.language }}</h5>
                            <pre class="my-code"><code :ref="(el) => {setTtemRefs(el, item.language, item.code)}">{{item.code}}</code></pre>
                        </div> -->

                        <!-- <h5 class="pt-10">cURL</h5>
                        <pre class="my-code"><code ref="myCode1"></code></pre>

                        <h5 class="pt-10">Python</h5>
                        <pre class="my-code"><code ref="myCode2"></code></pre> -->
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useStore } from '@/stores/user';
import { updateToken, userInfo, apidemo } from '@/api/front/user.js';

import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';


const code1 = `{
    "success": true
}`;

const code2 = `{
    "success": false,
    "reason": "failed reason"
}`;

const response1 = ref(null);
const response2 = ref(null);

const myCodes = ref([]);

const itemRefs = ref({})

const activeName = ref('');

onMounted(() => {
    const responseCode1 = Prism.highlight(code1, Prism.languages.json, 'json');
    response1.value.innerHTML = responseCode1

    const responseCode2 = Prism.highlight(code2, Prism.languages.json, 'json');
    response2.value.innerHTML = responseCode2
    getApidemo();
})

const user = useStore();
const user_id = user.userData?.user.user_id;
const api_token = ref('');


const setTtemRefs = ($event, language, code) => {
    let obj = {
        [language]: $event,
        code,
    }
    if(!itemRefs.value[language]) {
        itemRefs.value[language] = obj;
    }
}

const getApidemo = async () => {
    const res = await apidemo();
    if(res) {
        myCodes.value = res;
        activeName.value = res[0].language;
        nextTick(() => {
            for(let key in itemRefs.value) {
                let codeStr;
                if(key === 'Python') {
                    codeStr = Prism.highlight(itemRefs.value[key].code, Prism.languages.python, 'python');
                } else if(key === 'cURL') {
                    codeStr = Prism.highlight(itemRefs.value[key].code, Prism.languages.bash, 'bash');
                } else if(key === 'NodeJS') {
                    codeStr = Prism.highlight(itemRefs.value[key].code, Prism.languages.javascript, 'javascript');
                } else {
                    codeStr = Prism.highlight(itemRefs.value[key].code, Prism.languages.bash, 'bash');
                }
                itemRefs.value[key][key].innerHTML = codeStr;
            }
            Prism.highlightAll();
        })
    }
}

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
.example {
    background-color: #f5f2f0;
    padding: 20px;
}
.my-code {
    background-color: #fff;
}
</style>