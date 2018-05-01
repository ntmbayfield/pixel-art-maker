
//Function that creates number x number grid of white tiles that have eventListener for click which turns background to red
function makeTile(number) {

  for (let i = 0; i < number * number; i++) {
    let tile = document.createElement('div');
    tile.style.width="47%";
    tile.style.height="30%";
    tile.style.float = "left";
    tile.style.paddingBottom = "20%";
    tile.style.background = "white";
    tile.style.border = "dotted black 3px";
    document.body.appendChild(tile);
    tile.addEventListener('click', function(){
      tile.style.background = "red";
    });
  }
}

//Write function to create two circles below the canvas, each filled with a diffrent color
function makeColorSelectors(colorsArr) {
  for (let i=0; i < colorsArray.length; i++) {
    let colorCircle = document.createElement('div');
    colorCircle.style.width="10%";
    colorCircle.style.height="10%";
    colorCircle.style.float = "left";
    colorCircle.style.paddingBottom = "5%";
    colorCircle.style.background = colorsArray[i];
    colorCircle.style.border = "solid black 3px";
    colorCircle.style.borderRadius = "10px";
    document.body.appendChild(colorCircle);
  }
}

makeTile(2);
let colorsArray = ["red", "blue"];

makeColorSelectors(colorsArray);
