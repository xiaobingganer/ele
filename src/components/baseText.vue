<template>
  <div class="wrapper">
    <p class="title">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "baseText",
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
};
</script>
<style lang="less" scoped>
@font20: 20px;
@fontRed: red;
.title {
  font-size: @font20;
  color: @fontRed;
}
</style>
