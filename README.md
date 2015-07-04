<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8430194/35c6043a-1f6a-11e5-8cbd-af6cc86baa84.png">
  </a>
</div>

> [Stylus](https://learnboost.github.io/stylus/) plugin for [Fly][fly].
>
[![][fly-badge]][fly] ![][mit-badge]

## Usage
To learn about what options are available, check out the [stylus JS API documentation](https://github.com/stylus/stylus/blob/master/docs/js.md)
### Install

```
$ npm install --save-dev fly-stylus
```

### Example

```js

exports.stylus = function* () {
  yield this
    .source('src/*.styl')
    .stylus()
    .target('dist')
}
```

# License

[MIT](http://opensource.org/licenses/MIT) © [Masaaki Morishita][author]


[author]: https://github.com/morishitter

[fly]: https://www.github.com/flyjs/fly

[fly-badge]: https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]: https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square

