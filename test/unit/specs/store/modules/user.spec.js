import store from '@/store/modules/user'
import * as types from '@/store/mutation-types'

describe('Store user', () => {

  describe('Getters', () => {
    let state

    beforeEach(() => {
      state = {
        id: 10,
      }
    })

    it('userId', () => {
      const result = store.getters.userId(state)
      expect(result).toEqual(10)
    })

    it('isLoggedIn', () => {
      const result = store.getters.isLoggedIn(state)
      expect(result).toEqual(true)
    })
  })

  describe('Mutations', () => {
    let state

    beforeEach(() => {
      state = {
        id: null,
      }
    })

    it('should update id', () => {
      store.mutations[types.USER_LOGIN](state, 11)
      expect(state.id).toEqual(11)
    })
  })
})
