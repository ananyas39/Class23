//namespacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground;

var box1, box2;

function setup() {
  createCanvas(800,400);
 myEngine = Engine.create();
 myWorld = myEngine.world;

 //creating the ground object
ground= new Ground(400,390, 800, 10);

//creating the box object
 box1 = new Box(200,100,50,50);
 box2 = new Box(220,50,50,100);

}

function draw() {
  background(0);
  Engine.update(myEngine);
 
  ground.display();
  box1.display();
  box2.display();
  
  
}


/*
3 objects created in Matter.js library

Matter.World
Matter.Engine
Matter.Bodies






*/