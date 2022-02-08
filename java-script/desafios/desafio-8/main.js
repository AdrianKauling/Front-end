//Strip Comments

//Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.


//example: 

// apples, pears # and bananas
// grapes
// bananas !apples

//output:

// apples, pears grapes bananas

let markers = [ '%', '!','#']


function solution(input, markers) {

    const listaDePalavras = input.split(' ') 

    listaDePalavras.forEach( palavraString => {
        let temMarcacao = false
        const index = listaDePalavras.indexOf(palavraString)

        const palavraArray = palavraString.split('')

        markers.forEach(mark => {
            palavraArray.forEach( letra => {


                if(letra === mark) {
                    temMarcacao = true
                    
                }

            })

        })

        if(temMarcacao) {
            palavraArray.push('tem')
            listaDePalavras[index] = palavraArray.toString().replace(/,/g,'')
            
        }

    })

    for(let i = 0; i < listaDePalavras.length; i++) {

        const lastThreeLetters =  listaDePalavras[i].slice(-3)
        if(lastThreeLetters === 'tem'){
            listaDePalavras.splice(i,1)
            i = 0
        }

    }

    let stringFinal = listaDePalavras.toString('').replace(/,,/g, ',')
    console.log(stringFinal.replace(/,/g, ', '))
    return stringFinal.replace(/,/g, ', ')

}


solution("apples, pears # and bananas grapes bananas !apples" ,markers)