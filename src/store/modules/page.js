import * as types from '../mutation-types'

// initial state
const state = {
  url: '',
}

// getters
const getters = {
  url: state => state.url,
}

// actions
const actions = {
  updateUrl ({ commit }, url) {
    commit(types.UPDATE_URL, { url })
  },
}

// mutations
const mutations = {
  [types.UPDATE_URL] (state, { url }) {
    state.url = url
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
