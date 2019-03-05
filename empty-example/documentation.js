//How to write a function
function funcName (args) {
    //bleh, bleh bleh
}

function setup(){
    //set up your environment here
}
/*
The setup() function is used to define initial properties and load media.
The function is called once when the program starts and shouldn't be called again.
The variables declared in setup function cannot be used accessed outside the function.
*/

function draw() {
    //code to execute repeatedly
}
/*
It is called after setup(), to repeatedly execute lines of code until program is stopped or noLoop() is called.
The number of times draw is called in each second can be dedcided by frameRate() function.
*/

frameRate(framesPerSecond);
/*
This specifies the number of frames displayed per second i.e. the rate at which draw() executes.
Calling frameRate() with no arguments, arguments not of type number or non positive arguments will return the current frameRate().
*/

createCanvas(width, height);
/*
This function is used to draw a canvas of a specified width and height (in pixels) in your document.
It is to be called only once in sketch file in setup().
If createCanvas() is not used, by default the window will be given a size of 100x100 pixels.
*/

background(red, green, blue);
/*
It sets the background colour of the canvas created in setup().
By default colour is transparent.
*/

rect(xPosition, yPosition, width, height);
/*
Draws a rectangle.
By default, first two parameters are coordinates of upper-left corner and the other two as width and height.
How the coordinate parameters are interpreted can be changed by rectMode().
*/

rectMode(mode);
/*
Modifies the location from which rectagles are drawn by changing the point specified by parameters given to rect().
By default it is CORNER, which interprets the first two parameters of rect() as the upper-left corner of the shape.
CENTER interprets the first two parameters of rect() as the shape's center point.
There are other modes as well that you can check out.
*/

fill(red, green, blue);
/*
This function fills in the colour for shapes.
Once we run fill() function, all subsequent shapes will be filled in the specified workshop.
*/

createVector(xPos, yPos);
/*
Creates a new Vector.
A vector here is similar to the vector in maths - an entity with magnitude and position.
In our example (snake game) we have used vectors to store a position.
*/

dist(xPos1, yPos1, xPos2, yPos2);
/*
Calculates the distance between two points.
The first set of parameters are coordinates of the first point, the other set are coordinates for the second point.
*/

function keyPressed() {
    //what to do
}
/*
It is called everytime a key is pressed.
You can get what key was pressed by checking the keyCode variable.
*/

function mousePressed() {
    //what to do
}
/*
It is called once every time a mouse button is pressed.
The mouseButton variable has the code of the mouse button pressed.
*/

random(max);
/*
Returns a random floating point number.
If no argument is given, then gives a random number from 0 upto (but not including) 1.
If one argument is given, then gives a random number from 0 upto (but not including) the number.
If one argument is given and it is an array, returns a random element from that array.
If two arguments are given, returns a random number from the first number up to (but not including) the second number.
*/

floor(n);
/*
Calculates the closest int value that is less than or equal to the value of the parameter.
*/