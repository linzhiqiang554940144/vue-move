<template>
  <div id="box">
    <div class="header">
      <div class="header-box">
        <div class="title-box">
          <div class="num">80</div>
          <div class="pm">PM9.5</div>
        </div>
        <div class="line"></div>
        <div class="title-box">
          <div class="num">80</div>
          <div class="pm">噪声db</div>
        </div>
      </div>
      <div class="progress-box">
        <!-- <van-steps active-color='#FDE236' :active="active">
          <van-step>买家下单</van-step>
          <van-step>商家接单</van-step>
          <van-step>买家提货</van-step>
          <van-step>交易完成</van-step>
        </van-steps>-->
        <div class="progress-top" :style="{width:progressList.length*50+'vw'}">
          <div>
            <span v-for="(item,index) in progressList" :key="index">{{item.name}}</span>
          </div>
          <van-progress stroke-width="2px" color="#FDE236" :show-pivot="false" :percentage="50" />
          <div class="progress-top">
            <span v-for="(item,index) in progressList" :key="index">{{item.time}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="subject">
      <div class="header-box">
        <div class="item-box lt">
          <van-icon size="34px" name="phone-o" />
          <span>通讯录</span>
        </div>
        <div class="item-box rt" @click="$router.push('plan')">
          <van-icon size="34px" name="sign" />
          <span>工地计划</span>
        </div>
      </div>
      <div class="sub-box">
        <div class="item">
          <div class="top">
            <van-icon size="24px" color="#2E7FFF" name="diamond-o" />
            <span>安全隐患统计</span>
          </div>
          <div class="list-box">
            <ul>
              <li>
                <span style="    text-align: left;">已解决</span>
                <span>30</span>
              </li>
              <li>
                <span style="    text-align: left;">未解决</span>
                <span>30</span>
              </li>
              <li>
                <span style="    text-align: left;">逾期未解决</span>
                <span>50</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="top">
            <van-icon size="24px" color="#2E7FFF" name="friends-o" />
            <span>人员统计</span>
          </div>
          <div class="list-box">
            <ul>
              <li>
                <span style="    text-align: left;">在岗人数</span>
                <span>30</span>
              </li>
              <li>
                <span style="    text-align: left;">今日出勤</span>
                <span>30</span>
              </li>
              <li>
                <span style="    text-align: left;">出勤率</span>
                <span>50</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="top">
            <van-icon size="24px" color="#2E7FFF" name="apps-o" />
            <span>库存</span>
          </div>
          <div class="list-box">
            <ul>
              <li>
                <span style="    text-align: left;">已解决</span>
                <span>30</span>
              </li>
              <li>
                <span style="    text-align: left;">未解决</span>
                <span>30</span>
              </li>
              <li>
                <span style="    text-align: left;">逾期未解决</span>
                <span>50</span>
              </li>
              <li>
                <span style="    text-align: left;">逾期未解决</span>
                <span>50</span>
              </li>
              <li>
                <span style="    text-align: left;">逾期未解决</span>
                <span>50</span>
              </li>
              <li>
                <span style="    text-align: left;">逾期未解决</span>
                <span>50</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="top">
            <van-icon size="24px" color="#2E7FFF" name="warn-o" />
            <span>未消预警</span>
          </div>
          <div class="list-box">
            <ul>
              <li>
                <span style="    text-align: left;">已解决</span>
                <span>30</span>
              </li>
              <li>
                <span style="    text-align: left;">未解决</span>
                <span>30</span>
              </li>
              <li>
                <span style="    text-align: left;">逾期未解决</span>
                <span>50</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { homeApi } from "@/api/home.js";
export default {
  name: "Login",
  data() {
    return {
      active: 1,
      progressList: [
        { name: "基坑打桩", time: "2020-09-16 -> 2020-10-16" },
        { name: "基坑打桩", time: "2020-09-16 -> 2020-10-16" },
        { name: "基坑打桩", time: "2020-09-16 -> 2020-10-16" },
      ],
    };
  },
  created () {
    console.log('1')
  },
  mounted(){
    this.sethomelist()
  },
  methods: {
    async sethomelist(){
      const { resultCode,data } = await homeApi()
      console.log(data)
    }
  },
};
</script>

<style lang="less" scoped>
#box {
  width: 100%;
  height: 100%;
}
.header {
  height: 250px;
  width: 100%;
  background: url("~@/assets/img/homeHeader.png") 100% 100% repeat;
  background-position-y: 67%;
  .header-box {
    height: 160px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    .title-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      .num {
        font-size: 50px;
      }
      .pm {
        font-size: 12px;
      }
    }
    .line {
      width: 1px;
      height: 70px;
      background-color: #3f8fff;
    }
  }
  .progress-box {
    overflow-y: hidden;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    scrollbar-width: none;
    .progress-top {
      div {
        display: flex;
        justify-content: space-around;
      }
      span {
        color: #fff;
        font-size: 12px;
      }
    }
    .van-progress {
      margin: 5px 0;
    }
  }
}
.subject {
  padding: 10px 20px;
  background-color: #ffffff;
  .header-box {
    display: flex;
    justify-content: space-around;
    font-size: 19px;
    color: #fff;
    .item-box {
      width: 42vw;
      height: 11vh;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-left: 10px;
      }
    }
    .lt {
      border-radius: 10px;
      background: url("~@/assets/img/homeLT.png") 100% 100% repeat;
    }
    .rt {
      border-radius: 10px;
      background: url("~@/assets/img/homeRT.png") 100% 100% repeat;
    }
  }
  .sub-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 60px;
    .item {
      width: 43vw;
      height: 19vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin: 8px 0;
      border-radius: 10px;
      box-shadow: 1px 1px 16px #f2f2f2;
      .top {
        font-size: 14px;
        display: flex;
        align-items: center;
        width: 115px;
        span {
          font-weight: bold;
          &:nth-child(2) {
            margin-left: 10px;
            white-space: nowrap;
          }
        }
      }
      .list-box {
        font-size: 12px;
        width: 120px;
        ul {
          overflow-y: auto;
          overflow-x: hidden;
          height: 70px;
          &::-webkit-scrollbar {
            display: none; /* Chrome Safari */
          }
          scrollbar-width: none;
        }
        li {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3px;
          span {
            &:nth-child(2) {
              font-weight: bold;
            }
            &:nth-child(1) {
              color: #bababa;
            }
          }
        }
      }
    }
  }
}
</style>
