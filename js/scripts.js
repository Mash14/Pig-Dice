/* Back End */

function Player(playerName, playerNumber, score) {
  this.playerName = playerName;
  this.playerNumber = playerNumber;
  this.score = score;
}
Player.prototype.scorePoints = function(points) {
  this.score += points;
};
Player.prototype.resetScore = function() {
  this.score = 0;
};
function switchPlayer(currentPlayerNumber, numberOfPlayers) {
  numberOfPlayers -= 1;
  var nextPlayer = 0;
  if (currentPlayerNumber === numberOfPlayers) {
    nextPlayer = 0;
  } else {
    nextPlayer = currentPlayerNumber + 1;
  }
  return nextPlayer;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function rollD6() {
  var roll = getRandomInt(1, 6);
  return roll;
}

/* Front End */
function showDie(roll) {
  //Show image for current roll
  // $("#dieRoll").html("<img src='img/" +roll+ ".png' />");
};
$(document).ready(function(){
  var player1 = new Player(prompt("Player 1 enter your name: "), 1, 0);
  var player2 = new Player(prompt("Player 2 enter your name: "), 2, 0);

  $("#player1Name").text(player1.playerName);
  $("#player2Name").text(player2.playerName);
    var players = [player1, player2];

    var numberOfPlayers = 2;

    var playerTotal1 = 0;
    var playerTotal2 = 0;

    var currentPlayerIndex = 0;
    var turnTotal = 0;
    
