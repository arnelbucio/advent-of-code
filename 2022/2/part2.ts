import fs from 'fs'
import path from 'path'

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8')
const roundsArray: string[] = input.split('\n')

// Rock      = A   1
// Paper     = B   2
// Scissors  = C   3
// X = Lose
// Y = Draw
// Z = Win
// Win 6, Draw 3, Lost 0

const getScore = (round: string) => {
  const [opponent, result] = round.split(' ')
  let score = 0

  switch (result) {
  case 'X': // Lose
    switch (opponent) {
    case 'A': // Rock
      score += 3 // Scissors
      break
    case 'B':
      score += 1
      break
    case 'C':
      score += 2
      break
    }
    break

  case 'Y': // Draw
    switch (opponent) {
    case 'A':
      score += 1
      break
    case 'B':
      score += 2
      break
    case 'C':
      score += 3
      break
    }
    score += 3
    break

  case 'Z': // Win
    switch (opponent) {
    case 'A':
      score += 2
      break
    case 'B':
      score += 3
      break
    case 'C':
      score += 1
      break
    }
    score += 6
    break
  }

  return score
}

const scores = roundsArray
  .map(round => getScore(round))
const total = scores.reduce((sum, currentValue) => sum + currentValue, 0)

console.log(total) //11258
