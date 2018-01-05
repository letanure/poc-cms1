import Vue from 'vue'
import * as types from '../mutation-types'

// initial state
const state = {
  users: {
    1: {
      name: 'User 1',
      email: 'user1@mail.com',
    },
    2: {
      name: 'User 2',
      email: 'user2@mail.com',
    },
    3: {
      name: 'User 3',
      email: 'user3@mail.com',
    },
  },
}

// getters
const getters = {
  usersList: state => state.users,
}

// actions
const actions = {
  userRemove ({ commit }, key) {
    return new Promise((resolve) => {
      commit(types.USER_REMOVE, { key })
      resolve()
    })
  },
}

// mutations
const mutations = {
  [types.USER_REMOVE] (state, { key }) {
    Vue.delete(state.usersList, key)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
