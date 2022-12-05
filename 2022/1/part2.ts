export {}

const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')
const inputArray: string[] = input.split('\n\n')


const elfCalories = inputArray
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
