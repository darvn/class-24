const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower
var ground
var backgroundImg
var cannon, cannonball;

function preload(){
    backgroundImg = loadImage("assets/background.gif")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    tower = new Tower(150, 350, 160, 310);
    ground = new Ground(600, 590, 1200, 5);
    cannon = new Cannon(180, 110, 100, 50, -PI/4)
    cannonball = new CannonBall(cannon.x, cannon.y)

    
}

function draw(){
    background(0);
    image(backgroundImg, 0, 0, width, height);
    Engine.update(engine);

    tower.show();
    ground.show();
    cannon.show();
    cannonball.show();
}

function keyReleased(){
    if (keyCode === DOWN_ARROW){
        cannonball.shoot();
    }
}
