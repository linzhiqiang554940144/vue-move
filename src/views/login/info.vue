<template>
  <div>
    <van-nav-bar title="完善个人信息" />
    <div class="top">
      <van-field v-model="selftel" type="selftel" label="手机号" />
      <van-field v-model="name" label="紧急联系人" />
      <van-field v-model="othertel" type="tel" label="联系人电话" />
    </div>
    <div class="middle">
      <van-field
        readonly
        clickable
        label="分包单位"
        :value="subCon"
        placeholder="分包单位"
        @click="showsubCon = true"
      />
      <van-popup v-model="showsubCon" round position="bottom">
        <van-picker
          show-toolbar
          :columns="subConcolumns"
          @cancel="showsubCon = false"
          @confirm="subConConfirm"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        label="班组"
        :value="team"
        placeholder="班组"
        @click="showteam = true"
      />
      <van-popup v-model="showteam" round position="bottom">
        <van-picker
          show-toolbar
          :columns="teamcolumns"
          @cancel="showteam = false"
          @confirm="teamConfirm"
        />
      </van-popup>
      <van-field
        readonly
        clickable
        label="工种"
        :value="typeWork"
        placeholder="工种"
        @click="showtypeWork = true"
      />
      <van-popup v-model="showtypeWork" round position="bottom">
        <van-picker
          show-toolbar
          :columns="typeWorkcolumns"
          @cancel="showtypeWork = false"
          @confirm="typeWorkConfirm"
        />
      </van-popup>
      <van-cell-group class="checkbox">
        <van-radio-group v-model="radio" direction="horizontal">
          <span>是否参加入场三级教育</span>
          <van-radio name="1">是</van-radio>
          <van-radio name="2">否</van-radio>
        </van-radio-group>
      </van-cell-group>
    </div>
    <div class="bottom">
      <van-field v-model="bank" label="银行" />
      <van-field v-model="cardbank" label="开户银行" />
      <van-field v-model="banknum" type="number" label="银行卡号" />
    </div>
    <van-button class="nextbutton" type="default">下一步</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bank: "",
      cardbank: "",
      banknum: "",
      selftel: "",
      name: "",
      othertel: "",
      radio: "1",
      typeWork: "",
      showtypeWork: false,
      typeWorkcolumns: ["泥工", "瓦工", "电工"],
      team: "",
      showteam: false,
      teamcolumns: ["一组", "二组", "三组", "四组"],
      subCon: "",
      showsubCon: false,
      subConcolumns: ["杭州", "宁波", "温州"],
    };
  },
  methods: {
    subConConfirm(value) {
      this.subCon = value;
      this.showsubCon = false;
    },
    teamConfirm(value) {
      this.team = value;
      this.showteams = false;
    },
    typeWorkConfirm(value) {
      this.typeWork = value;
      this.showtypeWork = false;
    },
  },
};
</script>

<style lang="less" scoped>
.checkbox {
  height: 24px;
  padding: 10px 16px;
  span {
    padding-right: 20px;
  }
}
.nextbutton {
  display: block;
  text-align: center;
  margin: 0 auto;
}
</style>>
