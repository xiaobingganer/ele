<template>
  <div class="wrapper">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <ul>
          <li>
            <span><input type="checkbox" v-model="numAll"></span>
            <span>数字</span>
          </li>
          <li v-for="item in NumList" :key="item.id">
            <span><input type="checkbox" v-model="numArr" :value="item.id"></span>
            <span>{{ item.num }}</span>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  components: {},
  props: {},
  data() {
    return {
      activeName: 'second',
      NumList: [
        { id: 0, num: 0 }, { id: 1, num: 1 }, { id: 2, num: 2 }
      ],
      numArr: []
    };
  },
  watch: {},
  computed: {
    numAll: {
      get() {
        return this.numArr.length === this.NumList.length
      },
      set(val) {
        if (val) {
          this.numArr = []
          this.NumList.forEach(e => {
            this.numArr.push(e.id)
          });
        } else {
          this.numArr = []
        }
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      console.log(this.activeName);

    }
  },
  created() { },
  mounted() { },
  beforeDestroy() { }
};
</script>
<style lang="less" scoped>
.wrapper {}
</style>