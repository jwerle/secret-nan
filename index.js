'use strict';
const assert = require('assert');

// NaN space
const nan = Symbol('NaN');

// hide nan space
const define = Object.defineProperty;


// NaN space
Number.prototype[nan] = Object.create(null);

// secret setter
Number.prototype.set = function (key, value) {
  if (null == this || !isNaN(this)) { return this; }
  const space = this[nan];
  const accessor = {
    get() {
      return isNaN(this) ? space[key] : undefined;
    },

    set(value) { space[key] = isNaN(this) ? value : space[key]; }
  }

  space[key] = value;
  define(Number.prototype, key, accessor);

  return this;
};

assert('function' == typeof 4..set)

let variants = [
  (Infinity / -Infinity),
  (Number.NaN),
  ('' / ''),
  ('' / 0),
  (0 / 0),
  (NaN),
]

const key = 'key';
const value = 'value';

NaN.set(key, value);

// the following fail
4..set(key, value);
0..set(key, value);
0xff..set(key, value);

for (let variant of variants) {
  assert(value == variant[key])
}

assert(!4[key])
assert(!0[key])
assert(!0xff[key])
