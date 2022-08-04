let name = 'luigi'

// Normal functions
function addThreeNumbers(a , b , c){
    console.log((a+b+c))
}
function thisKeyword(){
    let name = 'Yihua'
    console.log(this.name) // gives undefined
}
// addThreeNumbers(1 , 2 , 3)
// addThreeNumbers(20 , 25 , 3)
// addThreeNumbers(80 , 2 , 963)
// addThreeNumbers(45 , 4 , 87)
// addThreeNumbers(96 , 8889 , 586)

// arrow functions
let thisKeywordArrowFunction = () => {
    let name = 'levster'
    console.log(this.name)
}

thisKeyword()
thisKeywordArrowFunction()