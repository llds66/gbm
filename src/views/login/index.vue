<script lang="ts" setup>
import { ref } from 'vue'
const activeName = ref('login')

const handleClick = ()=>{
  console.log("11");
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!-- <el-header>登录</el-header> -->
      <el-main class="main_container">
        <el-card style="max-width: 480px;margin: 30px auto;">
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" stretch >
            <el-tab-pane label="登录" name="login">登录</el-tab-pane>
            <el-tab-pane label="注册" name="register">注册</el-tab-pane>
          </el-tabs>
        </el-card>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<style scoped lang='scss'>
.main_container {
  width: 100%;
  height: 100vh;
}
</style>
