/**
 *
 * option
 */

export const state = () => ({
    hasShow: false
})

export const mutations = {
  SET_HAS_SHOW(state, bool) {
    state.hasShow = bool
  }
}
