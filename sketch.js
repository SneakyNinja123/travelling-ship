var ship,sea
var shipImage,seaImage

function preload(){
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(400,200)
  sea.addImage("sea",seaImage)
  sea.scale = 0.5
  sea.velocityX = -2

  ship = createSprite(200,250,30,30)
  ship.addAnimation("moving",shipImage)
  ship.scale = 0.3

  
}

function draw() {
  background("blue");

if(sea.x < 0){
  sea.x = 400
}

  drawSprites()

}