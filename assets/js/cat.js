function switchOn() {
  let element = document.getElementById("lightOn");
  element.style.display = "block";
  let element1 = document.getElementById("catFull");
  element1.style.display = "block";
  document.getElementById("lightOff").style.display = "none";
  document.getElementById("catEyes").style.display = "none";
  document.getElementById("onBtn").style.disabled = true;
  document.getElementById("offBtn").style.disabled = false;
  document.getElementById("switch").innerText = "switch is on";
}

function switchOff() {
  document.getElementById("lightOn").style.display = "none";
  document.getElementById("catFull").style.display = "none";
  document.getElementById("lightOff").style.display = "block";
  document.getElementById("catEyes").style.display = "block";
  document.getElementById("onBtn").style.disabled = false;
  document.getElementById("offBtn").style.disabled = true;
  document.getElementById("switch").innerText = "switch is off";
}
// function switchOn() {
//   document.getElementById("status").innerText = "switch is on";
// }
// function switchOff() {
//   document.getElementById("status").innerText = "switch is off";
// }
