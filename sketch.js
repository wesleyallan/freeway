function setup() {
  createCanvas(500, 400);
  somTrilha.loop()
}

function draw() {
  background(backgroundStrada);
  mostraAtor();
  mostraCar();
  movCar();
  movAtor();
  resetCar();
  verColisao();
  incluiPontos();
  marcaPonto();
}