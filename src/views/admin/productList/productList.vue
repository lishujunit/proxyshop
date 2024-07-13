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
          >
            <el-option label="USA" value="USA" />
            <el-option label="CAN" value="CAN" />
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
        <el-form-item label="支付周期">
          <el-select
            v-model="formData.payment_plan"
            placeholder="请选择支付周期"
            clearable
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
        <el-table-column prop="product_name" label="产品名称" />
        <el-table-column prop="product_desc" label="产品描述" />
        <el-table-column prop="code_country" label="国家" />
        <el-table-column prop="network_type" label="网络类型" />
        <el-table-column prop="payment_plan" label="支付周期" />
        <el-table-column prop="is_autorenew" label="是否支持自动续费" />
        <el-table-column prop="price" label="单价" />
        <el-table-column prop="tax_rate" label="税率" />
        <el-table-column prop="status" label="状态" />
        <el-table-column prop="controls" label="操作" width="190">
          <template #default="scope">
            <el-button type="primary" @click="handleUpdate(scope.row)">更新</el-button>
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
        label-width="120px"
        class="demo-ruleForm"
        status-icon
      >
        <el-form-item label="产品名称" prop="product_name">
          <el-input v-model="ruleForm.product_name" />
        </el-form-item>
        <el-form-item label="产品描述" prop="product_desc">
          <el-input v-model="ruleForm.product_desc" />
        </el-form-item>
        <el-form-item label="产品详情" prop="plan_desc">
          <el-input :rows="2" type="textarea" v-model="ruleForm.plan_desc" />
        </el-form-item>
        <el-form-item label="是否支持自动续费">
          <el-checkbox
            v-model="ruleForm.is_autorenew"
            :true-label="1"
            :false-label="0"
          />
        </el-form-item>

        <el-form-item label="单价" prop="price">
          <el-input-number
            v-model="ruleForm.price"
            :step="1"
            :min="0"
          />
        </el-form-item>

        <el-form-item label="税率" prop="tax_rate">
          <el-input-number
            v-model="ruleForm.tax_rate"
            :step="0.05"
            :min="0"
            :max="1"
          />
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">更新</el-button>
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
import { productList, productUpdate } from "@/api/admin.js";
import { ElMessage, ElMessageBox } from "element-plus";

const loading = ref(false);

const tableData = ref([]);

const formData = ref({
  code_country: "",
  network_type: "",
  payment_plan: ""
});

const pageOption = ref({
  page: 1,
  pageSize: 10,
  total: 0,
});

const ruleFormRef = ref(null);
const dialogTableVisible = ref(false);

const ruleForm = reactive({
  product_name: "",
  product_desc: "",
  plan_desc: "",
  is_autorenew: 0,
  price: undefined,
  tax_rate: undefined,
});
const rules = reactive({
  product_name: [
    {
      required: true,
      trigger: "blur",
      message: "产品名称不能为空",
    }
  ],
  product_desc: [
    {
      required: true,
      trigger: "blur",
      message: "产品描述不能为空",
    }
  ],
  plan_desc: [
    {
      required: true,
      trigger: "blur",
      message: "产品详情不能为空",
    }
  ],
  price: [
    {
      required: true,
      trigger: "blur",
      message: "单价不能为空",
    }
  ],
  tax_rate: [
    {
      required: true,
      trigger: "blur",
      message: "税率不能为空",
    }
  ],
})

const handleClose = () => {
  ruleFormRef.value.resetFields();
  dialogTableVisible.value = false;
};

const handleUpdate = (row) => {
  //
};

const getList = async () => {
  loading.value = true;
  let params = {
    "page": pageOption.value.page,
    "limit": pageOption.value.pageSize,
    "code_country": formData.value.code_country || undefined,
    "network_type": formData.value.network_type || undefined,
    "payment_plan": formData.value.payment_plan || undefined,
    // ...formData.value
  };
  const res = await productList(params);
  if (res.data) {
    tableData.value = res.data;
    pageOption.value.total = res.total_records;
    loading.value = false;
  }
};


const onSubmit = () => {
  getList();
};

const handlePageChange = (val) => {
  pageOption.value.page = val;
  getList();
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