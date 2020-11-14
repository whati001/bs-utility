
export const parseVarName = (input: string): string => {
  if (input) {
    const inputFiltered = input.replace(/[^A-Za-z0-9]/, '')
    return inputFiltered.slice(0, 20)
  }
  return ''
}