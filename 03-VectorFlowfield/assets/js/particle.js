class Particle
{
    constructor() 
    {
        this.pos = createVector(random(width), random(height));   
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.maxVel = 2;
        this.h = 0;

        this.prevPos = this.pos.copy();
    }

    update()
    {
        this.vel.add(this.acc);
        this.vel.limit(this.maxVel);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    applyForce(force)
    {
        this.acc.add(force);
    }

    follow(vectors)
    {
        var x = floor(this.pos.x / vecScl);
        var y = floor(this.pos.y / vecScl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    }

    show()
    {
        // stroke(this.h, 255, 255, 25);
        // this.h += 1;
        // if(this.h > 255)
        // {
        //     this.h = 0;
        // }


        stroke(255, 25);
        strokeWeight(1);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
    }

    updatePrev()
    {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }

    edges()
    {
        if(this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if(this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        }
        if(this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if(this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }
    }
}