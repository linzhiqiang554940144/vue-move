<template>
  <div>
    <van-nav-bar
      title="木工班仓库库存"
      left-arrow
      @click-left="onreturn"
      @click-right="add"
    >
      <template #right>
        <van-icon name="plus" size="18" />
      </template>
    </van-nav-bar>
    <van-field
      v-model="search"
      center
      clearable
      left-icon="search"
      placeholder="钢筋"
    >
      <template #button>
        <van-button size="small" type="primary">筛选</van-button>
      </template>
    </van-field>
    <van-row type="flex" justify="space-around" class="title">
      <van-col>名称</van-col>
      <van-col>型号</van-col>
      <van-col>库存</van-col>
    </van-row>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->

        <van-row type="flex" justify="space-around" class="content">
          <van-col>钢筋</van-col>
          <van-col>50mm</van-col>
          <van-col>50</van-col>
        </van-row>
      </van-list>
    </van-pull-refresh>
    <van-tabs @click="onClick" class="tabs">
      <van-tab title="物料申请"></van-tab>
      <van-tab title="工具借用"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      search: "",
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    onreturn() {
      this.$router.push("/warehouse");
    },
    add() {
      this.$router.push("/warehouse/acceptance")
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    onClick(name, title) {
      Toast(title);
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  height: 100%;
  width: 100%;
}
.title {
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  margin-top: 40px;
  border-bottom: 1px solid #000;
}
.content {
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #000;
}
.list {
  padding-left: 10px;
  padding-right: 10px;
  height: 400px;
}
.tabs{
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>>