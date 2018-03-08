function Circle() {
    this.radius;
    this.pos = createVector('', '');
    this.angle = 0;
    this.increment = 0;
    this.constant = 9;
    this.alive = false;
    this.ellipseRadius = 9;

    this.drawC = function () {
        if (this.alive) {
            for (var i = 0; i <= 30; i++) {
                push();
                fill(this.angle % 256, 155, 222);

                x = this.pos.x;
                y = this.pos.y;
                strokeWeight(1);
                ellipse(x, y, this.ellipseRadius);

                pop();
                this.rotateC();
            }
        }
    }

    this.rotateC = function () {

        this.angle = 137.5 * this.increment;
        this.increment++;
        this.radius = this.constant * sqrt(this.increment);
        this.pos.x = this.radius * cos(this.angle) + this.pos.x;
        this.pos.y = this.radius * sin(this.angle) + this.pos.y;
        if (this.radius > 400) {
            this.alive = false;
        }

    }

    this.spawn = function (x, y) {
        if (!this.alive) {
            this.alive = true;
            this.pos.x = x;
            this.pos.y = y;
        }
    }
}