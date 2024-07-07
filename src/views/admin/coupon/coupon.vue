<template>
  <div>
    <el-button type="primary">新建</el-button>
  </div>
  <div class="form-search">
    <el-form :inline="true" :model="formData">
      <el-form-item label="类型">
        <el-select v-model="formData.type" placeholder="请选择类型" style="width: 150px;">
          <el-option
            label="通用码"
            value="1"
          />
          <el-option
            label="折扣码"
            value="2"
          />
      </el-select>
      </el-form-item>
      <el-form-item label="用户">
        <el-select v-model="formData.user_ids" filterable multiple collapse-tags collapse-tags-tooltip placeholder="请选择用户" style="min-width: 150px;">
          <el-option
            v-for="item in userOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="产品">
        <el-select v-model="formData.product_ids" filterable multiple collapse-tags collapse-tags-tooltip placeholder="请选择产品" style="min-width: 150px;">
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
          value-format="YYYY-MM-DD"
          :size="size"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="list-table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="code" label="优惠码" />
      <el-table-column prop="discount" label="折扣" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="coupon_desc" label="描述" />
      <el-table-column prop="status" label="状态" />
      <el-table-column prop="is_autorenew" label="是否支持续期" />
      <el-table-column prop="valid_from" label="有效期-起" />
      <el-table-column prop="valid_to" label="有效期-止" />
      <el-table-column prop="user_names" label="用户" />
      <el-table-column prop="product_names" label="产品" />
      <el-table-column prop="controls" label="操作" />
    </el-table>
  </div>
  <div class="page-box">
    <el-pagination background layout="prev, pager, next" :current-page="pageOption.page" :page-size="pageOption.pageSize" :total="pageOption.total" @current-change="handlePageChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { users, optlist, list } from '@/api/admin.js';

const loading = ref(false);
const userOptions = ref([]);
const optlistOptions = ref([]);

const tableData = ref([]);

const formData = ref({
  type: '',
  user_ids: [],
  product_ids: [],
  valid_date: []
});

const pageOption = ref({
  page: 1,
  pageSize: 10,
  total: 0
});

const getUser = async () => {
  const res = await users();
  if(res) {
    userOptions.value = res.data;
  }
}

const getOptlist = async () => {
  const res = await optlist();
  if(res) {
    optlistOptions.value = res.data;
  }
}

const getList = async () => {
  let params = {
    "limit": pageOption.value.pageSize,
    "page": pageOption.value.page,
    ...formData.value
  };
  const res = await list(params);
};

const onSubmit = () => {
  getList();
};

const handlePageChange = (val) => {
  pageOption.value.page = val;
  getList();
};

getUser();
getOptlist();
getList();
</script>

<style scoped>
.form-search {
  padding: 20px 0;
}
.page-box {
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
}
</style>