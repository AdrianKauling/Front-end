/*
describe("Tests", () => {
  it("test", () => {

Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");

Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

  });
});

*/

const positions = ['a1','b2','c3','d4','e5','f6','g7','h8','i9','j10',
                   'k11','l12','m13','n14','o15','p16','q17','r18','s19','t20',
                   'u21','v22','w23','x24','y25','z26']


function alphabetPosition(text) {
  text = text.toLowerCase()
  let arrayLetters = text.split('')
  let numbers = []

  arrayLetters.forEach(letter => {
     positions.forEach(element => {
        let letterPosition = element.split('')
        if(letterPosition[0] === letter) {
            numbers.push(element.slice(1))
            console.log(numbers)
        }
     }) 
  });
  let numbersString  = numbers.toString()
  let stringFinish =numbersString.replace(/,/g,' ')


  return `${stringFinish}`
}  

console.log(alphabetPosition("The sunset sets at twelve o' clock."))
