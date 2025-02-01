// function draw() {
//   document.write(" | ");
// }
// let interval = setInterval(draw, 1000);

// function func() {
//   clearInterval(interval);
// }
// setTimeout(func, 5000);

let intervalId; // змінна для таймеру

let bottom = false, // початкове розташування - квадратик вгорі
    right = false, // початкове розташування - квадратик зліва
    time = 1000; // стандартний інтервал 1 секунда

let leftOffset = 0; //  координата по Х
let topOffset = 0; //  координата по Y

let box = document.getElementById('box');

function moveBox() { // рухаємо квадратик
    leftOffset += 1;
    box.style.left = leftOffset + "px";
    box.style.top = topOffset + "px";
}

intervalId = setInterval(moveBox, time);