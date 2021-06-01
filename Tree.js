class Tree{
    constructor(x,y,width,height){
        var option={
            isStatic:true,
            restitution:0.2,
            friction:0.4,
            density:1.0
        }
        this.body=Bodies.tall(700,400,80,80);
        World(world,this.body); 
    }
    display(){
        Push()
        Translate(this.body.position.x,this.body.position.y)
        ImageMode(CENTER);
        Image(this.image,0,0);
        Pop()
        }

}