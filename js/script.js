// can be used in the function, but var inside a function can't be used outside
var start = new Date().getTime();

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeShapeAppear() {
  var top = Math.random() * 400;
  var left = Math.random() * 400;
  // Fix - shape can be too small to see.AKA give it a minimum size
  var width = Math.random() * 300 + 100;
  // make shape a circle 50% of time
  if (Math.random() > 0.5) {
    // make a circle
    document.getElementById("shape").style.borderRadius = "50%";
  } else {
    document.getElementById("shape").style.borderRadius = "0";
  }

  document.getElementById("shape").style.backgroundColor = getRandomColor();
  document.getElementById("shape").style.width = width + "px";
  document.getElementById("shape").style.height = width + "px";
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.left = left + "px";

  document.getElementById("shape").style.display = "block";
  start = new Date().getTime();
}

function appearAfterDelay() {
  setTimeout(makeShapeAppear, Math.random() * 2000);
}

appearAfterDelay();

document.getElementById("shape").onclick = function() {
  document.getElementById("shape").style.display = "none";
  var end = new Date().getTime();
  // divide ms by 1000 to get seconds
  var timeTaken = (end - start) / 1000;
  // alert(timeTaken);  great for testing
  document.getElementById("timeTaken").innerHTML = timeTaken + "seconds";
  appearAfterDelay();
};
