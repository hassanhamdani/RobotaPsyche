## Ecosystem using P5.js

<h3>Description</h3>
This project represents a pond, consisting of several fish and consumables. The consumables are of two types: food and poison. Food increases the energy of a fish, while poison decreases it. The fish are attracted to both types of consumables and will eat both. If enough food is eaten, then they reproduce; If enough poison is eaten, they stop moving and die. I wanted to make sure that I could control a variety of variables, so I have used the random function to decide whether a fish moves towards food or poison, and then this can be easily modified to push the fish more towards reproduction or death. I have also included a slight jiggle in the motion of the consumables to simulate a pond-like, unstable environment. At the end, I keep one food and poison spot in the pond, to provide a form of continuity to the ecosystem, which either becomes a center of reproduction, or a graveyard, depending on the weights in place.

## 

<img width="300" alt="Screen Shot 2022-02-14 at 1 27 50 AM" src="https://user-images.githubusercontent.com/96621474/153775869-300524fe-067d-498e-96d0-f069e00d7328.png">
Ecosystem
<br><br>
<img width="300" alt="Screen Shot 2022-02-14 at 1 24 52 AM" src="https://user-images.githubusercontent.com/96621474/153775890-81e43da5-e528-4904-852b-4cc5ac58dff3.png">
Ecosystem Failure

## 
<h4>Problems and Solutions</h4>

As I wanted to learn more about p5 and do this project using that language, I found Daniel Sheiffields' videos a great source of inspiration and a starting point. When I had a start, I wanted to give the code a story and setting. This is where the idea of a pond and the movers being a fish came from. The main issue I ran into was taking those single objects that were provided and turning everything into arrays.
```
//lists for vehicles, food and poison
let v = [];      
let food = [];
let poison = [];
```
Keeping track and manipulating every object using for loops was the solution to this. I wanted to add some level of realism to it, so moving the consumables slightly was the idea I had in mind. I did this by adding a random x and y value to each consumable within the draw function and it gave great, visually pleasing results.
```
for(var i = 0; i<poison.length ; i++){
  fill(255,0,255);
  noStroke(); 
  var move = random(5,10);//add some jiggle as its in water
  ellipse(poison[i].x+ move,poison[i].y+ move, 10, 10)
}
```

Keeping the ecosystem going was also one of my aims and having one spot for food and poison was the only solution I could come up with.
```
if(food.length>1){ //One food spot always remains
  food.splice(closestIndex,1);
}
```
```
if(poison.length>1){ //One poison spot always remains
  poison.splice(closestIndex,1);
}
```

<h4>Learning Outcomes</h4>
Overall it was quite a learning curve and a great way to practice p5js. It was also extremely fun to add a sort of story to a blank canvas and watch the movers go towards survival or extinction. 


<h4>Link</h4>https://youtu.be/LFeAkg5ZpMY

