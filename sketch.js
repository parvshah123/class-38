var canvas, backgroundImg;
var gameState=0;
var playerCount;
var database;
var form, player, game;
var allPlayers;
var cars, car1, car2, car3, car4;

function setup(){
  canvas = createCanvas(displayWidth-20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
}