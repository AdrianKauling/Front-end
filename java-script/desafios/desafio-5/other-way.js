function solution(string) {

    let s = string.split('')
    let newArray = []


    for(let i = 0; i < s.length; i+=2) {
        let secondCharacter = s[i + 1] || '_'

        newArray.push(s[i] + secondCharacter)
    }
    return newArray
}


console.log(solution('asuduaoikshgiuokdhasouçdhaosa'))