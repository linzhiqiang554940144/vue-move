<template>
  <div>
    <van-nav-bar title="监控视频" left-arrow @click-left="onreturn">
    </van-nav-bar>
    <van-row type="flex" justify="end">
      <van-col class="tabs">
        <a href="">回放</a>
        <a href="">直播</a>
      </van-col>
    </van-row>
    <van-row type="flex" justify="space-around" class="video">
      <van-col>
        <!-- <video controls="controls">
          <source src="rtmp://livepull1.uniview.com/live/210235c344f194000002000004282710?txTime=5F738831&txSecret=53f015ce9e92cd60b72ded3353710e83&codec=264" type="video/flv" />
          Your browser does not support the video tag.
        </video> -->
        <player url="http://livepull1.uniview.com/live/210235c344f194000002000004282710.m3u8?txTime=5F738D10&txSecret=0b5c63023df4cf9f2e0bdb0f2225ac5a&codec=264"></player>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { getysvideo,getysvideostart } from "@/api/ysToken.js";
import player from "@/components/common/Player"

export default {
  components:{
    player
  },
  mounted(){
    this.getysvideo();
  },
  created(){
    this.getysvideostart()

  },
  methods: {
    onreturn() {
      this.$router.push("/monitoring");
    },
    async getysvideo() {
      let page = {
        deviceSerial: "210235C344F194000002",
        channelNo: 0,
        streamIndex: 0,
        streamType: "live",
      };
      const { resultcode, data } = await getysvideo(page);
      console.log(data);
    
    },
    
    async getysvideostart() {
      let page = {
        videoUrl:"http://livepull1.uniview.com/live/210235c344f194000002000004282710.m3u8?txTime=5F738D10&txSecret=0b5c63023df4cf9f2e0bdb0f2225ac5a&codec=264"
      };
      const { resultcode, data } = await getysvideostart(page);
      console.log(data);
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
  padding-left: 20px;
  a {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 15px;
    color: cornflowerblue;
  }
}
</style>