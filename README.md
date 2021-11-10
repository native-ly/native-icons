# [Native Icons](https://github.com/native-ly/native-icons)

[![NPM version](https://flat.badgen.net/npm/v/native-icons)](https://www.npmjs.com/package/native-icons)
[![NPM downloads](https://flat.badgen.net/npm/dm/native-icons)](https://www.npmjs.com/package/native-icons)
[![NPM license](https://flat.badgen.net/npm/license/native-icons)](https://www.npmjs.com/package/native-icons)
[![run in expo snack](https://img.shields.io/badge/Run%20in%20Snack-4630EB?style=flat-square&logo=EXPO&labelColor=FFF&logoColor=000)](https://snack.expo.io/@jbiesiada/native-icons)
[![Codecov](https://flat.badgen.net/codecov/c/github/native-ly/native-icons)](https://codecov.io/gh/native-ly/native-icons)
[![Travis](https://flat.badgen.net/travis/native-ly/native-icons)](https://app.travis-ci.com/github/native-ly/native-icons)
[![Bundle size](https://flat.badgen.net/packagephobia/install/native-icons)](https://packagephobia.com/result?p=native-icons)

## About

Icon component for React Native & Expo with better font family management

### Similar Projects

- [react-native-dynamic-vector-icons](https://github.com/WrathChaos/react-native-dynamic-vector-icons/) by [FreakyCoder](https://github.com/WrathChaos/)
- [React Native Easy Icon](https://github.com/NewBieBR/react-native-easy-icon/) by [Arthur Dao](https://github.com/NewBieBR/)

A similar solution is also available in [React Native Elements](https://github.com/react-native-elements/react-native-elements/)

## How to Install

First, install the library in your project by npm:

```sh
$ npm install native-icons
```

Or Yarn:

```sh
$ yarn add native-icons
```

### Bare React Native Project

- link `react-native-vector-icons` – [follow instructions here](https://github.com/oblador/react-native-vector-icons#installation)

## Getting Started

**Connect the library with the project using ES6 import:**

```js
import Icon from 'native-icons'
```

## Options

### IconsProvider

IconsProvider allows you to set a global icon type for all icons. You don't need to use it. You can pass the type directly to the Icon component. After setting the provider and passing the type to Icon component, the type from context will be overwritten.

| Name     | Type   | Default | Description     | Available options                   |
| -------- | ------ | ------- | --------------- | ----------------------------------- |
| **type** | string | ` `     | Icons font type | [Icon Types](#available-icon-types) |

### Icon

The component extends [react-native-vector-icons props](https://github.com/oblador/react-native-vector-icons#icon-component) and implements [IconsProvider props](#iconsprovider)

### Available Icon Types

- `ant-design`
- `entypo`
- `evil-icons`
- `feather`
- `font-awesome`
- `font-awesome-5`
- `fontisto`
- `foundation`
- `ionicons`
- `material-icons`
- `material-community-icons`
- `octicons`
- `zocial`
- `simple-line-icons`

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
