## sass
npm i sass-loader -S
npm i style-loader -S
npm i sass -S
https://www.cnblogs.com/chaoyuehedy/p/9931146.html

## Vue Router
router 作为路由器实例,使用useRouter() 或者this.$router[选项式 API]访问。
route 当前路由实例,通过 useRoute() 或 this.$route[选项式 API]来访问。

## Pinia
### 定义store
defineStore 
传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象。

使用：导入 实例化 .state .getter .action
pinia-plugin-persistedstate插件 数据持久化