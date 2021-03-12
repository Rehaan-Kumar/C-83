var mouse_event= "";

var last_position_of_x, last_position_of_y;

color = "black";
line_width = 1;

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
canvas.addEventListener ("mousedown", mouse_down);

function mouse_down() {
    color=document.getElementById("Line_color").value;
    line_width= document.getElementById("width_of_line").value;

    mouse_event= "mouseDown";
    console.log(mouse_event);
}

canvas.addEventListener ("mouseup", mouse_up);

function mouse_up() {
    mouse_event= "mouseUp";
}

canvas.addEventListener ("mouseleave", mouse_leave);

function mouse_leave() {
    mouse_event= "mouse_leave";
}

canvas.addEventListener ("mousemove", mouse_move);

function mouse_move(e) {
   current_position_of_x = e.clientX - canvas.offsetLeft;
   current_position_of_y = e.clientY - canvas.offsetTop;

   if(mouse_event == "mouseDown") {
       ctx.beginPath();
       ctx.lineWidth = line_width;
       ctx.strokeStyle = color;
       ctx.moveTo (last_position_of_x,last_position_of_y);
       ctx.lineTo (current_position_of_x,current_position_of_y);
       ctx.stroke();
       console.log(current_position_of_x);
   }
 last_position_of_x = current_position_of_x;
 last_position_of_y = current_position_of_y;
}

function clearCanvas() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}