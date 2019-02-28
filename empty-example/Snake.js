class Snake {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xSpeed = 1;
        this.ySpeed = 0;
        this.length = 0;
        this.tail = [];
    }

    build() {
        fill(0, 255, 0);
        rectMode(CENTER)
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, w, w)
        }
        fill(0, 0, 255)
        rect(this.x, this.y, w, w);
    }

    update() {
        for (var i = 0; i< this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];    
        }

        if (this.length > 0) {
            this.tail[this.length - 1] = createVector(this.x, this.y);
        }

        this.x = this.x + this.xSpeed * height / scale;
        this.y = this.y + this.ySpeed * height / scale;

        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
    }

    hasEaten() {
        var d = dist(this.x, this.y, food.x, food.y);
        return d < 1;
    }

    kill() {
        for (var i = 0; i < this.tail.length; i++) {
            var d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
            if (d < 1) {
                this.length = 0;
                this.tail = []
            }
        }
    }
}

class Food {
    constructor() {
        this.x = 0;
        this.y = 0;
    }

    build() {
        fill(255, 0, 0);
        rectMode(CENTER);
        rect(this.x, this.y, w, w);
    }

    pickLocation() {
        this.x = rows * floor(random(scale));
        this.y = columns * floor(random(scale));
    }
}