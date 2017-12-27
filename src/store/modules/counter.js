import * as types from '../mutation-types'

// initial state
const state = {
  count: 0,
}

// getters
const getters = {
  currentCount: state => state.count,
  evenOrOdd: state => {
    return state => state.count % 2 === 0 ? 'even' : 'odd'
  },
}

// actions
const actions = {
  addToCounter ({ commit }, quantity) {
    commit(types.INCREMENT_COUNTER_ADD, quantity)
  },

  decrement ({ commit }) {
    commit(types.DECREMENT_COUNTER)
  },

  increment ({ commit }) {
    commit(types.INCREMENT_COUNTER)
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
