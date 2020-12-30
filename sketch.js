
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob3,bob4,bob5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Roof = new Roof(400,100,400,40);

	bob1 = new Bob(400,450,70);
    bob2 = new Bob(330,450,70);
	bob3 = new Bob(260,450,70);
	bob4 = new Bob(470,450,70);
	bob5 = new Bob(540,450,70);

	Rope = new Rope(bob1,Roof,400,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}



