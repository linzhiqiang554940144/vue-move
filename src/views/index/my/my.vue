<template>
<div id="box">
    <div class="user-box">
        <div class="userLog">
            <van-image round width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="info-box">
            <span>shy</span>
            <span>搬砖</span>
            <span>150****310</span>
        </div>
    </div>
    <van-divider />
    <div class="content">
        <div class="mg-lt15">
            <van-icon size="16" name="comment-o" /><span>消息</span>
        </div>
        <van-divider />
        <div class="mg-lt15" @click="$router.push('education')">
            <van-icon size="16" name="todo-list-o" /><span>教育</span>
        </div>
        <van-divider />
        <div class="mg-lt15" @click="$router.push('salary')">
            <van-icon size="16" name="bill-o" /><span>工资条</span>
        </div>
        <van-divider />
    </div>
</div>
</template>

<script>
export default {
    name: "My",
    data() {
        return {};
    },
    methods: {},
};
</script>

<style lang="less" scoped>
#box {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.user-box {
    margin-top: 20px;
    display: flex;
    align-items: center;

    .info-box {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
    }
}

.content {
    div {
        display: flex;
        align-items: center;

        span {
            margin-left: 10px;
        }
    }
}

.userLog {
    padding-left: 10vw;
}
</style>
