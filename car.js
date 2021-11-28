//Codigo dos Carros
 //Usando lista
let yCars = [40, 96, 150, 210, 270, 318];
let velCars = [2, 3, 4, 4.2, 3.5, 2.2];
let xCars = [600, 600, 600, 600, 600, 600];
let compCars = 50;
let altCars = 40;

function mostraCar(){
  for (let i = 0; i < imgCars.length; i++){
  image(imgCars[i], xCars[i], yCars[i], compCars, altCars);
  }
}

function movCar(){
  for (let i = 0; i < imgCars.length; i++){
    xCars[i] -= velCars[i];
  }
}

function resetCar(){
  for (let i = 0; i < imgCars.length; i++){
    if(passouTela(xCars[i])){
      xCars[i] = 600
    }
  }
}

function passouTela(xCars){
  return xCars < -50
}