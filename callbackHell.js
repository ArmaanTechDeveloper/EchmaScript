/*
    CALLBACK HELL

Situation in javascript where callbacks are nested within other callbacks to the degree where the code is
difficult to read. Old pattern to handle asynchronous functions. Use promises + async/await to avoid callback hell

Basically trying to run asynchronous functions into synchronous way

*/

function task1(callback){
    setTimeout(() => {
        console.log('Task 1 completed')
        callback()
    }, 2000);
}

function task2(callback){
    setTimeout(() => {
        console.log('Task 2 completed')
        callback()
    }, 1000);
}

function task3(callback){
    setTimeout(() => {
        console.log('Task 3 completed')
        callback()
    }, 3000);
}

function task4(callback){
    setTimeout(() => {
        console.log('Task 4 completed')
        callback()
    }, 1500);
}


console.log('\n CALLBACK HELL INTO IMPLEMENTATION \n')
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {console.log('All tasks completed')})
        })
    })
})

/*

if you do this without passing callback and keeping the set timeout gives you the following output

Task 2
Task 4
Task 1
Task 3

*/

