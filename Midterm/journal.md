<h2> Improve the Homework </h2>


1 - Adding color and resizing Fiods 
Add some color based on the energy of the fiod, and use energy as a parameter in the vertex of the fiod itself to gradually make them bigger or smaller

2 - More Consumables
Need to add more food and poison as the program runs for better and more naturally continuity. Use code from the inital consumable spawning and run it every few seconds. [ millis() ]

3 - DNA 
Ideas for what can be the DNA in these Fiods. Need 2 atleast: consumable choice , reproduction threshold, ... ? 


4 - Evolution
Make a random fiod evolve. Choose one randomly from the list and then add another layer of randomness to choose if it will evolve or not. [ choose from list -> yes or no ]. To make them actually better, ill make the random function of consumable choosing more biased towards food, and reduce energy required for reproduction. The reproduced fiods of evolved fiods are also evolved. Would be cool to see all of them evovled and have no more regular fiods. [ Complete natural selection ]


<h3>TIMELINE</h3>


DATE - 02/09/2022


Mutations have been added, randomly choose from the list of vehicles and then biased coin flip to choose if they get to be evolved or not

millis() has been impleneted for food poison and mutations, sense of continuity of evolution of the ecosystem environment as a whole



DNA FINALIZED

INTEL - changing the probability of choosing food or poison

ENERGY - evolved offspring have extra energy to begin with

Reproduction Treshold decreased from 10 to 7 for the evolved ones

Added the color and size differences as the fiods eat more



DATE - 04/09/2022

Try and include customizable tabs, thinking beyond a pond. If, for any species, we can specify how much "good" and "bad" there is in the environment, then this ecosystem project can accomodate for that? 
Creating a start screen for a nice legend, problems with how to switch screens?


DATE - 05/09/2002

Polishing the start screen, made a health bar, and fixed the problem with the switching screens issue by using mousePressed, and then have a variable declared globally that goes form 0 to 1 called mode. when modes on 0, start screen, on 1, simulation screen

Creating the customizable tab in the begginng of the code and removing some of the hard coded parts to help in doing this.

Code is finished and Project is Ready!


DATE - 08/09/2022

Adding final commenting to the code, adding code and pics to the readme


DATE - 09/09/2002

ALL DONE!



<h3>Problems</h3>

Relatively less problems after building up on the homework assignment as I had a much clearer vision of what i wanted to do. There were issues with adding a new screen, the start screen with the legend. Also issues with how to make the code customizable, took some time to remove some of the hard coding and make sure everything is still running smoothly. Had a lot of fun, the best/most challenging part being actually thinking of how i can make my ecosystem more complex. Had a couple technical issues with adding code segments to the readme file as well, but got them fixed.

<h3>Reflections</h3>

An emergent behavior becam eapparent after I added the evolvution of vehicles. When I had more and more evolved vehicles, they would finish the food up faster as their random functions are more biased towards food, compared to the regular vehicles. This led the regular vehicles to die out, not only because they ate more posion than the evolved, but also because the evolved would finish food up. The ending can be seen as natural selection and survival of the fittest. 



