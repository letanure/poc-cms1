import Vue from 'vue'
import * as types from '../mutation-types'

// initial state
const state = {
  channels: {
    1: {
      name: 'Mobile EN',
      slug: 'aa',
    },
    2: {
      name: 'Desktop EN',
      slug: 'bb',
    },
    3: {
      name: 'Mobile BR',
      slug: 'cc',
    },
    4: {
      name: 'Desktop BR',
      slug: 'cc',
    },
  },
}

// getters
const getters = {
  channelsList: state => state.channels,
}

// actions
const actions = {
  channelRemove ({ commit }, key) {
    return new Promise((resolve) => {
      commit(types.ASSET_REMOVE, { key })
      resolve()
    })
  },
}

// mutations
const mutations = {
  [types.ASSET_REMOVE] (state, { key }) {
    Vue.delete(state.channels, key)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
