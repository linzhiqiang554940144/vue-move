<template>
<div id="box">
    <nav-bar title="教育"></nav-bar>
    <div class="content">
        <div class="mg-lt15">
            <van-icon size="16" name="comment-o" /><span>学习培训</span>
        </div>
        <van-divider />
        <div class="mg-lt15" @click="$router.push('education')">
            <van-icon size="16" name="todo-list-o" /><span>考试</span>
        </div>
        <van-divider />
        <div class="mg-lt15" @click="$router.push('grade')">
            <van-icon size="16" name="bill-o" /><span>成绩</span>
        </div>
        <van-divider />
    </div>
</div>
</template>

<script>
import navBar from "@/components/common/navbar";
export default {
    name: "Education",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {},
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

.content {
    div {
        display: flex;
        align-items: center;

        span {
            margin-left: 10px;
        }
    }
}
</style>
