# fly-stylus

> [Fly](https://github.com/flyjs/fly) plugin for [Stylus](https://learnboost.github.io/stylus/)

## Usage
To learn about what options are available, check out the [stylus JS API document](https://github.com/stylus/stylus/blob/master/docs/js.md)

### Install

```shell
$ npm install --save-dev fly-stylus
```

## Example

```js
exports.stylus = function* () {
  yield this
    .source('src/*.styl')
    .stylus()
    .target('dist')
}
```

## License

The MIT License (MIT)

Copyright (c) 2015 Masaaki Morishita
