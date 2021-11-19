export function findLastIndex<T>(predicate: (item: T) => boolean, array: T[]): number {
  return array.reduce((acc, curr, index) => (predicate(curr) ? index : acc), -1)
}
