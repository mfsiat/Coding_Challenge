let iteration = 0;
let div;
let pi = 4;

let history = [];

let minY = 2;
let maxY = 4;

function setup() {
  createCanvas(600, 400);
  div = createDiv('').style('font-size', '64pt');
  console.log(PI);
  frameRate(20);
}

function draw() {
background(0)  ;
  let den = iteration * 2 + 3;
if(iteration % 2 == 0) {
  pi -= (4 / den);
} else {
  pi += (4 / den);
}
  history.push(pi);
  let piY = map(PI,minY,maxY,height,0);
  line(0, piY, width, piY);
  let spacing = width/history.length
  stroke(255);
  noFill();
  beginShape();
  for(let i = 0; i< history.length; i++){
    let x = i * spacing;
    let y = map(history[i],minY,maxY,height,0);
    vertex(x,y);
  }
  endShape();
  div.html(pi);
  iteration++;
}