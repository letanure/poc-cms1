import Vue from 'vue'
import * as types from '../mutation-types'

// initial state
const state = {
  assets: {
    1: {
      name: 'image name',
      slug: 'aa',
      type: 'img',
    },
    2: {
      name: 'PDF name',
      slug: 'bb',
      type: 'pdf',
    },
    3: {
      name: 'Another image',
      slug: 'cc',
      type: 'img',
    },
  },
}

// getters
const getters = {
  assetsList: state => state.assets,
}

// actions
const actions = {
  assetRemove ({ commit }, key) {
    return new Promise((resolve) => {
      commit(types.ASSET_REMOVE, { key })
      resolve()
    })
  },
}

// mutations
const mutations = {
  [types.ASSET_REMOVE] (state, { key }) {
    Vue.delete(state.assets, key)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
