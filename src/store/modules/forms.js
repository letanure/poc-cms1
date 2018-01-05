import Vue from 'vue'
import * as types from '../mutation-types'

// initial state
const state = {
  forms: {
    1: {
      name: 'form 1',
      slug: 'aa',
    },
    2: {
      name: 'form 2',
      slug: 'bb',
    },
    3: {
      name: 'form 3',
      slug: 'cc',
    },
  },
}

// getters
const getters = {
  formsList: state => state.forms,
}

// actions
const actions = {
  collectiontRemove ({ commit }, key) {
    return new Promise((resolve) => {
      commit(types.FORM_REMOVE, { key })
      resolve()
    })
  },
}

// mutations
const mutations = {
  [types.FORM_REMOVE] (state, { key }) {
    Vue.delete(state.forms, key)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
