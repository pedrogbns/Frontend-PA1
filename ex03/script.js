
const botaoCor = document.getElementById("alterar-cor");

const cores = ["#f0f4f8", "#e8f5e9", "#fff3e0"];

let indiceCor = 0;

botaoCor.addEventListener("click", function () {
    indiceCor = (indiceCor + 1) % cores.length;

    document.body.style.backgroundColor = cores[indiceCor];
});



const formulario = document.getElementById("formulario-contato");
const mensagem = document.getElementById("mensagem-formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (nome.length < 2) {
        mensagem.textContent = "O nome deve ter pelo menos 2 caracteres.";
        mensagem.style.color = "red";
    } else if (!emailValido) {
        mensagem.textContent = "Digite um e-mail válido.";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Formulário preenchido corretamente!";
        mensagem.style.color = "green";
    }
});
