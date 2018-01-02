# POC Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased](../../compare/master...dev)
### Added
- Added component `GridComponents` to render dynamic components with the grid
### Changed
- Removed CSS from base app component
- Removed demo components from `HelloWorld`and updated tests
### Deprecated
### Removed
### Fixed
### Security

## [0.5.0](../../compare/0.4.0...0.5.0) - 02/01/2018
### Added
- Added /docs/ folder with build files
### Changed
- Updated eslint config for test spec files and fixed the tests
- Updated builded folder from `dist` to `docs` to use with gh pages

---
## [0.4.0](../../compare/0.3.0...0.4.0) - 29/12/2017
### Added
- Add component Tabs from Bulma, with examples of usage on HelloWorld
### Fixed
- Fix component name MessageUi to MessageUi and clean HTML template

---
## [0.3.0](../../compare/0.2.0...0.3.0) - 28/12/2017
### Added

- Add Bulma CSS
- Add font awesome
- Add component Message from Bulma, with examples of usage on HelloWorld

### Changed
- Updated layout with bulma grids
- Updated HelloWorld class and test text

---
## [0.2.0](../../compare/0.1.0...0.2.0) - 28/12/2017
### Added
- Add HTML entry point using `pug` preprocessor and watch/reload

---
## [0.1.0](../../compare/0.0.0...0.1.0) - 28/12/2017
### Added

- Start project with _commitizen_ and _husky_ to check commits messages
- Add clean `vue-cli init webpack` app
- Add Vue linter
- Use Stylus as preprocessor for CSS
- Use Pug as preprocessor for HTML
- Add `precommit` githook to run tests befone any commit
- Add Vuex
- Add demo vuex store `counter` with tests
