import { vigenereEncrypt, vigenereDecrypt } from '../script.js';
import { assert } from 'chai';

describe('Cifrado Vigenère', function() {
    it('Cifrar correctamente', function() {
        const resultado = vigenereEncrypt('ABC', 'KEY');
        assert.equal(resultado, 'KFA');
    });

    it('Descifrar correctamente', function() {
        const resultado = vigenereDecrypt('KFA', 'KEY');
        assert.equal(resultado, 'ABC');
    });
});