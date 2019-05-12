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

    $("#player" + players[currentPlayerIndex].playerNumber + "Box").addClass("well2");
    $("button#roll").click(function()
  var dieRoll = rollD6()
  $("#dieRoll").text(dieRoll);
  showDie(dieRoll);

  if (dieRoll != 1) {
   turnTotal += dieRoll;
    } else {
      $("#player" + players[currentPlayerIndex].playerNumber + "Total").text(players[currentPlayerIndex].score);
      $("#player" + players[currentPlayerIndex].playerNumber + "Box").removeClass("well2")
        currentPlayerIndex = switchPlayer(currentPlayerIndex, numberOfPlayers);
      $("#activePlayer").text(players[currentPlayerIndex].playerName);
      $("#player" + players[currentPlayerIndex].playerNumber + "Box").addClass("well2");
      turnTotal = 0;
      }
      $("#turnTotal").text(turnTotal);

      });


$("button#hold").click(function(){
players[currentPlayerIndex].scorePoints(turnTotal);
$("#player" + players[currentPlayerIndex].playerNumber + "Total").text(players[currentPlayerIndex].score);
if (players[currentPlayerIndex].score > 99) {
$("#gameEnd").show();
} else {
$("#dieRoll, #turnTotal").empty();
}

$("#player" + players[currentPlayerIndex].playerNumber + "Box").removeClass("well2")
    currentPlayerIndex = switchPlayer(currentPlayerIndex, numberOfPlayers);
$("#player" + players[currentPlayerIndex].playerNumber + "Box").addClass("well2");
turnTotal = 0;
});

$("button#reset").click(function(){
players.forEach(function(player){
player.resetScore();
});

turnTotal = 0;
$("#player" + players[currentPlayerIndex].playerNumber + "Box").removeClass("well2")
currentPlayerIndex = 0;
$("#player" + players[currentPlayerIndex].playerNumber + "Box").addClass("well2");
$("#dieRoll, #turnTotal, #player1Total, #player2Total").empty();
  });
});
