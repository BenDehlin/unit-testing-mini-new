import {add} from '../utils/functions'

test('add returns the sum of 2 numbers', () => {
  expect(add(1, 2)).toBe(3)
})
test('add handles positve and negative numbers', () => {
  expect(add(-2, 1)).toBe(-1)
})
test('add handles decimals', () => {
  expect(add(.1, .234)).toBe(.334)
})
test('add handles 2 numbers that are strings', () => {
  expect(add('1', '2')).toBe(3)
})
test('add returns NaN if 2 non-number values are passed', () =>{
  expect(add('hello', 'world')).toBe(NaN)
})
test('add returns 0 if null is passed', () => {
  expect(add(null, null)).toBe(0)
})
test('add returns NaN if undefined is passed', () => {
  expect(add(undefined, undefined)).toBe(NaN)
})