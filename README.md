NaN secrets
===========

`NaN` is a special value in javascript. It is one of few built in values
that can represent a true invariant. `NaN` is a `number`, or a `Number`
instance. Every `prototype` property (scalar, method, object) on the
`Number` prototype is inherited by `NaN`. `NaN` with the help of a
`Symbol` can enclose values only accessible to occurences of `NaN`. We
can achieve this by adding a `.set(key, value);` method to the
`Number.prototype` object.

```js
NaN.set('kinkajou' 'bradley')
(4).set('monkey', 'brian')
0xff.set('cat', 'sienna')
0..set('dog', 'apollo')

console.log(NaN.kinkajou); // 'bradley'
console.log((4).monkey); // undefined
console.log(0xff.cat); // undefined
console.log(0..dog); // undefined
```

## or ...

 ... you could probably do this with any built-in scalar like
`{ -Infinity, ..., -1, 0, 1, ..., +Infinity }` or `true, false` with the
exception of `null` and `undefined`

## anyways ...

... yolo

## more ...

* https://www.smashingmagazine.com/2011/05/10-oddities-and-secrets-about-javascript/
* http://www.programering.com/a/MDNxcjNwATk.html
* http://ariya.ofilabs.com/2014/05/the-curious-case-of-javascript-nan.html

## license

do wtf ever... *MIT*
