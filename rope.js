class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stifness:0.05,
            length:50
    
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    
    }
    
    fly(){
        this.sling.bodyA = null;
    }
    
    display(){
        if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }
    }