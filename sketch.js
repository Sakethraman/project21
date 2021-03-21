var canvas;
var music;
var surface1, surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(725,595,150,20);
    surface1.shapeColor = "green"

    surface2 = createSprite(310,595,200,20);
    surface2.shapeColor = "red"

    surface3 = createSprite(530,595,210,20);
    surface3.shapeColor = "yellow"

    surface4 = createSprite(100,595,200,20);
    surface4.shapeColor = "blue"



    //create box sprite and give velocity
    box = createSprite(  50,50,30,30);
    box.shapeColor = "white"
    box.velocityY = 5;
    box.velocityX = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(edges);
 
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "green"
        music.play();
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "red"
        box.velocityY = 0;
        box.velocityX = 0;
         
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "yellow"
        music.play();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "blue"
        music.play();
    }
    drawSprites();
}
