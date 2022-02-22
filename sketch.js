var bathImg, drinkImg, eatImg, gymImg, issImg, moveImg, sleepImg, bg, brushImg
var astrounaut;

function preload(){
  bathImg = loadAnimation("bath1.png", "bath1.png","bath2.png", "bath2.png");
  drinkImg = loadAnimation("drink1.png", "drink1.png", "drink2.png", "drink2.png");
  eatImg = loadAnimation("eat1.png", "eat1.png", "eat2.png", "eat2.png");
  gymImg = loadAnimation("gym1.png", "gym1.png", "gym2.png", "gym2.png");
  issImg = loadAnimation("iss.png");
  moveImg = loadAnimation("move.png", "move.png", "move1.png", "move1.png");
  sleepImg = loadAnimation("sleep.png");
  bg = loadImage("iss.png")
  brushImg = loadAnimation("brush.png")
}

function setup() {
  createCanvas(600,500);

  astrounaut = createSprite(200, 200);
  astrounaut.addAnimation("sleep",sleepImg);
  astrounaut.scale = .1;
  
}

function draw() {
  background(bg);
  text("instructions:", 20, 30);
  text("flecha hacia arriba = cepillarse", 20, 50);
  text("flecha hacia abajo = ejercitarse", 20, 70);
  text("flecha hacia la izquierda = comer", 20, 90);
  text("flecha hacia la derecha = bañarse", 20, 110);
  text("tecla m = moverse", 20, 130);
  drawSprites();
  edges = createEdgeSprites();

  astrounaut.bounceOff(edges);

  if (keyDown("UP_ARROW")){
    astrounaut.addAnimation("brushing", brushImg);
    astrounaut.changeAnimation("brushing");
    astrounaut.y = 350;
    astrounaut.velocityY = 0;
    astrounaut.velocityX = 0;
  }

  if (keyDown("DOWN_ARROW")){
    astrounaut.addAnimation("gym", gymImg);
    astrounaut.changeAnimation("gym");
    astrounaut.y = 350;
    astrounaut.velocityY = 0;
    astrounaut.velocityX = 0;
  }

  if (keyDown("RIGHT_ARROW")){
    astrounaut.addAnimation("bath", bathImg);
    astrounaut.changeAnimation("bath");
    astrounaut.x = 300;
    astrounaut.velocityY = 0;
    astrounaut.velocityX = 0;
  }

  if (keyDown("LEFT_ARROW")){
    astrounaut.addAnimation("eat", eatImg);
    astrounaut.changeAnimation("eat");
    astrounaut.y = 350;
    astrounaut.x = 150
    astrounaut.velocityY = 0.5;
    astrounaut.velocityX = 0.5;
  }

  if (keyDown("m")){
    astrounaut.addAnimation("move", moveImg);
    astrounaut.changeAnimation("move");
    astrounaut.velocityY = 1;
    astrounaut.velocityX = 1;
  }
}