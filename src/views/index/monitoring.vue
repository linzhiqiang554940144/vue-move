<template>
  <div id="box">
    <van-nav-bar title="监控"> </van-nav-bar>
    <van-row type="flex" justify="space-around" gutter="10">
      <van-col>
        <span>东门</span>
      </van-col>
      <van-col>
        <span>西门</span>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around" gutter="10">
      <van-col >
        <img src="@/assets/img/video.png" alt="" @click="watchvideo" />
      </van-col>
      <van-col>
        <img src="@/assets/img/video.png" alt="" />
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around" gutter="10">
      <van-col>
        <span>1#塔吊</span>
      </van-col>
      <van-col>
        <span> 2#塔吊 </span>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around" gutter="10">
      <van-col>
        <img src="@/assets/img/video.png" alt="" />
      </van-col>
      <van-col>
        <img src="@/assets/img/video.png" alt="" />
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around" class="aibutton">
      <van-col>
        <van-button type="normal" class="button" @click="monAI"
          >AI智能</van-button
        >
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { getystoken, getysdevice,getyschannel,getysvideo } from "@/api/ysToken.js";
import { setSession } from "@/utils/storage";
export default {
  mounted() {
    this.getysdevice();
    this.getystoken();
    this.getyschannel();
  },
  name: "Login",
  data() {
    return {
      token: "",
    };
  },
  methods: {
    watchvideo() {
      this.$router.push("/monitoring/video");
    },
    monAI() {
      this.$router.push("/monitoring/AI");
    },
    async getystoken() {
      let key = {
        appId: 25620091702,
        secretKey: "58e5c5df62014404e5a249250fe3d641",
      };
      const { resultcode, data } = await getystoken(key);
      console.log(data);
      this.token = data.accessToken;
      console.log(this.token)
      setSession("token", this.token);
  },
    async getysdevice() {
      let page = {
        pageNo: 1,
        pageSize: 10,
      };
      const { resultcode, data } = await getysdevice(page);
      console.log(data);
    },
    
    async getyschannel() {
      let page = {
        deviceSerial:"210235C344F194000002",
        pageNo: 1,
        pageSize: 10,
      };
      const { resultcode, data } = await getyschannel(page);
      console.log(data);
    },
  },
};
</script>

<style lang="less" scoped>
#box {
  width: 100%;
  height: 100%;
}
.aibutton {
  position: fixed;
  width: 100%;
  bottom: 100px;
}
.button {
  width: 200px;
  height: 50px;
}
</style>
