document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  // Selecionando o elemento de áudio
  const audioElement = document.getElementById("audio");

  // Tentar reproduzir automaticamente
  try {
    audioElement.play();
  } catch (error) {
    console.log("Autoplay bloqueado, aguardando interação do usuário...");
  }

  // Caso o autoplay seja bloqueado, começamos a reprodução após interação com o corpo da página
  document.body.addEventListener("click", function () {
    audioElement.play().catch((error) => {
      console.error("Erro ao tentar reproduzir o áudio:", error);
    });
  });
});
