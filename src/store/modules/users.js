import Vue from 'vue'
import * as types from '../mutation-types'

// initial state
const state = {
  users: {
    1: {
      id: 99,
      name: 'User 1',
      email: 'user1@mail.com',
      slug: 'aa',
    },
    2: {
      id: 5,
      name: 'User 2',
      email: 'user2@mail.com',
      slug: 'aa',
    },
    3: {
      id: 15,
      name: 'User 3',
      email: 'user3@mail.com',
      slug: 'aa',
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
