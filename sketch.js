const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow=[]
var maxSnow
var snowBody
function preload() {
  snowImage=loadImage("snow2.jpg")
}

function setup() {
  createCanvas(1200,600);
 
  engine = Engine.create();
  world = engine.world;
  if(frameCount%100===0){
for(var i=0;i<maxSnow;i++){
snow.push((snowBody=new Snow(random(0,1200),random(-50,600))))
}
  }
}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
  for(var i=0;i<maxSnow;i++){
 snow[i].display()
 snow [i].repeat()
    }
}