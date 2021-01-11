const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//paper1=new Paper();
	paperObject=new Paper(200,200,40);

	ground=new Ground();
	bin1=new Bin(1000,258,200,20);
	bin2=new Bin(900,218,20,100);
	bin3=new Bin(1100,218,20,100);
	Engine.run(engine);
  
}


function draw() {
	background("white")
   // rectMode(CENTER);
   // background(0);
	
	//console.log(paperObject)
	ground.display();
	bin1.display();
	bin2.display();
	bin3.display();
	paperObject.display();
}
	function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-50});
    
  	}
}


    

