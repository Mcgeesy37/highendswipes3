const canvas = document.getElementById("orb");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;

function draw() {
ctx.clearRect(0,0,canvas.width,canvas.height);

let gradient = ctx.createRadialGradient(
canvas.width/2,
canvas.height/2,
100,
canvas.width/2,
canvas.height/2,
400
);

gradient.addColorStop(0,"rgba(111,141,255,0.5)");
gradient.addColorStop(1,"rgba(5,8,17,0)");

ctx.fillStyle = gradient;
ctx.beginPath();
ctx.arc(canvas.width/2,canvas.height/2,300 + Math.sin(t)*10,0,Math.PI*2);
ctx.fill();

t += 0.03;
requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize",()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("active");
}
});
});

// Cursor Light
const cursor = document.querySelector(".cursor-light");

document.addEventListener("mousemove",(e)=>{
cursor.style.left = e.clientX+"px";
cursor.style.top = e.clientY+"px";
});
