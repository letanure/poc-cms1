import store from '@/store/modules/counter'
import * as types from '@/store/mutation-types'

describe('Store Counter Actions', () => {

  it('should increment', () => {
    const state = { count: 0 }
    store.mutations[types.INCREMENT_COUNTER](state)
    expect(state.count).toEqual(1)
    store.mutations[types.INCREMENT_COUNTER](state)
    expect(state.count).toEqual(2)
  })

  it('should decrement', () => {
    const state = { count: 0 }
    store.mutations[types.DECREMENT_COUNTER](state)
    expect(state.count).toEqual(-1)
    store.mutations[types.DECREMENT_COUNTER](state)
    expect(state.count).toEqual(-2)
  })

  it('should add', () => {
    const state = { count: 0 }
    store.mutations[types.INCREMENT_COUNTER_ADD](state, 10)
    expect(state.count).toEqual(10)
    store.mutations[types.INCREMENT_COUNTER_ADD](state, 20)
    expect(state.count).toEqual(30)
  })

})
