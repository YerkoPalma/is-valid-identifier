import test from 'ava'
import isValidIdentifier from './'

test('throws an exception with no arguments', t => {
  t.plan(1)

  t.throws(isValidIdentifier)
})

test('valid identifiers', t => {
  t.plan(3)

  t.true(isValidIdentifier('validName'))
  t.true(isValidIdentifier('ANOTHER_ONE'))
  t.true(isValidIdentifier('ಠ_ಠ'))
})

test('invalid identifiers', t => {
  t.plan(2)

  t.false(isValidIdentifier('invalid-name'))
  t.false(isValidIdentifier('404'))
})

test('strict mode', t => {
  t.plan(3)

  t.throws(() => { isValidIdentifier('invalid-name', true) }, /invalid-name is an invalid identifier according to ECMAScript 6 \/ Unicode 8.0.0/)
  t.throws(() => { isValidIdentifier('404', true) }, /404 is an invalid identifier according to ECMAScript 6 \/ Unicode 8.0.0/)
  t.throws(() => { isValidIdentifier('undefined', true) }, /the NaN, Infinity, and undefined properties of the global object are immutable or read-only/)
})
