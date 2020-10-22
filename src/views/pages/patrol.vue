<template>
<div id="box" class="back-gray">
    <nav-bar title="安全巡查" @onClick="add">
        <template>
            <van-icon size="20px" name="add-o" />
        </template>
    </nav-bar>
    <van-tabs v-model="activeName">
        <van-tab title="未解决" name="a">
            <div class="list-box">
                <div class="item">
                    <div class="title-box mg-bt15">
                        <span class="font-gray mg-rt15">标题</span>
                        <span>沙井项目</span>
                    </div>
                    <div class="title-box mg-bt15">
                        <span class="font-gray mg-rt15">整改时限</span>
                        <span>2020-09-04</span>
                    </div>
                    <van-divider />
                    <div class="text-center tc-red">超时</div>
                </div>
            </div>
            <div class="list-box">
                <div class="item" @click="$router.push('abarbeitung')">
                    <div class="title-box mg-bt15">
                        <span class="font-gray mg-rt15">标题</span>
                        <span>沙井项目</span>
                    </div>
                    <div class="title-box mg-bt15">
                        <span class="font-gray mg-rt15">整改时限</span>
                        <span>2020-09-04</span>
                    </div>
                    <van-divider />
                    <div class="text-center tc-red" @click.stop="show = true">驳回</div>
                </div>
            </div>
        </van-tab>
        <van-tab title="已解决" name="b">已解决</van-tab>
    </van-tabs>
    <van-dialog v-model="show" title="标题" show-cancel-button confirm-button-text="提交">
        <template>
            <div class="pop-box">
                <div class="item">
                    <div class="font-gray text-nowrap title">延期时间</div>
                    <van-field @click="calendarBtn = true" v-model="date" placeholder="请选择时间" border readonly center right-icon="notes-o" />
                </div>
                <div class="item">
                    <div class="font-gray text-nowrap title">延期原因</div>
                    <van-field v-model="msg" placeholder="请输入延期原因" border center />
                </div>
            </div>
        </template>
    </van-dialog>
    <van-calendar color='#0088cc' v-model="calendarBtn" @confirm="onConfirm" />
</div>
</template>

<script>
import navBar from "@/components/common/navbar";
export default {
    name: "Patrol",
    data() {
        return {
            activeName: "a",
            show: false,
            date: null,
            calendarBtn: false,
            msg: ''
        };
    },
    methods: {
        add(data) {
            console.log("data", data);
        },
        formatDate(date) {
            return `${date.getMonth() + 1}-${date.getDate()}`;
        },
        onConfirm(date) {
            this.calendarBtn = false;
            this.date = this.formatDate(date);
        },
    },
    components: {
        navBar,
    },
};
</script>

<style lang="less" scoped>
#box {
    width: 100%;
    height: 100%;
}

.list-box {
    background-color: #fff;
    margin: 20px;
    border-radius: 5px;
    padding: 15px;
}

.pop-box {
    margin: 20px;
    padding: 10px;

    .item {
        display: flex;
        align-items: center;

        .title {
            width: 30vw;
        }
    }
}
</style>
