var database , form , player,game,allPlayers;
var gameState=0;
var playerCount=0;
var girlImg1,girlImg2 , girl1,girl2 , girls , gardenImg ;
var  butterfly1, butterfly2, butterfly1Group, butterfly2Group , b1 , b2
var ground
function preload() {
 
 girlImg1 = loadImage("1.png")
 girlImg2 = loadImage("2.png")
 gardenImg = loadImage("3.jpg")

 b1 = loadImage("b4.png")
 b2 = loadImage("b1.png")
}

function setup() {
  
  createCanvas(displayWidth,displayHeight)
  
  database = firebase.database()
 
  butterfly1Group = new Group()
  butterfly2Group = new Group()

  game = new Game()
  game.getGameState()
  game.start()

 //ground = createSprite(width/2,height-100,width,20)
  
  
}

function draw() {
 background(gardenImg)
 
 

 if(playerCount===2&&gameState===0){
  gameState = 1
  game.updateGameState(gameState)
}
if(gameState===1){
  game.play()

 
}

if(gameState===2){
  game.end();
}


}