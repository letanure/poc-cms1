import PagesApi from '@/api/page'
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
  addComponent ({ commit }, componentName) {
    return new Promise((resolve) => {
      commit(types.PAGE_ADD_COMPONENT, { componentName })
      resolve()
    })
  },

  loadPageById ({ commit }, id) {
    return new Promise((resolve) => {
      PagesApi
        .getPageContentById(id)
        .then((content) => {
          commit(types.PAGE_UPDATE_CONTENT, { content })
          resolve()
        })
    })
  },

  updateUrl ({ commit }, url) {
    return new Promise((resolve) => {
      PagesApi
        .getPageContentByUrl(url)
        .then((content) => {
          commit(types.PAGE_UPDATE_CONTENT, { content })
          commit(types.PAGE_UPDATE_URL, { url })
          resolve()
        })
    })
  },
}

// mutations
const mutations = {

  [types.PAGE_ADD_COMPONENT] (state, { componentName }) {
    var configCompo = {
      'type': componentName,
      'key': new Date().getMilliseconds(),
      'props': {
      },
      'grid': {
        'row': new Date().getMilliseconds(),
        'columns': 9,
        'offset': 0,
      },
    }
    state.content.push(configCompo)
  },

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
