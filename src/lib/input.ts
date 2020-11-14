import { number } from "joi"

export const parseVarName = (input: string, maxLength: number = 20): string => {
  if (input) {
    const inputFiltered = input.replace(/[^A-Za-z0-9]/g, '')
    return inputFiltered.slice(0, maxLength)
  }
  return ''
}

export const parseText = (input: string, maxLength: number = 100): string => {
  if (input) {
    const inputFiltered = input.replace(/[^\x00-\x7F]/g, '')
    return inputFiltered.slice(0, maxLength)
  }
  return ''
}

export const parseNumber = (input: string | number, max: number = 10): number => {
  const number = Number(input)
  if (number && number >= 0)
    return number <= max ? number : max
  return 0
}