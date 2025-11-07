const counter0 = document.getElementById("counter");
let count = 0;
function decBtn() {
  if (count <= -10) {
    alert("you have reached the minimum limit");
  } else {
    count = count - 1;
    counter0.textContent = count;
    counter0.style.color = "red";
  }
}
const counter1 = document.getElementById("counter");
function incBtn() {
  if (count >= 10) {
    alert("you have reached the maximum limit");
  } else {
    count = count + 1;
    counter1.textContent = count;
    counter1.style.color = "green";
  }
}
const counter2 = document.getElementById("counter");
function resBtn() {
  count = 0;
  counter2.textContent = count;
  if (count === 0) {
    counter2.style.color = "black";
  }
}
