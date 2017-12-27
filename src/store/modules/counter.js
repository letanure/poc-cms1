import * as types from '../mutation-types'

// initial state
const state = {
  count: 0,
}

// getters
const getters = {
  currentCount: state => state.count,
}

// actions
const actions = {
  increment ({ commit }) {
    commit(types.INCREMENT_COUNTER)
  },

  decrement ({ commit }) {
    commit(types.DECREMENT_COUNTER)
  },
}

// mutations
const mutations = {

  [types.INCREMENT_COUNTER_ADD] (state, quantity) {
    state.count += quantity
  },

  [types.INCREMENT_COUNTER] (state) {
    state.count++
  },

  [types.DECREMENT_COUNTER] (state) {
    state.count--
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
