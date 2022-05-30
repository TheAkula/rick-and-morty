export function isEmptyObject(obj: Record<string, unknown>): boolean {
  if (Object.keys(obj).length === 0) {
    return true
  }

  let isEmpty = true

  for (const key in obj) {
    isEmpty = isEmpty && obj[key] === null
  }

  return isEmpty
}
