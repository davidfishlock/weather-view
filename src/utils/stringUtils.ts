export function formatString(templatedString: string, ...args: (number | string)[]): string {
  const templateRegex = /{(0|[1-9][0-9]*?)}/g

  return templatedString.replace(templateRegex, (match, x: number) => {
    if (args.length > x) {
      return args[x].toString()
    }

    return match
  })
}
