class paper{
    constructor(x,y,radius){

    
    var options={
        isStatic:false,
        friction:0.5,
        density:1.2,
        restitution:0
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    Matter.World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        circle(this.body.position.x,this.body.position.y,this.radius);
        
    }
}