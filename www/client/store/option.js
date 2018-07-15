/**
 *
 * option
 */

export const state = () => ({
    show: false
})

export const mutations = {
  SET_ERROR_PAGE(state, bool) {
    state.show = bool
  }
}
