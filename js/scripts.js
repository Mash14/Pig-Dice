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
