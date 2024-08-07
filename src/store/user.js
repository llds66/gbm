import { defineStore } from "pinia";
import { getUser } from "@/api/user";

export const userStore = defineStore(
    "user",
    {
        state: () => {
            return {
                token: "", // token
                userInfo: {}, // 个人信息
            };
        },
        persist: true, // 持久化
        actions: {
            setToken(token) {
                this.token = token
            },
            logout() {
                this.token = ""
                this.userInfo = ""
            },
            // 获取个人信息
            async getUserInfo() {
                const res = await getUser(this.token);
                this.userInfo = res.data.userInfo;
                console.log("个人信息res", res);
            },
            setUser(userInfo) {
                this.userInfo = userInfo;
            },
        },
    }
)
// TODO Option选项式api 后期更换成组合式api(似乎官网也是选项式写法)