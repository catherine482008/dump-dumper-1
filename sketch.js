
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;
	Paper=new paper(50,50,50)
   ground1=new ground(700,390,1400,20)
   db1=new dustbin(1200,350,200,20);
   db2=new dustbin(1300,350,20,100);
   db3=new dustbin(1100,350,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Paper.display();
ground1.display();
db1.display()
db2.display()
db3.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85})
	}
}



