var color = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"];
var square = document.querySelectorAll(".square");

for (var i = 0; i < color.length; i++) {
  square[i].style.backgroundColor = color[i];
}
