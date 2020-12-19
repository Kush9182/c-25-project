
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	ballIMG=loadImage("paperball.png");
	dustbinIMG=loadImage("dustbin.png");
}


function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
    paper = new Paper(100,100,80);

	dustbin=createSprite(600,165,10,10);
	dustbin.addImage(dustbinIMG);


	
	
	
	var options={
		isStatic: true,
	}

	ground=Bodies.rectangle(width/2,325,width,50,options);
    World.add(world,ground);

    d1=new Dustbin(600,310,250,25);
	d2=new Dustbin(475,250,25,150);
	d3=new Dustbin(650,250,25,400);
	

	Engine.run(engine);
  
}


function draw() {
  background("black");
  
  push();
  fill("brown");
  rectMode(CENTER),
  rect(width/2,305,width,50);
  pop();

  paper.display();

  drawSprites();

 
}



function keyPressed(){
	if(keyDown(UP_ARROW)){
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:1000 ,y:-1000});	
	}
}
