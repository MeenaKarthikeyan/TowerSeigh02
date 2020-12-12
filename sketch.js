const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){
    polygon_img = loadImage("polygon.png"); 
}

function setup(){
    createCanvas(900,400);
    engine=Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    box1 = new Box(300,275);
    box2 = new Box(330,275);
    box3 = new Box(360,275);
    box4 = new Box(390,275);
    box5 = new Box(420,275);
    box6 = new Box(450,275);
    box7 = new Box(480,275);

    box8  = new Box(330,235);
    box9  = new Box(360,235);
    box10 = new Box(390,235);
    box11 = new Box(420,235);
    box12 = new Box(450,235);

    box13 = new Box(360,195);
    box14 = new Box(390,195);
    box15 = new Box(420,195); 

    box16 = new Box(390,155);


    boxs1 = new Box(640,175);
    boxs2 = new Box(670,175);
    boxs3 = new Box(700,175);
    boxs4 = new Box(730,175);
    boxs5 = new Box(760,175);

    boxs6 = new Box(670,135);
    boxs7 = new Box(700,135);
    boxs8 = new Box(730,135);

    boxs9  = new Box(700,95);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot = new SlingShot(this.ball,{x:100,y:200});
    
}
function draw(){
    background("lightgreen");

    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);


    ground.display();
    stand1.display();
    stand2.display();

    fill("lightblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    
    fill("lightpink");

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("lightblue"); 
    box13.display();
    box14.display();
    box15.display();

    fill("gold");
    box16.display();

    fill("lightblue");
    boxs1.display();
    boxs2.display();
    boxs3.display();
    boxs4.display();
    boxs5.display();

    fill("lightpink");
    boxs6.display();
    boxs7.display();
    boxs8.display();

    fill("gold");
    boxs9.display();

    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);

    slingshot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.ball);
    }
}
