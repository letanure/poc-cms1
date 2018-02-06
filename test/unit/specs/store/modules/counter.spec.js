import store from '@/store/modules/counter'
import * as types from '@/store/mutation-types'

describe('Store Counter', () => {

  describe('Actions', () => {
    let context

    beforeEach(() => {
      context = {
        commit: jest.fn(),
        getters: {},
        dispatch: jest.fn(),
      }
    })

    it('decrement calls commit', () => {
      store.actions.decrement(context)
      expect(context.commit).toHaveBeenCalledWith(types.DECREMENT_COUNTER)
    })

    it('decrement calls commit', () => {
      store.actions.increment(context)
      expect(context.commit).toHaveBeenCalledWith(types.INCREMENT_COUNTER)
    })

    it('addToCounter calls commit with quantity', () => {
      const quantity = 10
      store.actions.addToCounter(context, quantity)
      expect(context.commit).toHaveBeenCalledWith(types.INCREMENT_COUNTER_ADD, { quantity })
    })

  })

  describe('Getters', () => {
    let state

    beforeEach(() => {
      state = { count: 8 }
    })

    it('currentCount', () => {
      const result = store.getters.currentCount(state)
      expect(result).toEqual(8)
    })

    it('evenOrOdd', () => {
      let result

      result = store.getters.evenOrOdd(state)
      expect(result).toEqual('even')

      state.count = 9
      result = store.getters.evenOrOdd(state)
      expect(result).toEqual('odd')
    })
  })

  describe('Mutations', () => {
    let state

    beforeEach(() => {
      state = { count: 0 }
    })

    it('should increment', () => {
      store.mutations[types.INCREMENT_COUNTER](state)
      expect(state.count).toEqual(1)
      store.mutations[types.INCREMENT_COUNTER](state)
      expect(state.count).toEqual(2)
    })

    it('should decrement', () => {
      store.mutations[types.DECREMENT_COUNTER](state)
      expect(state.count).toEqual(-1)
      store.mutations[types.DECREMENT_COUNTER](state)
      expect(state.count).toEqual(-2)
    })

    it('should add', () => {
      let quantity

      quantity = 10
      store.mutations[types.INCREMENT_COUNTER_ADD](state, { quantity })
      expect(state.count).toEqual(10)

      quantity = 20
      store.mutations[types.INCREMENT_COUNTER_ADD](state, { quantity })
      expect(state.count).toEqual(30)
    })
  })

})
