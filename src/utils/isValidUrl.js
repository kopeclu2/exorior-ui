export const isValidUrl = (string) => {
  try {
    new URL(string)
  } catch (_) {
    return false
  }
  return true
}
