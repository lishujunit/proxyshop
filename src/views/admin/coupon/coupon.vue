<template>
  <div class="content" v-loading="loading">
    <div>
      <el-button type="primary" @click="handleCreate">新建</el-button>
    </div>
    <div class="form-search">
      <el-form :inline="true" :model="formData">
        <el-form-item label="类型">
          <el-select
            v-model="formData.type"
            placeholder="请选择类型"
            style="width: 150px"
          >
            <el-option label="通用码" value="1" />
            <el-option label="折扣码" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="用户">
          <el-select
            v-model="formData.user_ids"
            filterable
            multiple
            collapse-tags
            collapse-tags-tooltip
            placeholder="请选择用户"
            style="min-width: 150px"
          >
            <el-option
              v-for="item in userOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="产品">
          <el-select
            v-model="formData.product_ids"
            filterable
            multiple
            collapse-tags
            collapse-tags-tooltip
            placeholder="请选择产品"
            style="min-width: 150px"
          >
            <el-option
              v-for="item in optlistOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="期限">
          <el-date-picker
            v-model="formData.valid_date"
            type="daterange"
            range-separator="To"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            value-format="YYYY-MM-DD HH:mm:ss"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="list-table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="100" />
        <el-table-column prop="code" label="优惠码" />
        <el-table-column prop="discount" label="折扣" />
        <el-table-column prop="type" label="类型">
          <template #default="scope">
            {{ scope.row.type === 1 ? "通用码" : "折扣码" }}
          </template>
        </el-table-column>
        <el-table-column prop="coupon_desc" label="描述" />
        <el-table-column prop="status" label="状态" />
        <el-table-column prop="is_autorenew" label="是否支持续期">
          <template #default="scope">
            {{ scope.row.is_autorenew === 1 ? "支持" : "不支持" }}
          </template>
        </el-table-column>
        <el-table-column prop="valid_from" label="有效期-起" />
        <el-table-column prop="valid_to" label="有效期-止" />
        <el-table-column prop="user_names" label="用户" width="240" show-overflow-tooltip />
        <el-table-column prop="product_names" label="产品" width="240" show-overflow-tooltip />
        <el-table-column prop="controls" label="操作" width="190">
          <template #default="scope">
            <el-button
              type="primary"
              :disabled="!scope.row.status"
              @click="handleUpdate(scope.row)"
              >更新</el-button
            >
            <el-button
              type="danger"
              :disabled="!scope.row.status"
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

    <el-dialog
      v-model="dialogTableVisible"
      :before-close="handleClose"
      :title="modelTitle"
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
        <el-form-item label="优惠码" prop="code">
          <el-input v-model="ruleForm.code" maxlength="20" show-word-limit :disabled="action === 'edit'" />
        </el-form-item>
        <el-form-item label="折扣" prop="discount">
          <el-input-number
            v-model="ruleForm.discount"
            :step="0.05"
            :min="0"
            :max="1"
            :disabled="action === 'edit'"
          />
        </el-form-item>
        <el-form-item label="是否支持续期">
          <el-checkbox
            v-model="ruleForm.is_autorenew"
            :true-label="1"
            :false-label="0"
          />
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select
            v-model="ruleForm.type"
            placeholder="请选择类型"
            :disabled="action === 'edit'"
          >
            <el-option label="通用码" :value="1" />
            <el-option label="折扣码" :value="2" />
          </el-select>
        </el-form-item>
        <el-form-item
          label="用户"
          prop="user_ids"
          :rules="
            ruleForm.type === 1
              ? []
              : [{ required: true, trigger: 'change', message: '请选择用户' }]
          "
        >
          <el-select
            v-model="ruleForm.user_ids"
            filterable
            multiple
            collapse-tags
            collapse-tags-tooltip
            placeholder="请选择用户"
          >
            <el-option
              v-for="item in userOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="产品" prop="product_ids">
          <el-select
            v-model="ruleForm.product_ids"
            filterable
            multiple
            collapse-tags
            collapse-tags-tooltip
            placeholder="请选择产品"
          >
            <el-option
              v-for="item in optlistOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="期限" prop="valid_date">
          <el-date-picker
            v-model="ruleForm.valid_date"
            type="datetimerange"
            range-separator="To"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            value-format="YYYY-MM-DD HH:mm:ss"
          />
        </el-form-item>
        <el-form-item label="描述" prop="coupon_desc">
          <el-input
            v-model="ruleForm.coupon_desc"
            :rows="2"
            type="textarea"
            placeholder="请输入描述"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">{{
            action === "add" ? "创建" : "更新"
          }}</el-button>
          <el-button @click="resetForm(ruleFormRef)">取消</el-button>
        </el-form-item>
      </el-form>
      <!-- <template #footer>
        <div class="dialog-footer">
          <el-button type="primary"> 确认 </el-button>
        </div>
      </template> -->
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import {
  users,
  optlist,
  list,
  create,
  update,
  couponDelete,
} from "@/api/admin.js";
import { ElMessage, ElMessageBox } from "element-plus";

const loading = ref(false);
const action = ref("add");
const current_row = ref({});

const ruleFormRef = ref(null);
const ruleForm = reactive({
  code: "",
  discount: 0,
  is_autorenew: 0,
  type: undefined,
  user_ids: [],
  product_ids: [],
  valid_date: [],
  coupon_desc: "",
});

const checkCode = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('优惠码不能为空'))
  } else if (!/^[A-Za-z0-9]{1,20}$/.test(value)) {
    callback(new Error("请输入大小写字母和数字组成的20位以内的优惠码"))
  } else {
    callback()
  }
}

const rules = reactive({
  code: [
    {
      validator: checkCode,
      trigger: "blur",
      informType: "warning",
    },
  ],
  discount: [
    {
      required: true,
      trigger: "blur",
      message: "请输入折扣",
    },
  ],
  type: [
    {
      required: true,
      trigger: "change",
      message: "请选择类型",
    },
  ],
  product_ids: [
    {
      required: true,
      trigger: "change",
      message: "请选择产品",
    },
  ],
  valid_date: [
    {
      required: true,
      trigger: "change",
      message: "请选期限",
    },
  ],
  coupon_desc: [
    {
      required: true,
      trigger: "blur",
      message: "请输入描述",
    },
  ],
});

const userOptions = ref([]);
const optlistOptions = ref([]);

const tableData = ref([]);

const formData = ref({
  type: "",
  user_ids: [],
  product_ids: [],
  valid_date: [],
});

const pageOption = ref({
  page: 1,
  pageSize: 10,
  total: 0,
});

const modelTitle = ref("新增");
const dialogTableVisible = ref(false);

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      let params = JSON.parse(JSON.stringify(ruleForm));
      params.valid_from = params.valid_date[0];
      params.valid_to = params.valid_date[1];
      delete params.valid_date;
      if (action.value === "add") {
        create(params).then((res) => {
          if (res.status == 1) {
            ElMessage({
              message: "创建成功",
              type: "success",
            });
            resetForm(ruleFormRef.value);
            getList();
          }
        });
      }
      if (action.value === "edit") {
        params.coupon_id = current_row.value.id;
        delete params.code;
        delete params.discount;
        delete params.type;
        params.is_autorenew = params.is_autorenew === 0 ? false : true;
        console.log(params);
        update(params).then((res) => {
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
    } else {
      console.log("error submit!", fields);
    }
  });
};

const handleClose = () => {
  ruleFormRef.value.resetFields();
  dialogTableVisible.value = false;
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
  dialogTableVisible.value = false;
};

const getUser = async () => {
  const res = await users();
  if (res) {
    userOptions.value = res.data;
  }
};

const getOptlist = async () => {
  const res = await optlist();
  if (res) {
    optlistOptions.value = res.data;
  }
};

const getList = async () => {
  loading.value = true;
  let params = {
    limit: pageOption.value.pageSize,
    page: pageOption.value.page,
    user_ids: formData.value.user_ids.length
      ? formData.value.user_ids
      : undefined,
    product_ids: formData.value.product_ids.length
      ? formData.value.product_ids
      : undefined,
    valid_date:
      formData.value.valid_date && formData.value.valid_date.length
        ? formData.value.valid_date
        : undefined,
    type: formData.value.type ? formData.value.type : undefined,
    // ...formData.value
  };
  const res = await list(params);
  if (res.data) {
    tableData.value = res.data;
    pageOption.value.total = res.total_records;
    loading.value = false;
  }
};

const handleCreate = () => {
  action.value = "add";
  modelTitle.value = "新增";
  dialogTableVisible.value = true;
};

const onSubmit = () => {
  getList();
};

const handlePageChange = (val) => {
  pageOption.value.page = val;
  getList();
};

const handleUpdate = (row) => {
  current_row.value = row;
  action.value = "edit";
  modelTitle.value = "编辑";
  dialogTableVisible.value = true;
  console.log("row", row);
  ruleForm.code = row.code;
  ruleForm.discount = row.discount;
  ruleForm.is_autorenew = row.is_autorenew;
  ruleForm.type = row.type;
  ruleForm.user_ids = row.user_ids.split(",").map((item) => Number(item));
  ruleForm.product_ids = row.product_ids.split(",").map((item) => Number(item));
  ruleForm.valid_date = [row.valid_from, row.valid_to];
  ruleForm.coupon_desc = row.coupon_desc;
};

const handleDel = (row) => {
  ElMessageBox.confirm("", "确认删除", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
    center: true,
  })
    .then(() => {
      couponDelete({ coupon_id: row.id }).then((res) => {
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

getUser();
getOptlist();
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