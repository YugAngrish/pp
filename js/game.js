class Game{
    constructor(){


    }
    display(){


    }
      getGameState(){
          var gameStateRef = database.ref("gameState")
           gameStateRef.on("value",function(data){

            gameState = data.val()

           })
      } 
      updateGameState(state){
          database.ref("/").update({
       "gameState" : state

          })
      } 
      start(){
     if(gameState===0){
      
        form = new Form()
        form.display()
       
        player = new Player()
        player.getPlayerCount()
     }
        girl1 = createSprite(width-250,height-20)//height-280)
        girl1.addImage(girlImg1)
        girl1.scale = 0.5

        girl2 = createSprite(width-450,height-20)//height-250)
        girl2.addImage(girlImg2)
        girl2.scale = 0.7

        girls = [girl1,girl2]
        
    }
     play(){
      
         form.hide()
         Player.getPlayerDetails()
         player.getRank()
        // image(gardenImg,0,height*-1,width,height)
         if(allPlayers!==undefined){
            
             var index = 0
             var y = height

             var x = 100
             

             for(var i in allPlayers){
              //   console.log(i)
                x = x+30
              //  y = height-allPlayers[i].distance
                 index = index+1
                 if(index ===player.index){

                     girls[index-1].x=x
                     girls[index-1].y=y

                     fill("red")
                     ellipse(x,y+90,60,30)

                     camera.position.x=width/2
                     camera.position.y=girls[index-1].y
                 }
              
                 }
                 if(keyDown(UP_ARROW)&&player.index!==null){

                   girls[player.index-1].y -= 100
                   console.log(girls[player.index-1].y)
                   // player.updatePlayerDetails()
                   

                 }
                
             }
            
            
            /* if(keyWentUp(UP_ARROW)&&player.distance===10){

                player.distance=player.distance+10
                player.updatePlayerDetails()
             }*/
            /*if(player.distance===10){

                player.distance=player.distance+10
                player.updatePlayerDetails() 
            }*/
            if (frameCount % 50 === 0) {
                butterfly1 = createSprite(0,random(0,200), 100, 100);
                butterfly1.velocityX = 6;
                butterfly1.velocityY = 0;
                butterfly1.addImage(b1)// butterfly1.addAnimation(b1)
                butterfly1Group.add(butterfly1);
                
              }
              if (frameCount % 350 === 0) {
                butterfly2 = createSprite(width,random(0,200), 100, 100);
                butterfly2.velocityX = -6;
                butterfly2.velocityY = 0;
                butterfly2.addImage(b2)
                butterfly2Group.add(butterfly2);
                
              }

             
          /*  if (player.index!==null) {
                for (var j = 0; j < butterfly1Group; j++) {
                  if (butterfly1Group.get(j).isTouching(players)) {
                                butterfly1Group.get(j).destroy();
                                 player.score = player.score+10
                                   player.updatePlayerDetails();
                               }
                               
                           }
                         }
            if (player.index !== null) {
                 for (var k = 0; k < butterfly2Group; k++) {
                                 if (butterfly2Group.get(k).isTouching(players)) {
                                    butterfly2Group.get(k).destroy();
                                  player.score = player.score+50
                                    player.updatePlayerDetails();
                               }
                                           
                        }
                      }*/

            if(player.score===150){
                gameState = 2
                player.rank = player.rank + 1
                player.updateRank(player.rank)
            }          
             drawSprites()
         }
         end(){
             console.log("Game Ended")
             console.log(player.rank)
         }
     }
      
    
