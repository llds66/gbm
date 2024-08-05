<script setup lang='ts'>
import {reactive } from 'vue';

interface user{
    account: string,
    identity: string,
    name: string,
    sex: string,
    email: string
}
const userData:user = reactive({
    account: '',
    identity: '',
    name: '',
    sex: '',
    email: ''
})
</script>

<template>
    <el-form :model="userData" style="max-width: 400px" label-position="top">
        <el-form-item label="账号名称">
            <el-input v-model="userData.account" />
        </el-form-item>
        <el-form-item label="用户类型">
            <el-input v-model="userData.identity" />
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="userData.name" />
        </el-form-item>
        <el-form-item label="性别">
            <el-input v-model="userData.sex" />
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input v-model="userData.email" />
        </el-form-item>
    </el-form>
</template>
    

    
<style scoped lang="scss">
    
</style>