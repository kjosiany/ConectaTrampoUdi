document.addEventListener("DOMContentLoaded", function() {
  const inputBusca = document.getElementById("busca");
  const vagas = document.querySelectorAll(".vaga");

  inputBusca.addEventListener("input", function() {
    const termo = inputBusca.value.toLowerCase();
    vagas.forEach(vaga => {
      const texto = vaga.textContent.toLowerCase();
      vaga.style.display = texto.includes(termo) ? "" : "none";
    });
  });
});
const botoes = document.querySelectorAll(".btn-detalhes");
botoes.forEach(btn => {
  btn.addEventListener("click", () => {
    const detalhes = btn.nextElementSibling; // ou selecione especificamente
    detalhes.classList.toggle("oculto");
  });
});

const btnTopo = document.getElementById("btnTopo");
window.addEventListener("scroll", () => {
  btnTopo.classList.toggle("hidden", window.scrollY < 200);
});
btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const toggleTema = document.getElementById("toggleTema");
toggleTema.addEventListener("click", () => {
  document.body.classList.toggle("escuro");
});

const elemData = document.getElementById("dataAtualizacao");
const hoje = new Date().toLocaleDateString("pt-BR");
elemData.textContent = "Atualizado em " + hoje;
