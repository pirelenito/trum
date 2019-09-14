import parseTabs from './parseTabs'

it('parses a tab definition', () => {
  const fixture = [
    '',
    'Rd|c-c-----|--------|   ',
    'S |----o---|----o---|',
    'F|--------|----o-oo|',
    'Y  |----o---|----o---|',
  ].join('\n')

  const expected = {
    length: 16,
    source: fixture,
    instruments: [
      {
        instrumentId: 0,
        notes: [],
        length: 16,
      },
      {
        instrumentId: 1,
        notes: [0, 2],
        length: 16,
      },
      {
        instrumentId: 2,
        notes: [4, 12],
        length: 16,
      },
      {
        instrumentId: 3,
        notes: [],
        length: 16,
      },
      {
        instrumentId: 4,
        notes: [],
        length: 16,
      },
      {
        instrumentId: 5,
        notes: [],
        length: 16,
      },
      {
        instrumentId: 6,
        notes: [12, 14, 15],
        length: 16,
      },
      {
        instrumentId: 7,
        notes: [],
        length: 16,
      },
    ],
  }

  expect(parseTabs(fixture)).toEqual(expected)
})

it('ignores duplicate instruments', () => {
  const fixture = ['F|--------|-------o|', 'F|--------|-------o|'].join('\n')

  const expected = {
    length: 16,
    source: fixture,
    instruments: [
      {
        instrumentId: 0,
        notes: [],
        length: 16,
      },
      {
        instrumentId: 1,
        notes: [],
        length: 16,
      },
      {
        instrumentId: 2,
        notes: [],
        length: 16,
      },
      {
        instrumentId: 3,
        notes: [],
        length: 16,
      },
      {
        instrumentId: 4,
        notes: [],
        length: 16,
      },
      {
        instrumentId: 5,
        notes: [],
        length: 16,
      },
      {
        instrumentId: 6,
        notes: [15],
        length: 16,
      },
      {
        instrumentId: 7,
        notes: [],
        length: 16,
      },
    ],
  }

  expect(parseTabs(fixture)).toEqual(expected)
})
