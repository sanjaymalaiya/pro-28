class Ground{
    constructor(){
        var options={
            isStatic:true,
            friction:0.04
        }

        this.body=Bodies.rectangle(800,724,1200,40);
        World.add(world,this.body);

    }

    display(){
    
    rectMode(CENTER);
    fill("#ff0000");
    rect(700,625,1800,20);
    }
}