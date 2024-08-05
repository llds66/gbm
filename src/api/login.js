import instance from '@/http/index.js'

/**
 * 注册
 * @param {*} data {account:String,password:String}
 */
export const register = (data) =>{
  const {account,password} = data
  return instance({
    url:'/api/register',
    method:'POST',
    data:{
      account,password
    }
  })
}

/**
 * 登录
 * @param {Object} data {account:String,password:String}
 */
export const login = (data) =>{
  const {account,password} = data
  return instance({
    url:'/api/login',
    method:'POST',
    data:{
      account,password
    }
  })
}

/**
 * 修改密码
 * @param {*} data {id:String,oldPassword:String,newPassword:String} 
 */
export const changePassword = (data) =>{
  const { id, oldPassword, newPassword } = data
  return instance({
    url: '/user/changePassword',
    method: 'POST',
    data: {
      id, oldPassword, newPassword
    }
  })
}

/**
 * 重置密码
 * @param {*} data {account:String,email:String,newPassword:String}
 */
export const forgetPassword = (data) =>{
  const { account, email, newPassword } = data
  return instance({
    url: '/user/forgetPasswrod',
    method: 'POST',
    data: {
      account, email, newPassword
    }
  })
}