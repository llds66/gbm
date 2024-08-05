<template>
    <div class="bread_crumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ props.item.first }}</el-breadcrumb-item>
            <el-breadcrumb-item v-if="props.item.second">{{ props.item.second }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup lang='ts'>
const props = defineProps(['item'])
</script>

<style lang="scss" scoped>

</style>