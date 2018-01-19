import Vue from 'vue'
import { clone } from 'lodash'
import PagesApi from '@/api/page'
import * as types from '../mutation-types'
import * as emptyComponents from '@/components/ui/configs'

// initial state
const state = {
  url: '',
  content: [],
  editingKey: null,
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

  // @todo: page store should not change component
  editComponentPage ({ commit }, componentData) {
    return new Promise((resolve) => {
      commit(types.PAGE_UPDATE_COMPONENT, componentData)
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
  // @todo: page store should not change component
  [types.PAGE_UPDATE_COMPONENT] (state, componentData) {
    const component = state.content
      .find((component) => component.key === state.editingKey)
    if (component) {
      // @todo: remove clone
      component.props = clone(componentData)
    }
  },

  [types.PAGE_ADD_COMPONENT] (state, { componentName }) {
    var configComp = {
      'type': componentName,
      'key': new Date().getTime(),
      'props': emptyComponents[componentName].mock,
      'grid': {
        'row': new Date().getMilliseconds(),
        'columns': 9,
        'offset': 0,
      },
    }
    Vue.set(state, 'editingKey', configComp.key)
    state.content.push(configComp)
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
