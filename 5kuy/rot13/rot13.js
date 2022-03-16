// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after
// it in the alphabet. ROT13 is an example of the Caesar cipher.
//
// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
    const _aCode = 'a'.charCodeAt(0);
    const _zCode = 'z'.charCodeAt(0);
    const _ACode = 'A'.charCodeAt(0);
    const _ZCode = 'Z'.charCodeAt(0);

    return message.split('').map(s => {
        let sCode = (s.charCodeAt(0));
        let cipheredCode = sCode + 13;
        if (sCode >= _ACode && sCode <= _ZCode) {
            if (cipheredCode > _ZCode) {
                cipheredCode = _ACode + cipheredCode - _ZCode - 1
            }
            return String.fromCharCode(cipheredCode)
        } else if (sCode >= _aCode && sCode <= _zCode) {
            if (cipheredCode > _zCode) {
                cipheredCode = _aCode + cipheredCode - _zCode - 1
            }
            return String.fromCharCode(cipheredCode)
        }
        return s;
    }).join('');
}
