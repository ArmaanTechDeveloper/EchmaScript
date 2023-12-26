const arr = [
    {name: "bike" , price: 500},
    {name: "motorcycle" , price: 10},
    {name: "cars" , price: 800},
    {name: "aerolane" , price: 10000},
]


// filter items based on the returning value true or false 
// does not change the original array
const filteredItem = arr.filter((item) => {
    return item.price<600
})

// running for every element and creating a new array of whatever you want
const itemsPrice = arr.map((item) => ({name:item.name})) // is equivalent to
// const itemsPrice = arr.map((item) => {
//     return {
//         name: item.name
//     }
// })

// gives the first element if found in the array or else returns undefined
const foundItem = arr.find((item) => item.price===800)


// does not return anything just loops over the array
arr.forEach((item) => {
    console.log(item.name)
})

// if anything returns true the entire thing returns true if not then everything is false
const hasInExpensiveItems = arr.some((item) => {
    return item.price < 500
})

// if everyone in the array satisfy the condition then its true or else false
const hasExpensiveItems = arr.every((item) => {
    return item.price < 10000000
})

// grabbing the total price
const total = arr.reduce((currentTotal , item) => {
    return currentTotal + item.price
} , 0)

// includes or not
const checkincludes = [1,5,8,6,3]
const inc = checkincludes.includes(5) // returns true or false

console.log(inc)