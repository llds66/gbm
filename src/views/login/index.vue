<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { register, login } from '@/api/login.js'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
// tab
const activeName = ref('login')
const handleClick = () => {
    console.log('11')
}

interface formData {
    account: number
    password: string
    repassword?: string
}
// 注册
const regData: formData = reactive({
    account: null,
    password: '',
    repassword: ''
})
const Register = async () => {
    const res = await register(regData)
    // console.log(res)
    const msg = res.message
    if (msg == '账号已存在') {
        ElMessage({
            message: '账号已存在.',
            type: 'warning',
            plain: true
        })
    } else if (msg == '注册成功') {
        ElMessage({
            message: '账号注册成功.',
            type: 'success',
            plain: true
        })
    }
}
// 登录
const loginData: formData = reactive({
    account: null,
    password: ''
})
const Login = async () => {
    const res = await login(loginData)
    console.log(res)
    if (res.status == 0) {
        ElMessage({
            message: '登录成功.',
            type: 'success',
            plain: true
        })
        router.push('/home')
    } else if (res.status == 1) {
        ElMessage({
            message: '登录失败 请检查用户名或者密码',
            type: 'warning',
            plain: true
        })
    }
}
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-main class="main_container">
                <el-card style="max-width: 480px; margin: 30px auto">
                    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch>
                        <el-tab-pane label="登录" name="login">
                            <!-- 登录表单 -->
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
                        <el-tab-pane label="注册" name="register">
                            <!-- 注册表单 -->
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
                                    <el-button type="primary" plain style="width: 111px" @click="Register">注册</el-button>
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
