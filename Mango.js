class Mango{
    constructor(x,y,diameter){
        var options={
            isStatic:true,
            friction:1.0,
            restitution:0.5,
        }

        this.body=Bodies.circle(x,y,diameter,options);
        World.add(world,this.body);
        this.diameter=diameter;
        this.Image=loadImage("mango.png");
    }

    dispaly(){
        
        push()
        Translate(this.body.position.x,this.body.position.y);
        image(this.Image,0,0,this.diameter);
        ImageMode(CENTER);
        pop()

    }

}