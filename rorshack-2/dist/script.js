
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

let c = 0;
// let x = 20;
// let y = 700;
// let z = 500;

let x = 100;
let y = 20;
let z = 500;

// 200,200,300 - 300,300,450
// 300,30,450



function mousePressed() {
  saveFrames('out', 'png', 1, 25);
}

function draw() {
  frameRate(30);
  //0.2 - less frames, 0.002 - more frames
  rotateX(frameCount*0.02);
  rotateY(frameCount*0.02);
  box(y*2,z,x*2);
  box(z,y*2,x*2);
  //box(200)
  c++;
  console.log(c);

  // if (c%1500==0){
  //   background(255);
  //   x=random(10,50);
  //   y=random(500,700);
  //   z=random(500,700);
  // }
  // rotateX(frameCount*0.2);
  // rotateY(frameCount*0.2);
  // box(20,400,400);
  //test
}
