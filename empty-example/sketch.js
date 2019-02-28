var height, width, scale, rows, columns, w;
var snake, food;
function setup() {
  height = width = 600;
  scale = 20;
  createCanvas(width, height);
  snake = new Snake(300, 300);
  w = rows = width / scale;
  columns = height / scale;
  food = new Food();
  food.pickLocation();
}

function draw() {
  frameRate(8);
  background(0);
  food.build();
  snake.build();
  if (snake.hasEaten()) {
    snake.length++;
    food.pickLocation();
  }  
  snake.update();
  snake.kill();
}

function keyPressed() {
  if(keyCode == UP_ARROW) {
    snake.xSpeed = 0;
    snake.ySpeed = -1;
  } 
  if (keyCode == DOWN_ARROW) {
    snake.xSpeed = 0;
    snake.ySpeed = 1;
  }
  if (keyCode == LEFT_ARROW) {
    snake.xSpeed = -1;
    snake.ySpeed = 0;
  }
  if (keyCode == RIGHT_ARROW) {
    snake.xSpeed = 1;
    snake.ySpeed = 0;
  }
}

function mousePressed() {
  snake.length++;
}