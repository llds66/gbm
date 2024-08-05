<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { register, login, forgetPassword } from '@/api/login.js'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
import {userStore} from '@/store/user'

// tab
const activeName = ref('login')
const handleClick = () => {
    console.log('tab')
}

interface formData {
    account: number
    password?: string
    repassword?: string,
    email?: string,
    newPassword?: string
}
// 注册
const regData: formData = reactive({
    account: null,
    password: '',
    repassword: ''
})
const Register = async () => {
    const res = await register(regData) as any
    console.log('注册res:', res)
    if (res.code == 1) {
        ElMessage({
            message: res.message,
            type: 'warning',
            plain: true
        })
    } else if (res.code == 0) {
        ElMessage({
            message: res.message,
            type: 'success',
            plain: true
        })
    }
}
// 登录
const store:any = userStore()
const loginData: formData = reactive({
    account: null,
    password: ''
})
const Login = async () => {
    const res = await login(loginData) as any
    // console.log('登录res:', res)
    console.log('登录res:', res)
    if (res.code == 0) {
        ElMessage({
            message: res.message,
            type: 'success',
            plain: true
        })
        await store.setToken(res.token)
        await store.getUserInfo()
        router.push('/home')
    } else if (res.code == 1) {
        ElMessage({
            message: res.message,
            type: 'warning',
            plain: true
        })
    }
}

// 重置密码
const forgetPasswordData: formData = reactive({
    account: null,
    email: '',
    newPassword: ''
})
const handleForgetPassword = async () => {
    const res = await forgetPassword(forgetPasswordData) as any
    console.log('重置密码res:', res)
    if (res.code == 0) {
        if (res.code == 0) {
            ElMessage({
                message: res.message,
                type: 'success',
                plain: true
            })
        } else if (res.code == 1) {
            ElMessage({
                message: res.message,
                type: 'warning',
                plain: true
            })
        }
    }
}
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-main class="main_container">
                <el-card style="max-width: 480px; margin: 30px auto">
                    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch>
                        <!-- 登录 -->
                        <el-tab-pane label="登录" name="login">
                            <el-form :model="loginData" label-width="auto" style="max-width: 600px; height: 162px">
                                <el-form-item label="用户名" style="margin-top: 20px">
                                    <el-input v-model="loginData.account" placeholder="请输入账号" />
                                </el-form-item>
                                <el-form-item label="密码">
                                    <el-input v-model="loginData.password" placeholder="请输入密码" />
                                </el-form-item>
                                <div class="login-btn" style="display: flex; justify-content: center">
                                    <el-button type="primary" plain style="width: 111px" @click="Login">登录</el-button>
                                </div>
                            </el-form>
                        </el-tab-pane>
                        <!-- 注册 -->
                        <el-tab-pane label="注册" name="register">
                            <el-form :model="regData" label-width="auto" style="max-width: 600px">
                                <el-form-item label="用户名">
                                    <el-input v-model="regData.account" placeholder="请输入账号" />
                                </el-form-item>
                                <el-form-item label="密码">
                                    <el-input v-model="regData.password" placeholder="请输入密码" />
                                </el-form-item>
                                <el-form-item label="确认密码">
                                    <el-input v-model="regData.repassword" placeholder="请再次输入密码" />
                                </el-form-item>
                                <div class="reg-btn" style="display: flex; justify-content: center">
                                    <el-button type="primary" plain style="width: 111px"
                                        @click="Register">注册</el-button>
                                </div>
                            </el-form>
                        </el-tab-pane>
                        <!-- 重置密码 -->
                        <el-tab-pane label="重置密码" name="forgetPassword">
                            <el-form :model="forgetPasswordData" label-width="auto" style="max-width: 600px">
                                <el-form-item label="用户名">
                                    <el-input v-model="forgetPasswordData.account" placeholder="请输入账号" />
                                </el-form-item>
                                <el-form-item label="邮箱">
                                    <el-input v-model="forgetPasswordData.email" placeholder="请输入邮箱" />
                                </el-form-item>
                                <el-form-item label="确认密码">
                                    <el-input v-model="forgetPasswordData.newPassword" placeholder="请输入新密码" />
                                </el-form-item>
                                <div class="reg-btn" style="display: flex; justify-content: center">
                                    <el-button type="primary" plain style="width: 111px"
                                        @click="handleForgetPassword">重置密码</el-button>
                                </div>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<style scoped lang="scss">
.main_container {
    width: 100%;
    height: 100vh;
}
</style>
