// A particle system. Rather than creating and destroying lots of Particle objects, it starts out with all the Particles
// it will ever use (mostly because we're required to do it this way).
class ParticleSystem{

	constructor(x, y, maxParticles, tickFunction){
		this.x = x;
		this.y = y;
		this.particles = new Array(maxParticles);
		for(var i = 0; i < maxParticles; i++){
			this.particles[i] = (new Particle(this));
		}
		this.tick = tickFunction;
	}

	getParticleToEmit(){
		for(let particle of this.particles){
			if(!particle.alive) return particle;
		}
		return null;
	}
}