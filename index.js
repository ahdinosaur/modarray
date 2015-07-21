const stamp = require('stampit')
const mod = require('mod-op')

const modarray = stamp({
  refs: {
    data: new Array()
  },
  props: {
    mod: 0,
    offset: 0
  },
  methods: {
    get: get,
    set: function set () {},
    index: function index () {}
  }
})

function get (i) {
  return this.data[mod(i, this.mod)]
}

module.exports = modarray
