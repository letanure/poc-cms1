# POC Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased](../../compare/master...dev)
### Added
- Add component ComponentListAdd
- Add barrel for @/components/admin/compose/components
- Add action and mutation for componnet edit
- Add form components
  - CheckboxUi,
  - FileUi,
  - FormUi,
  - InputUi,
  - RadioUi,
  - SelectUi,
  - TexareaUi
### Changed
### Deprecated
### Removed
### Fixed
### Security


---
## [0.9.0](../../compare/0.8.0...0.9.0) - 09/01/2018
### Added
- Add new mock components (html only)
  - CardUi
  - DropdownUi
  - ModalUi
  - NavbarUi
  - PaginationUi
  - PanelUi
  - BoxUi
  - ContentUi
  - DeleteUi
  - ImageUi
  - NotificationUi
  - ProgressUi
  - TableUi
  - TitleUi
  - FormField
- Add new components
  - ButtonUi
  - CollapseUi
  - FormField
  - LoadingUi
  - TagUi
  - Add layout componnets for compose
    - ComposeFooter
    - ComposeHeader
    - ComposeMain:
      - with gridcomponents
      - highlight row and colum
    - ComposeSidebarLeft
      - with components list
    - ComposeSidebarRight
- Updated old components
  - iconUi: color and size props
- Add new stores and actions/mutations
  - pages:
    - methods to add and remove
- Add trasitions in admin
- Add active state in admin menu
- Redirect from admin empty route (/admin/ to /admin/dashboard)
- New dependencies
  - Add vuelidate lib to validate forms
- Updated API pages
  - Add getPageBy ID on pages API
- Updated mock API
  - pages by ID on mock api
- Add export barrels for each component type
- Add admin page form new/edit
- Add extra actions to pgestable admin
- Add in all UI componets the initial component config
- Add empty link option to MenuUi
- Add routers for compose page
- Add store components
- Add store page actions
- Add store pages actions
- Add simple etsts for components and update older ones
### Changed
- Update layoutAdmin props (avoid mix with routes)
- Updated vue from 2.5.2 to 2.5.13
- Changed the layoutAdmin grid to prevent jump of content on transition
- Load components ui barrel in gridComponents
- Update login grid
- Use component buttonUI in admintable
- fix class name in breadcrumbUi
### Removed
- Removed old props title and subtitle in AdminTable


---
## [0.8.0](../../compare/0.7.0...0.8.0) - 05/01/2018
### Added
- Added admin section forms
### Changed
- added IDs on stores
- splited admin setions in tables/forms
### Deprecated
### Removed
### Fixed
### Security


---
## [0.7.0](../../compare/0.6.0...0.7.0) - 05/01/2018
### Added
- Route changes
  - Add root admin route and check if page requires auth before navigate
- General
  - Add page/components transitions
  - Created the pattern for stores, returning Promises
  - Updated basic html templates (whitout container classes)
- Add new UI components
  - menuUi: renders a bulma menu
  - iconUi: renders a bulma font awesome icon
  - ConfirmUi: renders a bulma modal with actions to confirm / close
- Add admin section
  - layout components
    - AdminHeader: logo and logout button
    - AdminTable: receive text and store as props and renders a title and table with itens from store and edit(not working)/remove
    - LayoutAdmin: 4 areas in router-view (footer, header, main, sidebar)
    - SideMenu: Menu using new menuUi componnet with list of links of admin
  - sections
    - Login:
      - Sign In: just a component sending data do the User Store
      - Sign In: just a component without functionality
    - Assets
      - Add Store Assets
      - Add title and table using the AdminTable component
    - Dashboard
      - Markup demo only
    - Pages
      - Add Store Pages
      - Add title and table using the AdminTable component
    - Collections
      - Add Store Collections
      - Add title and table using the AdminTable component
    - Forms
      - Add Store Forms
      - Add title and table using the AdminTable component
    - Settings
      - empty home of settings
    - Settings/Languages
      - Add Store Languages
      - Add title and table using the AdminTable component
    - Settings/Channels
      - Add Store Channels
      - Add title and table using the AdminTable component


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
