var colorsArray = ["red", "orange", "yellow", "green", "blue", "purple", "brown", "grey", "white", "black"];
var brushColor = colorsArray[0];

function createTable(height, width) {
  //creates container div
  let container = document.createElement('div');
  container.id = "pixelContainer";
  document.body.appendChild(container);
  //creates row divs
  for (let i=0; i<height; i++) {
    let row = document.createElement('div');
    row.className = "rows";
    container.appendChild(row);
  //creates pixel divs
    for (let j=0; j<width; j++) {
      let pixel = document.createElement('div');
      pixel.className = "pixels";
      row.appendChild(pixel)
        .addEventListener('click', function() {
          pixel.style.backgroundColor = brushColor;
        });
    }
  }
}

function createColorPalette(colorsArr) {
  //create container div
  let paletteContainer = document.createElement('div');
  paletteContainer.id = "paletteContainer";
  document.body.appendChild(paletteContainer);
  //create row for color palette choices
  let paletteRow = document.createElement('div');
  paletteRow.id = "paletteRow";
  paletteContainer.appendChild(paletteRow);
  //create row for selected color

  // let selectedColorRow = document.createElement('div');
  // selectedColorRow.id = "currentColorRow";
  // paletteContainer.appendChild(selectedColorRow);

  //create selected color div
  let selectedColor = document.createElement('div');
  selectedColor.id = "selectedColor";
  selectedColor.style.backgroundColor = brushColor;
  paletteRow.appendChild(selectedColor);
  //create color palette divs
  for (let i=0; i <colorsArr.length; i++) {
    let colorCircle = document.createElement('div');
    colorCircle.className = "colorCircles";
    colorCircle.style.backgroundColor = colorsArr[i];
    paletteRow.appendChild(colorCircle)
      .addEventListener('click', function() {
        brushColor = colorsArr[i];
        selectedColor.style.backgroundColor = brushColor;
      });
  }
}



createTable(20, 20);

createColorPalette(colorsArray);
