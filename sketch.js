const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground,platform1;

var box1,box2,box3,box4;

var ball;

var sling;

var time = 60;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,590,800,20);
    platform1 = new Ground(600,200,200,10)

    ball = new Circle(150,220,40);

    sling = new Chain(ball,{x:150,y:220});

    box1 = new Box(570,150,30,30);
    box2 = new Box(630,150,30,30);
    box3 = new Box(600,150,30,30);
    box4 = new Box(660,150,30,30);
    box5 = new Box(540,150,30,30);

    box6 = new Box(595,120,25,25);
    box7 = new Box(615,120,25,25);
    box8 = new Box(645,120,25,25);
    box9 = new Box(565,120,25,25);

    box10 = new Box(570,90,30,30);
    box11 = new Box(630,90,30,30);
    box12 = new Box(600,90,30,30);

    box13 = new Box(620,60,25,25);
    box14 = new Box(590,60,25,25);

    box15 = new Box(600,30,30,30);

}

function draw(){
    background(150);
    Engine.update(engine);

    time  = time - 0.015;

    text("Press 'SPACE' to bring the ball back!",150,450);

    text("Destroy all the boxes before the time runs out!!!",150,500);
    text("Time : " + time,150,550);

    ground.display();
    platform1.display();

    ball.display();
    sling.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();

    box15.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
 }
 
 function mouseReleased(){
    sling.fly();
 }

 function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(ball.body, {x: 150, y: 220});
        sling.attach(ball.body);
    }
}
