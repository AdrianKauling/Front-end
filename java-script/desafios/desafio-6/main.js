function criptografioRot13(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let rot13 = ''

    for (let i = 0; i < string.length; i++) {

        let index = alphabet.indexOf(string[i])

        if (index === -1) {
            index = ALPHABET.indexOf(string[i])
            if (index === -1) {
                rot13 += string[i]
                continue
            }else{
                rot13 += ALPHABET[index + 13]
                continue
            }
        }

        rot13 += alphabet[index + 13]
    }

    return rot13
}



console.log(criptografioRot13('Test ,'))


