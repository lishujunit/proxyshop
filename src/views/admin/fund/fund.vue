<template>
  <div class="content">
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs"
      @tab-click="handleTabClick"
    >
      <el-tab-pane label="充值" name="1">
        <div class="form-search">
          <el-form :inline="true" :model="formData1">
            <el-form-item label="用户">
              <el-select
                v-model="formData1.user_id"
                filterable
                collapse-tags
                collapse-tags-tooltip
                placeholder="请选择用户"
                clearable
                style="min-width: 200px"
              >
                <el-option
                  v-for="item in userOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="充值渠道">
              <el-select
                v-model="formData1.recharge_type"
                multiple
                filterable
                collapse-tags
                collapse-tags-tooltip
                placeholder="请选择充值渠道"
                clearable
                style="min-width: 200px"
              >
                <el-option label="stripe" value="stripe" />
                <el-option label="usdt" value="usdt" />
                <el-option label="trial" value="trial" />
              </el-select>
            </el-form-item>
            <el-form-item label="状态">
              <el-select
                v-model="formData1.status"
                placeholder="请选择状态"
                clearable
                style="min-width: 200px"
              >
                <el-option label="是" :value="1" />
                <el-option label="否" :value="0" />
              </el-select>
            </el-form-item>
            <el-form-item label="充值日期">
              <el-date-picker
                v-model="formData1.recharge_date"
                type="daterange"
                range-separator="To"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                value-format="YYYY-MM-DD"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit1">查询</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div class="list-table">
          <el-table :data="tableData1" border style="width: 100%">
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
            <el-table-column prop="user_names" label="用户" />
            <el-table-column prop="product_names" label="产品" />
          </el-table>
        </div>

        <div class="page-box">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="pageOption1.page"
            :page-size="pageOption1.pageSize"
            :total="pageOption1.total"
            @current-change="handlePageChange1"
          />
        </div>
      </el-tab-pane>

      <el-tab-pane label="消费" name="2">Config</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Connection } from "@element-plus/icons-vue";
import { ArrowDown } from "@element-plus/icons-vue";
import { deposits, users } from "@/api/admin.js";
import { ElMessage, ElMessageBox, ElLoading } from "element-plus";
const loading = ref(false);
const activeName = ref("1");
const userOptions = ref([]);

const formData1 = ref({
  user_id: "",
  recharge_type: [],
  status: undefined,
  recharge_date: [],
});
const tableData1 = ref([]);
const pageOption1 = ref({
  page: 1,
  pageSize: 10,
  total: 0,
});

const handleTabClick = () => {};

const getUser = async () => {
  const res = await users();
  if (res) {
    userOptions.value = res.data;
  }
};

const getList1 = async () => {
  loading.value = true;
  let params = {
    limit: pageOption1.value.pageSize,
    page: pageOption1.value.page,
    user_id: formData1.value.user_id ? formData1.value.user_id : undefined,

  // recharge_type: formData1.value.recharge_type?.length ? ,
  // status: undefined,
  // recharge_date: [],
  };
  const res = await deposits(params);
  if (res.data) {
    tableData1.value = res.data;
    pageOption1.value.total = res.total_records;
    loading.value = false;
  }
};

const onSubmit1 = () => {
  getList1();
};

const handlePageChange1 = (val) => {
  pageOption1.value.page = val;
  getList1();
};

getUser();
getList1();
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