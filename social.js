      // Mapeamento de ícones e links
      const socialLinks = {
        instagram: "https://www.instagram.com",
        twitter:   "https://twitter.com",
        spotify:   "https://open.spotify.com",
        codepen:   "https://codepen.io",
        linkedin:  "https://www.linkedin.com",
        discord:   "https://discord.com",
        github:    "https://github.com",
        telegram:  "https://telegram.org",
        reddit:    "https://www.reddit.com"
      };

      // Torna o CARD inteiro clicável e robusto
      document.querySelectorAll(".card > svg").forEach((svg) => {
        const cls = Array.from(svg.classList).find(c => socialLinks[c]);
        const card = svg.closest(".card");
        if (cls && card) {
          card.style.cursor = "pointer";
          card.addEventListener("click", () => window.open(socialLinks[cls], "_blank"));
        }
      });
