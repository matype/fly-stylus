module.exports = function () {
  this.filter("stylus", (data, options) => {
    try {
      return require("stylus")(data.toString(), options).render()
    } catch (e) { throw e }
  }, { ext: ".css" })
}
