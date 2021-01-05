function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);

 movingRect  = createSprite(120,200,40,40);

 fixedRect.shapeColor = "blue";
 movingRect.shapeColor = "blue";



}

function draw() {
  background(255,255,255);  

 movingRect.x = World.mouseX;
 movingRect.y = World.mouseY;

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
   fixedRect.x - movingRect.x <movingRect.width/2 + fixedRect.width/2 &&
   movingRect.y - fixedRect.y < movingRect.width/2 + fixedRect.width/2 &&
   fixedRect.y - movingRect.y <movingRect.width/2 + fixedRect.width/2){
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
   
}
else{
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
    
}

  drawSprites();
}