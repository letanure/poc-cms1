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


## History

Check the [CHANGELOG.md](CHANGELOG.md) file to see the development rules.

## Credits

Luiz Tanure – [@tanure](https://twitter.com/tanure) – letanure@gmail.com

## License

TODO: Write license
