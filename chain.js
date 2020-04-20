class Chain {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA.body,
            pointB : pointB,
            length : 10,
            stiffness : 0.04
        }
        
        this.pointB = pointB;

        this.body = Matter.Constraint.create(options);
        World.add(world,this.body);
    }

    fly(){
        this.body.bodyA = null;
    }

    attach(body){
        this.body.bodyA = body;
    }

    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;

            push();
            strokeWeight(5);
            stroke(255);

            if(pointA.y>220){
                line(pointA.x,pointA.y-20,this.pointB.x,this.pointB.y);
            }
            if(pointA.y<220){
                line(pointA.x,pointA.y+20,this.pointB.x,this.pointB.y);
            }
            if(pointA.x>150){
                line(pointA.x-20,pointA.y,this.pointB.x,this.pointB.y);
            }
            if(pointA.x<150){
                line(pointA.x+20,pointA.y,this.pointB.x,this.pointB.y);
            }

            pop();
        }
    }
}

