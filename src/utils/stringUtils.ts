export function toTitleCase(inputString?: string): string {
  return inputString
    ? inputString
        .split(' ')
        .map((fragment) => `${fragment[0].toUpperCase()}${fragment.slice(1)}`)
        .join(' ')
    : ''
}

export function formatString(templatedString: string, ...args: (number | string)[]): string {
  const templateRegex = /{(0|[1-9][0-9]*?)}/g

  return templatedString.replace(templateRegex, (match, x: number) => {
    if (args.length > x) {
      return args[x].toString()
    }

    return match
  })
}
