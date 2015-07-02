var stylus = require('stylus')
module.exports = function () {
    this.stylus = function (options) {
        return this.filter((data) => {
            try {
                return stylus.render(data, options, function (err, css) {
                    if (err) throw err
                })
            } catch (e) {
                plugin: 'stylus',
                error: e
            }
        }).notify('plugin_run', {plugin: 'stylus'})
    }
}
