let randomNumber = Math.floor(Math.random() * 100);
let attempt = 0;
function checkGuess() {
  let user = document.getElementById("guess").value;
  let message = document.getElementById("message");
  attempt++;
  if (attempt > 3) {
    alert("game over");
  }
  if (user == randomNumber) {
    message.style.color = "black";
    message.textContent = " congratulations! Your guess is correct";
  } else if (user > randomNumber) {
    message.style.color = "green";
    message.textContent = "Too High! Try Again!";
  } else if (user < randomNumber) {
    message.style.color = "red";
    message.textContent = "Too Low! Try Again!";
  } else {
    message.textContent = "Please enter a number!";
  }
}
// document.getElementById("restartBtn").style.display = "inline";
// function reload() {
//   location.reload();
// }
// function endGame() {
//   document.getElementById("guess").disabled = true;
//   document.getElementById("message").disabled = true;
//   document.getElementById("restartBtn").style.display = "inline";
// }
