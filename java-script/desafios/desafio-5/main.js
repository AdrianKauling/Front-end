function solution(str){
    console.log(str.split('').length)
    return separarArray(str.split(''))
}

function separarArray(array) {
    let newArray = []
    if (array.length % 2 === 0) {
        
        for (let i = 0; i < array.length; i += 2) {
            newArray.push(array[i] + array[i+1])
             
        }
        return newArray

    }else if(array.length % 2 ==! 0){

        for (let i = 0; i < array.length - 1; i += 2) {
            newArray.push(array[i] + array[i+1])
        }

        newArray.push(array[array.length - 1] + '_')

        return newArray
    }

    throw new Error('Sla, deu merda')
}


console.log(solution('adriana'))





/* Testando Reduce*/

const InitialValue = []
const i = [2,4,5,6,7]

i.reduce((prevValue, correntValue, indexCorrent, array) => {
    return [...prevValue, correntValue]
    
}, InitialValue)