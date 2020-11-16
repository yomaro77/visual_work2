
let canvas = document.createElement("canvas");
document.body.querySelector("#titleCanvas").append(canvas);
let ctx = canvas.getContext("2d");
//캔버스 사이즈, 외곽선 스타일 지정
canvas.setAttribute("width", "700");
canvas.setAttribute("height", "700");
canvas.setAttribute("style", "border:1px solid red");

//클릭 down, up 체크
let click = false;
//x, y 좌표변수
let x;
let y;

//선 굵기 옵션 1~50 추가
for(i=1; i<=50; i++) {
    let option = document.createElement("option");
    option.innerText = i;
    document.querySelector("#lineWidth").append(option);
}
//선 굵기 변경작업
document.querySelector("#lineWidth").addEventListener("change", function(){
    ctx.lineWidth = this.value;
});

//선 그리기 시작
document.querySelector("canvas").addEventListener("mousedown", function(e){
    click = true;
    x = e.offsetX;
    y = e.offsetY;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
});




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