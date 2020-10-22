<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="less">
@import url("./assets/css/u-reset.css");
@import url("./assets/css/icon.css");
@import url("./assets/css/common.less");
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  // background: @primary-color;
}
</style>
