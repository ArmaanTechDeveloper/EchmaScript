// I will solve only things which i found to try it on my own 

const student = {
    name: 'armaan',
    rollno: 7090125,
    passed: false,
    failed: true
}

const employee = {
    'name': 'brajesh',
    'rollno': 125820,
    'working': true,
    'holidays': 15
}
// this syntax is recommended
console.log(employee.name , student.name);

// this syntax is not usually used
console.log(employee['rollno'] , student['rollno']); 

employee['girlfriend'] = 'ruchi kindo';
student.girlfriend = 'daisy kusia';

console.log(employee , student);

// Trick to learn all dataTypes of JS
// nn ss bb u
// number , null , string , symbol , boolean , bigint , undefined

let number = 125;
console.log(typeof number)