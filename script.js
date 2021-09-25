const GRID_SIZE = 100

const $grid = document.querySelector('#grid')
const $amountFilledInInput = document.querySelector('#amount-filled-in-input')

function generateGrid(amountToFillIn) {
  const digitsToDisplay = chooseDigitsToDisplay(amountToFillIn)
  const cells = []
  for (let i = 0; i < GRID_SIZE; ++i) {
    const $cell = document.createElement('span')
    $cell.classList.add('cell')
    $cell.innerText = i
    if (!digitsToDisplay.has(i)) $cell.classList.add('hidden')
    cells.push($cell)
  }
  $grid.replaceChildren(...cells)
}

function chooseDigitsToDisplay(amountToFillIn) {
  const digitsToChooseFrom = new Array(GRID_SIZE).fill().map((_, i) => i)
  const finalDigits = []

  for (let i = 0; i < amountToFillIn; ++i) {
    const randomIndex = Math.floor(Math.random() * digitsToChooseFrom.length)
    const chosenNumb = digitsToChooseFrom.splice(randomIndex, 1)[0]
    finalDigits.push(chosenNumb)
  }

  return new Set(finalDigits)
}

window.addEventListener('DOMContentLoaded', () => {
  generateGrid($amountFilledInInput.value)
})

document.querySelector('#refresh').addEventListener('click', e => {
  generateGrid($amountFilledInInput.value)
})

$amountFilledInInput.addEventListener('input', e => {
  generateGrid(e.target.value)
})

document.querySelector('#print').addEventListener('click', () => {
  globalThis.print()
})