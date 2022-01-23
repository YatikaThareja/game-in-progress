class Game{
    constructor(){
        this.resetTitle=createElement("h2")
        this.resetButton=createButton("")

    }
    getState(){
        db.ref("gameState").on("value",data=>{
            gameState=data.val()
        })
    }
    updateState(state){
        db.ref("/").update({
            gameState:state
        })
    }
    start(){
        player=new Player();
        playerCount=player.getCount();
        console.log(playerCount);
        form= new Form();
        form.display();
        gamer1=createSprite(width/2-50,height-100)
        gamer1.addImage("gamer1",player1Img)
        gamer2=createSprite(width/+100,height-100)
        gamer2.addImage("gamer2",player2Img)
        gamers=[gamer1,gamer2]
    }
    handleElements(){
       form.hide()
       this.resetButton.position(width/2+230,100) 
       this.resetButton.class("resetButton")
       this.resetTitle.html("reset game")
       this.resetTitle.class("resetText")
       this.resetTitle.position(width/2+200,40)
    }
    handleResetButton(){
        this.resetButton.mousePressed(()=>{
            alert("reset")
            db.ref("/").set({
                playerCount:0,
                gameState:0,
                players:{}
            })
           // window.location.reload()
        })
    }
    play(){
        this.handleElements();
        Player.getPlayersInfo();
       if (allPlayers!== undefined){
           image(track,0,-height*5,width,height*6)
       }
    }
}