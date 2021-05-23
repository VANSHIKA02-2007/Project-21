var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,325,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(400,150,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(400,500,200,30);
    block3.shapeColor = "red";
    
    block4 = createSprite(700,325,200,30);
    block4.shapeColor = "purple";   

    ball = createSprite(random(0,800),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityY = 10;
    ball.velocityX = 10;    
    
    pink = createSprite(400,300,20,20);
    pink.shapeColor = "pink";

    pink1 = createSprite(700,150,20,20);
    pink1.shapeColor = "yellow";

    pink2 = createSprite(100,150,20,20);
    pink2.shapeColor = "yellow";

    pink3 = createSprite(700,500,20,20);
    pink3.shapeColor = "green";

    pink4 = createSprite(100,500,20,20);
    pink4.shapeColor = "green";

    pink5 = createSprite(400,15,20,20);
    pink5.shapeColor = "yellow";

    pink6 = createSprite(400,585,20,20);
    pink6.shapeColor = "green";
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    ball.bounceOff(pink);
    ball.bounceOff(pink1);
    ball.bounceOff(pink2);
    ball.bounceOff(pink3);
    ball.bounceOff(pink4);
    ball.bounceOff(pink5);
    ball.bounceOff(pink6);

    //write code to bounce off ball from the block1 
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }

    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityY = 0;
        ball.velocityX = 0;
        //write code to stop music
        music.stop();
    }

    //write code to bounce off ball from the block2
    if(ball.bounceOff(block2)){
    ball.shapeColor = "orange";
    }

    //write code to bounce off ball from the block4
    if(ball.bounceOff(block4)){
    ball.shapeColor = "purple";
    }
    drawSprites();
}
