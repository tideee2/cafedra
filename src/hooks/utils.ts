export function formatDate(strDate: string | undefined) {
  if (!strDate) {
    return ''
  }
  return strDate
    .split('/')
    .map(s => s.trim())
    .reverse()
    .join('-')
}

export function dateFormatForStore(strDate: string | undefined) {
  if (!strDate) {
    return ''
  }
  return strDate
    .split('-')
    .reverse()
    .join(' / ')
}
