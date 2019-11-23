
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

let c = 0;
let x = 20;
let y = 700;
let z = 500;

function draw() {
  frameRate(60);
  rotateX(frameCount*0.02);
  rotateY(frameCount*0.02);
  box(x,y,z);
  //box(200)
  c++;
  console.log(c);

  if (c%1500==0){
    background(255);
    x=random(10,50);
    y=random(500,700);
    z=random(500,700);
  }
  // rotateX(frameCount*0.2);
  // rotateY(frameCount*0.2);
  // box(20,400,400);
  //test
}
