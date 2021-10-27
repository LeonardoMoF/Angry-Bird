class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA, pointB: pointB, stiffness: 0.4, length: 10
            }
            this.slingshot1 = loadImage("sprites/slingshot1.png");
            this.slingshot2 = loadImage("sprites/slingshot2.png");
            this.slingshot3 = loadImage("sprites/sling3.png");
            this.pointB = pointB;
            this.slingshot = Constraint.create(options);
World.add(world,this.slingshot);    
}
fly(){
this.slingshot.bodyA = null;
}
    display(){
        image(this.slingshot1,200,20);
        image(this.slingshot2,170,20);
   if (this.slingshot.bodyA){
    var pointA = this.slingshot.bodyA.position;
    var pointB = this.pointB;   
    push();
    stroke(48,22,8);
    
    if(pointA<220){
    strokeWeight(7);
    line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
    line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
    image(this.slingshot3,pointA.x-30,pointA.y-10,15,30);
    }
    else{
        strokeWeight(3);
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
        image(this.slingshot3,pointA.x-30,pointA.y-10,15,30);
    }
    pop();
   }
    }
}
