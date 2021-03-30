//DESIGN OF ALGORITHM

//variables: named memory location in 
//which we store values
var r1, r2;

//setup: prepration 
function setup() {
  createCanvas(400,400);
  
  r1=createSprite(100,100,50,50)
  r1.shapeColor="blue"
  r1.debug=true

  r2=createSprite(200,200,40,40)
  r2.shapeColor="purple"
  r2.debug=true

}

//control everything
function draw() {
  background("yellow"); 

  //make sprite move with mouse
  r1.x=mouseX
  r1.y=mouseY
  
  //Algorithm to detect the collision/touching
//distance of x axis between r1 and r2
console.log(r1.x - r2.x)
console.log(r1.width/2 + r2.width/2)
if(r1.x - r2.x < r1.width/2 + r2.width/2 &&
  r2.x - r1.x < r1.width/2 + r2.width/2 &&
  r1.y - r2.y < r1.height/2 + r2.height/2 &&
  r2.y - r1.y < r1.height/2 + r2.height/2 ) {
  r1.shapeColor="red"
  r2.shapeColor="red"
} 
else{
  r1.shapeColor="blue"
  r2.shapeColor="purple"
}

  
  drawSprites();
}