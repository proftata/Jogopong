function setup() {
  createCanvas(600, 400);
}
let xBolinha = 300;
let yBolinha = 200;
let velocidadexBolinha = 3;
let velocidadeyBolinha = 3;
let diametro = 20;
let raio = diametro / 2;

let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

let hit = false;

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente;

function draw() {
  background(0);

  Bolinha();
  MostraRaquete(xRaquete, yRaquete);
  MostraRaquete(xRaqueteOponente, yRaqueteOponente);
  MovimentoMinhaRaquete();
  MovimentoRaqueteOponente();
  Colisão(xRaquete,yRaquete);
  Colisão (xRaqueteOponente, yRaqueteOponente);

  function Bolinha() {
    circle(xBolinha, yBolinha, diametro);
    xBolinha += velocidadexBolinha;
    yBolinha += velocidadeyBolinha;

    if (yBolinha + raio > height) {
      velocidadeyBolinha *= -1;
    }
    if (yBolinha - raio < 0) {
      velocidadeyBolinha *= -1;
    }
    if (xBolinha + raio > width) {
      velocidadexBolinha *= -1;
    }
    if (xBolinha - raio < 0) {
      velocidadexBolinha *= -1;
    }
  }

  function MostraRaquete(x, y) {
    rect(x, y, comprimentoRaquete, alturaRaquete);
  }

  function MovimentoMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
      yRaquete -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 5;
    }
  }
  
  function MovimentoRaqueteOponente(){
    velocidadeyOponente = yBolinha - yRaqueteOponente -alturaRaquete/2 -30;
    yRaqueteOponente +=velocidadeyOponente;
    
  }
  function Colisão(x,y) {
    hit = collideRectCircle(
      x,
      y,
      comprimentoRaquete,
      alturaRaquete,
      xBolinha,
      yBolinha,
      diametro
    );
    if (hit) {
      velocidadexBolinha *= -1;
    }
  }
}