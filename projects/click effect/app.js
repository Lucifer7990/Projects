// document.addEventListener("DOMContentLoaded", function () {
//     document.addEventListener("mousemove", function (event) {
//       const waterDrop = document.createElement("div");
//       waterDrop.className = "water-drop";
//       waterDrop.style.left = event.clientX  + "px"; // Adjust position to center the water drop
//       waterDrop.style.top = event.clientY  + "px"; // Adjust position to center the water drop

//       document.getElementById("container").appendChild(waterDrop);

//       // Remove the water drop after the animation duration (1 second)
//       setTimeout(function () {
//         waterDrop.remove();
//       }, 10000);
//     });
//     document.addEventListener("click", function (event) {
//       const waterDrop = document.createElement("div");
//       waterDrop.className = "water-drop";
//       waterDrop.style.left = event.clientX  + "px"; // Adjust position to center the water drop
//       waterDrop.style.top = event.clientY  + "px"; // Adjust position to center the water drop
//       waterDrop.style.backgroundColor = 'red'; // Adjust position to center the water drop

//       document.getElementById("container").appendChild(waterDrop);

//       // Remove the water drop after the animation duration (1 second)
//       setTimeout(function () {
//         waterDrop.remove();
//       }, 10000);
//     });
//   });

function drop() {
  var x = Math.floor(Math.random() * 100);
  var y = Math.floor(Math.random() * 100);
  const waterDrop = document.createElement("div");
  waterDrop.className = "water-drop";
  waterDrop.style.left = x + "%"; // Adjust position to center the water drop
  waterDrop.style.top = y + "vh"; // Adjust position to center the water drop

  document.getElementById("container").appendChild(waterDrop);
  setTimeout(function () {
            waterDrop.remove();
          }, 10000);
}

function click() {
  setTimeout(function () {
    drop();
    drop();
    drop();
    drop();
    drop();
    drop();
    drop();
    click();
  }, 100);
}
click();

document.addEventListener("mousemove", function (event) {
    const waterDrop = document.createElement("div");
    waterDrop.className = "water-drop";
    waterDrop.style.left = event.clientX + "px"; // Adjust position to center the water drop
    waterDrop.style.top = event.clientY + "px"; // Adjust position to center the water drop

    document.getElementById("container").appendChild(waterDrop);
    setTimeout(function () {
      waterDrop.remove();
    }, 10000);
});

