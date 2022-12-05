const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8')
const elvesArray: string[] = input.split('\n\n')


const elfCalories = elvesArray
  .map(elf => {
    return elf
      .split('\n')
      .map(calorie => parseInt(calorie))
      .reduce((sum, currentValue) => sum + currentValue, 0)
  })
const highestCalorie = Math.max(...elfCalories)

console.log(highestCalorie)