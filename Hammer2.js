class Hammer2 {

  constructor(x,y,width,height) {

  // var box_option = {
  // isStatic: false,
  // density: 2,
  // frictionAir: 0.003
  // }

  // this.body = Bodies.rectangle(x,y,width,height,box_option);
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.image = loadImage("hammer.png")
  // World.add(world,this.body);    
    
    
  }

  display() {
  // var pos = this.body.position;
  // var angle = this.body.angle;
  push();
  frameRate(1000);
  angleMode(DEGREES);
  // imageMode(CORNERS);
    
  // function mouseDragged() {
  let a = atan2(mousey - height/2, mousex - width/2);
  translate(mousex + 50, mousey + 50);
  rotate(a);
  // translate(pos.x, pos.y);
  // rotate(angle);
  // }
  // imageMode(CORNERS);
    
  fill("#8D918D");
  // image(this.image, 0, 0, this.width, this.height);
  rect(0,0,this.width,this.height);
  pop();
  }
}

