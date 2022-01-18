function findOdd(A) {
    const countCaracteres = {}
    for(let position of A){

        countCaracteres[position] = 0
        
        for(let i = 0; i < A.length; i++){
            if(position == A[i]) {
                countCaracteres[position] += 1 
            }

        }
    }
    console.log(countCaracteres)
    for (const key in countCaracteres) {

        if (countCaracteres[key] % 2 != 0) {
            
            let retornoFinal = Number(key)
            console.log(typeof(retornoFinal))
            return key
        }
    }


    return 'Nenhum numero apareceu em quantidade impar';
  }

  console.log(findOdd([7,5,5]))