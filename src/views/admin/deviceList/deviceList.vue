<template>
  <div class="content" v-loading="loading">
    <div class="form-search">
      <el-form :inline="true" :model="formData">
        <el-form-item label="国家">
          <el-select
            v-model="formData.code_country"
            placeholder="请选择国家"
            clearable
            style="width: 150px"
            @change="handleCountryChange"
          >
            <el-option
              v-for="(item, key) in countryinfosData"
              :label="key"
              :value="key"
              :key="key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="区域">
          <el-select
            v-model="formData.state_ids"
            placeholder="请选择区域"
            clearable
            multiple
            style="width: 150px"
          >
            <el-option
              v-for="item in statesOptions"
              :label="item.label"
              :value="item.value"
              :key="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="运营商">
          <el-select
            v-model="formData.telecom_ops"
            placeholder="请选择区域"
            clearable
            multiple
            style="width: 150px"
          >
            <el-option
              v-for="item in telecomOptions"
              :label="item.label"
              :value="item.value"
              :key="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="网络类型">
          <el-select
            v-model="formData.network_type"
            placeholder="请选择网络类型"
            clearable
            style="width: 150px"
          >
            <el-option label="4G" value="4G" />
            <el-option label="5G" value="5G" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select
            v-model="formData.status"
            placeholder="请选择状态"
            clearable
            style="width: 150px"
          >
            <el-option label="是" value="1" />
            <el-option label="否" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="出售">
          <el-select
            v-model="formData.is_4sale"
            placeholder="请选择"
            clearable
            style="width: 150px"
          >
            <el-option label="是" value="1" />
            <el-option label="否" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item label="标签">
          <el-input v-model="formData.dev_tags" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="list-table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="100" />
        <el-table-column prop="dev_src" label="来源" />
        <el-table-column prop="dev_code" label="设备编码" />
        <el-table-column prop="proxy_port" label="代理端口" />
        <el-table-column prop="code_country" label="国家" />
        <el-table-column prop="nm_state" label="区域" />
        <el-table-column prop="telecom_op" label="运营商" />
        <el-table-column prop="network_type" label="网络类型" />
        <el-table-column prop="dev_tags" label="标签" />
        <el-table-column prop="status_nm" label="状态" />
        <el-table-column prop="service_status" label="服务状态" />
        <el-table-column prop="is_4sale" label="出售" />
        <el-table-column prop="user_name" label="用户" />
        <el-table-column prop="running_time" label="运行时长" />
        <el-table-column prop="controls" label="操作" width="190">
          <template #default="scope">
            <el-button type="primary" @click="handleUpdate(scope.row)"
              >更新</el-button
            >
            <el-button
              type="danger"
              @click="handleDel(scope.row)"
              >删除</el-button
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
    title="更新"
    width="800"
  >
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="140px"
      class="demo-ruleForm"
      status-icon
    >
      <el-form-item label="国家" prop="code_country">
        <el-select
          v-model="ruleForm.code_country"
          placeholder="请选择国家"
          clearable
          style="width: 150px"
          @change="handleCountryChange2"
        >
          <el-option
            v-for="(item, key) in countryinfosData"
            :label="key"
            :value="key"
            :key="key"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="区域" prop="state_ids">
        <el-select
          v-model="ruleForm.state_id"
          placeholder="请选择区域"
          clearable
          style="width: 150px"
        >
          <el-option
            v-for="item in statesOptions2"
            :label="item.label"
            :value="item.value"
            :key="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="运营商" prop="telecom_ops">
        <el-select
          v-model="ruleForm.telecom_op"
          placeholder="请选择"
          clearable
          style="width: 150px"
        >
          <el-option
            v-for="item in telecomOptions2"
            :label="item.label"
            :value="item.value"
            :key="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="网络类型" prop="network_type">
        <el-select
          v-model="ruleForm.network_type"
          placeholder="请选择网络类型"
          clearable
          style="width: 150px"
        >
          <el-option label="4G" value="4G" />
          <el-option label="5G" value="5G" />
        </el-select>
      </el-form-item>
      <el-form-item label="出售" prop="is_4sale">
        <el-select
          v-model="ruleForm.is_4sale"
          placeholder="请选择"
          clearable
          style="width: 150px"
        >
          <el-option label="是" :value="1" />
          <el-option label="否" :value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="标签" prop="dev_tags">
        <el-input v-model="ruleForm.dev_tags" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >更新</el-button
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
  deviceList,
  productUpdate,
  countryinfos,
  deviceUpdate,
  deviceDel,
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
  code_country: "",
  state_ids: [],
  telecom_ops: [],
  network_type: "",
  status: "",
  is_4sale: undefined,
  dev_tags: "",
});

const pageOption = ref({
  page: 1,
  pageSize: 10,
  total: 0,
});

const ruleFormRef = ref(null);
const dialogTableVisible = ref(false);

const ruleForm = reactive({
  code_country: "",
  state_id: '',
  telecom_op: '',
  network_type: "",
  is_4sale: undefined,
  dev_tags: "",
});
const rules = reactive({
  code_country: [
    {
      required: true,
      trigger: "change",
      message: "请选择国家",
    },
  ],
  state_id: [
    {
      required: true,
      trigger: "change",
      message: "请选择区域",
    },
  ],
  telecom_op: [
    {
      required: true,
      trigger: "change",
      message: "请选择运营商",
    },
  ],
  network_type: [
    {
      required: true,
      trigger: "change",
      message: "请选择网络类型",
    },
  ],
  is_4sale: [
    {
      required: true,
      trigger: "change",
      message: "请选择是否出售",
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

const handleUpdate = (row) => {
  current_row.value = row;
  handleCountryChange2(row.code_country);
  ruleForm.code_country = row.code_country
  ruleForm.state_id = row.state_id || row.nm_state 
  ruleForm.telecom_op = row.telecom_op_id || row.telecom_op
  ruleForm.network_type = row.network_type
  ruleForm.is_4sale = row.is_4sale
  ruleForm.dev_tags = row.dev_tags

  dialogTableVisible.value = true;
};

const getList = async () => {
  loading.value = true;
  let params = {
    page: pageOption.value.page,
    limit: pageOption.value.pageSize,
    network_type: formData.value.network_type
      ? [formData.value.network_type]
      : undefined,
    state_ids: formData.value.state_ids,
    telecom_ops: formData.value.telecom_ops,
    status: formData.value.status === "" ? undefined : formData.value.status,
    is_4sale: formData.value.is_4sale,
    dev_tags:
      formData.value.dev_tags === "" ? undefined : formData.value.dev_tags,
    code_country:
      formData.value.code_country === ""
        ? undefined
        : formData.value.code_country,
    // ...formData.value
  };
  const res = await deviceList(params);
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
        device_id: current_row.value.id,
        ...ruleForm,
      };
      deviceUpdate(params).then((res) => {
        if (res.status == 1) {
          ElMessage({
            message: "更新成功",
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

countryinfos().then((res) => {
  if (res) {
    countryinfosData.value = res;
  }
});
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