import instance from '@/http/index.js'

/**
 * 查询个人用户信息
 */
export const getUser = () => {
    return instance({
        url: '/user/userinfo',
        method: 'GET'
    })
}

/**
 * 更改个人用户信息
 */
export const changeUser = (data) => {
    return instance({
        url: '/user/changeUserInfo',
        method: 'POST',
        data
    })
}