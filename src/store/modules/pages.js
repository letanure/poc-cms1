import * as types from '../mutation-types'

// initial state
const state = {
  pages: {
    1: {
      id: 58,
      name: 'AAA',
      slug: 'aa',
      url: '/AAA',
    },
    2: {
      id: 59,
      name: 'BBB',
      slug: 'bb',
      url: '/BBB',
    },
  },
}

// getters
const getters = {
  pagesList: state => state.pages,
}

// actions
const actions = {
  updateUrl ({ commit }, url) {
    return new Promise((resolve) => {
      const content = {}
      commit(types.PAGES_UPDATE, { content })
      resolve()
    })
  },
}

// mutations
const mutations = {
  [types.PAGES_UPDATE] (state, { content }) {
    state.content = content
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
