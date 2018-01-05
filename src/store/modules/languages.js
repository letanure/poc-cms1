import Vue from 'vue'
import * as types from '../mutation-types'

// initial state
const state = {
  // https://support.google.com/webmasters/answer/189077?hl=en
  // https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
  languages: {
    1: {
      name: 'English',
      nativeName: 'English USA',
      code: 'en',
    },
    2: {
      name: 'Portuguese',
      nativeName: 'Português',
      code: 'pt',
    },
    3: {
      name: 'German',
      nativeName: ' Deutsch',
      code: 'de',
    },
  },
}

// getters
const getters = {
  languagesList: state => state.languages,
}

// actions
const actions = {
  languageRemove ({ commit }, key) {
    return new Promise((resolve) => {
      commit(types.LANGUAGE_REMOVE, { key })
      resolve()
    })
  },
}

// mutations
const mutations = {
  [types.LANGUAGE_REMOVE] (state, { key }) {
    Vue.delete(state.languagesList, key)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
