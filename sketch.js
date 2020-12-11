//Create variables here
var database
var dog
var foodStock
var background

function preload()
{
  dog.image=loadImage("image/dogImg.png");

}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
}

foodStock=database.ref('Food');
foodStock.on("value",readStock);

function draw() {  

  background(46, 139, 87);

  if (keyWentDown(UP_ARROW)) {
    writeStock (foodS)
    dog.addImage(dogHappy);
  }


  



  drawSprites();
  textSize=20;
  
  stroke();

}
function readStock(data){

foodS=data.val();

}

function writeStock(x){

  if (x<=0) {
  x=0;
}else{

x=x-1

}
database.ref('/').update({
  Food:x
})

}
