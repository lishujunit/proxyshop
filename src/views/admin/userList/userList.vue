<template>
  <div class="content" v-loading="loading">
    <div class="form-search">
      <el-form :inline="true" :model="formData">
        <el-form-item label="激活">
          <el-select
            v-model="formData.is_emailactivate"
            clearable
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option label="是" :value="true"/>
            <el-option label="否" :value="false"/>
          </el-select>
        </el-form-item>
        <el-form-item label="付费">
          <el-select
            v-model="formData.is_paid"
            clearable
            style="width: 150px"
            placeholder="请选择"
          >
            <el-option label="是" :value="true"/>
            <el-option label="否" :value="false"/>
          </el-select>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input v-model="formData.keyword" placeholder="邮箱/姓名/地址" />
        </el-form-item>
        <el-form-item label="注册时间">
          <el-date-picker
            v-model="formData.register_time_range"
            type="daterange"
            range-separator="To"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="list-table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="user_id" label="ID" width="100" />
        <el-table-column prop="user_name" label="用户名" width="100" />
        <el-table-column prop="is_emailactivate" label="激活" width="100" />
        <el-table-column prop="is_paid" label="付费" width="100" />
        <el-table-column prop="full_name" label="姓名" width="100" />
        <el-table-column prop="address" label="地址" width="100" />
        <el-table-column prop="total_spent" label="消费总额" width="100" />
        <el-table-column prop="user_balance" label="账户余额" width="100" />
        <el-table-column prop="recharge_total" label="充值总额" width="100" />
        <el-table-column prop="device_count" label="关联的设备数" width="100" />
        <el-table-column prop="create_time" label="注册时间" width="100" />
        <el-table-column prop="last_active" label="上次登录时间" width="100" />
        <el-table-column prop="login_ip" label="登录地IP" width="100" />
        <el-table-column prop="controls" label="操作" width="350" fixed="right">
          <template #default="scope">
            <el-button type="primary" @click="handleUpdate(scope.row, 'reset')"
              >重置密码</el-button
            >
            <el-button type="primary" @click="handleUpdate(scope.row, 'top-up')"
              >充值试用金</el-button
            >
            
            <el-button
              v-if="scope.row.is_frozen === 0"
              type="danger"
              @click="handleUpdate(scope.row, 'dongjie')"
              >冻结</el-button
            >
            <el-button
              v-if="scope.row.is_frozen === 1"
              type="danger"
              @click="handleUpdate(scope.row, 'jiedong')"
              >解冻</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-box">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="pageOption.page"
        :page-size="pageOption.pageSize"
        :total="pageOption.total"
        @current-change="handlePageChange"
      />
    </div>
  </div>

  <el-dialog
    v-model="dialogTableVisible"
    :before-close="handleClose"
    :title="modelTitle"
    width="400"
  >
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="70px"
      class="demo-ruleForm"
      status-icon
    >
    <!-- // reset
    // top-up
    // dongjie
    // jiedong -->
      <el-form-item v-if="actionType === 'reset'" label="新密码" prop="new_password">
        <el-input v-model="ruleForm.new_password" />
      </el-form-item>
      <el-form-item v-if="actionType === 'top-up'" label="金额" prop="amount">
        <el-input-number v-model="ruleForm.amount" :min="1" :max="50" />
      </el-form-item>
      <div style="margin-bottom: 30px;" v-if="actionType === 'dongjie'">确认冻结？</div>
      <div style="margin-bottom: 30px;" v-if="actionType === 'jiedong'">确认解冻？</div>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >确认</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">取消</el-button>
      </el-form-item>
    </el-form>
    <!-- <template #footer>
        <div class="dialog-footer">
          <el-button type="primary"> 确认 </el-button>
        </div>
      </template> -->
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import {
  userList,
  resetpassword,
  recharge,
  frozen
} from "@/api/admin.js";
import { ElMessage, ElMessageBox } from "element-plus";

const loading = ref(false);
const countryinfosData = ref();

const tableData = ref([]);
const current_row = ref({});

const statesOptions = ref([]);
const telecomOptions = ref([]);

const statesOptions2 = ref([]);
const telecomOptions2 = ref([]);

const formData = ref({
  "register_time_range": null,
  "is_emailactivate": null,
  "is_paid": null,
  "keyword": ""
});

const actionType = ref('');
const modelTitle = ref('');

const pageOption = ref({
  page: 1,
  pageSize: 10,
  total: 0,
});

const ruleFormRef = ref(null);
const dialogTableVisible = ref(false);

const ruleForm = reactive({
  new_password: "ProxyshopVip66",
  amount: 5,
});
const rules = reactive({
  new_password: [
    {
      required: true,
      trigger: "blur",
      message: "请输入密码",
    },
  ],
  amount: [
    {
      required: true,
      trigger: "blur",
      message: "请输入金额",
    },
  ],
});

const handleClose = () => {
  ruleFormRef.value.resetFields();
  dialogTableVisible.value = false;
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
  dialogTableVisible.value = false;
};

const handleUpdate = (row, type) => {
  current_row.value = row;
  actionType.value = type;
  // reset
  // top-up
  // dongjie
  // jiedong
  switch(type) {
    case 'reset':
      modelTitle.value = '重置密码';
      break;
    case 'top-up':
      modelTitle.value = '充值试用金';
      break;
    case 'dongjie':
      modelTitle.value = '冻结';
      break;
    case 'jiedong':
      modelTitle.value = '解冻';
      break;
    default:
      break;
  }
  // ruleForm.code_country = row.code_country


  dialogTableVisible.value = true;
};

const getList = async () => {
  loading.value = true;
  let params = {
    page: pageOption.value.page,
    limit: pageOption.value.pageSize,
    "register_time_range": formData.value.register_time_range?.length ? formData.value.register_time_range : undefined,
    "is_emailactivate": formData.value.is_emailactivate === '' ? undefined : formData.value.is_emailactivate,
    "is_paid": formData.value.is_paid === '' ? undefined : formData.value.is_paid,
    "keyword": formData.value.keyword === '' ? undefined : formData.value.keyword,
  };
  const res = await userList(params);
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
      const type = actionType.value;
      switch(type) {
        case 'reset':
          let params = {
            "user_id": current_row.value.user_id,
            "new_password": ruleForm.new_password
          };
          resetpassword(params).then((res) => {
            if (res.status == 1) {
              ElMessage({
                message: "修改成功",
                type: "success",
              });
              resetForm(ruleFormRef.value);
              getList();
            }
          });
          break;
        case 'top-up':
          let params2 = {
            "user_id": current_row.value.user_id,
            "amount": ruleForm.amount
          };
          recharge(params2).then((res) => {
            if (res.status == 1) {
              ElMessage({
                message: "充值成功",
                type: "success",
              });
              resetForm(ruleFormRef.value);
              getList();
            }
          });
          break;
        case 'dongjie':
          let params3 = {
            "user_id": current_row.value.user_id,
            "is_frozen": true
          };
          frozen(params3).then((res) => {
            if (res.status == 1) {
              ElMessage({
                message: "冻结成功",
                type: "success",
              });
              resetForm(ruleFormRef.value);
              getList();
            }
          });
          break;
        case 'jiedong':
          let params4 = {
            "user_id": current_row.value.user_id,
            "is_frozen": false
          };
          frozen(params4).then((res) => {
            if (res.status == 1) {
              ElMessage({
                message: "解冻成功",
                type: "success",
              });
              resetForm(ruleFormRef.value);
              getList();
            }
          });
          break;
        default:
          break;
      }
      
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
        if (res.status == 1) {
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