export const toTitleCase = function (inputString?: string): string {
  return inputString
    ? inputString
        .split(' ')
        .map((fragment) => `${fragment[0].toUpperCase()}${fragment.slice(1)}`)
        .join(' ')
    : ''
}
