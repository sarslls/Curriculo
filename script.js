// Mapeando cores de fundo por seção
const cores = {
    sobre: "#C5D0D3",     
    formacao: "#7A8450",  
    portfolio: "#824C2F", 
    contato: "#EFE095"   
  };
  
  // Função para detectar seção visível
  function mudarCorDeFundo() {
    const secoes = document.querySelectorAll("section");
    let corAtual = "#F9F6ED"; // padrão
  
    secoes.forEach(secao => {
      const rect = secao.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        corAtual = cores[secao.id];
      }
    });
  
    document.body.style.backgroundColor = corAtual;
  }
  
  // Detectar ao carregar e rolar
  window.addEventListener("scroll", mudarCorDeFundo);
  window.addEventListener("load", mudarCorDeFundo);
  
  // --- VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
const form = document.getElementById("form-contato");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio automático

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Verifica se todos os campos estão preenchidos
  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Validação básica de e-mail (regex simples)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  // Se passou em todas as validações:
  alert("Mensagem enviada com sucesso!");

  // Limpar os campos
  form.reset();
});