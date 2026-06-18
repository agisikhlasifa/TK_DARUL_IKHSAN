// ================= MOBILE MENU =================

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {

  navMenu.classList.toggle('active');

  const icon = mobileMenu.querySelector('i');

  if(navMenu.classList.contains('active')){
    icon.classList.replace('fa-bars','fa-xmark');
  }else{
    icon.classList.replace('fa-xmark','fa-bars');
  }
});

document.querySelectorAll('.nav-menu a').forEach(link => {

  link.addEventListener('click', () => {

    navMenu.classList.remove('active');

    mobileMenu.querySelector('i')
      .classList.replace('fa-xmark','fa-bars');

  });

});


// ================= NAVBAR SCROLL =================

window.addEventListener("scroll",()=>{

  const header = document.querySelector(".header");

  if(window.scrollY > 50){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }

});


// ================= SCROLL REVEAL =================

const cards = document.querySelectorAll(
".card, .stat-card, .kepsek-info, .about-image"
);

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }else{

      entry.target.classList.remove("show");

    }

  });

},{threshold:0.2});

cards.forEach(card=>{

  card.classList.add("hidden");
  observer.observe(card);

});


// ================= COUNTER ANIMATION =================

const counterSection =
document.querySelector(".counter");

let counterStarted = false;

function startCounter(){

  const counters =
  document.querySelectorAll(".counter h2");

  counters.forEach(counter => {

    const target =
    parseInt(counter.innerText);

    let current = 0;

    const timer = setInterval(() => {

      current++;

      counter.innerText = current + '+';

      if(current >= target){
        clearInterval(timer);
      }

    }, 30);

  });

}

window.addEventListener("scroll",()=>{

  const sectionTop =
  counterSection.offsetTop;

  if(
    window.scrollY >
    sectionTop - 500 &&
    !counterStarted
  ){

    startCounter();

    counterStarted = true;
  }

});


// ================= BACK TO TOP =================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 300){

    topBtn.style.display = "block";

  }else{

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener("click",()=>{

  window.scrollTo({

    top:0,
    behavior:"smooth"

  });

});


// ================= POPUP GALERI =================

const modal =
document.getElementById("imageModal");

const modalImg =
document.getElementById("modalImg");

const closeBtn =
document.querySelector(".close");

document
.querySelectorAll("#galeri img")
.forEach(img=>{

  img.addEventListener("click",()=>{

    modal.style.display = "block";
    modalImg.src = img.src;

  });

});

closeBtn.addEventListener("click",()=>{

  modal.style.display = "none";

});

window.addEventListener("click",(e)=>{

  if(e.target === modal){

    modal.style.display = "none";

  }

});


// ================= PPDB BUTTON =================

const daftarBtn =
document.querySelector("#ppdb .btn-primary");

daftarBtn.addEventListener("click",(e)=>{

  e.preventDefault();

  alert(
    "Terima kasih telah mendaftar di TK Ceria Anak Bangsa "
  );

});

