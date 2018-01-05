import Vue from 'vue'
import * as types from '../mutation-types'

// initial state
const state = {
  collections: {
    1: {
      name: 'collection 1',
      slug: 'aa',
    },
    2: {
      name: 'collection 2',
      slug: 'bb',
    },
    3: {
      name: 'collection 3',
      slug: 'cc',
    },
  },
}

// getters
const getters = {
  collectionsList: state => state.collections,
}

// actions
const actions = {
  collectiontRemove ({ commit }, key) {
    return new Promise((resolve) => {
      commit(types.COLLECTION_REMOVE, { key })
      resolve()
    })
  },
}

// mutations
const mutations = {
  [types.COLLECTION_REMOVE] (state, { key }) {
    Vue.delete(state.collections, key)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
