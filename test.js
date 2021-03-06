var test = require('tape')

var modarray = require('./')

test('get', function (t) {
  var arr
  var data = [0,1,2,3,4,5,6,7]

  // without mod
  arr = modarray({
    data: data,
  })
  t.equal(arr.get(0), data[0])
  t.equal(arr.get(1), data[1])
  t.equal(arr.get(-1), undefined)
  
  // with mod
  arr = modarray({
    data: data,
    modulo: 4
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

test('set', function (t) {
  var arr
  var data = [0,1,2,3,4,5,6,7]

  // without mod
  arr = modarray({
    data: data,
  })
  t.equal(arr.get(0), data[0])
  t.equal(arr.get(1), data[1])
  t.equal(arr.get(-1), undefined)
  
  // with mod
  arr = modarray({
    data: data,
    modulo: 4
  })

  t.equal(data[0], 0)
  arr.set(0, 8)
  t.equal(data[0], 8)
  t.equal(data[1], 1)
  arr.set(1, 8)
  t.equal(data[1], 8)
  t.equal(data[2], 2)
  arr.set(-2, 8)
  t.equal(data[2], 8)
  t.end()
})
