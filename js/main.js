// Hero
ScrollReveal().reveal('.hero-text', {
    origin: 'left',
    distance: '80px',
    duration: 1200,
    delay: 200
});

ScrollReveal().reveal('.hero-image', {
    origin: 'right',
    distance: '80px',
    duration: 1200,
    delay: 400
});

// About
ScrollReveal().reveal('.about', {
    origin: 'bottom',
    distance: '60px',
    duration: 1000
});

// Skills
ScrollReveal().reveal('.skill-card', {
    interval: 100,
    distance: '40px',
    origin: 'bottom'
});

// Projects
ScrollReveal().reveal('.project-card', {
    interval: 150,
    distance: '50px',
    origin: 'bottom'
});

// Contact
ScrollReveal().reveal('.contact', {
    origin: 'bottom',
    distance: '60px'
});
VanillaTilt.init(document.querySelectorAll(".project-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3
});
const toggle=document.querySelector(".theme-toggle");

toggle.onclick=function(){

document.body.classList.toggle("light-theme");

}
let topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
const counters=document.querySelectorAll(".achievement-card h1");

counters.forEach(counter=>{

counter.innerText='0';

const update=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const inc=target/100;

if(c<target){

counter.innerText=`${Math.ceil(c+inc)}`;

setTimeout(update,20);

}

else{

counter.innerText=target;

}

}

update();

});
const btn=document.getElementById("chat-btn");

const box=document.getElementById("chat-box");

btn.onclick=function(){

if(box.style.display==="block")

box.style.display="none";

else

box.style.display="block";

}

function reply(){

let input=document.getElementById("userInput").value.toLowerCase();

let ans="Sorry, I don't know.";

if(input.includes("python"))

ans="Varun is highly skilled in Python.";

else if(input.includes("java"))

ans="Varun also develops applications in Java.";

else if(input.includes("project"))

ans="Varun has developed TruthLens AI, AI Call Center Assistant and Text Summarizer.";

else if(input.includes("contact"))

ans="Email: jeswanthvarun59@gmail.com";

document.getElementById("messages").innerHTML+=

"<p><b>You:</b> "+input+"</p>";

document.getElementById("messages").innerHTML+=

"<p><b>AI:</b> "+ans+"</p>";

}