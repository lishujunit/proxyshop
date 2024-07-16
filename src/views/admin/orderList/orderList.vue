<template>
    <div class="content" v-loading="loading">
        <div class="form-search">
            <el-form :inline="true" :model="formData">
                <el-form-item label="用户">
                    <el-select v-model="formData.user_id" filterable collapse-tags collapse-tags-tooltip
                        placeholder="请选择用户" clearable style="min-width: 200px">
                        <el-option v-for="item in userOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="国家">
                    <el-select
                        v-model="formData.code_countries"
                        placeholder="请选择国家"
                        clearable
                        multiple
                        style="width: 150px"
                    >
                        <el-option label="USA" value="USA" />
                        <el-option label="CAN" value="CAN" />
                    </el-select>
                </el-form-item>
                <el-form-item label="网络类型">
                    <el-select
                        v-model="formData.network_types"
                        placeholder="请选择网络类型"
                        clearable
                        multiple
                        style="width: 150px"
                    >
                        <el-option label="4G" value="4G" />
                        <el-option label="5G" value="5G" />
                    </el-select>
                </el-form-item>
                <el-form-item label="支付周期">
                    <el-select
                        v-model="formData.payment_plans"
                        placeholder="请选择支付周期"
                        clearable
                        multiple
                        style="width: 150px"
                    >
                        <el-option label="hour" value="hour" />
                        <el-option label="day" value="day" />
                        <el-option label="week" value="week" />
                        <el-option label="month" value="month" />
                    </el-select>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="list-table">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="id" label="ID" width="100" />
                <el-table-column prop="order_id" label="订单编号" width="100" />
                <el-table-column prop="user_name" label="用户名" width="100" />
                <el-table-column prop="payment_amount" label="订单金额" width="100" />
                <el-table-column prop="order_status" label="订单状态" width="100" />
                <el-table-column prop="country_region" label="国家区域" width="100" />
                <el-table-column prop="network_type" label="网络类型" width="100" />
                <el-table-column prop="payment_plan" label="支付周期" width="100" />
                <el-table-column prop="telecom_op" label="运营商" width="100" />
                <el-table-column prop="flow_total" label="合计使用流量" width="100" />
                <el-table-column prop="flow_thismon" label="本月使用量" width="100" />
                <el-table-column prop="start_time" label="下单时间" width="100" />
                <el-table-column prop="end_time" label="到期时间" width="100" />
                <el-table-column prop="controls" label="操作" width="350" fixed="right">
                    <template #default="scope">
                        <el-button type="primary" @click="handleUpdate(scope.row)">延长订单时间</el-button>
                        <el-button type="primary" @click="handleLocation(scope.row)">设备区域切换</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="page-box">
            <el-pagination background layout="prev, pager, next" :current-page="pageOption.page"
                :page-size="pageOption.pageSize" :total="pageOption.total" @current-change="handlePageChange" />
        </div>
    </div>

    <el-dialog v-model="dialogTableVisible" :before-close="handleClose" title="延长到期时间" width="400">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="70px" class="demo-ruleForm"
            status-icon>
            <el-form-item label="到期时间" prop="end_time">
                <el-date-picker
                    v-model="ruleForm.end_time"
                    type="datetime"
                    value-format="YYYY-MM-DD HH:mm:ss"
                    placeholder="请选择结束时间"
                />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">确认</el-button>
                <el-button @click="resetForm(ruleFormRef)">取消</el-button>
            </el-form-item>
        </el-form>
        <!-- <template #footer>
          <div class="dialog-footer">
            <el-button type="primary"> 确认 </el-button>
          </div>
        </template> -->
    </el-dialog>

    <el-dialog
        v-model="dialogVisible3"
        :title="'Connecting '+connect_name"
        width="800"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
    >
        <el-table :data="regionTableData" style="width: 100%">
            <el-table-column prop="name" label="LOCAIOTION" />
            <el-table-column label="STATUS" width="300">
                <template #default="{row}">
                    <template v-if="row.devnum_avail > 0">
                        <el-button v-if="is_connect && state_id === row.id" plain type="success" :icon="Connection">
                            Connecting  Canada,Ontario
                        </el-button>

                        <el-button v-else type="success" @click="handleSwitchRegion(row)">
                            Connect
                        </el-button>
                    </template>
                    
                    <el-button v-else type="info" plain disabled> LOCATION FULL（TRYAGAIN LATER）</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-dialog>

</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Connection } from '@element-plus/icons-vue'
import { ArrowDown } from '@element-plus/icons-vue'
import {
    users,
    orderList,
    extend,
    regionList,
    getRegion,
    switchRegion
} from "@/api/admin.js";
import { ElMessage, ElMessageBox, ElLoading } from "element-plus";

const dialogVisible3 = ref(false);
const connect_name = ref('');
const regionTableData = ref();
const is_connect = ref(false);
const state_id = ref('');
const current_dev_virtid = ref('');

const loading = ref(false);
const countryinfosData = ref();

const tableData = ref([]);
const current_row = ref({});

const statesOptions = ref([]);
const telecomOptions = ref([]);

const statesOptions2 = ref([]);
const telecomOptions2 = ref([]);

const userOptions = ref([]);

const formData = ref({
    "user_id": "",
    "code_countries": [],
    "network_types": [],
    "payment_plans": []
});


const pageOption = ref({
    page: 1,
    pageSize: 10,
    total: 0,
});

const ruleFormRef = ref(null);
const dialogTableVisible = ref(false);

const ruleForm = reactive({
    end_time: null
});
const rules = reactive({
    end_time: [
        {
            required: true,
            trigger: "change",
            message: "请选择结束时间",
        },
    ],
});

const getUser = async () => {
    const res = await users();
    if (res) {
        userOptions.value = res.data;
    }
};

const handleLocation = async ({dev_virtid}: {dev_virtid: string}) => {
    current_dev_virtid.value = dev_virtid;
    const res = await regionList({dev_virtid});
    const obj = await getRegion({dev_virtid});
    connect_name.value = obj.name;
    if(res) {
        regionTableData.value = res;
    }
    dialogVisible3.value = true;
}

const handleSwitchRegion = async ({id}: {id: string}) => {
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(255, 255, 255, 0.7)',
    });
    const dev_virtid = current_dev_virtid.value;
    try{
        is_connect.value = true;
        state_id.value = id;
        const res = await switchRegion({dev_virtid, state_id: id});

        const obj = await getRegion({dev_virtid});
        connect_name.value = obj.name;

        is_connect.value = false;
        state_id.value = '';
        handleLocation({dev_virtid});
    } catch(err) {
        is_connect.value = false;
        state_id.value = '';
    }
    loading.close();
}

const handleClose = () => {
    ruleFormRef.value.resetFields();
    dialogTableVisible.value = false;
};

const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
    dialogTableVisible.value = false;
};

const handleUpdate = (row) => {
    current_row.value = row;
    ruleForm.end_time = row.end_time;
    dialogTableVisible.value = true;
};

const getList = async () => {
    loading.value = true;
    // user_id
    // code_countries
    // network_types
    // payment_plans
    let params = {
        page: pageOption.value.page,
        limit: pageOption.value.pageSize,
        user_id: formData.value.user_id ? formData.value.user_id : undefined,
        code_countries: formData.value.code_countries?.length ? formData.value.code_countries : undefined,
        network_types: formData.value.network_types?.length ? formData.value.network_types : undefined,
        payment_plans: formData.value.payment_plans?.length ? formData.value.payment_plans : undefined,
    };
    const res = await orderList(params);
    if (res.data) {
        tableData.value = res.data;
        pageOption.value.total = res.total_records;
        loading.value = false;
    }
};

const onSubmit = () => {
    pageOption.value.page = 1;
    getList();
};

const handlePageChange = (val) => {
    pageOption.value.page = val;
    getList();
};

const submitForm = async (formEl) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            let params = {
                "id": current_row.value.id,
                "end_time": ruleForm.end_time
            };
            extend(params).then((res) => {
                if (res.status === 1) {
                    ElMessage({
                        message: "修改成功",
                        type: "success",
                    });
                    resetForm(ruleFormRef.value);
                    getList();
                }
            });
        }
    });
};

const handleCountryChange = (val) => {
    if (val) {
        statesOptions.value = countryinfosData.value[val].states;
        telecomOptions.value = countryinfosData.value[val].telecom_op;
    } else {
        statesOptions.value = [];
        telecomOptions.value = [];
    }
};

const handleCountryChange2 = (val) => {
    if (val) {
        statesOptions2.value = countryinfosData.value[val].states;
        telecomOptions2.value = countryinfosData.value[val].telecom_op;
    } else {
        statesOptions2.value = [];
        telecomOptions2.value = [];
    }
};

const handleDel = (row) => {
    ElMessageBox.confirm("", "确认删除", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
    })
        .then(() => {
            deviceDel({ device_id: row.id }).then((res) => {
                if (res.status === 1) {
                    ElMessage({
                        type: "success",
                        message: "删除成功",
                    });
                    pageOption.value.page = 1;
                    getList();
                }
            });
        })
        .catch(() => {
            //
        });
};

getUser();
getList();
</script>

<style scoped>
.list-table {
    /* padding-right: 20px; */
}

.form-search {
    padding: 20px 0;
}

.page-box {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0;
}
</style>