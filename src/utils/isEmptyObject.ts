export function isEmptyObject(obj: Record<string, unknown>): boolean {
  if (Object.keys(obj).length === 0) {
    return false
  }

  let isEmpty = true

  for (const key in obj) {
    isEmpty = obj[key] !== null
  }

  return isEmpty
}
