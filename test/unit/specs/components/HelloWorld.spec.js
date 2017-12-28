import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import HelloWorld from '@/components/HelloWorld'
import counter from '@/store/modules/counter'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('HelloWorld.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    state = {
      count: 0
    }

    actions = {
      addToCounter: jest.fn(),
      decrement: jest.fn(),
      increment: jest.fn(),
    }

    store = new Vuex.Store({
      state,
      actions,
      getters: counter.getters
    })
  })

  it('show the correct message', () => {
    const wrapper = shallow(HelloWorld, { store, localVue })
    const message = wrapper.vm.$el.querySelector('.HelloWorld h1').textContent.trim()
    expect(message).toEqual('Start App')
  })

  it('Renders state.counter ', () => {
    const wrapper = shallow(HelloWorld, { store, localVue })
    const countValue = wrapper.find('.count__value').text()
    expect(countValue).toBe(state.count.toString())
  })

  it('Increment the count when button is clicked', () => {
    const wrapper = shallow(HelloWorld, { store, localVue })
    const button = wrapper.find('button.count__action__increment')
    button.trigger('click')
    expect(actions.increment).toHaveBeenCalled()
  })

  it('Decrement the count when button is clicked', () => {
    const wrapper = shallow(HelloWorld, { store, localVue })
    const button = wrapper.find('button.count__action__decrement')
    button.trigger('click')
    expect(actions.decrement).toHaveBeenCalled()
  })

  it('Add the count when button is clicked', () => {
    const wrapper = shallow(HelloWorld, { store, localVue })
    const button = wrapper.find('button.count__action__add')
    button.trigger('click')
    expect(actions.addToCounter).toHaveBeenCalled()
  })

})
