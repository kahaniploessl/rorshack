//200, 200, 300, 100, 10

let x;
let y;
let z;
let c = 1;
let i = 0;

let tX ;
let tY ;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(255);
}

function draw() {
  frameRate(30);
  // translate(0,0);
  if (c%700==0){
    background(255);
    i++;
  }
  if (i==0) {
    x=300;
    y=300;
    z=20;
    tX = 10;
    tY = 10;
  } else if (i==1) {
    x=20;
    y=20;
    z=400;
    tX = 50;
    tY = 50;
  } else if (i==2) {
    x=150;
    y=275;
    z=150;
    tX=0;
    tY=0;
  } else if (i==3) {
    x=300;
    y=150;
    z=10;
    tX = 100;
    tY = 10;
  } else if (i==4) {
    x=190;
    y=250;
    z=15;
    tX = 50;
    tY = 50;
  } else if (i==5) {
    x=400;
    y=10;
    z=10;
    tX = 0;
    tY = 10;
  } else if (i==6) {
    x=200;
    y=20;
    z=300;
    tX = 0;
    tY = 50;
  } else if (i==7) {
    x=200;
    y=200;
    z=300;
    tX = 0;
    tY = 0;
  } else if (i==8) {
    x=50;
    y=350;
    z=30;
    tX = 50;
    tY = 10;
    i=-1;
  }
  rotateX(frameCount*0.02);
  rotateY(frameCount*0.02);
  // box(100,50,200);
  translate(tX,tY);
  box(x,y,z);
  c++;
}