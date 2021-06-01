
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const constraint = Matter.Constraint;

var boy ,boyImg;
var stones;
var tree , treeImg;
var mango1,mongo2,mongo3,mongo4,mango5,mongo6,mango7,mango8;


function preload(){
treeImage=loadImage("tree.png");
boyImage=loadImage("boy.png");
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(1800,370);
	stone=new Stone(100,40,20);

	tree=createSprite(800,358);
	tree.addImage(treeImage);
	tree.scale=0.42;

	boy=createSprite(160,550);
	boy.addImage(boyImage);
	boy.scale=0.125;

	mango1=new Mango(730,200,35);
	mango2=new Mango(710,320,36);
	mango3=new Mango(780,250,35);
	mango4=new Mango(825,170,33);
	mango5=new Mango(880,260,35);
	mango6=new Mango(940,220,35);
	mango7=new Mango(980,305,35);
	mango8=new Mango(600,210,34);

	attach = new Throw(stone.body,{x:100,y:465});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black");
  text(20);

  detectCollision(stone,Mango1);
  detectCollision(stone,Mango2);
  detectCollision(stone,Mango3);
  detectCollision(stone,Mango4);
  detectCollision(stone,Mango5);
  detectCollision(stone,Mango6);
  detectCollision(stone,Mango7);
  detectCollision(stone,Mango8);
  
  drawSprites()

  ground.display();
  stone.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
}

function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

//function mouseReleased(){
//	attach.fly();
//}

function detectCollion(lstone,mango){
	mango.Body.Position=lmango.body.position;
	stone.Body.Position=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stone.Body.Position.y,mango.Body.Position.x,mango.Body.PositionPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
		}
}

function KeyPressed(){
	if(keycode === 32){	
		Matter.body.setPosition(stone.body,{x:100,y:465});
		attach.launch(stone.body);
	}
}


