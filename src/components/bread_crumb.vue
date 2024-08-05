<template>
    <div class="bread_crumb">
        <SvgIcon icon-name="icon1"></SvgIcon>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ props.item.first }}</el-breadcrumb-item>
            <el-breadcrumb-item v-if="props.item.second">{{ props.item.second }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup lang='ts'>
import SvgIcon from '@/components/SvgIcon.vue'
const props = defineProps(['item'])
</script>

<style lang="scss" scoped>
.bread_crumb {
    height: 30px;
    display: flex;
    align-items: center;
}
.el-breadcrumb{
    padding-left: 10px;
}
:deep(.el-breadcrumb_itme){
    height: 30px;
    font-size: 16px;
    line-height: 30px;
}
</style>