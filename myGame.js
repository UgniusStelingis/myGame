var colorNum = 6;
var square = document.querySelectorAll(".square");
var mode = document.querySelectorAll("#mode");
var btnreset = document.getElementById("reset");

btnreset.addEventListener("click", function() {
  alert("con");
});

mode[0].addEventListener("click", function() {
  mode[0].classList.add("selected");
  mode[1].classList.remove("selected");
});

mode[1].addEventListener("click", function() {
  mode[1].classList.add("selected");
  mode[0].classList.remove("selected");
});

/* mode.addEventListener("click", function() {
  alert("hi!");
});

mode.addEventListener("click", function() {
  alert("connected!");
});
 */
randomColor(colorNum);

function colorGenerator() {
  var r = Math.floor(Math.random() * 255 + 1);
  var g = Math.floor(Math.random() * 255 + 1);
  var b = Math.floor(Math.random() * 255 + 1);
  return "rgb" + "(" + r + ", " + g + ", " + b + ")";
}

function randomColor(colorNum) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colorGenerator();
  }
}
