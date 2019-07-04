# CMPM147-asg1
My code for asg1, along with the p5.js frameworks. See Visualizer.gif for a sample of how it looks; I made some minor improvements after I recorded it, but it's pretty close to what the final product looks like.

For this assignment I made two particle systems which react to music through p5.sound.js's FFT utility. One of them spawns particles at an x position corresponding to a frequency bin and a fixed y position (500), and gives them a negative y velocity proportional to the amplitude of that bin. The starting color of these particles is based off of their x positions. The result resembles the kind of waveform lne thing that's commonly used in visualizers, especially older ones.

The second particle system works similarly but spawns the particles in a circle around its center, gives them an outward velocity which is again proportional to the amplitude of their respective bin but much slower than the first one, and gives them a lifetime of 60 ticks instead of 1. It only emits every 20 ticks since the particles last 60 times as long as in the first system so emmitting too many would cause lots of lag. These particles are larger than those of the other system, are orange, and fade quickly in and slowly out of existence. The result kind of looks like a star or something.

The highest-register frequency bins don't seem to be used, since the corresponding particles don't move. I'm not entirely sure why this is, but I decided to leave it as is for the time being.

The song is "Another Heaven" by Kanako Ito for the Steins;Gate OST.
