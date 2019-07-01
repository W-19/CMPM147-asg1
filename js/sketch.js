time = 0; // Can be accessed by anything to keep track of the number of ticks elapsed globally. Useful for modulus operations.

function preload() {
  soundFormats('ogg', 'mp3');
  song = loadSound('assets/Another Heaven.ogg');
}

function setup(){
	createCanvas(800, 600);

	song.setVolume(0.5);
  	song.play();
  	fft = new p5.FFT();

  	particleSystems = new Array(0);
  	// the first particle system gives particles a lifetime of 1 and a really big y velocity
  	particleSystems.push(new ParticleSystem(0, 0, 5000, function(fft){
		// process all the existing particles first
		for(let particle of this.particles){
			particle.tick();
		}

		var spectrum = fft.analyze();
		var particleX, p;
		noStroke(); // no outlines on our emitted particles
		for(var i = 0; i < spectrum.length; ++i){
			p = this.getParticleToEmit();
			if(p != null){
				particleX = i*(800/spectrum.length);
				p.emit(particleX, 500, {x: 0, y: -spectrum[i]}, 3,
						{r: 255*(1-particleX/800),
						 g: 255*((400+particleX/800)%800),
						 b: 255*particleX/800,
						 a: 255},
				1);
			}
		}
	}));

  	
	// this particle system emits fewer, slower particles and does so in a radial fashion
	// Max 1024 particlex because that happens to be the spectrum length
	particleSystems.push(new ParticleSystem(575, 200, 1024, function(fft){
		// process all the existing particles first
		for(let particle of this.particles){
			particle.tick();
		}

		if(time%5 != 0) return; // Skip 80% of spawns to cut down on the number of particles

		var spectrum = fft.analyze();
		var particleX, particleY, p;
		noStroke(); // no outlines on our emitted particles
		for(var i = 0; i < spectrum.length; ++i){

			p = this.getParticleToEmit();
			if(p != null){
				particleX = Math.sin(2*Math.PI*i/spectrum.length)
				particleY = Math.cos(2*Math.PI*i/spectrum.length+Math.PI)
				p.emit(particleX*80, particleY*80, {x: spectrum[i]*particleX/50, y: spectrum[i]*particleY/50}, 5,
						{r: 255,
						 g: 127,
						 b: 0,
						 a: 255},
				60);
			}
		}
	}));
	
	
}

function draw(){
	clear();
	background(0, 0, 0);
	time++;
	for(let ps of particleSystems){
		ps.tick(fft);
	}
	
}
