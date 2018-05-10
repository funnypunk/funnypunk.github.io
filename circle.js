function Circle() {

    this.pos = createVector('', '');


    this.drawC = function (radius) {
        {
            x = this.pos.x + random(1, 4);
            y = this.pos.y + random(1, 4);

            fill(160, 125, 195, 0.7);    //fill Color of circle
            //noFill();
            strokeWeight(1);
            stroke('black');      // Circle stroke color
            ellipse(x, y, radius);      // draw Circle
        }

    };
}