var score = 0;

function decrease() {
    score = score - 10;
    document.getElementById("box").textContent = score;
}
function increase() {
     score = score + 10;
    document.getElementById("box").textContent = score;
}


function hide(){
  if (document.getElementById("hideme").style.display === "none") {
    document.getElementById("hideme").style.display="block";
  } else {
    document.getElementById("hideme").style.display="none";
  }
}