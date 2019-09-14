import parseTabs, { Track, Tabs } from './parseTabs'
import { readFileSync } from 'fs'
import path from 'path'

it('parses a simple tab definition', () => {
  const fixture = [
    '',
    'Rd|c-c-----|--------|   ',
    'S |----o---|----o---|',
    'F|--------|----o-oo|',
    'Y  |----o---|----o---|',
  ].join('\n')

  const expected: Tabs = {
    length: 16,
    instruments: ['F', 'Rd', 'S', 'Y'],
    tracks: [
      {
        instrument: 'F',
        notes: [12, 14, 15],
        length: 16,
      },
      {
        instrument: 'Rd',
        notes: [0, 2],
        length: 16,
      },
      {
        instrument: 'S',
        notes: [4, 12],
        length: 16,
      },
      {
        instrument: 'Y',
        notes: [4, 12],
        length: 16,
      },
    ],
  }

  expect(parseTabs(fixture)).toEqual(expected)
})

it('parses multiple sections', () => {
  const fixture = [
    'Intro (00:00)',
    'HH|----------------|----------------|----------------|----------------|',
    'Sn|----------------|----------------|----------------|----------------|',
    'B1|----------------|----------------|----------------|----------------|',
    '',
    'Verse 1 (00:11)',
    'C1|----------------|----------------|x---------------|----------------|',
    'HH|----------------|----------------|--x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|',
    'Sn|----------------|----------------|----o-------o---|----o-------o---|',
    'B1|----------------|----------------|o-------o-o-----|o-------o-o-----|',
    '',
    'HH|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|',
    'Sn|----o-------o---|----o-------o---|----o-------o---|----o-------o---|',
    'B1|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-o-----|',
  ].join('\n')

  const tabs = parseTabs(fixture)

  expect(tabs.instruments).toEqual(['B1', 'C1', 'HH', 'Sn'])

  const SnTrack = tabs.tracks.find(track => track.instrument === 'Sn') as Track
  expect(SnTrack.length).toEqual(64 * 3)
  expect(SnTrack.notes).toEqual([100, 108, 116, 124, 132, 140, 148, 156, 164, 172, 180, 188])

  const C1Track = tabs.tracks.find(track => track.instrument === 'C1') as Track
  expect(C1Track.length).toEqual(64 * 3)
  expect(C1Track.notes).toEqual([96])
})

it('parses a complex tabs', () => {
  const source = readFileSync(path.join(__dirname, './fixtures/example1.txt')).toString()
  expect(parseTabs(source)).toMatchSnapshot()
})
