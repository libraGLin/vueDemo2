// 自定义table组件
<template>
  <div>
    <p>表格1</p>
    <table class="mailTable">
      <tr v-for="index in rowCount" :key="index.id">
        <td class="column">{{tableData[index*2-2].key}}</td>
        <td>{{tableData[index*2-2].value}}</td>
        <td class="column" v-if="tableData[index*2-1]">{{tableData[index*2-1] ? tableData[index*2-1].key : ''}}</td>
        <td v-if="tableData[index*2-1]">{{tableData[index*2-1] ? tableData[index*2-1].value : ''}}</td>
      </tr>
    </table>
    <p>表格2</p>
    <table class="mailTable">
      <tr v-for="index in rowCount2" :key="index.id">
        <td class="column">{{data2[index*2-2].title}}</td>
        <td>{{data2[index*2-2].value}}</td>
        <td class="column">{{data2[index*2-1] ? data2[index*2-1].title : ''}}</td>
        <td>{{data2[index*2-1] ? data2[index*2-1].value : ''}}</td>
      </tr>
      <!-- <tr v-for="arry in dataList2" :key="arry.id">
        <td v-for="(item, index) in arry" :key="item.id">
        </td>
        <div v-for="item in arry" :key="item.id">
          <td class="column">{{item.title}}</td>
          <td>{{item.value}}</td>
        </div>
      </tr> -->
      <tr v-for="(item, index) in data3" :key="index">
        <td class="column" colspan="1">{{item.title}}</td>
        <td colspan="3">{{item.value}}</td>
      </tr>
    </table>
    <p>表格3</p>
    <table class="mailTable">
      <tr>
        <td class="column" v-for="(item, index) in tableData3" :key="index">{{item.key}}</td>
      </tr>
      <tr>
        <td v-for="(item, index) in tableData3" :key="index">{{item.value}}</td>
      </tr>
    </table>
    <p>表格4</p>
    <table class="mailTable">
      <tr>
        <td class="column" v-for="(item, index) in tableTitle2" :key="index">{{item}}</td>
      </tr>
      <tr>
        <td v-for="(item, index) in tableData4" :key="index">{{item}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CustomTable',
  props: {
    tableData: Array,
    tableData2: Array,
    tableData3: Array,
    tableData4: Array
  },
  data () {
    return {
      tableTitle2: [
        '姓名',
        '年龄',
        '职业',
        '喜好',
        '体重'
      ],
      cluNum: 2 // 假设每行显示2个
    }
  },
  computed: {
    rowCount () {
      return Math.ceil(this.tableData.length / 2)
    },
    data2 () {
      let result = this.tableData2.filter(item => !item.oneline)
      return result
    },
    dataList2 () {
      let tempArry = []
      let result = this.tableData2.filter(item => !item.oneline)
      let len = result.length
      let lineNum = len % this.cluNum === 0 ? len / this.cluNum : Math.floor((len / this.cluNum) + 1) // 行数
      for (let i = 0; i < lineNum; i++) {
        let temp = result.slice(i * this.cluNum, i * this.cluNum + this.cluNum)
        tempArry.push(temp)
      }
      console.log('非单行', tempArry)
      return tempArry
    },
    data3 () {
      let result = this.tableData2.filter(item => item.oneline)
      return result
    },
    rowCount2 () {
      return Math.ceil(this.data2.length / 2)
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
  tr {
    border:1px solid #E6EAEE;
    td {
      width: 150px;
      height: 35px;
      line-height: 35px;
      box-sizing: border-box;
      padding: 0 10px;
      border-right: 1px solid #E6EAEE;
      &:last-child {
        // border-right: none;
      }
      &.column {
        background: #f8f8f9;
        color: #515a6e;
        font-weight: bold;
      }
    }
  }
}
</style>
