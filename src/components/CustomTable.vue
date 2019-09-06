// 自定义table组件
<template>
  <div>
    <p>表格1</p>
    <table class="mailTable">
      <tr v-for="index in rowCount" :key="index">
        <td class="column">{{tableData[index*2-2].key}}</td>
        <td>{{tableData[index*2-2].value}}</td>
        <td class="column">{{tableData[index*2-1] !== undefined ? tableData[index*2-1].key : ''}}</td>
        <td>{{tableData[index*2-1] !== undefined ? tableData[index*2-1].value : ''}}</td>
      </tr>
    </table>
    <p>表格2</p>
    <table class="mailTable">
      <tr class="column">
        <td v-for="(item, index) in tableData2" :key="index">{{item.key}}</td>
      </tr>
      <tr>
        <td v-for="(item, index) in tableData2" :key="index">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CustomTable',
  props: {
    tableData: Array,
    tableData2: Array
  },
  data () {
    return {
    }
  },
  computed: {
    rowCount () {
      return Math.ceil(this.tableData.length / 2)
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.mailTable {
  width: 600px;
  font-size: 12px;
  border-collapse: collapse;
  tr{
    border:1px solid #E6EAEE;
  }
  td {
    width: 150px;
    height: 35px;
    line-height: 35px;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .column {
    background: #f8f8f9;
    color: #515a6e;
    font-weight: bold;
  }
}
</style>
