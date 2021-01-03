
var lx,ly;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="black";
w=1;
var width=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
document.body.style.overflow="hidden";

}
canvas.addEventListener("touchstart",a);
function a(){
colour=document.getElementById("colour").value;
w=document.getElementById("linewidth").value;
lx=e.touches[0].clientX-canvas.offsetLeft;
ly=e.touches[0].clientY-canvas.offsetTop;

};
canvas.addEventListener("touchmove",b);
function b(e){
cx=e.touches[0].clientX-canvas.offsetLeft;
cy=e.touches[0].clientY-canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=w;
ctx.moveTo(lx,ly);
ctx.lineTo(cx,cy);
ctx.stroke();

lx=cx;
ly=cy; 
};
function cleararea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}