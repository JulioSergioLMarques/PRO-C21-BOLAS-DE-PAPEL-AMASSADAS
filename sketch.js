const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;

var propriedadedogroud;

var esquerdaSide;

var direitaSide;

var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var bola_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	bola = Bodies.circle(260,100,radius/2,bola_options);
	World.add(world,bola);

	propriedadedogroud=new ground(width/2,670,width,20);
	
	esquerdaSide = new ground(1100,600,20,120);
	
	direitaSide = new ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);


  ellipse(bola.position.x,bola.position.y,radius,radius);

  propriedadedogroud.display();
 
 
  esquerdaSide.display();  
  
 
  direitaSide.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bola,bola.position,{x:85,y:-85});
    
  	}
}
