<h2>  <t> Fiods  </h2>
<h3> Ecosystem of Droid Fish </34>

  
  
  <h5> Setting </h5>
  
This is a synthetic ecosystem project. The name Fiod is derived from the initial inspiration of this project being a synthtic representation of driod fish in a ponf. The ecosystem consists of two main objects, the foid (represented as triangles) and the consumables (represented as ellipses). There are two types of consumables, food (green) and poison (purple), and they effect the energy level of these foid. The foid lose energy when eating poison and gain energy when eating food, and there are two thresholds of their energy. If it drops below a certain threshold, the foid die (stop moving and turn red), and if it goes above a certain threshold, the foid reproduce (a new fish is spawned and energy is reset). Food and poison objects continously spawn across he duration of the program. Every fiod also has an oppurtunity to evolve after a certain time interval, where a random fiod is chosen and then randomly either evolves or not.
  
  Start Screen Image :
 <img width="400" alt="Screen Shot 2022-03-09 at 2 14 14 AM" src="https://user-images.githubusercontent.com/96621474/157334809-8df93935-ee48-444b-9927-da9fa095b95b.png">

  
 This ecosystem project is meant to have editable parameters, so there are 5 main customizable domains that can be changed by the user.
 ```
  //*******   CUSTOMIZE    *******

//Customizing Parameters in the Simulation
let population = 10;
let foodAmount = 20;
let poisonAmount = 20;
let evolveRate = 0.1;
let survivalPop = 20;

// *****************************
  ```
  Population - Starting population size
  foodAmount - Starting food amount, with new food being added at set time increments
  poisonAmount - Starting poison amount, with new poison being added at set time increments
  evolveRate - The probability of a fiod evolving once chosed randomly at set time increments, the higher this number, the more fiods evolve (max = 0.99)
  surivalPop - Describes when the program should end, set to end after 10 reproductions. Should always be higher than population.
  
  Code Segments for the use of these customizable variables will be provided in this file!

   ```
    //creating vehicles
  for(var i=0; i<population; i++){
    var x = random(width);
    var y = random(height);
    v[i] = new Vehicle(x,y);
  }
    ```

  <h5>Consumables</h5>
  
Each Fiod has an option to choose between food and poison, and this is dictated by a random function. Initially, the foid are equally as probable to choose to go towards food or poison. These Fiods can actually evolve, and once transformed (turn white from grey), the random function is modified. The evolved foid will have a greater probability of choosing food over poision. This assists in the survivability of the Foids. Consumables spawn after set time intervals randomly across the ecosystem.

 ```
    //creating food spots randomly
  for(var i=0; i<foodAmount; i++){
    var x = random(width-20);
    var y = random(height-20);
    food.push(createVector(x,y));
  }

  //creating poison spots randomly
  for(var i=0; i<poisonAmount; i++){
    var x = random(width-20);
    var y = random(height-20);
    poison.push(createVector(x,y));
  }
  
  ```
  
  <h5>Reproduction</h5>
  
 These Fiods can also reproduce as a means of surviving. As the foid eat more food, they grow in size and their color changes from grey -> orange -> yellow -> green. This is used to indicate how close Fiods are to reproducing. When a Fiod evolves, the threshold of how much energy must be consumed before reproduction drops, so not only do the evolved Fiods eat more food, but can also reproduce faster.

   ```
      //random mutation occurs randomly with time
    if(millis() >= 5000+timer3){  

      //there is a 10% chance that the vehicle will learn, this percentage can be changed in the customize tab
      
      if(random(1)>1-(evolveRate)){
        let mutate = random(v);

        //The probability of choosing food increases by increasing v.intel, and there is a limit so the vehicle can still consume poison
        if(mutate.intel<1.7){
          mutate.intel = mutate.intel +0.2;
        }
      }
      timer3 = millis() 
    }
   ```
  
  
  <h5>Ending</h5>
  
 The ending of the program exists when it becomes reasonably apparent whether the ecosystem will survive or not. If all Fiods die, then the program shuts down and indicates that the system has failed. Alternatively, if the population grows to a certain threshold, the program indicates the the Fiods have survived and the system has succeeded. As various elements of the ecosystem is governed by random functions, as indicated above, slight changes to these functions can cause completely different endings for the Fiods.
 
 
 <img width="200" alt="Screen Shot 2022-03-09 at 2 16 23 AM" src="https://user-images.githubusercontent.com/96621474/157335086-cd65e178-85e3-4f85-ab56-b5b90cd3131f.png">
 
 <img width="200" alt="Screen Shot 2022-03-09 at 2 17 24 AM" src="https://user-images.githubusercontent.com/96621474/157335209-cf4f460a-82d7-4f39-ad1e-f200d404756f.png">


 Ecosystem Success:
 
   ``` 
     if(v.length>survivalPop)
      {
        fill(0,255,0);
        rect(0,0,width,height);
        fill(0);
        textSize(60);
        text("Ecosystem has Survived!", 50, height/2);
      }
   ```
 
 
