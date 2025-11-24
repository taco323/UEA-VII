function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(170, 240, 230); 

    fill(255);
    stroke(0);
    strokeWeight(3);
    rect(80, 40, 100, 60);

    fill(0, 255, 180);
    stroke(0, 0, 255);
    strokeWeight(2);
    ellipse(300, 120, 150, 60);

    noStroke();
    fill(255, 250, 120);
    ellipse(300, 140, 80, 40);

    fill(120, 170, 255);
    stroke(0);
    strokeWeight(2);
    triangle(220, 250, 260, 330, 180, 330);

    fill(255);
    stroke(0);
    strokeWeight(4);
    quad(270, 250, 330, 270, 310, 340, 250, 320);
}