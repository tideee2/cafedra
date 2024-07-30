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
export function sliceStr(str: string, count = 100) {
  if (!str?.length) {
    return '...'
  }
  if (str.length <= count) {
    return str
  }
  return `${str.slice(0, count)}...`
}
