import { formatString, toTitleCase } from './stringUtils'

describe('stringUtils', () => {
  describe('toTitleCase', () => {
    test('converts input string to title case', () => {
      const input = 'a string'

      const output = toTitleCase(input)

      expect(output).toEqual('A String')
    })
  })

  describe('formatString', () => {
    const stringFormatTheories = [
      [
        'Works with number {0}, and {1} string',
        [1, 'some'],
        'Works with number 1, and some string',
      ],
      ['Too many args ignores {0} extras', ['the', 'extra'], 'Too many args ignores the extras'],
      [
        'Not enough args leaves template in place{0}',
        [],
        'Not enough args leaves template in place{0}',
      ],
      [
        'Passing a template indicator as an input {0} {1}',
        ['{1}', 'someparam'],
        'Passing a template indicator as an input {1} someparam',
      ],
    ] as const

    test.each(stringFormatTheories)(
      'Formatting %p with arguments %p returns %p',
      (template, args, expected) => {
        const output = formatString(template, ...args)
        expect(output).toEqual(expected)
      },
    )
  })
})
