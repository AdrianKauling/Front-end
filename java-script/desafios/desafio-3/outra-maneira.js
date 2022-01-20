function findOutlier(integers){

    return integers.slice(0,3).filter(par).length >= 2? integers.find(impar): integers.find(par)

}

function par(num){
    return num % 2 === 0
}

function impar(num) {
    return num % 2 !== 0
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))