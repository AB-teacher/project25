
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var bin1,bin2,bin3;
var ground;
var paperBall;
var dustbinImage;
function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new DustBin(1300,665,170,20);
	bin2 = new DustBin(1206,615,20,120);
	bin3 = new DustBin(1395,615,20,120);
  
	ground = new Ground(800,690,1600,30);

	paperBall = new Paper(50,360, 25);

	var render = Render.create( {
		element: document.body,
		engine: engine,
		options: {
			width : 1600,
			height:  700,
			wireframe : false,
		}
	});

	Render.run(render);

}


function draw() {
	background(220);
  rectMode(CENTER);
  Engine.update(engine);
  
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  paperBall.display()
  imageMode(CENTER);
  image(dustbinImage,1300,615,210,120);
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		//Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:65,y:-55});
		paperBall.flingUp();
	}
	if (keyCode === LEFT_ARROW){
		//Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:65,y:-55});
		paperBall.flingBack();
	}
	if (keyCode === RIGHT_ARROW){
		//Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:65,y:-55});
		paperBall.flingForward();
	}
} 

