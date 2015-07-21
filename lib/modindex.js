const mod = require('mod-op')
const stamp = require('stampit')

const modindex = stamp({
  props: {
    modulo: 0
  },
  methods: {
    index: index
  },
})

module.exports = modindex

function index (i) {
  return mod(i, this.modulo)
}
