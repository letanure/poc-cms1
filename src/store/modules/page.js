import * as types from '../mutation-types'

// initial state
const state = {
  url: '',
  content: [],
}

// getters
const getters = {
  pageUrl: state => state.url,
  pageContent: state => state.content,
}

// actions
const actions = {
  updateUrl ({ commit }, url) {
    commit(types.PAGE_UPDATE_URL, { url })
  },
}

// mutations
const mutations = {
  [types.PAGE_UPDATE_CONTENT] (state, { content }) {
    state.content = content
  },
  [types.PAGE_UPDATE_URL] (state, { url }) {
    state.url = url
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
