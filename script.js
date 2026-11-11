// 1. Pega todos os elementos que têm a classe "aparecer"
const elementos = document.querySelectorAll(".aparecer");

// 2. Cria um "vigia" que avisa quando um elemento entra na tela
const vigia = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    // se o elemento está visível na tela...
    if (entrada.isIntersecting) {
      // ...adiciona a classe "visivel" (o CSS faz a animação)
      entrada.target.classList.add("visivel");
    }
  });
});

// 3. Manda o vigia observar cada elemento
elementos.forEach(function (elemento) {
  vigia.observe(elemento);
});