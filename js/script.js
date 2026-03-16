// Menu Mobile
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
hamburger.addEventListener("click", () =>
  mobileMenu.classList.toggle("hidden"),
);

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
});

// === SERVIÇOS COM IMAGENS ===
const servicos = [
  {
    img: "/img/pcmso.jpg",
    title: "PCMSO",
    desc: "Programa de Controle Médico de Saúde Ocupacional completo e atualizado.",
  },
  {
    img: "/img/pgr.jpg",
    title: "PGR + Inventário de Riscos",
    desc: "Programa de Gerenciamento de Riscos com LTCAT incluso.",
  },
  {
    img: "/img/treinamento.jpg",
    title: "Treinamentos NR",
    desc: "Todas as normas regulamentadoras (NR-5, NR-10, NR-12, NR-35 e mais).",
  },
  {
    img: "/img/epi.jpg",
    title: "Fornecimento de EPI/EPC",
    desc: "Indicação técnica, venda e controle de validade.",
  },
  {
    img: "/img/laudo.jpg",
    title: "Laudos e Perícias",
    desc: "Laudos ergonômicos, periciais e investigação de acidentes.",
  },
];

const grid = document.getElementById("servicos-grid");
servicos.forEach((s) => {
  const card = document.createElement("div");
  card.className =
    "service-card bg-white rounded-3xl overflow-hidden shadow-xl";
  card.innerHTML = `
    <img src="${s.img}" alt="${s.title}">
    <div class="p-6">
      <h3 class="font-bold text-2xl mb-3">${s.title}</h3>
      <p class="text-gray-600">${s.desc}</p>
      <button onclick="abrirWhatsApp('${s.title}')" 
              class="mt-6 w-full bg-[#003366] text-white py-4 rounded-2xl font-bold hover:bg-[#002244]">
        Solicitar este serviço
      </button>
    </div>
  `;
  grid.appendChild(card);
});

function abrirWhatsApp(servico) {
  window.open(
    `https://wa.me/5575991855135?text=Olá! Quero informações sobre ${servico}`,
    "_blank",
  );
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

console.log(
  "%c✅ Site Bispo & Oliver - Versão com imagens carregado!",
  "color:#003366; font-weight:bold",
);
