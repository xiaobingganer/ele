<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li @click="pushView(item.name)" v-for="(item, index) in routes" :key="index"
          :class="{'now': $route.path === item.path}">
          <span>{{ item.title }}</span>
        </li>

      </ul>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import { routes } from './router';

export default {
  name: 'App',
  data() {
    return {
      routes: []
    }
  },
  methods: {
    pushView(name) {
      this.$router.push({
        name: name
      })
    }
  },
  mounted() {
    this.routes = routes
    console.log('1', routes);
  }
}
</script>

<style lang="less">
#app {
  display: flex;

  //导航
  .nav {
    padding-top: 49px;
    height: calc(100vh - 60px);
    width: 250px;
    min-width: 200px;
    max-width: 300px;


    ul li {
      padding-bottom: 10px;

      &:hover {
        background-color: #ebe4e4;
        cursor: pointer;

      }

      span {
        padding-bottom: 5px;
        font-size: 13px;

      }
    }

  }


  .now {
    background-color: #e3d4d4;
  }

  // 视图
  .view {
    flex: 1;
    background-color: #fff;
    overflow-y: auto;
    height: calc(100vh - 50px);
    padding: 15px;
  }

}
</style>
