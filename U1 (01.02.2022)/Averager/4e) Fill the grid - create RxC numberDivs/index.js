"use strict";


/*

We will now add lines to gridMaker() so that it also fills the grid with "numberDivs".

You must solve this in two different ways:
1) Use nested for-loops to do this. Use one for loop for the columns and one for the rows.
2) Use only one for-loop. How many times must it iterate?


VIDEO:  Record a video where you explain the two different ways (see above) of creating the right
        amount of numberDivs. The video should be called loopExplainer

*/


function gridMaker (gridContainer, R, C) {
        
        gridContainer.style.display = 'Grid';
        gridContainer.style.gridTemplateRows = R + "fr";
        gridContainer.style.gridTemplateColumns = C + "fr";

        for (let i = 0; i < R*C; i++) {
        let numberDiv = document.createElement("div");
        numberDiv.innerHTML = randomNumber( 100 );
        document.querySelector("#grid").appendChild( numberDiv )
        }

        numberDiv.load(gridContainer)

        console.log(R*C)

      }

      document.querySelector("button").addEventListener("click", function(){gridMaker(document.querySelector('#grid'), rowValue(), colValue())})

  console.log(document.querySelector( "#inputRows").value)

  function rowValue (){
    
    return document.querySelector( "#inputRows").value

  }

  function colValue (){
    
    return document.querySelector( "#inputCols").value

  }

//   function createNumberDiv (){

//         let numberDiv = document.createElement("div");
//         numberDiv.innerHTML = randomNumber( 100 );
    
//         return numberDiv;
//     }
    
    function randomNumber ( max ) {
        return Math.floor( max * Math.random() );
      }
    