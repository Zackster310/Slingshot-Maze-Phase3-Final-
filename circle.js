class Circle{
    constructor(x,y,radius){
        var options = {
            'restitution' : 0.5,
            'friction':0.8,
            'density':1.0
        }

        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

        this.radius = radius;
    }
    display(){
        var pos = this.body.position;

        push();
        fill(random(0,255),random(0,255),random(0,255));
        strokeWeight(3);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    }
}