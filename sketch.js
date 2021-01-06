
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(250,600,10);
	bobObject2 = new Bob(300,600,10);
	bobObject3 = new Bob(350,600,10);
	bobObject4 = new Bob(400,600,10);
	bobObject5 = new Bob(450,600,10);

	roof = new Roof(400,100,600,25);

	rope1=new Rope(bobObject1.body,roofObje)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  drawSprites();
 

}



