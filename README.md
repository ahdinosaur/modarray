# modarray

operations for `Array`-likes within [modulo](https://en.wikipedia.org/wiki/Modulo_operation) space.

## install

with [npm](https://npmjs.org), do:

```
npm i --save modarray
```

## api

### `arr = modarray(opts)`

#### `opts.data`

an `Array`-like to be the underlying data operated on.

#### `opts.modulo`

a `Number` describing the [modulo](https://en.wikipedia.org/wiki/Modulo_operation) to contain the array within.

### `arr.get(i)`

retrieves element `i` from the array.

### `arr.set(i, v)`

sets element `i` to `v`.

### `arr.index(i)`

retrieves the index of the cell in the underlying data.

## license

ISC
