const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf8')
const inputArray = input.split('\n\n')


const elfCalories = inputArray
  .map(elf => {
    return elf
      .split('\n')
      .map(calorie => parseInt(calorie))
      .reduce((sum, currentValue) => sum+ currentValue, 0)
  })
const highestCalorie = Math.max(...elfCalories)

console.log(highestCalorie)