import * as types from '../mutation-types'
import * as emptyComponents from '@/components/ui/configs'

// initial state
const state = {
  emptyComponents: emptyComponents,
  editingComponentName: null,
}

// getters
const getters = {
  emptyComponentsList: state => state.emptyComponents,
  editingComponentConfig: state => state.emptyComponents[state.editingComponentName],
  editingComponentMock: (state) => {
    let mock = {}
    if (state.editingComponentName) {
      mock = state.emptyComponents[state.editingComponentName].mock
    }
    return mock
  },
}

// actions
const actions = {
  editComponent ({ commit }, componentName) {
    return new Promise((resolve) => {
      commit(types.COMPONENT_EDIT, { componentName })
      resolve()
    })
  },
}

// mutations
const mutations = {
  [types.COMPONENT_EDIT] (state, { componentName }) {
    state.editingComponentName = componentName
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
