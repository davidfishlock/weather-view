import { findLastIndex } from './arrayUtils'

describe('arrayUtils', () => {
  describe('findLastIndex', () => {
    test('returns last index according to predicate', () => {
      const values = [1, 2, 3, 4, 1, 2]
      const predicate = (value: number) => value === 1
      const lastIndex = findLastIndex(predicate, values)

      expect(lastIndex).toEqual(values.length - 2)
    })

    test('returns -1 when no value matches predicate', () => {
      const values = [1, 2, 3, 4, 1, 2]
      const predicate = (value: number) => value === 5
      const lastIndex = findLastIndex(predicate, values)

      expect(lastIndex).toEqual(-1)
    })
  })
})
