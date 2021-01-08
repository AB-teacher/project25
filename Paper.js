class Paper{

    constructor(x,y,r) {
        var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.8,
			}
		
        this.body=Bodies.circle(x, y, r/2, options)
        this.x=x;
		this.y=y;
        this.radius=r/2;
        this.image = loadImage("paper.png");
		World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("pink")
        strokeWeight(3);
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.radius);
        imageMode(RADIUS);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop()
    }
    flingBack() {
        Body.setVelocity(this.body,{x:-5,y:-3});
        Body.setAngularVelocity(this.body,-0.2)
    }

    flingForward() {
        Body.setVelocity(this.body,{x:5,y:-3});
        Body.setAngularVelocity(this.body,0.2)
    }

    flingUp() {
        Body.setVelocity(this.body,{x: 0,y:-7});
        Body.setAngularVelocity(this.body,random(-0.2,0.2))
    }
}