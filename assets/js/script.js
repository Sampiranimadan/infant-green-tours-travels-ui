document.addEventListener("DOMContentLoaded", function () {

  /* load footer */
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

});

document.addEventListener("DOMContentLoaded", function () {

  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
      setActiveMenu();
    });

});

function setActiveMenu(){
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    if(link.getAttribute("href") === currentPage){
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", function () {
  const about = document.querySelector(".about-section");
  const position = about.getBoundingClientRect().top;
  const screen = window.innerHeight;

  if (position < screen - 100) {
    about.classList.add("show");
  }
});


function toggleFaq(el) {
  const item = el.parentElement;

  document.querySelectorAll(".faq-item").forEach(faq => {
    if (faq !== item) faq.classList.remove("active");
  });

  item.classList.toggle("active");
}

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

const myCarousel = document.querySelector('#testimonialCarousel');
  new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    ride: 'carousel',
    pause: false
  });