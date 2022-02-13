let v = [];      //lists for vehicles, food and poison
let food = [];
let poison = [];

function setup() {
  createCanvas(640, 360);
  
  //creating vehicles
  for(var i=0; i<10; i++){
    var x = random(width);
    var y = random(height);
    v[i] = new Vehicle(x,y);
  }
  
  //creating food spots
  for(var i=0; i<10; i++){
    var x = random(width);
    var y = random(height);
    food.push(createVector(x,y));
  }

  //creating poison spots
  for(var i=0; i<10; i++){
    var x = random(width);
    var y = random(height);
    poison.push(createVector(x,y));
  }
    
}

function draw() {
  //pond water
  background(212,240,249);
  
  //drawing food from the list
  for(var i = 0; i<food.length ; i++){
    fill(0,255,0);
    noStroke(); 
    var move = random(5,10); //add some jiggle as its in water
    ellipse(food[i].x + move,food[i].y+move, 10, 10)
  }
  
  //drawing poison from the list
  for(var i = 0; i<poison.length ; i++){
    fill(255,0,255);
    noStroke(); 
    var move = random(5,10);//add some jiggle as its in water
    ellipse(poison[i].x+ move,poison[i].y+ move, 10, 10)
  }

  //each vehicle has a weighted chance of choosing food or       poison    
  for(var i =0; i<v.length; i++){
    var choice = random(2);
    
    //these parameters can be changed to add weight towards food or poison
    if(choice<1){v[i].eat(food);}
    if(choice>1){v[i].eat(poison);}
  
  
  v[i].update();
  v[i].display();
  }
  
  //End of EcoSystem
    var checker = v.length;
    
    //checking if all vehicles are dead
    for(var i=0; i<v.length; i++)
      {
        if(v[i].maxspeed==0){checker--; }
      }
    //if dead, then end ecosystem
    if(checker==0){
      fill(255,0,0);
      rect(0,0,width,height);
      fill(0);
      textSize(50);
      text("Ecosystem has Failed!",80,height/2);
    }

  

}