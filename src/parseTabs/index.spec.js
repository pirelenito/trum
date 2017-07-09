import parseTabs from '.'

const fixture = [
  '',
  'Rd|c-c-----|--------|   ',
  'S |----o---|----o---|',
  'F|--------|----o-oo|',
].join('\n')

describe('tabs', () => {
  it('should parse a tab definition', () => {
    const expected = [
      {
        symbol: 'rd',
        notes: ['c', '-', 'c', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      },
      {
        symbol: 's',
        notes: ['-', '-', '-', '-', 'o', '-', '-', '-', '-', '-', '-', '-', 'o', '-', '-', '-'],
      },
      {
        symbol: 'f',
        notes: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'o', '-', 'o', 'o'],
      },
    ]

    expect(parseTabs(fixture)[0]).toEqual(expected[0])
    expect(parseTabs(fixture)[1]).toEqual(expected[1])
    expect(parseTabs(fixture)[2]).toEqual(expected[2])
  })
})
