var mobj,fobj
function setup() {
  createCanvas(800,400);
  mobj=createSprite(600, 200, 100, 50);
  fobj=createSprite(400, 200, 50, 100);
  mobj.shapeColor="green";
fobj.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  mobj.x=mouseX;
  mobj.y=mouseY;
  console.log(fobj.width/2+mobj.width/2);
  console.log(mobj.x-fobj.x);
  console.log(fobj.x-mobj.x);
if (mobj.x-fobj.x<fobj.width/2+mobj.width/2 &&
  mobj.x-fobj.x<fobj.width/2+mobj.width/2 && 
  mobj.y-fobj.y<fobj.width/2+mobj.width/2 &&
  mobj.y-fobj.y<fobj.width/2+mobj.width/2) {
    mobj.shapeColor="yellow";
    fobj.shapeColor="yellow";
}
 else{
  mobj.shapeColor="green";
  fobj.shapeColor="green";
 }
drawSprites();
}
