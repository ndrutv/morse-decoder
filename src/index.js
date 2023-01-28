const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let newArr = [];

    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }

    arr.forEach((e, i) => {
        let str = e.replaceAll('10', '.')
                   .replaceAll('11', '-')
                   .replaceAll('00', '')
                   .replaceAll('**********', ' ');
        
        newArr[i] = str;
    });

    let result = '';

    newArr.forEach((e) => {
        console.log(MORSE_TABLE[e]);
        if (MORSE_TABLE[e] !== undefined) {
            result += MORSE_TABLE[e];
        } else {
            result += ' ';
        }
    });

    return result;
}

module.exports = {
    decode
};