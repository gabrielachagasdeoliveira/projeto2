function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("purple");
    fill("white");
    textSize(64);
    textAlign(CENTER, CENTER)
    
    let maximo = width;
    let minimo = 0;
    let palavra = "love";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    let parcial = palavra.substring(0,quantidade);
    text(parcial,200,200);
    
  //  if(mouseX < 50){
  //    let palavra = "C";
  //    text(palavra, 200, 200);
  //  } else {
  //    let palavra = "Gabriela";
  //    text(palavra, 200, 200);
  //  }
  }
  