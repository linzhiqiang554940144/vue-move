<template>
  <div id="box">
    <nav-bar></nav-bar>
    <van-empty description="404" />
  </div>
</template>

<script>
import navBar from "@/components/common/navbar";
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {},
  components: {
    navBar,
  },
};
</script>

<style lang="less" scoped>
#box {
  width: 100%;
  height: 100%;
}
</style>
