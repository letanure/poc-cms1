import { mount } from 'vue-test-utils'
import Component from '@/components/ui/components/MessageUi/MessageUi'

describe(`${Component.name}.vue`, () => {
  describe('Props', () => {
    it('renders header when passed', () => {
      const prop = 'Header text'
      const wrapper = mount(Component, {
        propsData: {
          header: prop,
        },
      })
      const text = wrapper.vm.$el.querySelector('.message-header').textContent.trim()
      expect(text).toBe(prop)
    })

    it('renders body when passed', () => {
      const prop = 'Body text'
      const wrapper = mount(Component, {
        propsData: {
          body: prop,
        },
      })
      const text = wrapper.vm.$el.querySelector('.message-body').textContent.trim()
      expect(text).toBe(prop)
    })

    it('add color class when passed', () => {
      const prop = 'dark'
      const wrapper = mount(Component, {
        propsData: {
          color: prop,
        },
      })
      const classes = wrapper.classes()
      expect(classes).toContain('is-dark')
    })

    it('add size class when passed', () => {
      const prop = 'large'
      const wrapper = mount(Component, {
        propsData: {
          size: prop,
        },
      })
      const classes = wrapper.classes()
      expect(classes).toContain('is-large')
    })

    it('add size and color class when passed', () => {
      const propColor = 'success'
      const propSize = 'large'
      const wrapper = mount(Component, {
        propsData: {
          color: propColor,
          size: propSize,
        },
      })
      const classes = wrapper.classes()
      expect(classes).toContain('is-large')
      expect(classes).toContain('is-success')
    })
  })
})
