// import Vue from 'vue'
// import * as types from '../mutation-types'
import * as components from '@/components/ui/configs'

// initial state
const state = {
  components: components,
}

// getters
const getters = {
  componentsList: state => state.components,
}

// actions
const actions = {
}

// mutations
const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations,
}
