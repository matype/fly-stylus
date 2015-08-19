module.exports = function () {
  this.filter("stylus", (data, options) => ({
    css: require("stylus")(data.toString(), options).render(), ext: ".css"
  }))
}
