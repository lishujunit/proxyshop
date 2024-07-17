<template>
  <div class="content">
    <el-tabs
      v-model="activeName"
      type="card"
      class="demo-tabs"
      @tab-change="handleTabClick"
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
            <el-table-column prop="user_id" label="ID" />
            <el-table-column prop="user_name" label="用户名" />
            <el-table-column prop="create_time" label="充值时间" />
            <el-table-column prop="recharge_type" label="充值渠道" />
            <el-table-column prop="amount" label="充值金额" />
            <el-table-column prop="status_nm" label="结果" />
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

      <el-tab-pane label="消费" name="2">
        <div class="form-search">
          <el-form :inline="true" :model="formData2">
            <el-form-item label="用户">
              <el-select
                v-model="formData2.user_id"
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
            <el-form-item label="使用优惠券">
              <el-select
                v-model="formData2.use_discount"
                placeholder="请选择"
                clearable
                style="min-width: 200px"
              >
                <el-option label="是" :value="1" />
                <el-option label="否" :value="0" />
              </el-select>
            </el-form-item>
            <el-form-item label="续期订单">
              <el-select
                v-model="formData2.is_renew"
                placeholder="请选择"
                clearable
                style="min-width: 200px"
              >
                <el-option label="是" :value="1" />
                <el-option label="否" :value="0" />
              </el-select>
            </el-form-item>
            <el-form-item label="消费日期">
              <el-date-picker
                v-model="formData2.consum_date"
                type="daterange"
                range-separator="To"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                value-format="YYYY-MM-DD"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit2">查询</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div class="list-table">
          <el-table :data="tableData2" border style="width: 100%">
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="user_id" label="用户ID" />
            <el-table-column prop="user_name" label="用户名" />
            <el-table-column prop="item_num" label="消费设备数" />
            <el-table-column prop="discount_code" label="优惠券" />
            <el-table-column prop="is_renew" label="是否续期订单" />
            <el-table-column prop="create_time" label="消费时间" />
            <el-table-column prop="payment_amount" label="消费金额" />
          </el-table>
        </div>

        <div class="page-box">
          <el-pagination
            background
            layout="prev, pager, next"
            :current-page="pageOption2.page"
            :page-size="pageOption2.pageSize"
            :total="pageOption2.total"
            @current-change="handlePageChange2"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { deposits, users, consumList } from "@/api/admin.js";
import { ElMessage, ElMessageBox, ElLoading } from "element-plus";
const loading = ref(false);
const activeName = ref("1");
const userOptions = ref([]);

const handleTabClick = (name) => {
  if(name == 1) {
    getList1();
  } else {
    getList2();
  }
};

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

const formData2 = ref({
  user_id: "",
  use_discount: undefined,
  is_renew: undefined,
  consum_date: [],
});
const tableData2 = ref([]);
const pageOption2 = ref({
  page: 1,
  pageSize: 10,
  total: 0,
});

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
    recharge_type: formData1.value.recharge_type?.length ? formData1.value.recharge_type : undefined,
    status: (formData1.value.status >= 0 && formData1.value.status !== '') ? formData1.value.status : undefined,
    recharge_date: formData1.value.recharge_date?.length ? formData1.value.recharge_date : undefined,
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

const getList2 = async () => {
  loading.value = true;
  let params = {
    limit: pageOption2.value.pageSize,
    page: pageOption2.value.page,
    user_id: formData2.value.user_id ? formData2.value.user_id : undefined,
    use_discount: formData2.value.use_discount ? formData2.value.use_discount : undefined,
    is_renew: formData2.value.is_renew ? formData2.value.is_renew : undefined,
    consum_date: formData2.value.consum_date?.length ? formData2.value.consum_date : undefined,
  };
  const res = await consumList(params);
  if (res.data) {
    tableData2.value = res.data;
    pageOption2.value.total = res.total_records;
    loading.value = false;
  }
};

const onSubmit2 = () => {
  getList2();
};

const handlePageChange2 = (val) => {
  pageOption2.value.page = val;
  getList2();
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