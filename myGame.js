var colorNum = 6;
var square = document.querySelectorAll(".square");
var mode = document.querySelectorAll("#mode");
var btnreset = document.getElementById("reset");
var pickColor, pickedColor;
var targetColor = document.getElementById("targetColor");

randomColor(colorNum);

targetColor.textContent = pickColor;

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", function() {
    pickedColor = this.style.backgroundColor;
    if (pickedColor === pickColor) {
      alert("CONGRATULATIONS! You Win!");
    } else {
      this.style.display = "none";
    }
  });
}

btnreset.addEventListener("click", function() {
  randomColor(colorNum);
});

mode[0].addEventListener("click", function() {
  mode[0].classList.add("selected");
  mode[1].classList.remove("selected");
  colorNum = 3;
  randomColor(colorNum);
});

mode[1].addEventListener("click", function() {
  mode[1].classList.add("selected");
  mode[0].classList.remove("selected");
  colorNum = 6;
  randomColor(colorNum);
});

function colorGenerator() {
  var r = Math.floor(Math.random() * 255 + 1);
  var g = Math.floor(Math.random() * 255 + 1);
  var b = Math.floor(Math.random() * 255 + 1);
  return "rgb" + "(" + r + ", " + g + ", " + b + ")";
}

function randomColor(colorNum) {
  for (var i = 0; i < square.length; i++) {
    if (i < colorNum) {
      square[i].style.display = "block";
      square[i].style.backgroundColor = colorGenerator();
      pickColor =
        square[Math.floor(Math.random() * square.length)].style.backgroundColor;
    } else {
      square[i].style.display = "none";
    }
  }
}
