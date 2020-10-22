<template>
  <div id="box">
    <van-nav-bar title="仓库" />
    <div class="path">
      <van-button type="info" class="button" @click="inventory()">木工班仓库</van-button
      ><van-button type="info" class="button">水电班仓库</van-button
      ><van-button type="info" class="button">项目部仓库</van-button
      ><van-button type="info" class="button">危险品仓库</van-button
      ><van-button type="info" class="button">架子班仓库</van-button
      ><van-button type="info" class="button">钢筋班仓库</van-button
      ><van-button type="info" class="button">泥工板仓库</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    inventory(){
      this.$router.push('/warehouse/inventory')
    }
  },
};
</script>

<style lang="less" scoped>
#box {
  width: 100%;
  height: 100%;
}
.path {
  padding: 5%;
  width: 100%;
  height: 80%;
}
.button {
  width: 40%;
  height: 20%;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
