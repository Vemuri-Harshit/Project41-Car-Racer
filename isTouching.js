function isTouching(){
    if (car1.x - car.x < car1.width/2 + car.width/2
        && car.x - car1.x < car1.width/2 + car.width/2
        && car1.y - car.y < car1.height/2 + car.height/2
        && car.y - car1.y < car1.height/2 + car.height/2) {
           return true;
    }
    else {
      return false;
    }}