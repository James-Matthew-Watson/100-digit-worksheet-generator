const GRID_SIZE = 100

const $grid = document.querySelector('#grid')
const $amountFilledInInput = document.querySelector('#amount-filled-in-input')

function generateGrid(amountToFillIn) {
  const digitsToDisplay = shuffle(GRID_SIZE, amountToFillIn);
  const cells = []
  for (let i = 0; i < GRID_SIZE; ++i) {
    const $cell = document.createElement('span')
    $cell.classList.add('cell')
    $cell.innerText = i < 10 ? "0"+i : i
    if (!digitsToDisplay.has(i)) $cell.classList.add('hidden')
    cells.push($cell)
  }
  $grid.replaceChildren(...cells)
}


function shuffle(size, amountToFillIn) {
  let array = new Array(size).fill().map((_, i) => i)

  for (let index = array.length - 1; index > 0; --index) {
    let swap = Math.floor(Math.random() * index);
    [array[index], array[swap]] = [array[swap], array[index]];
  }

  return new Set(array.slice(0, amountToFillIn));
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
