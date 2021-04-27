// Create variables here.
var cat, catImage1, catImage2, catImage3 ; 
var mouse, mouseImage1, mouseImage2, mouseImage3 ;
var bgImage ; 

function preload() {

     // Here, we load all the cat, background and mouse images.
     catImage1 = loadAnimation ("images/cat1.png");
     catImage3 = loadAnimation ("images/cat4.png") 
     catImage2 = loadAnimation ("images/cat2.png","images/cat3.png");
     mouseImage1 = loadAnimation ("images/mouse1.png");
     mouseImage3 = loadAnimation ("images/mouse4.png");
     mouseImage2 = loadAnimation ("images/mouse2.png","images/mouse3.png");
     bgImage = loadImage ("images/garden.png");
}

function setup(){

     createCanvas(1000,800);
     
     // Create a sprite called cat.
     cat = createSprite (700,650);
     cat.addAnimation ("tomsleep", catImage1);
     cat.scale = 0.2 ;

     // Create a sprite called mouse.
     mouse = createSprite (150,650);   
     mouse.addAnimation ("naughtymouse", mouseImage1);
     mouse.scale = 0.1 ;
}

function draw() {

    background(bgImage);
    
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x - mouse.x <= cat.width/2 - mouse.width/2 ){

        cat.addAnimation ("happycat", catImage3);
        cat.changeAnimation ("happycat");
        mouse.addAnimation ("cheerfulMouse", mouseImage3);
        mouse.changeAnimation ("cheerfulMouse");
        cat.velocityX = 0 ;

    }


    drawSprites();
}


function keyPressed(){

    // If left arrow key is pressed, then do the following functions.
    if (keyCode === LEFT_ARROW){

        mouse.addAnimation ("teaser", mouseImage2);
        mouse.changeAnimation ("teaser");
        mouse.frameDelay = 15 ;
        cat.addAnimation ("chaser", catImage2);
        cat.changeAnimation ("chaser");
        cat.velocityX = -3 ;

    }

}
