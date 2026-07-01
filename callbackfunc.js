// rogram to use a callback function

function greet(name, age, callback) {
    callback(`Hello ${name}, my age is ${age}`);
}

greet("vansh", 23, (message) => {
    console.log(message);
});