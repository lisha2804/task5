const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});



const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add('active');
    } else {
      el.classList.remove('active'); 
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();





  
// Modal
document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      const loader = modal.querySelector(".modal-loader");
      const content = modal.querySelector(".modal-content");

      modal.style.display = "flex";         
      loader.style.display = "block";      
      content.style.display = "none";      



      setTimeout(() => {
        loader.style.display = "none";      
        content.style.display = "block";
        content.classList.add("show");    
      }, 1000); 
    }
  });
});

// Close modal 
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.style.display = "none";
  });
});


window.addEventListener("click", event => {
  document.querySelectorAll(".modal").forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});






