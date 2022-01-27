const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
function pigIt(str){

    const array = str.split(' ')
    const cadaPalavra = []
    const naoPalavras = []

    for(let i = 0; i < array.length; i++ ) {
        let teste = true
        array[i].split('').forEach((posi) => {
            
            if(alphabet.indexOf(posi) == -1) {
                teste = false
            }
        })

        if(teste) {
            cadaPalavra.push(array[i])
            console.log(cadaPalavra)
        }else{
            naoPalavras.push([array[i], i])
            console.log(naoPalavras)
        }
    }

    const firstLetter = new Array()

    cadaPalavra.forEach((position) => firstLetter.push(position[0]))

    const newWord = new Array()
    cadaPalavra.forEach((position, index) => {
        
        let temp = position.split('').splice(1)
        temp.push(firstLetter[index] + 'ay')

        newWord.push(temp.join(''))
    })
    
    naoPalavras.forEach((item) => {
        newWord[item[1]] = item[0]
    })

    return newWord.join(' ')
}

function pigIt2(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }

console.log(pigIt2('Adrian Kauling dos santos ,'))