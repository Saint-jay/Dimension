/**
 *
 * option
 */

export const state = () => ({
    hasShow: true
})

export const mutations = {
  SET_HAS_SHOW(state, bool) {
    state.hasShow = bool
  }
}
