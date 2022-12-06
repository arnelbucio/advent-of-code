export {}

import fs from 'fs'
import path from 'path'

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8')
const elvesArray: string[] = input.split('\n\n')


const elfCalories = elvesArray
  .map(elf => {
    return elf
      .split('\n')
      .map(calorie => parseInt(calorie))
      .reduce((sum, currentValue) => sum + currentValue, 0)
  })

const sum = elfCalories
  .sort((a, b) => (b - a))
  .slice(0, 3)
  .reduce((sum, currentValue) => sum + currentValue, 0)

console.log(sum)
