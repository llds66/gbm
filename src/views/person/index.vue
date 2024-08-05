<script setup lang='ts'>
import breadCrumb from '@/components/bread_crumb.vue';
import changePas from './components/changePas.vue';
import personMes from './components/personMes.vue';
import { ref } from 'vue';

// 面包屑 
const breadcrumb = ref()
const item = {
    first: '个人中心',
} 
// Tab
const activeName = ref('personMes');
</script>

<template>
    <breadCrumb :item="item" ref="breadcrumb" />
    <div class="common_wrapped">
        <div class="common_content">
            <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane label="个人信息" name="personMes">
                    <personMes/>
                </el-tab-pane>
                <el-tab-pane label="修改密码" name="changPas">
                    <changePas/>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>



<style lang="scss" scoped>
</style>