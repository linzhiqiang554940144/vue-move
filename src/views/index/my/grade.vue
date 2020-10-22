<template>
<div id="box">
    <nav-bar title="成绩单"></nav-bar>
    <div class="content">
        <div class="item">
            <div>
                <span>分数</span>
            </div>
            <div>
                <span>时间</span>
            </div>
        </div>
        <van-divider />
        <div class="item">
            <div>
                <span>80</span>
            </div>
            <div>
                <span>2020-9-28</span>
            </div>
        </div>
        <van-divider />
        <div class="item">
            <div>
                <span>80</span>
            </div>
            <div>
                <span>2020-9-29</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import navBar from "@/components/common/navbar";
export default {
    name: "Grade",
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
    padding: 20px;

    .item {
        width: 100%;

        div {
            display: inline-block;
            width: 50%;
            text-align: center;
        }
    }
}
</style>
