var db;
var gameState=0;
var playerCount=0,form,player,game;
var allPlayers;
var player1,player2,player3,player4;
var player2Img,player3Img,player1Img,player4Img,track;
var bg;
var gamer1,gamer2;
var gamers=[]

function preload(){
  player1Img=loadImage("Images/img1.jpeg");
  player2Img=loadImage("Images/img2.png");
  player3Img=loadImage("Images/img1.jpeg");
  player4Img=loadImage("Images/img2.png");
  track=loadImage("Images/track.jpeg")
  bg=loadImage("Images/image3.jpeg")
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  db=firebase.database();
  db.ref("gameState").on("value",(data)=>{
  gameState=data.val();
  })
  console.log(gameState);
  game=new Game();
  game.getState();
  game.start();


}

function draw() {
  background(bg);
  if (playerCount===2){
    game.updateState(1)
  }
  if(gameState===1){
    game.play();
  }
}