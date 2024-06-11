let utterance; // Variável global para armazenar a utterance
let leituraPausada = false; // Variável para verificar se a leitura foi pausada
let leituraAtiva = false; // Variável para verificar se a leitura está ativa

function lerTexto(texto) {
    if (leituraAtiva) return; // Impede que múltiplas leituras sejam iniciadas simultaneamente
    leituraAtiva = true;
    utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR'; // Define o idioma para português brasileiro
    utterance.onend = () => leituraAtiva = false; // Redefine leituraAtiva quando a leitura termina
    window.speechSynthesis.speak(utterance);
}

function pausarLeitura() {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        leituraPausada = true;
    }
}

function retomarLeitura() {
    if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        leituraPausada = false;
    }
}

document.querySelectorAll('body *:not(script):not(style)').forEach(element => {
    element.addEventListener('mouseover', () => {
        clearTimeout(element.leituraTimeout); // Limpa qualquer timeout anterior
        element.leituraTimeout = setTimeout(() => {
            const text = element.innerText || element.textContent;
            if (text) lerTexto(text);
        }, 500); // Ajuste o tempo (em milissegundos) para o delay desejado
    });

    element.addEventListener('mouseout', () => {
        clearTimeout(element.leituraTimeout); // Cancela o timeout se o mouse sair do elemento
        if (leituraAtiva && !leituraPausada) {
            window.speechSynthesis.cancel();
            leituraAtiva = false;
        }
    });
});
