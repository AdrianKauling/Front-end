function findOutlier(integers){

    let par = 0
    let impar = 0

    for(let i = 0; i < integers.length; i++) {
        let imparOuPar = integers[i]%2 === 0? 'par': 'impar'

        imparOuPar === 'par'? par += 1: impar += 1
    }

    if(par < impar) {
        const res = integers.filter((position) => position % 2 === 0)
        return res[0]
    }else {
        const res = integers.filter((position) => position % 2 !== 0)
        return res[0]
    }
     
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))