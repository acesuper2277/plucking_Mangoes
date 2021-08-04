class launcher {

    constructor(bodyA, pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }

        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    display(){

            var pointA = this.launcher.bodyA
            var pointB = this.pointB
    }

    fly(){

        this.launcher.bodyA = null

    }

    attach(bodyA){

        this.launcher.bodyA = bodyA;
        
    }
}