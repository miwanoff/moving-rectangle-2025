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
    leftOffset++;
    box.style.left = leftOffset + "px";
    box.style.top = topOffset + "px";

    if (leftOffset > 200) { // якщо leftOffset досягла 200, то квадрат праворуч
        right = true
    } else if (leftOffset == 0) { // якщо leftOffset == 0, то квадрат зліва
        right = false;
    }

    if (topOffset > 200) { // якщо topOffset досягла 200, то квадрат внизу
        bottom = true
    } else if (topOffset == 0) { // якщо topOffset == 0, то квадрат зверху
        bottom = false;
    }

    if (bottom == false && right == false) { // якщо квадрат у верхньому лівому кутку, рухаємо вниз
        topOffset += 30;
    }

    if (bottom == false && right == true) { // якщо квадрат у верхньому правому кутку, рухаємо ліворуч
        leftOffset -= 30;
    }

    if (bottom == true && right == false) { // якщо квадрат у верхньому лівому кутку, рухаємо праворуч
        leftOffset += 30;
    }

    if (bottom == true && right == true) { // якщо квадрат у правому лівому кутку, рухаємо вгору
        topOffset -=  30;
    }
}

intervalId = setInterval(moveBox, time);