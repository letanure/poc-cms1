import { mount } from 'vue-test-utils'
import Component from '@/components/GridComponents'

describe(`${Component.name}.vue`, () => {
  const createCmp = propsData => mount(Component, { propsData })
  let propName
  let propsMock

  beforeEach(() => {
    propsMock = {
      componentsList: [
        {
          type: 'component-one',
          key: '12',
          props: {
            message: 'Message 1',
          },
          grid: {
            row: 1,
            columns: 6,
            offset: 0,
          },
        },
        {
          type: 'component-one',
          key: '12',
          props: {
            message: 'Message 1',
          },
          grid: {
            row: 2,
            columns: 8,
            offset: 3,
          },
        },
      ],
    }
  })

  describe('Properties', () => {
    describe('componentsList', () => {
      propName = 'componentsList'

      it(`has a ${propName} property`, () => {
        const cmp = createCmp(propsMock)
        expect(cmp.props().componentsList).toBe(propsMock.componentsList)
      })

      it(`renders ${propName} when passed`, () => {
        const cmp = createCmp(propsMock)
        const columnsCount = cmp.vm.$el.querySelectorAll('.columns').length
        expect(columnsCount).toBe(2)
      })

      it(`renders 1 rows`, () => {
        propsMock.componentsList[1].grid.row = 1
        const cmp = createCmp(propsMock)
        const rowsCount = cmp.vm.$el.querySelectorAll('.columns').length
        expect(rowsCount).toBe(1)
      })

      it(`renders 2 rows`, () => {
        const cmp = createCmp(propsMock)
        const rowsCount = cmp.vm.$el.querySelectorAll('.columns').length
        expect(rowsCount).toBe(2)
      })

      it(`renders column is-XX and is-offset-XX in the first row`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el
          .querySelectorAll('.columns')[0]
          .querySelectorAll('.column.is-6.is-offset-0')
          .length
        expect(count).toBe(1)
      })

      it(`renders one column is-6 in the first row`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el
          .querySelectorAll('.columns')[0]
          .querySelectorAll('.column.is-6')
          .length
        expect(count).toBe(1)
      })

      it(`renders one column is-8 in the first row`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el
          .querySelectorAll('.columns')[1]
          .querySelectorAll('.column.is-8')
          .length
        expect(count).toBe(1)
      })

      it(`renders one column with is-offset-0 in the first row`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el
          .querySelectorAll('.columns')[0]
          .querySelectorAll('.column.is-offset-0')
          .length
        expect(count).toBe(1)
      })

      it(`renders one column with is-offset-3 in the second row`, () => {
        const cmp = createCmp(propsMock)
        const count = cmp.vm.$el
          .querySelectorAll('.columns')[1]
          .querySelectorAll('.column.is-offset-3')
          .length
        expect(count).toBe(1)
      })

      it(`update rows when props are updated`, () => {
        const cmp = createCmp(propsMock)
        let rowsCount = cmp.vm.$el.querySelectorAll('.columns').length
        expect(rowsCount).toBe(2)
        propsMock.componentsList[1].grid.row = 1
        cmp.setProps(propsMock)
        rowsCount = cmp.vm.$el.querySelectorAll('.columns').length
        expect(rowsCount).toBe(1)
      })
    })
  })

  describe('Mounted', () => {
    it(`emmit a mounted event`, () => {
      const cmp = createCmp(propsMock)
      expect(cmp.emitted().mounted).toBeTruthy()
    })
  })
})
