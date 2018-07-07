/**
 *
 * user
 */

export const state = () => ({
    data: {},
    fetch: false
  })
  
  export const mutations = {

    // 成功
    SET_USER_SUCCESS (state, data) {
      state.data = data
      state.fetch = false
    },
  
    // 失败
    SET_USER_FILE (state, data) {
      state.data = {}
      state.fetch = false
    }
  }
  