const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload(){

  sn1=loadImage("snow1.jpg")
  sn2=loadImage("snow2.jpg")
  sn3=loadImage("snow2.jpg")
  ch=loadImage("ch1.png")


}
function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  character=createSprite(400, 200, 50, 50);
  character.addImage(ch)
}

function draw() {
  background(sn1);  
  drawSprites();
}