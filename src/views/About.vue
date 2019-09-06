<template>
  <div class="about">
    <h1>This is an test page</h1>
    <!-- 轮播图 -->
    <!-- <swipe class="my-swipe">
      <swipe-item class="slide1">1</swipe-item>
      <swipe-item class="slide2">2</swipe-item>
      <swipe-item class="slide3">3</swipe-item>
    </swipe> -->
    <!-- table组件 -->
    <CustomTable :tableData="tableData" :tableData2="tableData2"></CustomTable>
  </div>
</template>

<script>
import CustomTable from '../components/CustomTable'
export default {
  name: 'about',
  data () {
    return {
      tableData: [
        { key: '单号', value: '1001' },
        { key: '商品名称', value: '篮球' },
        { key: '价格', value: '120.00' },
        { key: '订单日期', value: '2017-03-01' },
        { key: '付款方式', value: '在线支付' },
        { key: '收货地址', value: '北京市海淀区西北旺镇' },
        { key: '预计消费时间', value: '2019-00-23' }
      ],
      tableData2: [
        { key: '运费', value: '￥1001' },
        { key: '物品', value: '衣服饰品' },
        { key: '价格', value: '120.00' },
        { key: '购买日期', value: '2017-03-01' }
      ]
    }
  },
  components: {
    CustomTable
  },
  created () {
  }
}
</script>

<style>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>
