const form = document.getElementById('form-validar');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
let formEValido = false;

function validaNumero(numeroUm, numeroDois) {
    return numeroDois > numeroUm;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `O número <b>${campoB.value}</b> é maior que o número <b>${campoA.value}</b>, validação <b>confirmada</b>!`;
    const mensagemErro = `O número <b>${campoB.value}</b> não é maior que o número <b>${campoA.value}</b>, validação <b>não confirmada</b>!`;

    formEValido = validaNumero(campoA.value, campoB.value);
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.style.display = 'none'

        campoB.value = '';
        campoA.value = '';

    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.style.display = 'none'

    }
});

