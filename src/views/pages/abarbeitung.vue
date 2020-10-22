<template>
<div id="box" class="back-gray">
    <nav-bar title="沙井项目"></nav-bar>
    <div>
        <van-form ref="froms" @submit="onSubmit">
            <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        </van-form>
        <div class="footer">
            <van-button class="btn" type="info" @click="$refs.froms.submit()">整改</van-button>
            <van-button class="btn" type="default">取消</van-button>
        </div>
    </div>
</div>
</template>

<script>
import navBar from "@/components/common/navbar";
export default {
    name: "Abarbeitung",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        onSubmit(values) {
            console.log("submit", values);
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

.footer {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    .btn {
        width: 40vw;
        border-radius: 5px;
        height: 5vh;
    }
}
</style>
