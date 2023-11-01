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
