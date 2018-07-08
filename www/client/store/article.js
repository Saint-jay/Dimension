/**
 *
 * article
 */

export const state = () => ({
    // 文章详情
    details: {
      cd: "",
      author: "",
      cover: "",
      title: "",
      created_at: "",
      updated_at: "",
      body_md: "",
      description: "",
      tag: ""
    }
  })
  
  export const mutations = {
    // 文章详情
    SET_DETAILS (state, data) {
        state.details = data
    }
  }
  