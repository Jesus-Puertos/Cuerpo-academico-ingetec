document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  let isValid = false;

  form.addEventListener("submit", function (event) {
    if (!isValid) {
      event.preventDefault(); // Detiene el envío si no es válido.
      Swal.fire({
        title: "Rellene los campos faltantes",
        width: "40rem",
        heightAuto: true,
        text: "Por favor rellene los campos faltantes",
        icon: "warning",
        background: "#20252c",
        color: "#fffffe",
      });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Mensaje Enviado",
      });
    }
  });

  // Validación en el lado del cliente
  form.addEventListener("change", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    isValid = !!name && !!email && !!subject && !!message;
  });
});
