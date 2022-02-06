"use strict";


/*

Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.

*/

function gridMaker (gridContainer, R, C) {
    // gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`
    // gridContainer.style.gridTemplateRows = `repeat(${R}, + 1fr)`
    // for (let i = 0; i < R; i++) {
    //   for (let J = 0; J < C; J++) {
    //     let numberDiv = document.createElement('div')
    //     numberDiv.innerHTML = randomNumber(100)
  
    //     gridContainer.appendChild(numberDiv)
    //   }
    // }
    for (let i = 0;i < R*C; i++){
      createNumberDiv(gridContainer)
    }
  }
  
  gridMaker(
    document.querySelector('#grid'),
    document.querySelector('#inputRows').value,
    document.querySelector('#inputCols').value
    )
    console.log(document.querySelector('#inputRows').value)
    
    function createNumberDiv (gridContainer) {
      let numberDiv = document.createElement ("div");
      numberDiv.innerHTML = randomNumber(100)
      numberDiv.addEventListener("click", function (){numberDiv.classList.toggle('selected')})
      document.querySelector('#grid').appendChild(numberDiv)
      gridContainer.appendChild(numberDiv)
      
    return numberDiv
  }
  
  function randomNumber (max) {
    return Math.floor(max * Math.random())
  }