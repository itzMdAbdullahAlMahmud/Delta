let func = (n) => {
    return n * n;
}
console.log(func(3));

let id = setInterval(() => {
    console.log("Hello World");
}, 2000)

setTimeout(() => {
    clearInterval(id);
}, 10000);