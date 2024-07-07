<template>
  <section class="wrapper bg-light">
    <div class="container pt-10 pb-14 pb-md-18">
      <div class="row mb-10">
        <div class="col-md-12"></div>
        <div class="col-md-6 mb-8">
          <div class="card card-border-top border-green">
            <div class="card-body">
              <h5 class="card-title">用户</h5>
              <div id="echartUser" style="height: 200px;"></div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-8">
          <div class="card card-border-top border-green">
            <div class="card-body">
              <h5 class="card-title">订单</h5>
              <el-table :data="ordersData" style="width: 100%">
                <el-table-column prop="title" label="类型" />
                <el-table-column prop="value" label="数量" />
              </el-table>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-10">
        <div class="col-md-12"></div>
        <div class="col-md-6 mb-8">
          <div class="card card-border-top border-green">
            <div class="card-body">
              <h5 class="card-title">设备</h5>
              <el-table :data="devicesData" style="width: 100%">
                <el-table-column prop="title" label="类型" />
                <el-table-column prop="value" label="数量" />
              </el-table>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-8">
          <div class="card card-border-top border-green">
            <div class="card-body">
              <h5 class="card-title">资金</h5>
              <el-table :data="financialData" style="width: 100%">
                <el-table-column prop="title" label="类型" />
                <el-table-column prop="value" label="金额" />
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { overview } from '@/api/admin.js';
import * as echarts from 'echarts';

let myChart;

const overviewData = ref({});
const ordersData = ref([]);
const devicesData = ref([]);
const financialData = ref([]);

const getOverview = async () => {
  try {
    const res = await overview();
    if(res) {
      overviewData.value = res;
      let options: any = {
        "orders": {
            "day": "按天",
            "hour": "按小时",
            "month": "按月",
            "week": "按周"
        },
        "devices": {
            "total": "部署设备数",
            "online": "在线设备数",
            "in_use": "使用中设备",
            "offline": "离线设备",
            "usa_device": "美国的设备数",
            "canada_device": "加拿大的设备数"
        },
        "financial": {
            "total_recharge": "充值总额",
            "total_spending": "消费总额",
            "monthly_recharge": "月充值",
            "monthly_spending": "月消费"
        }
      }
      let _ordersData = [];
      for(let key in res.orders) {
        let item = {
          name: key,
          title: options['orders'][key],
          value: res.orders[key]
        };
        _ordersData.push(item);
      }
      ordersData.value = _ordersData;

      let _devicesData = [];
      for(let key in res.devices) {
        let item = {
          name: key,
          title: options['devices'][key],
          value: res.devices[key]
        };
        _devicesData.push(item);
      }
      devicesData.value = _devicesData;

      let _financialData = [];
      for(let key in res.financial) {
        let item = {
          name: key,
          title: options['financial'][key],
          value: res.financial[key]
        };
        _financialData.push(item);
      }
      financialData.value = _financialData;

      
      initEcharts();
    }
  } catch(err) {
    //
  }
};

const initEcharts = () => {
  const users = overviewData.value.users;
  const data = [users.total, users.active, users.paying];
  myChart = echarts.init(document.getElementById('echartUser'));
  myChart.setOption({
    // title: {
    //   text: 'ECharts 入门示例',
    // },
    tooltip: {},
    xAxis: {
      data: ['total', 'active', 'paying']
    },
    yAxis: {},
    grid: {
      top: 20,
      bottom: 20,
      right: 20,
      left: 45
    },
    series: [
      {
        name: '用户',
        type: 'bar',
        data: data
      }
    ]
  });
};

onMounted(() => {
  getOverview();
})


</script>