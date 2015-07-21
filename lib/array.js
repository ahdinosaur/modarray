const stamp = require('stampit')

const array = stamp({
  refs: {
    data: new Array()
  },
  methods: {
    get: get,
    set: set,
    index: index
  }
})

function get (i) {
  return this.data[this.index(i)]
}

function set (i, d) {
  return this.data[this.index(i)] = d
}

function index (i) {
  return i
}

module.exports = array
