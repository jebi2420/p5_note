function setup() {
  // Creates a canvas 600 pixels wide
  createCanvas(600, 400);
  
  // slow the frame rate
  frameRate(10);
}

function draw() {
  // sky blue background
  background(135, 206, 235);

  // sun
  fill("yellow");
  stroke("orange");
  strokeWeight(20)
  circle(550, 50, 100);

  // grass on bottom half
  stroke(0); // black outline
  strokeWeight(1);
  fill("green");
  rect(0,200,600,200)

  // emojis
  textSize(75);
  // text("🍎", mouseX, mouseY);
  text("🍎", 200, 200);
  text("☁️", 300, 80)

  // line
  line(pmouseX, pmouseY, mouseX, mouseY);

}
