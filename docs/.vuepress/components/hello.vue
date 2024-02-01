<template>
    <div>
        <ClientOnly>
            <el-button type="primary">element-ui 原始按钮</el-button>
            <el-button type="success">element-ui 成功按钮</el-button>
        </ClientOnly>
        <div class="box-vue" @click="handleClick">Vue - {{ message }}</div>
    </div>
</template>
<script>
export default {
    data: () => ({ message: "测试点击我" }),
    methods: {
        handleClick() {
            this.$alert("测试", "提示");
        },
    },
};
</script>
<style>
.box-vue {
    color: red;
}
</style>