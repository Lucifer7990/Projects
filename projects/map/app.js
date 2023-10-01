const markers = document.querySelectorAll(".marker");

let position = [
  [395, 299],
  [517, 485],
  [688, 380],
  [774, 467],
  [1014, 275],
  [936, 371],
  [1096, 499],
];




  for (i = 0; i < position.length; i++) {
    markers[i].style.top = position[i][1] + "px";
    markers[i].style.left = position[i][0] + "px";
  }

