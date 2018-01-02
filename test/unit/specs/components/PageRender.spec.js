import { mount } from 'vue-test-utils'
import Component from '@/components/PageRender'

describe(`${Component.name}.vue`, () => {
  const createCmp = propsData => mount(Component, { propsData })
  let propsMock

  it('show the correct message', () => {
    const cmp = createCmp(propsMock)
    const classes = cmp.classes()
    expect(classes).toContain(`PageRender`)
  })
})
