<template>
<div class='navBox'>
    <van-nav-bar :title="title" :left-text="backText" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
            <slot></slot>
        </template>
    </van-nav-bar>
</div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        backText: {
            type: String,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return "返回";
            },
        },
        title: {
            type: String,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return "";
            },
        },
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight() {
            this.$emit('onClick', '11')
        },
    },
};
</script>

<style lang="less" scoped>
.navBox {
    margin-bottom: 20px;
}
</style>
