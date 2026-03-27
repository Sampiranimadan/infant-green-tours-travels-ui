// Load navbar
fetch("navbar.html")
.then(res => res.text())
.then(data => {
  document.getElementById("navbar").innerHTML = data;
  initScrollAnimation();
});

function initScrollAnimation(){

  const items = document.querySelectorAll(
    ".service-card, .choose-box, .destination-card, .about-section, .option-card, .faq-item, .booking-steps, .why-travel"
  );

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }else{
        entry.target.classList.remove("show"); // remove when leave
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => observer.observe(el));
}


/* Navbar scroll effect */
window.addEventListener("scroll", function(){
  const navbar = document.querySelector(".navbar");

  if(navbar){
    if(window.scrollY > 50){
      navbar.classList.add("scrolled");
    }else{
      navbar.classList.remove("scrolled");
    }
  }
});

// FAQ toggle
document.addEventListener("click", function(e){

  if(e.target.closest(".faq-question")){
    const item = e.target.closest(".faq-item");
    item.classList.toggle("active");
  }

});