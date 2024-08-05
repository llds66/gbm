<script setup lang="ts">
import { Menu as IconMenu, ArrowDown } from '@element-plus/icons-vue'
import { userStore } from '@/store/user';
import { useRouter } from 'vue-router';

const router = useRouter()
const store:any = userStore()
const logout = async ()=>{
    await store.logout()
    router.push('/')
}
</script>

<template>
    <div class="common-layout">
        <el-container style="height: 100vh;">
            <!-- ##侧边栏 -->
            <el-aside width="200px">
                <el-menu default-active="home" router>
                    <div class="menu_title">后台系统</div>
                    <el-menu-item index="home">
                        <el-icon><icon-menu /></el-icon>
                        <span>首页</span>
                    </el-menu-item>
                    <el-menu-item index="1">
                        <el-icon><icon-menu /></el-icon>
                        <span>系统概览</span>
                    </el-menu-item>
                    <el-sub-menu index="2">
                        <template #title>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item-group title="管理员管理">
                            <el-menu-item index="2-1">产品管理员</el-menu-item>
                            <el-menu-item index="2-2">用户管理员</el-menu-item>
                            <el-menu-item index="2-3">消息管理员</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="员工管理">
                            <el-menu-item index="2-4">用户列表</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="3">
                        <template #title>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <span>产品管理</span>
                        </template>
                        <el-menu-item-group title="入库管理">
                            <el-menu-item index="3-1">产品列表</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="出库管理">
                            <el-menu-item index="3-2">出库列表</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-sub-menu index="4">
                        <template #title>
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <span>消息管理</span>
                        </template>
                        <el-menu-item-group title="消息管理">
                            <el-menu-item index="4-1">消息列表</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="回收站">
                            <el-menu-item index="4-2">回收站</el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                    <el-menu-item index="5">
                        <el-icon><icon-menu /></el-icon>
                        <span>合同管理</span>
                    </el-menu-item>

                    <el-menu-item index="6">
                        <el-icon><icon-menu /></el-icon>
                        <span>操作日志</span>
                    </el-menu-item>
                    <el-menu-item index="7">
                        <el-icon><icon-menu /></el-icon>
                        <span>登录日志</span>
                    </el-menu-item>
                    <el-menu-item index="person">
                        <el-icon><icon-menu /></el-icon>
                        <span>系统设置</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <!-- ##主体区域 -->
            <el-container>
                <!-- ###头部 -->
                <el-header>
                    <div class="header_left"><span>欢迎！！</span></div>
                    <div class="header_right">
                        <el-icon>
                            <Bell />
                        </el-icon>
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                        <el-dropdown>
                            <span class="el-dropdown-link" style="">
                                设置
                                <el-icon class="el-icon--right">
                                    <arrow-down />
                                </el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>设置</el-dropdown-item>
                                    <el-dropdown-item>设置头像</el-dropdown-item>
                                    <el-dropdown-item>个人中心</el-dropdown-item>
                                    <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>

                    </div>
                </el-header>
                <!-- ###子路由展示 -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped lang="scss">
// ##aside
.el-aside {
    background-color: #2A303A;

    .el-menu {
        background-color: #2A303A;

        .menu_title {
            padding: 20px;
            display: flex;
            justify-content: center;
            color: azure;
        }

        .el-menu-item {
            color: #ffffff;
        }

        :deep(.el-sub-menu) {
            .el-sub-menu__title {
                color: #ffffff;
            }
        }
    }
}

// ##header
.el-header {
    background-color: #2A303A;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;

    .header_right {
        width: 220px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}



.el-menu-item:hover {
    background: #006eff;
}

:deep(.el-sub-menu__title:hover) {
    background-color: #006eff;
}

:deep(.el-menu--inline) {
    background-color: #2A303A;
}

.el-dropdown-link {
    cursor: pointer;
    color: #FFFFFF;
    display: flex;
    align-items: center;
}
</style>
