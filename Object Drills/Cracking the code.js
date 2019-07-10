function decoder(message) {
    let words = message.split(' ');
    let decoded = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] === 'a') {
            decoded += words[i][1];
        } else if (words[i][0] === 'b') {
            decoded += words[i][2];
        } else if (words[i][0] === 'c') {
            decoded += words[i][3];
        } else if (words[i][0] === 'd') {
            decoded += words[i][4];
        } else {
            decoded += ' '
        }
    }
    return decoded;
}

console.log(decoder('craft block argon meter bells brown croon droop'))