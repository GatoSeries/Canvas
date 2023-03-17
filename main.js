
var last_position_of_x, last_position_of_y;

var canvas = document.getElementById("ana");
var ctx = canvas.getContext("2d");
var color = "black";
var width_of_line = 1;
var widthscreen = screen.width;
var newwidth = widthscreen - 70;
var newheight = screen.height - 300;
if (widthscreen < 992) {
document.getElementById("ana").width = newwidth;
document.getElementById("ana").height = newheight;
document.body.style.overflow = "hidden";   
}


canvas.addEventListener("touchstart", touchstart);
function touchstart(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("spon").value;
console.log("Estas en touchstart");
last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    console.log(e);
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}