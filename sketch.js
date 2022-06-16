var ball;
var backgroundImg,bg;
var sunImg, sun;
var dogImg, dog;
var crabImg, crab;
var purpleB1Img,purpleB1;
var purpleB2Img,purpleB2;
var purpleB3Img,purpleB3;
var cupcakeImg, cupcake1, cupcake2, cupcake3, cupcake4, cupcake5, cupcake6, cupcake7;
var heartImg, heart1, heart2, heart3;
var acidrainImg, acidrain;
var life = 3;
var invisibleGround;

function preload(){
  backgroundImg = loadImage("./Images/Background.jpg");
  sunImg = loadImage("./Images/sun.png");
  dogImg = loadImage("./Images/Dog.png");
  crabImg = loadImage("./Images/Crab.png");
  purpleB1Img = loadImage("./Images/Purple base.png");
  purpleB2Img = loadImage("./Images/Purplebase2.png");
  purpleB3Img = loadImage("./Images/Purplebase2.png");
  cupcakeImg = loadImage("./Images/Cupcake.png");
  heartImg = loadImage("./Images/Heart.png");
  acidrainImg = loadImage("./Images/acidrain.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2, windowHeight/2);
  bg.addImage(backgroundImg);
  bg.scale =1.2;

  sun = createSprite(windowWidth - 1450, windowHeight - 650);
  sun.addImage(sunImg);
  sun.scale = 0.65;

  dog = createSprite(windowWidth - 1400, windowHeight -100);
  dog.addImage(dogImg);
  dog.scale = 0.3;
  //dog.debug = true;
  dog.setCollider("circle",0,0,180);

  crab = createSprite(windowWidth - 700, windowHeight - 100);
  crab.addImage(crabImg);
  crab.scale = 0.2;
  crab.velocityX = -3.5; 
  //crab.debug = true;
  crab.setCollider("circle",0,0,260);

  purpleB1 = createSprite(windowWidth - 400, windowHeight -380);
  purpleB1.addImage(purpleB1Img);
  purpleB1.scale = 0.55;
  

  purpleB2 = createSprite(windowWidth - 1100, windowHeight -300);
  purpleB2.addImage(purpleB2Img);
  purpleB2.scale = 0.47;

  purpleB3 = createSprite(windowWidth - 800, windowHeight -570);
  purpleB3.addImage(purpleB2Img);
  purpleB3.scale = 0.47;

  cupcake1 = createSprite(windowWidth - 870, windowHeight -635);
  cupcake1.addImage(cupcakeImg);
  cupcake1.scale = 0.2
  
  cupcake2 = createSprite(windowWidth - 730, windowHeight -635);
  cupcake2.addImage(cupcakeImg);
  cupcake2.scale = 0.2

  cupcake3 = createSprite(windowWidth - 255, windowHeight -450);
  cupcake3.addImage(cupcakeImg);
  cupcake3.scale = 0.2

  cupcake4 = createSprite(windowWidth - 415, windowHeight -450);
  cupcake4.addImage(cupcakeImg);
  cupcake4.scale = 0.2

  cupcake5 = createSprite(windowWidth - 575, windowHeight -450);
  cupcake5.addImage(cupcakeImg);
  cupcake5.scale = 0.2

  cupcake6 = createSprite(windowWidth - 1020, windowHeight -380);
  cupcake6.addImage(cupcakeImg);
  cupcake6.scale = 0.2

  cupcake7 = createSprite(windowWidth - 1170, windowHeight -380);
  cupcake7.addImage(cupcakeImg);
  cupcake7.scale = 0.2

  heart1 = createSprite(windowWidth - 1350, windowHeight - 650);
  heart1.addImage(heartImg);
  heart1.scale = 0.3;
 
  heart2 = createSprite(windowWidth - 1250, windowHeight - 650);
  heart2.addImage(heartImg);
  heart2.scale = 0.3;

  heart3 = createSprite(windowWidth - 1150, windowHeight - 650);
  heart3.addImage(heartImg);
  heart3.scale = 0.3;
 
  invisibleGround = createSprite(windowWidth - 700, windowHeight - 45,1700,10);
  invisibleGround.visible = false;
 
}

function draw() 
{
  background(backgroundImg);

  if(crab.x < (windowWidth - 1475)){
    crab.velocityX = 4;
  }
  if(crab.x > (windowWidth - 600)){
    crab.velocityX = -4;
  }

  if(crab.isTouching(dog) && life === 3){
    heart3.destroy();
    crab.x = windowWidth - 700;
    life = life - 1;
    dog.x = windowWidth - 400;

  }
  else if(crab.isTouching(dog) && life === 2){
    heart2.destroy();
    crab.x = windowWidth - 700;
    life = life - 1;
  }
  else if(crab.isTouching(dog) && life === 1){
    heart1.destroy();
    crab.x = windowWidth - 700;
    life = life - 1;
  }
  if (keyDown(RIGHT_ARROW)) {
    dog.x = dog.x + 10;
    dog.mirrorX(1);
  }
  if (keyDown(LEFT_ARROW)) {
    dog.x = dog.x - 10;
    dog.mirrorX(-1);
  }
  if (keyDown("space")) {
    dog.velocityY = -7
  }
  if (dog.isTouching(cupcake1)) {
    cupcake1.destroy;
    cupcake1.visible = false;
  }
  if (dog.isTouching(cupcake2)) {
    cupcake2.destroy;
    cupcake2.visible = false;
  }
  if (dog.isTouching(cupcake3)) {
    cupcake3.destroy;
    cupcake3.visible = false;
  }
  if (dog.isTouching(cupcake4)) {
    cupcake4.destroy;
    cupcake4.visible = false;
  }
  if (dog.isTouching(cupcake5)) {
    cupcake5.destroy;
    cupcake5.visible = false;
  }
  if (dog.isTouching(cupcake6)) {
    cupcake6.destroy;
    cupcake6.visible = false;
  }
  if (dog.isTouching(cupcake7)) {
    cupcake7.destroy;
    cupcake7.visible = false;
  }

  
  dog.velocityY = dog.velocityY + 0.1;


  if (frameCount % 25 === 0) {
    acidrain = createSprite(Math.round(random(1,windowWidth)));
    acidrain.addImage(acidrainImg);
    acidrain.velocityY = 5;
    acidrain.lifeTime = 120;
    acidrain.scale = 0.1
  }

  

  dog.collide(invisibleGround);
  dog.collide(purpleB1);
  dog.collide(purpleB2);
  dog.collide(purpleB3);
  drawSprites()

  }
  
  




