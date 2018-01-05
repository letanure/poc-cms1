import { mount } from 'vue-test-utils'
import Component from '@/components/admin/ui/LayoutAdmin'

describe(`${Component.name}.vue`, () => {
  const createCmp = propsData => mount(Component, { propsData })
  let propName
  let propsMock

  describe('Properties', () => {
    describe('footer', () => {
      propName = 'footer'
      beforeEach(() => {
        propsMock = {
          footer: true,
        }
      })

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().footer).toBe(propsMock.footer)
      })

      it(`renders the footer view when ${propName} = true`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__footer').length
        expect(count).toBe(1)
      })

      it(`renders the footer view when ${propName} = true`, () => {
        propsMock.footer = false
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__footer').length
        expect(count).toBe(0)
      })
    })

    describe('header', () => {
      propName = 'header'
      beforeEach(() => {
        propsMock = {
          header: true,
        }
      })

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().header).toBe(propsMock.header)
      })

      it(`renders the header view when ${propName} = true`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__header').length
        expect(count).toBe(1)
      })

      it(`renders the header view when ${propName} = true`, () => {
        propsMock.header = false
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__header').length
        expect(count).toBe(0)
      })
    })

    describe('main', () => {
      propName = 'main'
      beforeEach(() => {
        propsMock = {
          main: true,
        }
      })

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().main).toBe(propsMock.main)
      })

      it(`renders the main view when ${propName} = true`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__main').length
        expect(count).toBe(1)
      })

      it(`renders the main view when ${propName} = true`, () => {
        propsMock.main = false
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__main').length
        expect(count).toBe(0)
      })
    })

    describe('sidebar', () => {
      propName = 'sidebar'
      beforeEach(() => {
        propsMock = {
          sidebar: true,
        }
      })

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().sidebar).toBe(propsMock.sidebar)
      })

      it(`renders the sidebar view when ${propName} = true`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__sidebar').length
        expect(count).toBe(1)
      })

      it(`renders the sidebar view when ${propName} = true`, () => {
        propsMock.sidebar = false
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__sidebar').length
        expect(count).toBe(0)
      })
    })
  }) // Properties

  describe('Template', () => {
    beforeEach(() => {
      propsMock = {
        sidebar: true,
      }
    })

    it(`when sidebar = false, main has 12 columns`, () => {
      propsMock.sidebar = false
      const cmp = createCmp(propsMock)
      const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__column_main.is-12').length
      expect(count).toBe(1)
    })

    it(`when sidebar = true, main has 10 columns`, () => {
      propsMock.sidebar = true
      const cmp = createCmp(propsMock)
      const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__column_main.is-12').length
      expect(count).toBe(0)
    })
  }) // Template
})
