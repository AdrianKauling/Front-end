function alphabetPosition(text){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    text = text.toLowerCase()
    let numbers = []

    for (let i of text) {
        let position = alphabet.indexOf(i)
        
        if(position == -1) {
            continue
        } else{
            numbers.push(position + 1)
        }
    }

    numbers = numbers.toString().replace(/,/g," ")

    return numbers
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))