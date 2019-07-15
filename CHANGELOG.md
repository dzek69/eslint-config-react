All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [UNRELEASED]
(nothing yet)

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
