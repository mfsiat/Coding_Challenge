let iteration = 0;
let div;
let pi = 4;

let history = [];

function setup() {
  createCanvas(600, 400);
  div = createDiv('').style('font-size', '64pt');
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
  let piY = map(PI,2,4,height,0);
  line(0, piY, width, piY);
  let spacing = width/history.length
  stroke(255);
  noFill();
  beginShape();
  for(let i = 0; i< history.length; i++){
    let x = i * spacing;
    let y = map(history[i],2,4,height,0);
    vertex(x,y);
  }
  endShape();
  div.html(pi);
  iteration++;
}