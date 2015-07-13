module.exports = function () {
  this.filter("stylus", (source, options) => {
    try {
      return require("stylus")(source, options).render()
    } catch (e) { throw e }
  }, { ext: ".css" })
}
