function solution(list){
    const listaFinal = []

    for(let i = 0; i < list.length; i++) {
        let posicaoAdicionada = ''

        
        if(list[i+1] - list[i] != 1){
            //se a proxima posicao nao for sequencia, o inteiro é adicioado no array final

            posicaoAdicionada = list[i]

        }else{
            if(list[i+2] - list[i+1] != 1){

                // se a proxima posicao for sequencia e a terceira nao, o inteiro é adicionado no array
                posicaoAdicionada = list[i]
            }else{
                
                
                if(list[i+3] - list[i+2] != 1){

                    // se for uma sequencia de 3 numeros, a posicao adicionada é formatada como requisitado
                    posicaoAdicionada = `${list[i]}-${list[i+2]}`
                    i += 2 
                }else{
                    if(list[i+4] - list[i+3] != 1){

                        // se for uma sequencia de 3 numeros, a posicao adicionada é formatada como requisitado
                        posicaoAdicionada = `${list[i]}-${list[i+3]}`
                        i += 3 
                    }else{
                        if(list[i+5] - list[i+4] != 1){

                            // se for uma sequencia de 3 numeros, a posicao adicionada é formatada como requisitado
                            posicaoAdicionada = `${list[i]}-${list[i+4]}`
                            i += 4 
                        }
                    }
                }

            }

        }

        listaFinal.push(posicaoAdicionada)
    }
    
    
    return listaFinal.toString()
}
























const array = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]

console.log(solution(array))