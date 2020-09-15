var car,wall,car2,car3;
var speed,weight;

function setup() {
  createCanvas(1200,800);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
 wall=createSprite(1500,200,60,height/2);
 wall.shapeColour="black";
}

function draw() {
  background(0,0,0);  

car.velocityX=speed;
if(wall.x-car.x<(car.weight+wall.weight)/2){
  car.velocityX=0;
  var deformation=0.5 *weight*speed*speed/22509;
  if(deformation>180){
    car.shapeColour="red"(255,0,0);
  }
  if (deformation<180 && deformation>100){
    car.shapeColour="yelloe"(230,230,0);
  }
  if(deformation<100){
    car.shapeColour="green"(0,255,0);
  }
}


  drawSprites();
} 