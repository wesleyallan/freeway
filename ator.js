//Ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let pontos = 0;

function mostraAtor(){
    image(imgAtor, xAtor, yAtor, 30, 30); // eixoX, eixoY, width, height
}


function movAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function verColisao(){
  for (let i = 0; i < imgCars.length; i++){
    colisao = collideRectCircle(xCars[i], yCars[i], compCars, altCars, xAtor, yAtor, 15)
    if(colisao){
      voltaPosicaoInic();
      somColisao.play();
      if(pontosMaiorZero()){
        pontos -= 1;
      }
    }
  }
}

function voltaPosicaoInic(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(pontos, width / 5, 25);
}

function marcaPonto(){
  if(yAtor < 15){
    pontos += 1;
    somPontos.play();
    voltaPosicaoInic();
  }
}

function pontosMaiorZero(){
  return pontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}