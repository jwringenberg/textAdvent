var points = 6,
  frames = 200;
var angle, theta = 0,
  d = 10;

function setup() {
  createCanvas(windowWidth, windowHeight - 4);

}

function draw() {
  background(10);
  stroke(random(255), random(255), random(255));
  noFill();
  for (var i = 0; i < 50; i++) {
    create(i);
  }
  theta += (5 * TWO_PI / frames);

}

function create(n) {
  angle = 0;

  beginShape();
  for (var i = 0; i < points; i++) {
    d = map(sin(theta), -1, 0, 1, 100) * n;
    var x = width * .5 + n + cos(angle) * d;
    var y = height * .5 + sin(angle) * d;
    var px = x + sin(theta);
    var py = y + cos(theta);
    vertex(px, py);
    angle += TWO_PI / points;
  }

  endShape(CLOSE);

  line(-2 * px, -2 * py, width * 0.5, height * 0.5);

  line(2 * px, 2 * py, width * 0.5, height * 0.5);

}