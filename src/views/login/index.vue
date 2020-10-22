<template>
  <div id="box">
    <div class="header van-ellipsis">
      <p>登录</p>
    </div>
    <div class="section">
      <div class="userBox">
        <div class="label">用户名</div>
        <van-field v-model="userName" placeholder="请输入用户名" />
        <div class="label">密码</div>
        <van-field class="pwd" v-model="passWord" placeholder="请输入密码" />
        <div class="footer">
          <!-- <div class="buttom">登录</div> -->
          <van-button
            type="info"
            color="#0072FF"
            @click="login"
            size="large"
            class="logBut"
            >登录</van-button
          >
        </div>
        <div class="forget-box">
          <van-checkbox v-model="checked" icon-size="14px" shape="square"
            >记住密码</van-checkbox
          >
          <span>|</span>
          <span>忘记密码</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { formatDayTime } from "@/utils/until";
import { loginApi } from "@/api/login.js";
import { setSession } from "@/utils/storage";
import { 
  mapActions 
} from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      passWord: "",
      checked: false,
    };
  },
  created() {},
  methods: {
    async login() {
      if (!this.userName || !this.passWord)
        return this.$toast.fail("用户名或密码不能为空");
      // if (this.passWord.length < 4)
      //   return this.$toast.fail("密码长度必须大于4位");
      this.$toast.loading("验证中");
      let params = {
        username: this.userName,
        password: this.passWord,
        rememberMe: this.checked?'1':'0',
      };
      const { resultCode, data } = await loginApi(params);
      if (resultCode === 0) {
        this.$toast.success("登陆成功");
        setSession("token", data.token);
        this.$router.push("/home");
      } else {
        this.$toast.fail({ message: "用户名或密码错误!", key: "login" });
      }
    },
  },
};
</script>

<style lang="less" scoped>
#box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header {
  margin-top: -80px;
  p {
    text-align: center;
  }
}
.section {
  margin-top: 50px;
  .forget-box {
    text-align: right;
    font-size: 14px;
    padding: 0 40px;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .userBox {
    padding: 0px 20px;
    .label {
      font-size: 16px;
    }
    // .pwd /deep/ .van-field__value {
    //   border-bottom: 0.026667rem solid #ebedf0;
    // }
  }
}
.footer {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  .buttom {
    font-size: 16px;
  }
  .logBut {
    height: 40px;
    border-radius: 5px;
  }
}
</style>
