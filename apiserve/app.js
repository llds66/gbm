const express = require('express')
const app = express()

// cors 中间件
const cors = require('cors')
app.use(cors())

var bodyParser = require('body-parser')

// 处理错误的中间件
app.use((req,res,next)=>{
  res.cc = (err,status=1)=>{
    res.send({
      status,
      message:err instanceof Error ? err.message :err
    })
  }
  next()
})



// 解析 application/x-www-form-urlencoded true:任意值 false:数组或者字符串
app.use(bodyParser.urlencoded({ extended: false }))
// 解析 application/json
app.use(bodyParser.json())

// jwt
const jwtconfig = require('./jwt_config/index')
const {expressjwt:jwt} = require('express-jwt')
app.use(jwt({
  secret:jwtconfig.jwtSecretkey,algorithms:['HS256']
}).unless({
  path:[/^\/api\//]
}))

// 路由
const loginRouter = require('./router/login')
app.use('/api',loginRouter)

// 不符合规则处理错误的中间件
app.use((req,res,next)=>{
  if(err instanceof Joi.ValidationError) return res.cc(err)
})



app.listen(3000, () => {
  console.log('listenPort', 3000);
})