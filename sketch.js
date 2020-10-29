var paper1;
var box1, box2, box3;
var ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

        paper1 = new Paper(100,400,30);
	ground1 = new Ground( 400, 650, 800, 10);
	
	box2 = new Box(510,595,20,100);
	box3 = new Box(710,595,20,100);	
	box1 = new Box(600,635,200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
  paper1.display(); 
  ground1.display();
  box1.display(); 
  box2.display();
  box3.display();    
  keyPressed();
  drawSprites(); 
}

function keyPressed() {
    if (keyCode === UP_ARROW){

        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});   

    }
}
