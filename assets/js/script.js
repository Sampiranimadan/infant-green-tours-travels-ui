// // Load navbar
// fetch("navbar.html")
// .then(res => res.text())
// .then(data => {
//   document.getElementById("navbar").innerHTML = data;
//   initScrollAnimation();
// });

// function initScrollAnimation(){

//   const items = document.querySelectorAll(
//     ".service-card, .choose-box, .destination-card, .about-section, .option-card, .faq-item, .booking-steps, .why-travel"
//   );

//   const observer = new IntersectionObserver((entries)=>{
//     entries.forEach(entry=>{
//       if(entry.isIntersecting){
//         entry.target.classList.add("show");
//       }else{
//         entry.target.classList.remove("show"); // remove when leave
//       }
//     });
//   }, { threshold: 0.15 });

//   items.forEach(el => observer.observe(el));
// }


// /* Navbar scroll effect */
// window.addEventListener("scroll", function(){
//   const navbar = document.querySelector(".navbar");

//   if(navbar){
//     if(window.scrollY > 50){
//       navbar.classList.add("scrolled");
//     }else{
//       navbar.classList.remove("scrolled");
//     }
//   }
// });

// // FAQ toggle
// document.addEventListener("click", function(e){

//   if(e.target.closest(".faq-question")){
//     const item = e.target.closest(".faq-item");
//     item.classList.toggle("active");
//   }

// });

document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    });
});

window.addEventListener("scroll", function () {
  const about = document.querySelector(".about-section");
  const position = about.getBoundingClientRect().top;
  const screen = window.innerHeight;

  if (position < screen - 100) {
    about.classList.add("show");
  }
});

window.addEventListener("scroll", function () {

  document.querySelectorAll(".reveal").forEach((el, index) => {

    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      setTimeout(() => {
        el.classList.add("active");
      }, index * 150);
    } else {
      el.classList.remove("active");
    }

  });

});