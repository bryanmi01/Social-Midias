// Mapeamento de ícones e links
const socialLinks = {
  instagram: "https://www.instagram.com",
  twitter: "https://twitter.com",
  dribble: "https://dribbble.com",
  codepen: "https://codepen.io",
  linkedin: "https://www.linkedin.com",
  discord: "https://discord.com",
  github: "https://github.com",
  telegram: "https://telegram.org",
  reddit: "https://www.reddit.com"
};

// Adiciona evento de clique para cada ícone
Object.keys(socialLinks).forEach((social) => {
  const icon = document.querySelector(`.${social}`);
  if (icon) {
    icon.style.cursor = "pointer"; // Mostra que é clicável
    icon.addEventListener("click", () => {
      window.open(socialLinks[social], "_blank"); // Abre em nova aba
    });
  }
});
