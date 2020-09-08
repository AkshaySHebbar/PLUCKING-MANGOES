
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;

function preload()
{

boy = loadImage("Pluucking manngoes/boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	boy = createSprite(100,500,80,80);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy.display();
  
  drawSprites();
 
}



