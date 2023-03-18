<template>
  <div class="tab">
    <el-table :data="tableData" border style="width: 80%">

      <el-table-column v-for="(col, index) in columns" :prop="col.prop" :label="col.label" :width="col.width"
        :align="col.align" :fixed="col.fixed" :key="index">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="handleIndex(scope.$index)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button round @click="getNum('汉EV')">按钮</el-button>
    <el-button round @click="getNum2('汉EV')">按钮</el-button>
    <el-button round @click="getChecks('汉EV')">按钮</el-button>
    <p>{{ num }}</p>
    <p>{{ num2 }}</p>
    <p>数据通过":data"绑定在 "el-table" 标签上;<br>
      每列表头在"el-table-column"通过v-for得到，lable属性显示的标题，每列的内容根据prop属性的值，在数据里找寻对应字段的数据，width表示列宽，fixed表示固定
    </p>
    <button @click="b">b</button>
    <!-- 柱状图 -->
    <div id="main" style="height: 280px; width: 550px;"></div>
  </div>


</template>

<script>
import { a, getNum, getNum2, getChecks } from '../utils/api';
// import * as echarts from "echarts";   //局部引入
export default {
  name: 'Tab',

  data() {
    return {
      num: '',
      num2: '',
      tableData: [{
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }],
      columns: [{
        prop: "date",
        label: "日期",
        align: "left",
        width: "140px",
        fixed: "left"
      }
        , {
        prop: "name",
        label: "姓名",
        align: "left",
        width: "100px"
      }, {
        prop: "province",
        label: "地区",
        align: "center",
        width: "80px"
      },
      {
        prop: "city",
        label: "城市",
        align: "left",
        width: "100px"
      },
      {
        prop: "address",
        label: "地址",
        align: "left",
        width: "180px"
      },
      {
        prop: "zip",
        label: "邮编",
        align: "right",
        width: "100px",
        fixed: "right"
      },
      ]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleIndex(index) {
      console.log(index);
    }
    ,
    async b() {
      let c = await a()
      console.log('c', c);
    }
    ,
    getNum(model) {
      getNum({ model }).then(res =>
        this.num = res.data)
    },

    getNum2(model) {
      getNum2({
        model
      }).then(res =>
        this.num2 = res.data)
    },



    getChecks(
      model) {
      getChecks({
        statusCode: '',
        useScene: '',
        paramType: '',
        firstSort: '',
        secondSort: '',
        thirdSort: '',
        paramName: '',
        model: model,
        contentType: '使用表现'
      }).then(res => {
        console.log(res.data);
      })
    }
    ,
    // 柱状图
    initCharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '月销量'
        },
        // 提示框
        tooltip: {},
        // 图例
        legend: {
          data: ['销量']
        },
        // 表示x轴坐标
        xAxis: {
          data: ['oppo', 'vivo', 'iphone', '小米', '三星', '魅族']
        },
        // 表示y轴坐标
        yAxis: {},
        // 
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [3500, 2200, 4500, 6500, 200, 3000]
          }
        ]
      };
      myChart.setOption(option);
    },

  },

  mounted() {
    this.initCharts()


    //   let r1 = getChecks("", "", "", "", "", "", "")
    //   console.log(r1);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.tab {
  height: calc(100vh - 50px);
  overflow-y: auto;
}
</style>
