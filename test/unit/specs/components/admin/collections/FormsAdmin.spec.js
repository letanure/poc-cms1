import { mount } from 'vue-test-utils'
import Component from '@/components/admin/forms/FormsAdmin'

describe(`${Component.name}.vue`, () => {
  const createCmp = propsData => mount(Component, { propsData })
  let wrapper

  beforeEach(() => {
    wrapper = mount(Component)
  })

  it('should render .sectionHome', () => {
    const classes = wrapper.classes()
    expect(classes).toContain('SectionHome')
  })
})
