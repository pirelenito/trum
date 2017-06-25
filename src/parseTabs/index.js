export default tabs => {
  return tabs.split('\n').filter(line => line.trim().length > 0).map(line => {
    const match = line.match(/^(.{2})\|(.+)/)

    return !match
      ? { symbol: 'invalid', notes: [] }
      : {
          symbol: match[1].trim(),
          notes: match[2].split('').filter(note => note !== '|' && note !== ' '),
        }
  })
}
