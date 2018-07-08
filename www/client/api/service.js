import ax from './axios'

// 获取用户信息
export function getAuth () {
    return ax.get('/user_info').then( res => res.data)
}

// 获取文章详情
export function getArt (cd) {
    return ax.get(`/article/${cd}`).then(res => res.data)
}
