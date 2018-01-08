import { mount } from 'vue-test-utils'
import Component from '@/components/ui/TabsUi/TabsUi'

describe(`${Component.name}.vue`, () => {
  describe('Properties', () => {
    const createCmp = propsData => mount(Component, { propsData })
    let propName
    let propsMock

    describe('items', () => {
      propName = 'items'

      beforeEach(() => {
        propsMock = {
          items: [
            {text: 'Item 1'},
            {text: 'Item 2'},
            {text: 'Item 3'},
          ],
        }
      })

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().items).toBe(propsMock.items)
      })

      it('renders items when passed', () => {
        const cmp = createCmp(propsMock)
        const $tabs = cmp.vm.$el.querySelectorAll('li')
        const tabsCount = $tabs.length
        expect(tabsCount).toBe(propsMock.items.length)
      })

      it('renders even if item format is wrong', () => {
        propsMock[0] = {text: 'Item 1', something: 'else'}
        const cmp = createCmp(propsMock)
        const $tabs = cmp.vm.$el.querySelectorAll('li')
        const tabsCount = $tabs.length
        expect(tabsCount).toBe(propsMock.items.length)
      })
    })

    describe('align', () => {
      propName = 'align'

      beforeEach(() => {
        propsMock = { align: 'centered' }
      })

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().align).toBe('centered')
      })

      it('add class when passed', () => {
        const propValue = 'centered'
        propsMock.align = propValue
        const cmp = createCmp(propsMock)
        const classes = cmp.classes()
        expect(classes).toContain(`is-${propValue}`)
      })
    })

    describe('appearance', () => {
      propName = 'appearance'

      beforeEach(() => {
        propsMock = { appearance: 'fullwidth' }
      })

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().appearance).toBe('fullwidth')
      })

      it('add class when passed', () => {
        const propValue = 'fullwidth'
        propsMock.appearance = propValue
        const cmp = createCmp(propsMock)
        const classes = cmp.classes()
        expect(classes).toContain(`is-${propValue}`)
      })

      it('add addtional class when `toggle-rounded` passed', () => {
        const propValue = 'toggle-rounded'
        propsMock.appearance = propValue
        const cmp = createCmp(propsMock)
        const classes = cmp.classes()
        expect(classes).toContain(`is-${propValue}`)
        expect(classes).toContain(`is-toggle`)
      })
    })

    describe('size', () => {
      propName = 'size'

      beforeEach(() => {
        propsMock = { size: 'large' }
      })

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().size).toBe('large')
      })

      it('add size class when passed', () => {
        const propValue = 'small'
        propsMock.size = propValue
        const cmp = createCmp(propsMock)
        const classes = cmp.classes()
        expect(classes).toContain(`is-${propValue}`)
      })
    })

    describe('active', () => {
      it('add class on the right item when passed', () => {
        const items = [
          {text: 'Item 1'},
          {text: 'Item 2'},
          {text: 'Item 3'},
        ]
        const activeItem = 1
        const wrapper = mount(Component, {
          propsData: {
            items: items,
            active: activeItem,
          },
        })
        const classes = wrapper.findAll('li').at(activeItem).classes()
        expect(classes).toContain('is-active')
      })

      it('add only one active item', () => {
        const items = [
          {text: 'Item 1'},
          {text: 'Item 2'},
          {text: 'Item 3'},
        ]
        const activeItem = 1
        const wrapper = mount(Component, {
          propsData: {
            items: items,
            active: activeItem,
          },
        })
        const ActiveCount = wrapper.findAll('.is-active').length
        expect(ActiveCount).toBe(1)
      })
    })
  })

  describe('Computed', () => {
    describe('combination of props classes', () => {
      it('renders align, appearance and size when passed', () => {
        const prop1 = 'centered'
        const prop2 = 'fullwidth'
        const prop3 = 'large'
        const wrapper = mount(Component, {
          propsData: {
            align: prop1,
            appearance: prop2,
            size: prop3,
          },
        })
        const classes = wrapper.classes()
        expect(classes).toContain(`is-${prop1}`)
        expect(classes).toContain(`is-${prop2}`)
        expect(classes).toContain(`is-${prop3}`)
      })
    })
  })

  describe('Watch', () => {
    let activeItem
    let items
    let wrapper

    beforeEach(() => {
      items = [
        {text: 'Item 1'},
        {text: 'Item 2'},
        {text: 'Item 3'},
      ]
      activeItem = 1
      wrapper = mount(Component, {
        propsData: {
          items: items,
          active: activeItem,
        },
      })
    })

    it('prop active change', () => {
      expect(wrapper.vm.activeItem).toBe(activeItem)
      activeItem = 2
      wrapper.setProps({
        active: activeItem,
      })
      expect(wrapper.vm.activeItem).toBe(activeItem)
    })

    it('activeItem', () => {
      activeItem = 2
      wrapper.setData({ activeItem: activeItem })
      expect(wrapper.emitted().changeTab[0]).toEqual([activeItem])
    })
  })

  describe('Methods', () => {
    let activeItem
    let items
    let wrapper

    beforeEach(() => {
      items = [
        {text: 'Item 1'},
        {text: 'Item 2'},
        {text: 'Item 3'},
      ]
      activeItem = 1
      wrapper = mount(Component, {
        propsData: {
          items: items,
          active: activeItem,
        },
      })
    })

    it('changeActiveTab', () => {
      activeItem = 2
      wrapper.vm.changeActiveTab(activeItem)
      expect(wrapper.vm.activeItem).toBe(activeItem)
    })
  })
})
