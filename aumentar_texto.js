let fontSize = 16; 
const maxFontSize = 30; 

function aumentarTexto() {
    if (fontSize < maxFontSize) {
        fontSize += 2; // 
        document.documentElement.style.fontSize = fontSize + "px";
    }
}

