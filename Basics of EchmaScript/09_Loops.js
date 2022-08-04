/* 

Types of Loops in JavaScript
1. For loop
2. For in loop
3. For of loop
4. while loop
5. do while loop

*/

// for loop
for (let i = 0; i < 20;) {
    console.log(i)
    i++;
}

// for in loop
let obj = {
    mario: 90,
    shubh: 45
}
for(let key in obj){
    console.log("The name of Student is : "+  key + " and marks is :" + obj[key])
}

// for of loop - only for iterables
for(let character of "cameoSpring"){
    console.log(character)
}
let array = [1,2,3,4,5]
for(let num of array){
    console.log(num)
}