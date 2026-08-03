// ======================================
// Wedding Invitation Script - Part 1
// ======================================

document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(
".timeline-card,.venue-card,.rsvp-card,.story-box,.dua-text"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

cards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="all .8s ease";

observer.observe(card);

});

// Smooth hover effect

const buttons=document.querySelectorAll(
".map-btn,.call-btn,.whatsapp-btn"
);

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

// Current Year

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}
  // ======================================
// Wedding Invitation Script - Part 2
// ======================================

// Smooth page loading
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Ripple effect on buttons
document.querySelectorAll(".map-btn,.call-btn,.whatsapp-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});

// Console Message
console.log("Wedding Invitation Loaded Successfully ❤️");

});
