import { mount } from 'vue-test-utils'
import Component from '@/components/admin/ui/LayoutAdmin'

describe(`${Component.name}.vue`, () => {
  const createCmp = propsData => mount(Component, { propsData })
  let propName
  let propsMock

  describe('Properties', () => {
    describe('footer', () => {
      propName = 'hasFooter'
      beforeEach(() => {
        propsMock = {
          hasFooter: true,
        }
      })

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().hasFooter).toBe(propsMock.hasFooter)
      })

      it(`renders the hasFooter view when ${propName} = true`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__footer').length
        expect(count).toBe(1)
      })

      it(`renders the footer view when ${propName} = true`, () => {
        propsMock.hasFooter = false
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__footer').length
        expect(count).toBe(0)
      })
    })

    describe('header', () => {
      propName = 'hasHeader'
      beforeEach(() => {
        propsMock = {
          hasHeader: true,
        }
      })

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().hasHeader).toBe(propsMock.hasHeader)
      })

      it(`renders the header view when ${propName} = true`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__header').length
        expect(count).toBe(1)
      })

      it(`renders the header view when ${propName} = true`, () => {
        propsMock.hasHeader = false
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__header').length
        expect(count).toBe(0)
      })
    })

    describe('main', () => {
      propName = 'hasMain'
      beforeEach(() => {
        propsMock = {
          hasMain: true,
        }
      })

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().hasMain).toBe(propsMock.hasMain)
      })

      it(`renders the main view when ${propName} = true`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__main').length
        expect(count).toBe(1)
      })

      it(`renders the main view when ${propName} = true`, () => {
        propsMock.hasMain = false
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__main').length
        expect(count).toBe(0)
      })
    })

    describe('hasSidebarLeft', () => {
      propName = 'hasSidebarLeft'
      beforeEach(() => {
        propsMock = {
          hasSidebarLeft: true,
        }
      })

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().hasSidebarLeft).toBe(propsMock.hasSidebarLeft)
      })

      it(`renders the sidebar view when ${propName} = true`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__sidebarLeft').length
        expect(count).toBe(1)
      })

      it(`renders the sidebar view when ${propName} = true`, () => {
        propsMock.hasSidebarLeft = false
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__sidebarLeft').length
        expect(count).toBe(0)
      })
    })

    describe('hasSidebarRight', () => {
      propName = 'hasSidebarRight'
      beforeEach(() => {
        propsMock = {
          hasSidebarRight: true,
        }
      })

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().hasSidebarRight).toBe(propsMock.hasSidebarRight)
      })

      it(`renders the sidebar view when ${propName} = true`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__sidebarRight').length
        expect(count).toBe(1)
      })

      it(`renders the sidebar view when ${propName} = true`, () => {
        propsMock.hasSidebarRight = false
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__sidebarRight').length
        expect(count).toBe(0)
      })
    })
  }) // Properties

  describe('Template', () => {
    beforeEach(() => {
      propsMock = {}
    })

    it(`when hasSidebarLeft & hasSidebarRight main has 8 columns`, () => {
      propsMock.hasSidebarLeft = true
      propsMock.hasSidebarRight = true
      const cmp = createCmp(propsMock)
      const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__column_main.is-8').length
      expect(count).toBe(1)
    })

    it(`when hasSidebarLeft & !hasSidebarRight main has 10 columns`, () => {
      propsMock.hasSidebarLeft = true
      propsMock.hasSidebarRight = false
      const cmp = createCmp(propsMock)
      const count = cmp.vm.$el.querySelectorAll('.LayoutAdmin__column_main.is-10').length
      expect(count).toBe(1)
    })
  }) // Template
})
