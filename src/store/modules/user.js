import * as types from '../mutation-types'

// initial state
const state = {
  id: null,
}

// getters
const getters = {
  userId: state => state.id,
  isLoggedIn: state => Number.isInteger(state.id),
}

// actions
const actions = {
  login ({ commit }) {
    return new Promise((resolve) => {
      const id = 1
      commit(types.USER_LOGIN, id)
      resolve()
    })
  },
}

// mutations
const mutations = {
  [types.USER_LOGIN] (state, id) {
    state.id = id
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
