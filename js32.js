
var xT=-200;
var yT=-350;
var init={n:[0,-200],xyL:[xT,yT]};
var canvas=document.getElementsByTagName('canvas')[0];
var width=canvas.width=window.innerWidth;
var height=canvas.height=window.innerHeight;
var c=canvas.getContext('2d');
draw();
function draw(){
	var ugao=document.getElementById('ugao');
c.clearRect(0,0,width,height);
c.fillStyle="black";
c.fillRect(0,0,width,height);
c.beginPath();
c.moveTo(500,450);
c.lineTo(800,450);
c.strokeStyle="red";
c.stroke();
c.closePath();
c.beginPath();
c.moveTo(800,450);
c.lineTo(800,450+init.n[1]);
c.strokeStyle="blue";
c.stroke();
c.closePath();
c.beginPath();
c.arc(800+xT,450+yT,10,0,Math.PI*2,false);
c.fillStyle="green";
c.fill();
c.closePath();
c.beginPath();
c.moveTo(800,450);
c.lineTo(800+xT,450+yT);
c.strokeStyle="gray";
c.stroke();
c.closePath();
yT+=1;
init.xyL[1]=yT;
var vL=Math.sqrt(Math.pow(-200,2)+Math.pow(init.xyL[1],2));
var xL=1/vL*init.xyL[0];
var yL=1/vL*init.xyL[1];

requestAnimationFrame(draw);
var angle=0*xL+(-1)*yL;
ugao.innerHTML=Math.round(toDeg(Math.acos(angle)));
if((ugao.innerHTML+"").length==3){document.getElementsByTagName('span')[0].style="position:absolute;top:150px;left:180px;"}
}
function toDeg(rad){

return rad*180/Math.PI;

}