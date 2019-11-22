function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  frameRate(15);
  rotateX(frameCount*0.005);
  rotateY(frameCount*0.005);
  box(80,200);
}