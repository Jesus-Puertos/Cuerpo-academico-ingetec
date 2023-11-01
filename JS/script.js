$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});

//Switch
const swith = document.querySelector(".switch");

swith.addEventListener("click", (e) => {
  // toggle agrega una clase o quita una clase
  swith.classList.toggle("active");
  document.body.classList.toggle("active");
});

//Efecto de animacion de scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
