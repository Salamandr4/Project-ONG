document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valido = true;

    // Remove mensagens antigas
    document.querySelectorAll(".error-message").forEach(el => el.remove());

    // Validação campo a campo
    form.querySelectorAll("input[required]").forEach(input => {
      input.classList.remove("invalid", "valid");

      if (!input.checkValidity()) {
        valido = false;
        input.classList.add("invalid");

        const error = document.createElement("div");
        error.classList.add("error-message");
        error.textContent = "⚠ Campo preenchido incorretamente.";
        input.insertAdjacentElement("afterend", error);
      } else {
        input.classList.add("valid");
      }
    });

    // Se tudo estiver certo → vai pra confirmacao.html
    if (valido) {
      setTimeout(() => {
        window.location.href = "confirmacao.html";
      }, 500); // pequeno delay pra UX
    }
  });
});
