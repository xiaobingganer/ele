<template>
  <div class="wrapper">
    <div class="form">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px" :key="scope.row.id">{{
              scope.row.date
            }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p :a="scope.row.id">姓名: {{ scope.row.name }}</p>
              <p :a="scope.row.id">住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium" :a="scope.row.id">{{
                  scope.row.name
                }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="tip">
      <p>
        理解Scope：tableData是给到table的记录集，scope是table内部基于tableData生成出来的，可以想象成Excel，<br />
        data name address <br />
        2022 王小虎 地址 <br />
        2022 王小虎 地址 <br />
        传进去的tableData，在table内部生成了类似于Excel的scope，因此，通过scope.row.date，我们就可以读取到每一行中的date。
        还有重要的一点，scope又并非是整个table，我们只是能通过scope.row获得当前的行数据<br />
        scope.row指的是绑定数据中的每一条数据 <br />
        scope.$index指的是每条数据的index
      </p>
    </div>

    <div class="">
      <el-select
        v-model="value"
        clearable
        placeholder="请选择"
        @change="chang1"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabTwo",
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "选项4",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    chang1() {
      console.log('1111',this.value);
    },
    chang2() {
      console.log(this.value);
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
</style>