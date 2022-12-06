import fs from 'fs'
import path from 'path'

const input = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8')
const roundsArray: string[] = input.split('\n')

// Rock      = A X   1
// Paper     = B Y   2
// Scissors  = C Z   3
// Win 6, Draw 3, Lost 0
// ax ay az bx by bz cx cy cz

const getScore = (round: string) => {
  const [opponent, you] = round.split(' ')
  let score = 0

  switch (you) {
  case 'X': // Rock
    switch (opponent) {
    case 'A':
      score += 3
      break
    case 'B':
      break
    case 'C':
      score += 6
      break
    }
    score += 1
    break

  case 'Y': // Paper
    switch (opponent) {
    case 'A':
      score += 6
      break
    case 'B':
      score += 3
      break
    case 'C':
      break
    }
    score += 2
    break

  case 'Z': // Scissors
    switch (opponent) {
    case 'A':
      break
    case 'B':
      score += 6
      break
    case 'C':
      score += 3
      break
    }
    score += 3
    break
  }

  return score
}

const scores = roundsArray
  .map(round => getScore(round))
const total = scores.reduce((sum, currentValue) => sum + currentValue, 0)

console.log(total) // 14531
