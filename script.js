// Função para redirecionar para a imagem
document.getElementById("yesBtn").addEventListener("click", function() {
    // Esconde os elementos principais
    document.getElementById("mainContainer").style.opacity = 0;

    // Exibe a imagem no centro da tela
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.style.display = "flex"; // Torna o container visível
    setTimeout(() => {
        imageContainer.style.opacity = 1; // Aplica a transição de fade-in
    }, 50); // Atraso de 50ms para garantir que o display: flex seja aplicado antes do fade-in
});

// Função para movimentar o botão "Não" pela tela
document.getElementById("noBtn").addEventListener("mouseover", function() {
    const button = this;
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
});
