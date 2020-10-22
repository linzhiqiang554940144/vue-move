<template>
  <video
    ref="videoRef"
    style="object-fit:fill;width:100%;height:100%"
    controls
    class="video-js vjs-default-skin vjs-big-play-centered"
  >
    <source :src="url" />
  </video>
</template>

<script>
import videojs from "video.js";
// import "videojs-flash"
// import "videojs-contrib-hls";
import "video.js/dist/video-js.css";

export default {
  name: "Player",
  props: {
    url: {
      type: String,
      //湖南卫视
      default: "rtmp://58.200.131.2:1935/livetv/hunantv",
    },
  },
  data() {
    return {
      player: {},
      defaultOpts: {
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        techOrder: ['flash'],
        notSupportedMessage:
          "此视频暂无法播放，检查设备状态是否正常或请查看是否安装flash",
      },
    };
  },
  mounted() {
    this.initVideo();
  },
  beforeDestroy() {
    if (this.player != null) {
      this.player.dispose();
      this.player = null;
    }
  },
  methods: {
    initVideo() {
      this.player = videojs(this.$refs.videoRef, this.defaultOpts);
    },
  },
};
</script>

<style>
</style>