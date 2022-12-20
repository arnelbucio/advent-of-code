import fs from 'fs'
import path from 'path'

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8')
const rucksacks: string[] = input.split('\n')


function getPrioritySum(rucksacks: string[]): number {
  let sum = 0
  for (const rucksack of rucksacks) {
    const compartments = cutInHalf(rucksack)
    const matchedChar = findMatch(compartments[0], compartments[1])
    sum += getCharPriority(matchedChar)
  }
  return sum
}

function cutInHalf(string: string): [string, string] {
  const firstHalf = string.slice(0, string.length / 2)
  const secondHalf = string.slice(string.length / 2, string.length)

  return [firstHalf, secondHalf]
}

function findMatch(firstCompartment:string, secondCompartment:string): string {
  for (const char of firstCompartment) {
    if (secondCompartment.includes(char)) {
      return char
    }
  }
  return ''
}

function getCharPriority(char: string): number {
  // a-z = 1-26, A-Z = 27-52
  const offset = char === char.toLowerCase() ? 96 : 38
  return char.charCodeAt(0) - offset
}

console.log(getPrioritySum(rucksacks)) // 7872

export {
  getPrioritySum,
  cutInHalf,
  findMatch,
  getCharPriority
}