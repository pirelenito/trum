import parseTabs, { Tabs } from './parseTabs'
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
    notes: [
      [null, 'c', null, null],
      [null, null, null, null],
      [null, 'c', null, null],
      [null, null, null, null],
      [null, null, 'o', 'o'],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      ['o', null, 'o', 'o'],
      [null, null, null, null],
      ['o', null, null, null],
      ['o', null, null, null],
    ],
  }

  expect(parseTabs(fixture)).toEqual(expected)
})

it('parses tabs with comments in the end', () => {
  const fixture = [
    'F1|--------|------g-| Put emphasise',
    'Sn|--------|-----o--| on the snare',
    'B1|g-------|--------|',
  ].join('\n')

  const expected: Tabs = {
    length: 16,
    instruments: ['B1', 'F1', 'Sn'],
    notes: [
      ['g', null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, 'o'],
      [null, 'g', null],
      [null, null, null],
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

  const SnTrackIndex = tabs.instruments.findIndex(instrument => instrument === 'Sn')
  const SnTrackNotesIndex = tabs.notes
    .map((notes, noteIndex) => (notes[SnTrackIndex] ? noteIndex : null))
    .filter(n => n)
  expect(SnTrackNotesIndex).toEqual([100, 108, 116, 124, 132, 140, 148, 156, 164, 172, 180, 188])

  const C1TrackIndex = tabs.instruments.findIndex(instrument => instrument === 'C1')
  const C1TrackNotesIndex = tabs.notes
    .map((notes, noteIndex) => (notes[C1TrackIndex] ? noteIndex : null))
    .filter(n => n)
  expect(C1TrackNotesIndex).toEqual([96])
})

it('parses complex tabs', () => {
  const source = readFileSync(path.join(__dirname, './fixtures/example1.txt')).toString()
  expect(parseTabs(source)).toMatchSnapshot()
})

it('parses tabs with comments', () => {
  const source = readFileSync(path.join(__dirname, './fixtures/example2.txt')).toString()
  expect(parseTabs(source)).toMatchSnapshot()
})
