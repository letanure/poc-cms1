import store from '@/store/modules/page'
import * as types from '@/store/mutation-types'
import PagesApi from '@/api/page'

jest.mock('@/api/page', () => ({
  getPageContent: jest.fn(() => Promise.resolve({ data: 3 }))
}))

describe('Store page', () => {
  describe('Actions', () => {
    let context

    beforeEach(() => {
      context = {
        commit: jest.fn(),
        getters: {},
        dispatch: jest.fn(),
      }
    })

    it('updateUrl calls fetch page', () => {
      const url = 'test'
      store.actions.updateUrl(context, url)
      expect(PagesApi.getPageContent).toBeCalledWith('test')
    })

    // it('updateUrl calls commit', () => {
    //   const url = 'test'
    //   store.actions.updateUrl(context, url)
    //   expect(context.commit).toHaveBeenCalledWith(types.PAGE_UPDATE_URL, { url})
    // })

  })

  describe('Getters', () => {
    let state

    beforeEach(() => {
      state = {
        url: 'home',
        content: [],
      }
    })

    it('pageUrl', () => {
      const result = store.getters.pageUrl(state)
      expect(result).toEqual('home')
    })

  })

  describe('Mutations', () => {
    let state

    beforeEach(() => {
      state = {
        url: 'home',
        content: [],
      }
    })

    it('should update content', () => {
      const content = [{type: 'module-name'}]
      store.mutations[types.PAGE_UPDATE_CONTENT](state, { content })
      expect(state.content).toEqual(content)
    })

    it('should update content', () => {
      const url = 'test'
      store.mutations[types.PAGE_UPDATE_URL](state, { url })
      expect(state.url).toEqual(url)
    })


  })
})
