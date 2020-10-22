<template>
<div>
    <!--
    <van-dialog v-model="text" :title="title" :show-cancel-button="showCancel" :confirm-button-text="confirmText" @confirm="confirms">
    </van-dialog>
</div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        title: {
            type: String,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return "标题";
            },
        },
        showCancel: {
            type: Boolean,
            default: function () {
                return true;
            },
        },
        confirmText: {
            type: String,
            default: function () {
                return "确定";
            },
        },
        show: {
            type: Boolean,
        },
    },
    computed: {
        text: function () {
            return this.show
        }
    },
    methods: {
        confirms() {
            this.$emit("confirms", "提交");
        },
    },
};
</script>

<style lang="less" scoped>
</style>
