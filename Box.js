class Box{
    constructor(x, y) {
        var options = {
            'restitution':0.4,
            'friction':0.0
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        this.Visibility = 225;
        World.add(world, this.body);
      }
      display(){
        if (this.body.speed <3){

          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0, this.width, this.height);
          pop();
        }else{
          World.remove(world,this.body);
          push();
          this.Visibility = this.Visibility-5;
          tint(225,this.Visibility);
          pop();
        }
        
        }
}

  