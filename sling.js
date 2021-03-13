class sling {

constructor(){
    var hai={
        bodyA: bird.body,
        bodyB: pig3.body,
        stiffness: 0.08 ,
        length: 20
    }
    this.fly = Constraint.create(hai);
    World.add (world,this.fly);
}
 display(){
     console.log("a.x"+this.fly.bodyA.position.x);
     console.log("a.y"+this.fly.bodyA.position.y);
     console.log("b.x"+this.fly.bodyB.position.x);
     console.log("b.y"+this.fly.bodyB.position.y);
   //push();
    strokeWeight(6);
    line(this.fly.bodyA.position.x,this.fly.bodyA.position.y,this.fly.bodyB.position.x,this.fly.bodyB.position.Y);
    //pop();
}
}