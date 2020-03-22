class VigenereCipheringMachine {
    constructor(mode = true) {

        this.mode = mode;
    }



    encrypt(message, key) {

        if (!message || !key || message.length <= 0 || key.length <= 0) {

            new Error;

        }
        let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let result = [];
        let j = 0;

        message = message.toUpperCase();
        key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();

        for (let i = 0; i < message.length; i++) {
            if (message[i].match(/[a-z]/gi)) {
                if (alphabet.indexOf(message[i]) + alphabet.indexOf(key[j]) > 25) {

                    result.push(alphabet[alphabet.indexOf(message[i]) + alphabet.indexOf(key[j]) - 26]);
                } else {

                    result.push(alphabet[alphabet.indexOf(message[i]) + alphabet.indexOf(key[j])]);
                }
                j++;
            } else {

                result.push(message[i]);

            }

        }
        return this.mode ? result.join('') : result.reverse().join('');

    }

    decrypt(ecryptedMessage, key) {
        if (!ecryptedMessage || !key || ecryptedMessage.length <= 0 || key.length <= 0) {
            throw Error;
        }

        let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let result = [];
        let j = 0;
        key = key.repeat(Math.ceil(ecryptedMessage.length / key.length)).toUpperCase();

        for (let i = 0; i < ecryptedMessage.length; i++) {

            if (ecryptedMessage[i].match(/[a-z]/gi)) {

                if (alphabet.indexOf(ecryptedMessage[i]) - alphabet.indexOf(key[j]) < 0) {

                    result.push(alphabet[alphabet.indexOf(ecryptedMessage[i]) - alphabet.indexOf(key[j]) + 26]);

                } else {

                    result.push(alphabet[alphabet.indexOf(ecryptedMessage[i]) - alphabet.indexOf(key[j])]);
                }
                j++;
            } else {

                result.push(ecryptedMessage[i]);
            }
        }
        return this.mode ? result.join('') : result.reverse().join('');

    }


}

module.exports = VigenereCipheringMachine;