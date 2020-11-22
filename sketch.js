var dust,p1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	dust= new Dustbin(1100,550,25,200);
	dust1=new Dustbin(800,550,25,200);
	dust2=new Dustbin(950,640,300,25);
	g=new ground(200,700,2000,50);
	b=new paper(100,10,20);


	Engine.run(engine);
	
  
}


function draw() {
	

  rectMode(CENTER);
  background(0);
  
  drawSprites();
  dust.display();
  dust1.display();
  dust2.display();
  g.display();
  b.display();
  Key();
}



function Key(){
	if (keyWentDown(UP_ARROW)){
		Matter.Body.applyForce(b.body,b.body.position,{x:75,y:-79});
		}
}








