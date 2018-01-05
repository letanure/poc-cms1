# POC Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased](../../compare/master...dev)
### Added
- Add component for basic layout areas of admin section
- Add basic store user, login, logout
- Add root admin route and check if page requires auth before navigate
- Add admin component SignIn
- Add admin component SignUp
- Add admin component AdminHeader with logout
- Add admin component SideMenu, with new routes using uiMenu
- Add demo admin component DashboardAdmin
- Add basic store pages
- Add basic componnet ListPages
- Add routes/pafes sign-in, sign-up, admin and admin pages
- Add componnet IconUi
- Add empty components for admin sections / lists
- Add component uiMenu
- Add new routes admin with components
- Add transitions on admin layout
- Add store Assets
- Add store Collections
- Add store Forms
- Add component ConfirmUi
- Add component AdminTable to list stores
- Add store users
- Add store languages
- Add store channels
- Add fixed header admin
- Add admin table for list store languages
- Add admin table for list store users
### Changed
- Updated page store with action returning a promise
- Removed container class from basic template index
- Added container class to page render
- Add .section to layoutadmin
- Use admintable on pages
### Deprecated
### Removed
### Fixed
- Fixed typo in router AdminDashboard name
- Fix nested routes in admin/settings
### Security


---
## [0.6.0](../../compare/0.5.0...0.6.0) - 03/01/2018
### Added
- Add store page config
- Add mock API for pages with random data components
- Added component `GridComponents` to render dynamic components with the grid
- Added wrapper for axios to keep http lib client isolated
- Add PageApi
- Load page components from mocked api on url change
### Changed
- Updated vuejs webpack template from 1.2.7 to 1.2.8
- Removed CSS from base app component
- Removed demo components from `HelloWorld`and updated tests
- Rename HelloWorld to PageRender
### Removed
- Removed demo store counter and test

---
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
