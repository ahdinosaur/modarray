const stamp = require('stampit')
const mod = require('mod-op')

const array = require('./lib/array')
const modindex = require('./lib/modindex')

const modarray = array.compose(modindex)

module.exports = modarray
