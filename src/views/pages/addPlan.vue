<template>
<div id="box" class="back-gray">
    <nav-bar title="添加工地计划"></nav-bar>
    <div class="saction">
        <van-form @submit="onSubmit">
            <van-field v-model="planName" name="name" label="计划名称" placeholder="计划名称" :rules="[{ required: true, message: '请输入计划名称' }]" />
            <van-field readonly clickable name="dateStar" :value="dateStar" label="开始时间" placeholder="点击选择开始时间" @click="showPickerStar = true" />
            <van-calendar v-model="showPickerStar" @confirm="onConfirmStar" />
            <van-field readonly clickable name="dateEnd" :value="dateEnd" label="结束时间" placeholder="点击选择结束时间" @click="showPickerEnd = true" />
            <van-calendar v-model="showPickerEnd" @confirm="onConfirmEnd" />
            <!-- <van-popup v-model="showPicker" position="bottom">
        </van-popup> -->
            <div style="margin: 16px">
                <van-button round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</div>
</template>

<script>
import navBar from "@/components/common/navbar";
export default {
    name: "addPlan",
    data() {
        return {
            planName: "",
            password: "",
            showPickerStar: false,
            showPickerEnd: false,
            dateStar: "",
            dateEnd: "",
        };
    },
    methods: {
        onSubmit(values) {
            console.log("submit", values);
        },
        onConfirmStar(date) {
            this.showPickerStar = false;
            this.dateStar = this.formatDate(date);
        },
        onConfirmEnd(date) {
            this.showPickerEnd = false;
            this.dateEnd = this.formatDate(date);
        },
        formatDate(date) {
            return `${date.getMonth() + 1}/${date.getDate()}`;
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

.saction {
    margin-top: 50px;
}
</style>
