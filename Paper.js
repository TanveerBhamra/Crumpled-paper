class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0,
          'density':1.2
      }

      this.radius = 25;
      this.body = Bodies.circle(x, y, this.radius, options);
      this.image = loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      pop();
      imageMode(CENTER);
			image(this.image,pos.x,pos.y, 75, 75);
    }
  };
  