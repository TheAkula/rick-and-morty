export const getDetailTitle = (title: string) => {
  return title.length > 17 ? title.slice(0, 16) + '...' : title
}
