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

  logout ({ commit }) {
    return new Promise((resolve) => {
      commit(types.USER_LOGOUT)
      resolve()
    })
  },
}

// mutations
const mutations = {
  [types.USER_LOGIN] (state, id) {
    state.id = id
  },

  [types.USER_LOGOUT] (state, id) {
    state.id = null
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
