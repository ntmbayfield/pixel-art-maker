'use strict';





// function makeTile() {
//    var tile = document.createElement("div");
//    tile.style.width = "11.1%";
//    tile.style.paddingBottom = "11.1%";
//    tile.style.float = "left";
//    tile.style.background = "white";
//    tile.style.border = "dotted 1px black";
//    return tile;
//  }
//
//  function createCheckerBoard(number) {
//    var tile=null;
//
//    for (let j=0; j<number; j++){
//      for(let i=0;i<number;i++){
//        tile = makeTile()
//        tile.style.display: inline-block;
//        document.body.appendChild(tile);
//        tile.addEventListener('click', function(){
//          tile.style.background = brushColor;
//        });
//       }
//    }
//  }        //closes createCheckerBoard function
// createCheckerBoard(9);

//Function that creates number x number grid of white tiles that have eventListener for click which turns background to red





//Write function to create two circles below the canvas, each filled with a diffrent color


var colorsArray = ["red", "orange", "yellow", "green", "blue", "purple", "brown", "grey", "white", "black"];
var currentColor;


let prepApp = function() {

var brushColor = colorsArray[0];


  function makeCanvas(number) {
    let myTable = document.getElementById('myTable');
  //  myTable.style.layout = "auto";
  //  myTable.style.width = "80%";
    myTable.style.height = "auto";
    myTable.id = "canvas";
    myTable.style.width = "auto";
    myTable.style.padding="0px";
    for (let i = 0; i < number; i++) {
      var myRow = document.createElement('tr');
      myRow.className = "rows";
  //    myRow.style.width = "80%";
      myTable.appendChild(myRow);
      for (let j = 0; j< number; j++) {
        var tile = document.createElement('th');
        tile.style.width= "10px";
        tile.style.height= "12px";
        tile.style.float = "left";
  //      tile.style.margin = "1px";
  //      tile.style.paddingBottom = "1px";
        tile.style.background = "white";
        tile.style.border = "dotted black 1px";
        tile.style.display = "inline-block";
        tile.style.padding = "0px";
        tile.style.margin="0px";
        myRow.appendChild(tile);
        tile.class = "pixels";
        tile.addEventListener('click', function(){
          tile.style.background = brushColor;
        });
      }tile.style.float = "clear";
    }
  }

  //Function that creates a div that lets the user know what color is currently selected
  function makeCurrentColorIcon() {
    let lineBreak = document.createElement('div');
    lineBreak.innerHTML = "<br><p></p><br>";
    document.body.appendChild(lineBreak);
    let currentColor = document.createElement('div');
    currentColor.style.width="2%";
    currentColor.style.height="2%";
    currentColor.style.float="left";
    currentColor.style.paddingBottom="2%";
    currentColor.style.marginBottom="2%";
    currentColor.style.marginRight ="2%";
    currentColor.style.marginLeft="2%";
    currentColor.style.marginTop="2%";
    currentColor.style.border = "solid yellow 3px";
    currentColor.style.borderRadius = "20px";
    currentColor.style.background="white";
    document.body.appendChild(currentColor);
    currentColor.id = "selectedColor";
  }

  function makeColorSelectors(colorsArr) {
    var myTable2 = document.getElementById('myTable2');
    myTable2.style.display = "block";
    myTable2.style.margin="auto";
    myTable2.style.width = "100%";
    myTable2.style.height = "100px";
    let cSelectorRow = document.createElement('tr');
    cSelectorRow.id = "colorRow";
    myTable2.appendChild(cSelectorRow);
    for (let i=0; i < colorsArr.length; i++) {
      let colorCircle = document.createElement('th');
      colorCircle.className = "colorCircles";
      colorCircle.style.width="5%";
      colorCircle.style.height="5%";
      colorCircle.style.float = "left";
      colorCircle.style.display = "inlineBlock";
      colorCircle.style.paddingBottom = "2%";
      colorCircle.style.marginBottom = "2%";
      colorCircle.style.marginRight = "2%";
      colorCircle.style.marginLeft = "2%";
      colorCircle.style.marginTop = "2%";
      colorCircle.style.background = colorsArray[i];
      colorCircle.style.border = "solid black 3px";
      colorCircle.style.borderRadius = "20px";
      cSelectorRow.appendChild(colorCircle);
      colorCircle.addEventListener('click', function(){
        brushColor = colorsArr[i];
        console.log("brush color is now ", colorsArr[i]);
        currentColor.style.background=colorsArr[i];
      });
    }
  }



  makeCanvas(20);
  makeColorSelectors(colorsArray);
  makeCurrentColorIcon();
}

window.onload = prepApp();
