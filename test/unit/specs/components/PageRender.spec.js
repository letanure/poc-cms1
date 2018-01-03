import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import Component from '@/components/PageRender'
import page from '@/store/modules/page'

const localVue = createLocalVue()

localVue.use(Vuex)

describe(`${Component.name}.vue`, () => {
  let actions
  let state
  let store
  let propsMock

  const createCmp = propsData => mount(Component, { store, propsData, localVue })

  beforeEach(() => {
    state = {
      url: '',
      content: [],
    }

    actions = {
      updateUrl: jest.fn(),
    }

    store = new Vuex.Store({
      state,
      actions,
      getters: page.getters,
    })
  })

  it('show the correct message', () => {
    const cmp = createCmp(propsMock)
    const classes = cmp.classes()
    expect(classes).toContain(`PageRender`)
  })
})
