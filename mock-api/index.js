const faker = require('faker')
const _ = require('lodash')

function componentMessage (row, columns) {
  const componentMessage = {
    type: 'message-ui',
    key: faker.random.number(),
    props: {
      header: faker.lorem.words(),
      body: faker.lorem.sentence(),
      color: _.sample(['danger', 'dark,', 'default', 'info', 'link', 'primary', 'success', 'warning']),
      size: _.sample(['default', 'large', 'medium', 'small']),
    },
    grid: {
      row: row,
      columns: columns,
      offset: 0,
    },
  }
  return componentMessage
}

function componentTabs (row, columns) {
  const quantityTabs = _.random(2, 5)

  const tabItems = []
  for (var i = 0; i < quantityTabs; i++) {
    tabItems.push({ text: faker.lorem.word() })
  }

  const componentTabs = {
    type: 'tabs-ui',
    key: faker.random.number(),
    props: {
      active: _.random(0, (quantityTabs - 1)),
      items: tabItems,
      appearance: _.sample(['default', 'boxed', 'toggle', 'toggle-rounded']),
      size: _.sample(['default', 'large', 'medium', 'small']),
    },
    grid: {
      row: row,
      columns: columns,
      offset: 0,
    },
  }
  return componentTabs
}

function generateContent (quantityComponents) {
  const content = []
  let row = 0

  for (var i = 0; i < quantityComponents; i++) {
    let columns = _.random(4, 12)
    row++
    const randomNumber = _.random(1, 2)
    let component = {}
    if (randomNumber === 1) {
      component = componentMessage(row, columns)
    }
    if (randomNumber === 2) {
      component = componentTabs(row, columns)
    }
    content.push(component)
  }
  return content
}

function generatePages (quantitypages) {
  var pages = []
  for (var i = 0; i < quantitypages; i++) {
    const randomQuantityComponents = _.random(2, 10)
    pages.push(
      {
        id: `page-${i}`,
        data: {
          content: generateContent(randomQuantityComponents),
        },
      }
    )
  }
  return pages
}

module.exports = () => {
  const data = {
    pages: generatePages(10),
  }

  return data
}
