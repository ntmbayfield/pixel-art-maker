var colorsArray = ["red", "blue"];
var brushColor = colorsArray[0];
var currentColor;

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
      tile.style.background = brushColor;
    });
  }
}

//Function that creates a div that lets the user know what color is currently selected
function makeCurrentColorIcon() {
  currentColor = document.createElement('div');
  currentColor.style.width="10%";
  currentColor.style.height="10%";
  currentColor.style.float="left";
  currentColor.style.paddingBottom="5%";
  currentColor.style.paddingRight ="5%";
  currentColor.style.paddingLeft="5%";
  currentColor.style.border = "solid yellow 3px";
  currentColor.style.borderRadius = "10px";
  currentColor.style.background="white";
  document.body.appendChild(currentColor);

}


//Write function to create two circles below the canvas, each filled with a diffrent color
function makeColorPalette(colorsArr) {
  for (let i=0; i < colorsArr.length; i++) {
    let colorCircle = document.createElement('div');
    colorCircle.style.width="10%";
    colorCircle.style.height="10%";
    colorCircle.style.float = "left";
    colorCircle.style.paddingBottom = "5%";
    colorCircle.style.background = colorsArray[i];
    colorCircle.style.border = "solid black 3px";
    colorCircle.style.borderRadius = "10px";
    document.body.appendChild(colorCircle);
    colorCircle.addEventListener('click', function(){
      brushColor = colorsArr[i];
      console.log("brush color is now ", colorsArr[i]);
      currentColor.style.background=colorsArr[i];
    });
  }
}



makeTile(2);

makeCurrentColorIcon();

makeColorPalette(colorsArray);
