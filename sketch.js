const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ground;
var ball;
var ball2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  //creating ground
  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,200,20, ground_options);
  World.add(world , ground);

  //creating ball
  var ball_options = {
    restitution : 1.0
  }

  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world, ball);

  //creating ball2
  var ball2_options = {
    restitution : 0.9
  }

  ball2 = Bodies.circle(250, 100, 30, ball2_options);
  World.add(world, ball2);

}

function draw() {
  background("lightblue"); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipse(ball.position.x, ball.position.y, 20);
  ellipse(ball2.position.x, ball2.position.y, 30);
  drawSprites();
}