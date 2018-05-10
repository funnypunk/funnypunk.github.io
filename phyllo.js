

function Phyllotaxis() {
   
    this.NUMOFCIRCLES = 0;
    this.angle = 0;
    this.angleMultiplier = 137.5;
    this.radius = 15;
    this.circleRadius = 5;      // Individual circle Radius
    this.increment = 1;
    this.constant = 5;
    this.alive = false;
    this.circles = [];
    this.offSet = 3;


    this.createCircleObjects = function (posX, posY) {
        console.log("3");
        for (var i = 0; i < this.NUMOFCIRCLES; i++) {
            this.circles[i] = new Circle();
            this.circles[i].pos = createVector(posX, posY);
        }
        console.log(this.circles[1].pos);
    };



    this.displayCircles = function () {
        for (var i = 0; i < this.NUMOFCIRCLES; i++) {
            this.circles[i].drawC(this.circleRadius);
        }
    };


    this.setCirclePositions = function (posX, posY) {
        var angle = this.angle;
        var increment = this.increment;
        var radius = this.radius;
        for (var i = 0; i < this.NUMOFCIRCLES; i++) {
           
            angle = this.angleMultiplier * increment;
            increment += 1;
            radius = this.constant * sqrt(increment)*this.offSet;
            this.circles[i].pos.x = radius * cos(angle)+posX ;
            this.circles[i].pos.y = radius * sin(angle)+posY;
            
        }
        
    };


        // this.setCirclePositions = function (posX, posY) {
        //     var angle = this.angle;
        //     var increment = this.increment;
        //     var radius = this.radius;
        //     for (var i = 0; i < this.NUMOFCIRCLES; i++) {
        //         this.circles[i].pos = createVector(posX, posY);
        //         angle = this.angleMultiplier * increment;
        //         increment += 1;
        //         radius = this.constant * sqrt(increment);
        //         this.circles[i].pos.x = radius * cos(angle) + this.circles[i].pos.x;
        //         this.circles[i].pos.y = radius * sin(angle) + this.circles[i].pos.y;

        //     }



}
