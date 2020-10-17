
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

ground = new Ground(600,380,1200,10);
ground2 = new Ground(600,220,260,10);
ground3 = new Ground(1000,150,250,10);
box = new Box(515,190,90,50);
box2 = new Box(600,190,80,50);  
box3 = new Box(680,190,80,50); 
box4 = new Box(550,140,80,50);
box5 = new Box(650,140,80,50);
box6 = new Box(600,90,80,50);  
box7 = new Box(915,130,80,50);
box8 = new Box(1000,130,80,50);
box9 = new Box(1050,130,80,50);
box10 = new Box(950,100,80,50);
box11 = new Box(1000,100,80,50);
box12 = new Box(980,80,80,50);

 
  shooter = new Box1(300,300,20,20);

  rope = new Rope(shooter.body,{x:100,y:100});

 

  



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  shooter.display();
  ground.display();
  ground2.display();
  box.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  rope.display();
  ground3.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  
 

  drawSprites();

 

 
}


function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
rope.fly();
}



