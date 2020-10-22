<template>
  <div id="box">
    <nav-bar title="工地计划"></nav-bar>
    <section>
      <div class="list-box">
        <span>计划名称：基坑打桩</span>
        <div class="item">
          <span>时间节点：</span>
          <span>2020-09-05 至 2022-10-01</span>
          <van-icon size="16px" name="close" />
        </div>
      </div>
      <div class="list-box">
        <span>计划名称：基坑打桩</span>
        <div class="item">
          <span>时间节点：</span>
          <span>2020-09-05 至 2022-10-01</span>
          <van-icon size="16px" name="close" />
        </div>
      </div>
      <div class="list-box">
        <span>计划名称：基坑打桩</span>
        <div class="item">
          <span>时间节点：</span>
          <span>2020-09-05 至 2022-10-01</span>
          <van-icon size="16px" name="close" />
        </div>
      </div>
    </section>
    <footer>
      <van-icon name="add-o" @click="$router.push('addPlan')" />
    </footer>
  </div>
</template>

<script>
import navBar from '@/components/common/navbar'
import { getPlan } from "@/api/gdplan.js";
export default {
  name: "gdplan",
  data() {
    return {
      planList:null,
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData(){
      // this.planList = await getPlan()
    }
  },
  components: {
    navBar
  },
};
</script>

<style lang="less" scoped>
#box {
  width: 100%;
  height: 100%;
}
section {
  margin-top: 60px;
}
.list-box {
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  margin: 10px 0px;
  border-bottom: 1px solid #333333;
  .item {
    display: flex;
    align-items: center;
  }
}
footer {
  text-align: right;
  padding-right: 60px;
  margin-top: 20px;
}
</style>
