class Vehicle {
  constructor(x, y) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, -2);
    this.position = createVector(x, y);
    this.r = 6;
    this.maxspeed = 3;
    this.maxforce = 0.4;
    this.energy = 0;
  }

  // Method to update location
  update() {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // Reset accelerationelertion to 0 each cycle
    this.acceleration.mult(0);
  }

  applyForce(force) {
    // We could add mass here if we want A = F / M
    this.acceleration.add(force);
  }
  
  eat(list){
    var record = Infinity;
    var closestIndex = -1;
    
    //get the closest item in given list, food or poison
    for(var i = 0; i<list.length ;  i++)
      {
        var d = this.position.dist(list[i]);
        if(d<record){
          record = d;
          closestIndex = i;
        }
      }
    
    //seek it using steer
    this.seek(list[closestIndex]);
    
    //if food is eaten, then it is removed from list and energy is gained
    if(record < 5){
      if(list[closestIndex]==food[closestIndex]){
        this.energy ++;
          if(food.length>1){ //One food spot always remains
          food.splice(closestIndex,1);
        }
        if(this.energy>20) //Reproduction if enough food is eaten
          {
            var offspring = new Vehicle(width/2,height/2);
            v.push(offspring);
            this.energy=1;
          }
      }
      else{
        this.energy --;
        if(poison.length>1){ //One poison spot always remains
          poison.splice(closestIndex,1);
        }
        if(this.energy<-1){ //Death if too much poison is eaten
          this.maxspeed = 0;
        }
      }
      }
  }

  // A method that calculates a steering force towards a target
  // STEER = DESIRED MINUS VELOCITY
  seek(target) {

    var desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target

    // Scale to maximum speed
    desired.setMag(this.maxspeed);

    // Steering = Desired minus velocity
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce); // Limit to maximum steering force

    this.applyForce(steer);
  }

  display() {
    // Draw a triangle rotated in the direction of velocity
    let theta = this.velocity.heading() + PI / 2;
    fill(127);
    if(this.maxspeed == 0){fill(255,0,0);} //Turn red if dead
    stroke(200);
    strokeWeight(1);
    push();
    translate(this.position.x, this.position.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
    
  }
}