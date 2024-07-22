<script setup lang="ts">
import { Menu as IconMenu } from '@element-plus/icons-vue'
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <el-menu default-active="home" class="el-menu-vertical-demo" router>
                    <el-menu-item index="home">
                        <el-icon><icon-menu /></el-icon>
                        <span>首页</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss"></style>
