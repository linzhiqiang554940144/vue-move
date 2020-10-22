<template>
<div id="box">
    <div class="text-center">事件</div>
    <div class="saction">
        <div @click="$router.push('patrol')">
            <van-divider content-position="left">安全巡查</van-divider>
        </div>
        <div>
            <van-divider content-position="left">安全监测</van-divider>
        </div>
        <div>
            <van-divider content-position="left">危险作业</van-divider>
        </div>
        <div>
            <van-divider content-position="left">社保维保</van-divider>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {};
    },
    created() {
        console.log("2");
    },
    methods: {},
    components: {},
};
</script>

<style lang="less" scoped>
#box {
    width: 100%;
    height: 100%;
}

.saction {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
}
</style>
