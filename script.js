// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

        document.body.style.overflow = "hidden";

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        document.body.style.overflow = "auto";
    }

});

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        document.body.style.overflow = "auto";

    });

});

// CLOSE MENU OUTSIDE CLICK
document.addEventListener("click", function(e){

    if(!navLinks.contains(e.target) && !menuBtn.contains(e.target)){

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        document.body.style.overflow="auto";

    }

});


// STICKY HEADER
const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

// BACK TO TOP
const backTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        backTop.classList.add("show");

    }

    else{

        backTop.classList.remove("show");

    }

});

backTop.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ACTIVE NAVBAR LINK
const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// REVEAL ANIMATION
const revealElements=document.querySelectorAll(

".feature-box,.category-card,.product-card,.arrival-card,.why-card,.review-card,.blog-card,.contact-box"

);

function reveal(){

const trigger=window.innerHeight-120;

revealElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<trigger){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

}

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".7s";

});

window.addEventListener("scroll",reveal);

reveal();

// NEWSLETTER FORM
const newsletter=document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",function(e){

e.preventDefault();

const email=this.querySelector("input");

if(email.value.trim()===""){

alert("Please enter your email.");

email.focus();

return;

}

alert("Thank you for subscribing!");

this.reset();

});

}

// CONTACT FORM
const contactForm=document.querySelector(".contact form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Message sent successfully!");

this.reset();

});

}

// BUTTON RIPPLE EFFECT
document.querySelectorAll("button").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transition=".35s";

});

});

// PRELOAD IMAGES
window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});