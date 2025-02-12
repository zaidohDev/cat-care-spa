// Exemplo de interatividade (opcional)
document.querySelectorAll("section h2").forEach((header) => {
  header.addEventListener("click", () => {
    header.nextElementSibling.classList.toggle("hidden");
  });
});
