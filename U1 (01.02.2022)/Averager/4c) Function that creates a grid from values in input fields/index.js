"use strict";


/*

We will continue with our work from 4b.
We need to fix these two things:

First:
gridMaker must be called each time the user clicks on the button (See index.html).


Second:
We now need to make sure that when we call (anropar) gridMaker we must use
the values in #inputRows and #inputColumns as arguments.

*/

document.querySelector("button").addEventListener("click", function(){gridMaker(document.querySelector('#grid'), rowValue(), colValue())})


function gridMaker (gridContainer, R, C) {

    gridContainer.style.display = 'Grid';
    gridContainer.style.gridTemplateRows = R + "fr";
    gridContainer.style.gridTemplateColumns = C + "fr";
  
  }

  console.log(document.querySelector( "#inputRows").value)

  function rowValue (){
    
    return document.querySelector( "#inputRows").value

  }

  function colValue (){
    
    return document.querySelector( "#inputCols").value

  }