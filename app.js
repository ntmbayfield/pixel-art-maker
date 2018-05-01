function makeTile(number) {

  for (let i = 0; i < number * number; i++) {
    let tile = document.createElement('div');
    tile.style.width="40%";
    tile.style.height="40%";
    tile.style.float = "left";
    tile.style.paddingBottom = "20%";
    tile.style.background = "white";
    tile.style.border = "dotted black 3px";
    document.body.appendChild(tile)
        .addEventListener('click', function(){
          tile.style.background = "red";
    });

  }
}



makeTile(2);
