All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [UNRELEASED]
(nothing yet)

## [1.3.0] - 2023-07-08
### Changed
- `no-children-prop` will now accept functions as children prop (only?)
- `no-find-dom-node` is now at error level instead of warn`
- `no-multi-comp` options updated
- `react/no-unknown-property` is not at error level, explicitly set options
- `no-unstable-nested-components`, `no-unused-prop-types`, `prop-types`, `jsx-curly-spacing`, `jsx-fragments` explicitly set options (changing nothing in behavior)
- `prefer-stateless-function` changed to disallow pure components
- `jsx-key` will warn on duplicates now
- `jsx-no-target-blank` upgraded with new options
- `jsx-pascal-case` upgraded with new options
### Added
- enabled `display-name` rule
- `forbid-foreign-prop-types` rule
- `iframe-missing-sandbox` rule
- `no-arrow-function-lifecycle` rule
- `no-invalid-html-attribute` rule
- `no-namespace` rule
- `no-object-type-as-default-prop` rule
- `no-unused-class-component-methods` rule
- `jsx-equals-spacing` rule
- `jsx-no-leaked-render` rule
### Removed
- `jsx-handler-names` rule disabled
- `jsx-no-undef` rule disabled
### Dev
- added `hook-use-state`, `prefer-exact-props` disabled rules
- replaced deprecated `jsx-sort-default-props` with `sort-default-props`
- added `jsx-space-before-closing` disabled rule, it's deprecated

## [1.2.2] - 2021-08-18
### Changed
- `require-default-props` rule disabled

## [1.2.1] - 2021-08-18
### Changed
- `no-unescaped-entities` rule disabled

## [1.2.0] - 2021-08-18
### Added
- `function-component-definition` rule
- `no-unstable-nested-components` rule
- `jsx-no-constructed-context-values` rule
- `jsx-no-script-url` rule
- `no-adjacent-inline-elements` disabled rule
- `jsx-newline` disabled rule
- `jsx-no-useless-fragment` disabled rule (to be enabled in the future)
### Changed
- `require-default-props` explicitly set default `ignoreFunctionalComponents` option
- `jsx-handler-names` will check local variables (same as default) but won't check inline functions (new option)
- `jsx-indent-props` more explicit config
- `jsx-key` new option to prevent some issues
- `jsx-no-target-blank` reconfigured with new options
- `jsx-pascal-case` reconfigured with new options
- `jsx-props-no-multi-spaces` disabled (not needed)
- general library update which should bring (better?) TypeScript integration
### Dev
- removed jsdoc, updated some deps

## [1.1.0] - 2019-08-30
### Fixed
- audit warnings by upgrading deps
### Changed
- minimal deps versions

## [1.0.2] - 2019-07-15
### Fixed
- no rule being defined in exported file

## [1.0.1] - 2019-07-14 - not released to npm
### Fixed
- security issue with dev dependency by upgrading jsdoc

## [1.0.0] - 2019-07-14
### Added
- `no-unsafe` enabled rule
- `prefer-read-only-props` disabled rule
- `state-in-constructor` disabled rule
- `static-property-placement` enabled rule
- `jsx-fragments` enabled rule
- `jsx-curly-newline` enabled rule
- `jsx-props-no-spreading` disabled rule
### Changed
- README encourages to use `detect` as value for React and flow version setting
- `boolean-prop-naming` now disabled
- `no-string-refs` rule now has `noTemplateLiterals` option enabled 
- `jsx-indent` rule now has `checkAttributes` and `indentLogicalExpressions` options enabled 
- `jsx-key` rule now has `checkFragmentShorthand` option enabled 

## [0.0.5] - 2018-12-13
### Changed
- peerDependency of React changed to 15 || 16 || 17

## [0.0.4] - 2018-10-23
### Changed
- disabled `react/jsx-one-expression-per-line` rule, too annoying

## [0.0.3] - 2018-10-16
### Changed
- added `settings` to README full config to make it copy-paste ready without warnings

## [0.0.2] - 2018-10-16
### Changed
- removed unneeded paragraph from README

## [0.0.1] - 2018-10-16
### Added
- first version
