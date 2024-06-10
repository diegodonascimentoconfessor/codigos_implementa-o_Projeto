function aumentartexto() {
    const elemento = document.getElementById("texto");
    const tamanhoAtual = parseInt(window.getComputedStyle(elemento, null).getPropertyValue('font-size'));
    const novoTamanho = tamanhoAtual + 5;
    elemento.style.fontSize = novoTamanho + 'px';
}


const botao = document.getElementsByTagName('button');

botao[0].addEventListener('click', () => document.body.style.fontSize = '10px');
botao[1].addEventListener('click', () => document.body.style.fontSize = '15px');
botao[2].addEventListener('click', () => document.body.style.fontSize = '20px');

botao[3].addEventListener('click', () => {
    aumentartexto();
    aumentartexto();
    aumentartexto();
});