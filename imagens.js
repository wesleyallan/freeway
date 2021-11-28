//Imagens
let backgrounStrada;
let imgAtor;
let imgCar;
let imgCar2;
let imgCar3;

//Sons
let somTrilha;
let somColisao;
let somPontos;


function preload(){
  backgroundStrada = loadImage("imagens/estrada.png");
  imgAtor = loadImage("imagens/ator-1.png");
  imgCar = loadImage("imagens/carro-1.png");
  imgCar2 = loadImage("imagens/carro-2.png");
  imgCar3 = loadImage("imagens/carro-3.png");
  imgCars = [imgCar, imgCar2, imgCar3, imgCar, imgCar2, imgCar3];
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
}