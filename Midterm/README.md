<h2>  <t> Fiods  </h2>
<h4> Ecosystem of Droid Fish </h4>

  <h5> Setting </h5>
This is a synthetic ecosystem project that mimics the behavior of fish in a pond in p5js. The ecosystem consists of two main objects, the fish (represented as triangles) and the consumables (represented as ellipses). There are two types of consumables, food (green) and poison (purple), and they effect the energy level of these fish. The fish lose energy when eating poison and gain energy when eating food, and there are two thresholds of their energy. If it drops below a certain threshold, the fish die (stop moving and turn red), and if it goes above a certain threshold, the fish reproduce (a new fish is spawned and energy is reset). Food and poison objects continously spawn across he duration of the program. Every Fiod also has an oppurtunity to evolve after a certain time interval, where a random Fiod is chosen and then randomly either evolves or not.
  

  <h5>Consumables</h5>
Each Fiod has an option to choose between food and poison, and this is dictated by a random function. Initially, the fish are equally as probable to choose to go towards food or poison. These Fiods can actually evolve, and once transformed (turn white from grey), the random function is modified. The evolved fish will have a greater probability of choosing food over poision. This assists in the survivability of the Foids.
  
  <h5>Reproduction</h5>
 These Fiods can also reproduce as a means of surviving. As the fish eat more food, their color changes from grey -> orange -> yellow -> green. This is used to indicate how close Fiods are to reproducing. When a Fiod evolves, the threshold of how much energy must be consumed before reproduction drops, so not only do the evolved Fiods eat more food, but can also reproduce faster.
  
  <h5>Ending</h5>
The ending of the program exists when it becomes reasonably apparent whether the ecosystem will survive or not. If all Fiods die, then the program shuts down and indicates that the system has failed. Alternatively, if the population grows to a certain threshold, the program indicates the the Fiods have survived and the system has succeeded. As various elements of the ecosystem is governed by random functions, as indicated above, slight changes to these functions can cause completely different endings for the Fiods.
