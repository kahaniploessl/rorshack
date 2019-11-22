function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  frameRate(15);
  rotateX(frameCount*0.02);
  rotateY(frameCount*0.02);
  box(240,800);
}
