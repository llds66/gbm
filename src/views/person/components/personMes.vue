<script setup lang='ts'>
import { ref } from 'vue';
import { userStore } from '@/store/user'
import { changeUser } from '@/api/user'
import { ElMessage } from 'element-plus'

interface User {
    account: string,
    identity: string,
    name: string,
    sex: string,
    email: string
    department: string
}
const userData = ref<User>({
    account: '',
    identity: '',
    name: '',
    sex: '',
    email: '',
    department: ''
})
const store = userStore()
userData.value = store.userInfo as any

const handleSexChange = (newSex: '0' | '1') => {
    userData.value.sex = newSex;
}

// 修改用户信息事件
const handleChange = async () => {
    const res = await changeUser(userData.value) as any
    console.log('修改用户信息res', res);

    if (res.code === 0) {
        ElMessage({
            message: res.message,
            type: 'success',
            plain: true
        })
    }
    store.setUser(userData.value) // 更新pinia用户信息
}
</script>

<template>
    <el-form :model="userData" style="max-width: 400px" label-position="top">
        <el-form-item label="账号名称">
            <el-input v-model="userData.account" />
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="userData.name" />
        </el-form-item>
        <el-form-item label="用户类型">
            <el-input v-model="userData.identity" />
        </el-form-item>
        <el-form-item label="所属部门">
            <el-input v-model="userData.department" />
        </el-form-item>
        <!-- TODO 感觉处理的不好 -->
        <el-form-item label="性别">
            <el-radio-group v-model="userData.sex" @change="handleSexChange">
                <el-radio :label="'0'">女</el-radio>
                <el-radio :label="'1'">男</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input v-model="userData.email" />
        </el-form-item>
    </el-form>
    <el-row class="btn_box">
        <el-button type="info" @click="handleChange">确认修改</el-button>
    </el-row>
</template>



<style scoped lang="scss">
.btn_box {
    max-width: 400px;
    display: flex;
    justify-content: center;
}
</style>