function sayHello() {
    console.log('heelo')
}

function sayHi() {
    console.log('hi')
}

function greet(name , callback) {
    callback()
    console.log(name)
}

greet('william' , sayHello)
greet('william' , sayHi)

greet('william' , () => {console.log('moye moye')})
greet('william' , function () {console.log('konichiwa')})
