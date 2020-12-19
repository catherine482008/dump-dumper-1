class paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1.0,
            friction:0.5,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle (this.x,this.y,this.r/2,options);
        World.add (world,this.body);
        
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER);
        strokeWeight(3)
        stroke(255,0,255)
        fill(255);

       ellipse(0,0,this.r)
        pop()
    }
}   