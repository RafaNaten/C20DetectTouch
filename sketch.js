var fixed, moving;

function setup() {
  createCanvas(1200,800);
  fixed = createSprite(600,400,50,80);
  moving = createSprite(400, 200, 80, 30);
  fixed.shapeColor = "grey";
  moving.shapeColor = "grey";

}

function draw() {
  background("pink");  
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  console.log(moving.x-fixed.x);
  if (moving.x-fixed.x < moving.width/2+fixed.width/2 && fixed.x-moving.x < moving.width/2 + fixed.width/2
     && moving.y-fixed.y < moving.height/2+fixed.height/2 
     && fixed.y-moving.y < moving.height/2 + fixed.height/2) {
    moving.shapeColor= "blue";
    fixed.shapeColor = "blue";
  }
  else {
    moving.shapeColor = "grey";
    fixed.shapeColor = "grey";
  }
  drawSprites();
}