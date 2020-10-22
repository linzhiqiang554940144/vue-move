<template>
  <div>
    <van-nav-bar title="物料验收" left-arrow @click-left="onreturn">
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods: {
    onreturn() {
      this.$router.push("/warehouse");
    },
    async getyschannel() {
      let page = {
        deviceSerial: "210235C344F194000002",
        pageNo: 1,
        pageSize: 10,
      };
      const { resultcode, data } = await getyschannel(page);
      console.log(data);
    },
  },
};
</script>

<style>
</style>