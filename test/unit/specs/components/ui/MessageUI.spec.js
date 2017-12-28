import { mount, shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import MessageUI from '@/components/ui/MessageUI'

describe('MessageUI.vue', () => {

  describe('Props', () => {

    it('renders header when passed', () => {
      const prop = 'Header text'
      const wrapper = mount(MessageUI, {
        propsData: {
          header: prop,
        }
      })
      const text = wrapper.vm.$el.querySelector('.message-header').textContent.trim()
      expect(text).toBe(prop)
    })

    it('renders body when passed', () => {
      const prop = 'Body text'
      const wrapper = mount(MessageUI, {
        propsData: {
          body: prop,
        }
      })
      const text = wrapper.vm.$el.querySelector('.message-body').textContent.trim()
      expect(text).toBe(prop)
    })

    it('add color class when passed', () => {
      const prop = 'dark'
      const wrapper = mount(MessageUI, {
        propsData: {
          color: prop,
        }
      })
      const classes = wrapper.classes()
      expect(classes).toContain('is-dark')
    })

    it('add size class when passed', () => {
      const prop = 'large'
      const wrapper = mount(MessageUI, {
        propsData: {
          size: prop,
        }
      })
      const classes = wrapper.classes()
      expect(classes).toContain('is-large')
    })

    it('add size and color class when passed', () => {
      const propColor = 'success'
      const propSize = 'large'
      const wrapper = mount(MessageUI, {
        propsData: {
          color: propColor,
          size: propSize,
        }
      })
      const classes = wrapper.classes()
      expect(classes).toContain('is-large')
      expect(classes).toContain('is-success')
    })

  })
})

// visible
