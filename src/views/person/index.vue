<script setup lang='ts'>
import breadCrumb from '@/components/bread_crumb.vue';
import { ref } from 'vue';
const breadcrumb = ref()
const item = {
    first: '个人中心',
}    
</script>

<template>
    <breadCrumb :item="item" ref="breadcrumb" />
    个人中心
        
</template>
    

    
<style lang="scss" scoped>
    
</style>