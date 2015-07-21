var test = require('tape')

var modarray = require('./')

test('get', function (t) {
  var data = [0, 1, 2, 3]

  var arr = modarray({
    data: [0, 1, 2, 3, 4, 5, 6, 7],
    mod: 4,
    offset: 0
  })

  t.equal(arr.get(0), data[0])
  t.equal(arr.get(1), data[1])
  t.equal(arr.get(2), data[2])
  t.equal(arr.get(3), data[3])
  t.equal(arr.get(4), data[0])
  t.equal(arr.get(5), data[1])
  t.equal(arr.get(-1), data[3])
  t.equal(arr.get(-2), data[2])
  t.end()
})
