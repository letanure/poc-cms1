[![CircleCI](https://img.shields.io/circleci/project/github/letanure/poc-cms.svg)](https://circleci.com/gh/letanure/poc-cms)

# POC CMS  Vue JS

Proof of concept of CMS with Vue JS

## Installation

OS X & Linux:

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run e2e tests
yarn run e2e

# run all tests
yarn test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Check the [CONTRIBUTING.md](CONTRIBUTING.md) file to see the development rules.

## Development

### Application Structure

```
├── main.js
├── api                   # abstractions for making API requests
│   └── ...
├── assets                # files required inside JS
│   └── ...
├── components
│   ├── App.vue
│   └── ...
├── router                # router configurations
│   └── ...
├── store                 # store base and modules
│   ├── index.js          # where we assemble modules and export the store
│   ├── actions.js        # root actions
│   ├── mutations.js      # root mutations
│   └── modules
│       ├── module1.js    # module1 module
│       └── module2.js    # module2 module
└── templates
    ├── layout.pug        # general wrapper fot all HTMLs
    ├── index.pug         # entry point, using the layout.pug
    └── includes
        ├── head          # HTML head code
        └── ...           # other files to be included in pages and layout
```

### Vuex

Use Vuex for data that A) comes from the API, and/or B) needs to be accessed by the entire application.

#### Stores:

Whenever you can, normalize data that comes in array form unless the order is important (such as when you're getting the top 20 most recent pages from your API.) Even if the data has come back from the API as an array of objects, AND your view needs to display it as an array mapped over with a v-for directive, you should consider storing it in the store as an object of objects, by some identifying key, and then just denormalizing the data back again inside the getter.

Bad:

```js
const initialState = {
  partnersList: [], // array of all partners
  currentPartner: {}, // current partner object.
};
```

Good:

```js
const initialState = {
  partnersList: {}, // object with all partners keyed by ID
  currentPartnerId: ``, // a string contining the ID of the current partner.
};
```

#### Getters:

- Getters should not mutate data. (indeed, the purpose of a getter is to provide a "safer" way to access the vuex store values). They should only return the data you need.
- Getters are great for taking the data from the store then formatting it the way you need it before handing it off to the Vue component. This keeps transformation logic outside of the presentational Vue component. You can also use this pattern to create different transforms on the same data without mutating that data.

#### Actions:

- Wrap the action in a promise, so the componnet can respont to any compelx logic that exists inside the store action (like an API call)

Bad:

```js
updateUrl ({ commit }, url) {
  PagesApi
    .getPageContent(url)
    .then((content) => {
      commit(types.PAGE_UPDATE_CONTENT, { content })
      commit(types.PAGE_UPDATE_URL, { url })
      resolve()
    })
  },
```

Good:

```js
updateUrl ({ commit }, url) {
  return new Promise((resolve) => {
    PagesApi
      .getPageContent(url)
      .then((content) => {
        commit(types.PAGE_UPDATE_CONTENT, { content })
        commit(types.PAGE_UPDATE_URL, { url })
        resolve()
      })
  })
},

// and inside the component:

this.$store.dispatch('updateUrl', url).then(() => { ... })

```

#### Mutations:

Mutations is an object with different methods that take the Observable state as the first parameter. It is here, and ONLY here that any part of the state should be changed.

## History

Check the [CHANGELOG.md](CHANGELOG.md) file to see the development rules.

## Credits

Luiz Tanure – [@tanure](https://twitter.com/tanure) – letanure@gmail.com

## License


## References
[Deverus Vue.js Style Guide](https://gist.github.com/letanure/8b4e8ee8f7b065860df942f0e53d6fc9)


