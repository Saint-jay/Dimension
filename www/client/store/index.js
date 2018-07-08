import service from '../api'

export const actions = {

  nuxtServerInit (store, { params, route, isServer, req }) {

    const initAppData = [
      // 获取信息
      store.dispatch('getAdminInfo')
    ]

    return Promise.all(initAppData)
  },

  // 获取博主用户信息
  async getAdminInfo ({ commit }) {
    const res = await service.getAuth()
                      .catch(err => console.error(err))
    commit('user/SET_USER_SUCCESS', res.result || {})
  },

  // 文章详情
  async getArt ({ commit }, data) {
    const res = await service.getArt(data)
                      .catch(err => console.error(err))
    commit('article/SET_DETAILS', res.result || {})
  }


}
