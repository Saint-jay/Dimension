import ax from './axios'

// 获取用户信息
export function getAuth () {
    return ax.get('/user_info').then( res => res.data)
}

