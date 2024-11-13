// script.js

export function obtenerAbecedario() {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
}

export function generarMatrizVigenere() {
    const abecedario = obtenerAbecedario();
    return abecedario.map((_, i) =>
        abecedario.slice(i).concat(abecedario.slice(0, i))
    );
}

export function vigenereEncrypt(texto, llave) {
    const abecedario = obtenerAbecedario();
    const matriz = generarMatrizVigenere();
    llave = llave.toUpperCase();
    let resultado = '';
    let j = 0;

    for (let i = 0; i < texto.length; i++) {
        const char = texto[i].toUpperCase();
        if (abecedario.includes(char)) {
            const fila = abecedario.indexOf(llave[j % llave.length]);
            const columna = abecedario.indexOf(char);
            resultado += matriz[fila][columna];
            j++;
        } else {
            resultado += char;
        }
    }
    return resultado;
}

export function vigenereDecrypt(texto, llave) {
    const abecedario = obtenerAbecedario();
    const matriz = generarMatrizVigenere();
    llave = llave.toUpperCase();
    let resultado = '';
    let j = 0;

    for (let i = 0; i < texto.length; i++) {
        const char = texto[i].toUpperCase();
        if (abecedario.includes(char)) {
            const fila = abecedario.indexOf(llave[j % llave.length]);
            const columna = matriz[fila].indexOf(char);
            resultado += abecedario[columna];
            j++;
        } else {
            resultado += char;
        }
    }
    return resultado;
}

if (typeof window !== 'undefined') {
window.mostrarAbecedario = () => document.getElementById('abecedarioResult').textContent = `Abecedario: ${obtenerAbecedario().join(' ')}`;
window.mostrarMatriz = () => document.getElementById('matrizResult').textContent = generarMatrizVigenere().map(row => row.join(' ')).join('\n');
window.cifrarTexto = () => document.getElementById('cifradoResult').textContent = `Texto cifrado: ${vigenereEncrypt(document.getElementById('textoACifrar').value, document.getElementById('llave').value)}`;
window.descifrarTexto = () => document.getElementById('descifradoResult').textContent = `Texto descifrado: ${vigenereDecrypt(document.getElementById('textoADescifrar').value, document.getElementById('llave').value)}`;
}