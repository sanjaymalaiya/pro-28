class Slingshort{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            Stiffness:0.01,
            length: 10
        }

        this.pointB=pointB;
        this.throw = constraint.create(options);
        World.add(world,this.throw);

    }
    fly(){
        this.throw.bodyA=null;
    }
    Lunch(bodyA){
        this.throw.bodyA = bodyA;
    }
    display(){
        
    }
}