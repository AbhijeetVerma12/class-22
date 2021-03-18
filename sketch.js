const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object,box,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

    ground= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,ground);
var box_options={
    restitution:1
}



  box= Bodies.circle(100,200,30,box_options);
World.add(world,box)

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,30);
ellipseMode(RADIUS)
ellipse(box.position.x,box.position.y,30,30)
}
