import { cutInHalf, findMatch, getCharPriority } from './part1'

test('abcde cut in half is abc, def', () => {
  expect(cutInHalf('abcdef')).toStrictEqual(['abc', 'def'])
})

test('[qweasd] and [zxcva] match is a', () => {
  expect(findMatch('qweasd', 'zxcva')).toBe('a')
})

test('priority', () => {
  expect(getCharPriority('a')).toBe(1)
  expect(getCharPriority('z')).toBe(26)
  expect(getCharPriority('A')).toBe(27)
  expect(getCharPriority('Z')).toBe(52)
})