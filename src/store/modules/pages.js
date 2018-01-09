import Vue from 'vue'
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
  savePage ({ commit }, page) {
    return new Promise((resolve) => {
      const content = page
      commit(types.PAGES_SAVE, { content })
      resolve()
    })
  },

  pagesRemove ({ commit }, key) {
    return new Promise((resolve) => {
      commit(types.LANGUAGE_REMOVE, { key })
      resolve()
    })
  },
}

// mutations
const mutations = {

  [types.PAGES_REMOVE] (state, { key }) {
    Vue.delete(state.pages, key)
  },

  [types.PAGES_SAVE] (state, { content }) {
    content.id = Date.now()
    state.pages[Date.now()] = content
  },

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
