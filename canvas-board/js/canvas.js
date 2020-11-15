
let canvas = document.createElement("canvas");
document.body.append(canvas);
let ctx = canvas.getContext("2d");

canvas.setAttribute("width", "700");
canvas.setAttribute("height", "700");
canvas.setAttribute("style", "border:1px solid red");


ctx.strokeStyle = "red";
ctx.lineWidth = 15;
ctx.lineCap = "round";

ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(200, 200);
ctx.lineTo(300, 300);
ctx.stroke();