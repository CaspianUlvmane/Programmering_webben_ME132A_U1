'use strict'

/*

We will now add lines to gridMaker() so that it also fills the grid with "numberDivs".

You must solve this in two different ways:
1) Use nested for-loops to do this. Use one for loop for the columns and one for the rows.
2) Use only one for-loop. How many times must it iterate?


VIDEO:  Record a video where you explain the two different ways (see above) of creating the right
        amount of numberDivs. The video should be called loopExplainer

*/

document.querySelector('button').addEventListener('click', function () {
  gridMaker(
    document.querySelector('#grid'),
    document.querySelector('#inputRows').value,
    document.querySelector('#inputCols').value
  )
})

function gridMaker (gridContainer, R, C) {
  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`
  gridContainer.style.gridTemplateRows = `repeat(${R}, + 1fr)`
  gridContainer.innerHTML = ''
  // for (let i = 0; i < R; i++) {
  //   for (let J = 0; J < C; J++) {
  //     let numberDiv = document.createElement ("div");
  //     gridContainer.appendChild(numberDiv)
  //   }
  // }
  for (let i = 0; i < R * C; i++) {
    let numberDivs = document.createElement('div')
    gridContainer.appendChild(numberDivs)
  }
}

function createNumberDiv () {
  let numberDiv = document.createElement('div')
  numberDiv.innerHTML = randomNumber(100)

  return numberDiv
}

function randomNumber (max) {
  return Math.floor(max * Math.random())
}
