var something, something2;
var somethingGroup;
var mousex, mousey;
var helper1, helper2, helper3, helper4, helper5, helper6, helper7, helper8, helper9, helper10, helper11, helper12, helper13, helper14, helper15, helper16;
var gameState;
var platformImg, skyImg;
var playerImg;
var playButton, playButtonImg;
var score;

function preload() {
  platformImg = loadImage("platform.png");
  skyImg = loadImage("sky.png");
  playerImg = loadImage("player.png")
  playButtonImg = loadImage("playbutton.png")
}

function setup() {
  createCanvas(600, 800);

  gameState = "menu";
  //   something = createSprite(300,300,30,30);

  mousex = mouseX;
  mousey = mouseY;
  
  score = 0;

  //   push();


  something2 = createSprite(mousex, mousey, 50, 50);
  something2.addImage(playerImg);
  something2.scale = 0.2
  something2.setCollider("rectangle", 0,0,250,250,0)

  // angleMode(DEGREES);
  // let a = Math.atan2(mousex - something2.height/2, mousey,       something2.width/2);
  // translate(mousex + 50, mousey + 50);
  // rotate(a);
  // pop();

  // something2.velocityY = 5;
  somethingGroup = new Group();

  helper1 = createSprite(Math.round(random(1, 600)), 100, 65, 20);
  helper1.setCollider("rectangle", 0, 0, 650,150,0)
  somethingGroup.add(helper1);
  helper1.addImage(platformImg);
  helper1.scale = 0.1
  helper1.lifetime = 500;
  helper2 = createSprite(Math.round(random(1, 600)), 100, 65, 20);
  somethingGroup.add(helper1);
  helper2.setCollider("rectangle", 0, 0, 650,150,0)
  helper2.addImage(platformImg);
  helper2.scale = 0.1
  helper2.lifetime = 500;
  somethingGroup.add(helper2);
  helper3 = createSprite(Math.round(random(1, 600)), 200, 65, 20);
  somethingGroup.add(helper3);
  helper3.addImage(platformImg);
  helper3.scale = 0.1
  helper3.lifetime = 500;
   helper3.setCollider("rectangle", 0, 0, 650,150,0)
  somethingGroup.add(helper3);
  helper4 = createSprite(Math.round(random(1, 600)), 200, 65, 20);
  somethingGroup.add(helper4);
  helper4.addImage(platformImg);
  helper4.scale = 0.1
  helper4.lifetime = 500;
   helper4.setCollider("rectangle", 0, 0, 650,150,0)
  somethingGroup.add(helper4);
  helper5 = createSprite(Math.round(random(1, 600)), 300, 65, 20);
  somethingGroup.add(helper5);
  helper5.addImage(platformImg);
  helper5.scale = 0.1
  helper5.lifetime = 500;
   helper5.setCollider("rectangle", 0, 0, 650,150,0)
  somethingGroup.add(helper5);
  helper6 = createSprite(Math.round(random(1, 600)), 300, 65, 20);
  somethingGroup.add(helper6);
  helper6.addImage(platformImg);
  helper6.scale = 0.1
  helper6.lifetime = 500;
   helper6.setCollider("rectangle", 0, 0, 650,150,0)
  somethingGroup.add(helper6);
  helper7 = createSprite(Math.round(random(1, 600)), 400, 65, 20);
  somethingGroup.add(helper7);
  helper7.addImage(platformImg);
  helper7.scale = 0.1
  helper7.lifetime = 500;
   helper7.setCollider("rectangle", 0, 0, 650,150,0)
  somethingGroup.add(helper7);
  helper8 =createSprite(Math.round(random(1, 600)), 400, 65, 20);
  somethingGroup.add(helper8);
  helper8.addImage(platformImg);
  helper8.scale = 0.1
  helper8.lifetime = 500;
   helper8.setCollider("rectangle", 0, 0, 650,150,0)
  somethingGroup.add(helper8);
  helper9 = createSprite(Math.round(random(1, 600)), 500, 65, 20);
  somethingGroup.add(helper9);
  helper9.addImage(platformImg);
  helper9.scale = 0.1
  helper9.lifetime = 500;
   helper9.setCollider("rectangle", 0, 0, 650,150,0)
  somethingGroup.add(helper9);
  helper10 = createSprite(Math.round(random(1, 600)), 500, 65, 20);
  somethingGroup.add(helper10);
  helper10.addImage(platformImg);
  helper10.scale = 0.1
  helper10.lifetime = 500;
   helper10.setCollider("rectangle", 0, 0, 650,150,0)
  somethingGroup.add(helper10);
  helper11 = createSprite(Math.round(random(1, 600)), 600, 65, 20);
  somethingGroup.add(helper11);
  helper11.addImage(platformImg);
  helper11.scale = 0.1;
  helper11.lifetime = 500;
   helper11.setCollider("rectangle", 0, 0, 650,150,0)
  somethingGroup.add(helper11);
  helper12 = createSprite(Math.round(random(1, 600)), 600, 65, 20);
  somethingGroup.add(helper12);
  helper12.addImage(platformImg);
  helper12.scale = 0.1
  helper12.lifetime = 500;
   helper12.setCollider("rectangle", 0, 0, 650,150,0)
  somethingGroup.add(helper12);
  helper13 = createSprite(Math.round(random(1, 600)), 700, 65, 20);
  somethingGroup.add(helper13);
  helper13.addImage(platformImg);
  helper13.scale = 0.1
   helper13.setCollider("rectangle", 0, 0, 650,150,0)
  helper13.lifetime = 500;
  somethingGroup.add(helper13);
  helper14 = createSprite(Math.round(random(1, 600)), 700, 65, 20);
  somethingGroup.add(helper14);
  helper14.addImage(platformImg);
  helper14.scale = 0.1
   helper14.setCollider("rectangle", 0, 0, 650,150,0)
  helper14.lifetime = 500;
  somethingGroup.add(helper14);
  helper15 = createSprite(Math.round(random(1, 600)), 800, 65, 20);
  somethingGroup.add(helper15);
  helper15.addImage(platformImg);
  helper15.scale = 0.1
   helper15.setCollider("rectangle", 0, 0, 650,150,0)
  helper15.lifetime = 500;
  somethingGroup.add(helper15);
  helper16 = createSprite(Math.round(random(1, 600)), 800, 65, 20);
  somethingGroup.add(helper16);
  helper16.addImage(platformImg);
  helper16.scale = 0.1
   helper16.setCollider("rectangle", 0, 0, 650,150,0)
  helper16.lifetime = 500;
  somethingGroup.add(helper16);
  
    playButton = createSprite(300,400,150,80);
    playButton.addImage(playButtonImg);
    playButton.scale = 0.7;

}

function draw() {

  background(skyImg);
  createEdgeSprites();
  
  console.log(gameState)

  if(gameState === "play") {
    mousey += 10;  
  }

  push();
  something2.x = mousex;
  something2.y = mousey;
  angleMode(DEGREES);
  let angle = Math.atan2(mousex - something2.height / 2, mousey, something2.width / 2);
  translate(mousex + 50, mousey + 50);
  rotate(angle);
  pop();

  if (gameState === "play") {
      
  playButton.visible = false;
    
  score = Math.round(frameCount / 60);
    
  if (frameCount % 15 === 0) {
    something = createSprite(Math.round(random(1, 600)), 830, 30, 30);
    something.velocityY = -4;
    something.lifetime = 500;
    somethingGroup.add(something);
    something.addImage(platformImg);
    something.setCollider("rectangle", 0, 0, 650,150,0)
    something.scale = 0.1
    somethingGroup.add(something);
  }

  if (frameCount % 15 === 0) {
    something = createSprite(Math.round(random(1, 600)), 830, 30, 30);
    something.velocityY = -4;
    something.lifetime = 500;
    somethingGroup.add(something);
    something.addImage(platformImg);
    something.setCollider("rectangle", 0, 0, 650,150,0)
    something.scale = 0.1
    somethingGroup.add(something);
  }

  if (frameCount % 15 === 0) {
    something = createSprite(Math.round(random(1, 600)), -30, 30, 30);
    something.velocityY = -4;
    something.lifetime = 500;
    somethingGroup.add(something);
    something.addImage(platformImg);
    something.setCollider("rectangle", 0, 0, 650,150,0)
    something.scale = 0.1
    somethingGroup.add(something);
  }

  if (frameCount % 15 === 0) {
    something = createSprite(Math.round(random(1, 600)), -30, 30, 30);
    something.velocityY = -4;
    something.lifetime = 500;
    somethingGroup.add(something);
    something.addImage(platformImg);
    something.setCollider("rectangle", 0, 0, 650,150,0)
    something.scale = 0.1
    somethingGroup.add(something);
  }
    if(something2.y > 800 || something2.y < 0) {
       gameState = "restart"
      }
    
  }

  //   if (something2.collide(something)) {
  //       something2.velocityY = -5;
  //   }

  //    something2.velocityY = 5;
  //    let a = atan2(mouseY - something2.height/2, mouseX - something2.width/2);
  //   translate(mouseX + 50, mouseY + 50);
  //   rotate(a);

  if (something2.isTouching(somethingGroup)) {
    // something.velocityY = 6;
    somethingGroup.setVelocityYEach(10);
  } else {
    // something.velocityY = -2
    somethingGroup.setVelocityYEach(-4);
  }

  if (keyDown("space"))  {
    mousey -= 30;
  }

  if (keyDown("LEFT_ARROW")) {
    mousex -= 20;
  }

  if (keyDown("RIGHT_ARROW")) {
    mousex += 20;
  }
  
  if(mousePressedOver(playButton) && gameState === "menu") {
     gameState = "play";
     something2.x = 300;
     something2.y = 40;
  }
  


  drawSprites();
  
  stroke(0)
  strokeWeight(3);
  fill("white")
  textSize(15)
  text("Score: "+score, 500,50);
  
     if (gameState === "restart") {
    stroke("red")
    strokeWeight(5);
    fill("yellow")
    textSize(30)
    text("Score: "+score, 244,400);
    somethingGroup.setVelocityYEach(0);
    somethingGroup.setLifetimeEach(-1);
    push();
    textSize(30);
    stroke("yellow");
    strokeWeight(3)
    fill("orange")
    text("Sky", 265,200)
    pop();
    push();
    textSize(20);
    stroke(0)
    strokeWeight(3)
    fill(255);
    text("or",285,240);
    pop();
    push();
    textSize(30);
    stroke("red")
    strokeWeight(3)
    fill("brown")
    text("Ground",245,280)
    pop();
    push();
    textSize(20);
    stroke("red");
    strokeWeight(3);
    fill(255);
    text("Don't Go Too High or Too Low", 170,700);
    pop();
  }
  
   if (gameState === "menu") {
    playButton.visible = true;
    somethingGroup.setVelocityYEach(0);
    somethingGroup.setLifetimeEach(-1);
    push();
    textSize(20)
    stroke(0)
    strokeWeight(5)
    fill(255)
    text("Press Space to Jump", 200,500)
    text("Press Left Arrow Key to Go Left", 150,550)
    text("Press Right Arrow Key to Go Right", 140,600);
    text("Use the Platforms to Climb", 180, 650);
    pop();
    push();
    textSize(30);
    stroke("yellow");
    strokeWeight(3)
    fill("orange")
    text("Sky", 265,200)
    pop();
    push();
    textSize(20);
    stroke(0)
    strokeWeight(3)
    fill(255);
    text("or",285,240);
    pop();
    push();
    textSize(30);
    stroke("red")
    strokeWeight(3)
    fill("brown")
    text("Ground",245,280)
    pop();
    push();
    textSize(20);
    stroke("red");
    strokeWeight(3);
    fill(255);
    text("Don't Go Too High or Too Low", 170,700);
    pop();
  }
}

// function mouseDragged() {
//   mousex = mouseX;
//   mousey = mouseY;
// }