import { mount } from 'vue-test-utils'
import Component from '@/components/ui/elements/ImageUi/ImageUi'

describe(`${Component.name}.vue`, () => {
  const createCmp = propsData => mount(Component, { propsData })
  let wrapper

  beforeEach(() => {
    wrapper = mount(Component)
  })

  it(`should render .${Component.name}.vue`, () => {
    const classes = wrapper.classes()
    expect(classes).toContain(Component.name)
  })
})
