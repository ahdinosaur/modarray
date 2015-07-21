const mod = require('mod-op')
const stamp = require('stampit')

const modindex = stamp({
  props: {
    mod: 0
  },
  methods: {
    index: index
  },
})

module.exports = modindex

function index (i) {
  return mod(i, this.mod)
}
