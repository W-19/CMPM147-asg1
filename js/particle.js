// Particles have all their properties such as velocity, size, and color set when first emitted. A more interesting
// particle system might make these properties dynamic, but that's not required for this assignment.
class Particle{
	constructor(particleSystem){
		this.particleSystem = particleSystem;
		this.x = null;
		this.y = null;
		this.velocity = {x: 0, y:0};
		this.alive = false;
		this.age = 0;
		this.size = 0;
		this.color = null;
		this.lifetime = 0;
		
	}

	emit(x, y, velocity, size, color, lifetime){
		this.x = this.particleSystem.x + x;
		this.y = this.particleSystem.y + y;
		this.velocity = velocity;
		this.size = size;
		this.color = color;
		this.lifetime = lifetime;
		this.age = 0;
		this.alive = true;
		this.width = Math.random()*20;
		this.height = Math.random()*20;
	}

	tick(){
		if(!this.alive) return;

		this.x += this.velocity.x;
		this.y += this.velocity.y;

		fill(this.color.r, this.color.g, this.color.b, this.color.a);
		ellipse(this.x, this.y, this.size, this.size); // always circles

		this.age++;
		if(this.age >= this.lifetime){
			this.alive = false;
		}
	}
}