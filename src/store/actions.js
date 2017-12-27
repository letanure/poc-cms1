import * as types from './mutation-types'

export const addToCounter = ({ commit }, quantity) => {
  commit(types.INCREMENT_COUNTER_ADD, quantity)
}
