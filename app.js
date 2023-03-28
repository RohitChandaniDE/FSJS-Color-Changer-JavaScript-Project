const canvas = document.getElementById("canvas");
const Btn = document.getElementById("button");

Btn.addEventListener("click", function() {
    const randomColor = Math.floor(Math.random()*12345678).toString(16); // Atleast multiply with 6 numbers for color , 16 for hexadecimal
    canvas.style.backgroundColor = "#" + randomColor;
});


