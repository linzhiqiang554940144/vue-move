<template>
  <div>
    <van-nav-bar title="AI智能" left-arrow @click-left="onreturn">
    </van-nav-bar>
    <van-field readonly clickable :value="value" @click="showPicker = true" />
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="dateonConfirm" />
    <van-card
      desc="来源：1#施工现场"
      tags="时间:2020-09-15"
      title="未穿戴反光衣"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="danger">时间:2020-09-15</van-tag>
      </template>
    </van-card>
    <van-card
      desc="来源：1#施工现场"
      tags="时间:2020-09-15"
      title="未穿戴反光衣"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="danger">时间:2020-09-15</van-tag>
      </template>
    </van-card>
    <van-card
      desc="来源：1#施工现场"
      tags="时间:2020-09-15"
      title="未穿戴反光衣"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="danger">时间:2020-09-15</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "全部",
      showPicker: false,
      columns: ["全部", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华", "衢州"],
      date: "",
      show: false,
    };
  },
  methods: {
    onreturn() {
      this.$router.push("/monitoring");
    },
    onConfirm(value) {
      this.value = value;
      console.log(value);
      this.showPicker = false;
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    dateonConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
};
</script>

<style>
</style>