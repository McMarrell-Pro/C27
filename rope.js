class Rope{
    constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY=this.offsetY
    var options={
        bodyA:body1,
        bodyB:body2
        pointB:{x:this.offsetX, y:this.offsetY}
    }
    this.rope=Constraint.create(options);
    World.add(world,this.rope)
    }
    display(){
    var pointA = this.sling.bodyA.position;
    vvar pointB = this.pointB;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
} 