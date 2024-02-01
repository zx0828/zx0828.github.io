<template>
    <div style="border: 1px solid skyblue;">
        <ClientOnly>
            <h1>this is demo</h1>
            <div>{{ msg }}</div>
        </ClientOnly>
    </div>
</template>

<script lang="ts" >
export default {
    name: 'demo1',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        test() {
            console.log('test')
        }
    }
}
</script>
<style lang="less" scoped>
h1 {
    color: red;
}
</style>