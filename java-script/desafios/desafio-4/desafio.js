function SumTwoNumbersPositive(array) {

    if (array.length >= 4) {

        if (array.filter(p => p > -1 && p === parseInt(p)).length === array.length) {

            const arrayOrdered = array.sort((a, b) => {
                if (a > b) return 1
                if (a < b) return -1
                if (a === b) return 0
            })

            return arrayOrdered[0] + arrayOrdered[1]
        }

        throw new Error('Floats numbers or numbers non-positive in the array')
    }

    throw new Error('Array with less of four positions.')
}

console.log(SumTwoNumbersPositive([992, 28, 66, 87 , 5 ,80 ,9 ,34]))