<template>
  <div id="box">
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/myhome" name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/incident" name="incident" icon="search">事件</van-tabbar-item>
      <van-tabbar-item to="/monitoring" name="monitoring" icon="friends-o">监控</van-tabbar-item>
      <van-tabbar-item to="/warehouse" name="warehouse" icon="apps-o">仓库</van-tabbar-item>
      <van-tabbar-item to="/my" name="my" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      active:'home'
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
#box {
  width: 100%;
  height: 100%;
}
</style>
