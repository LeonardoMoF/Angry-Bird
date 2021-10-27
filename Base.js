class Base{
    constructor(x,y,width,height,angle){
    
    var options = {
        restitution: 0., friction:1, density:1.5
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/base.png");
    }
    display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    fill ("red");
    image (this.image,0, 0, this.width, this.height);
    pop();
   }
}