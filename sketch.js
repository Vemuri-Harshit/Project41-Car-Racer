var track,track_img;
var car,car1,car2,car3,car4;
var car1_img,car2_img,car3_img,car4_img; 
var ground;
var count = 0;

var retry,retry_img;


var gameState = "Play";

var carsGroup;


function preload(){

  track_img = loadImage("../Images/track.jpg");
  car1_img = loadImage("../Images/car1.png");
  car2      = loadImage("../Images/car2.png");
  car3     = loadImage("../Images/car3.png");
  car4     = loadImage("../Images/car4.png");
  retry_img = loadImage("../Images/Retry.png");

}


function setup() {

var canvas = createCanvas(1000,1000);

  track = createSprite(width/2,height/2,1000,1000);

  car1 = createSprite(500,500);

  retry = createSprite(width/2,height/2,10,10);
  retry.visible = false;

  retry.addImage("Retry",retry_img);
  retry.scale = 0.1;

  carsGroup = new Group();
  


 
}

function draw() {

  background("white");

  text("Score: "+ count, 10, 100);

  track.addImage("track",track_img);
  car1.addImage("car1",car1_img);

  car1.x =  constrain(car1.x,250,width-250);
     
if(gameState === "Play"){
        
        
    track.velocityY =  6 + 3*count/100;

    count = count + Math.round(getFrameRate()/60);

    if(track.y>1000){

    track.x = width/2;
    track.y = height/2;

    }
    spawnCars();

    if(keyIsDown (LEFT_ARROW)){

    car1.velocityX = -5;
        
    }
    else if(keyIsDown(RIGHT_ARROW) ){
        
      car1.velocityX = 5
        
    }




    if(carsGroup.isTouching(car1)){

      gameState = "End";


    }





}
else if(gameState === "End"){

    
  
    track.velocityY = 0;
    carsGroup.setVelocityYEach(0);
    carsGroup.setVelocityXEach(0);
    carsGroup.setLifetimeEach(-1);
    car1.veloctyY = 0;
    car1.velocityX = 0;

   // retry.show();     
    
  retry.visible = true;

    
    
}

if(mousePressedOver(retry)){

  gameState = "Play";

  carsGroup.destroyEach();

  count = 0;

  retry.visible = false;

 // retry.hide();
  
}



  drawSprites();
}


function  spawnCars(){  

  
if(frameCount % 60 === 0){
  
      var xP = random(300,700);
  
     var car = createSprite(xP,0);
         car.velocityY = 6 + 3*count/100;
  
      var ran =  Math.round(random(2,4));
      
      switch(ran){
  
        case 2 : car.addImage(car2);
                break;
  
        case 3 : car.addImage(car3);
                break;         
                   
        case 4 : car.addImage(car4);
                break; 
  
        default: break;
  
  
      }
  
      car.lifetime= 120;
  
      carsGroup.add(car);
  
}

}