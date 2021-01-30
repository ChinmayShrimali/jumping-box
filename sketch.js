var canvas;
var music;
var blueRect,yellowRect,redRect,greenRect;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    
    //create 4 different surfaces
blueRect = createSprite(720,580,600,70);
blueRect.scale = 0.3;
blueRect.shapeColor = "blue";

yellowRect = createSprite(300,580,600,70);
yellowRect.scale = 0.3;
yellowRect.shapeColor="yellow";

redRect = createSprite(80,580,600,70);
redRect.scale = 0.3;
redRect.shapeColor="red";

greenRect = createSprite(500,580,600,70);
greenRect.scale = 0.3;
greenRect.shapeColor="green";

box = createSprite(random(20,750),50,30,30);
box.shapeColor="orange";

box.velocityY = 15;
box.velocityX = -6;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(250));
    //create edgeSprite
    edges = createEdgeSprites();

    
box.bounceOff(edges);

;


if(box.isTouching(blueRect)&& box.bounceOff(blueRect)){
    box.shapeColor = "blue";
    music.play();
}


if(box.isTouching(yellowRect)&&box.bounceOff(yellowRect)){
    box.shapeColor = "yellow";
    music.play();
}


if(box.isTouching(greenRect)){
    box.shapeColor = "orange";
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
}

if(box.isTouching(redRect)&&box.bounceOff(redRect)){
    box.shapeColor = "red";
    music.play();
}


drawSprites();

    //add condition to check if box touching surface and make it box
}
