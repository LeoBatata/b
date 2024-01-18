canvas = document.getElementById("desenho");
ctx = canvas.getContext("2d");

color = "yellow"
ctx.beginPath()
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 70, 0, 2 * Math.PI)
ctx.stroke();

canvas.addEventListener("mousedown", myMouseDown)

function myMouseDown(e) {
    color = document.getElementById("caixa").value;
    console.log("color")
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    circle(mouseX, mouseY);
}

function circle(mouseX, mouseY) {
    color = "yellow"
    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouseX, mouseY, 70, 0, 2 * Math.PI)
    ctx.stroke();
}