var box 
//Happens only once at the start of the program
function setup() {
  createCanvas(600,400);
box = createSprite(80,90,100,100)

  
}

//Repeats
function draw() 
{
  background(15,30,75);
if (keyDown(DOWN_ARROW)) {
  box.y=box.y+1
}
if (keyDown(UP_ARROW)) {
  box.y=box.y-1
}

  
drawSprites()

}




