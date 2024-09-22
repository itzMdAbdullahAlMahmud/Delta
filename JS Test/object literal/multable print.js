
function multiplication_table(inpt) {
    let j = 1;
    for (let i = inpt; i <= (inpt * 10); (i = i + inpt)) {
        console.log(`${inpt} x ${j} = ${i}`);
        j++;
    }
}

////////////////////////////////////////////

function sum1_n(n) {
    let sum = null;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sum1_n(10000));

function conca(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i];
    }
    return str;
}
let arraym = ["Md. ", "Abdullah ", "Al ", "Mahmud"];

let fullName = conca(arraym);
console.log(fullName);

////////////////////////////////////

function greet() {
    console.log("Hello");

}

function mulPrint(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}
mulPrint(greet, 3);

//////////////////////////////////




function oddOrEven(rqst) {
    if (rqst == "odd") {
        return function (ar) {
            console.log(ar, "is odd");
        }

    } else if (rqst == "even") {
        return function (ar) {
            console.log(ar + "is even");
        }

    }
    else {
        console.log("false request");
    }

}

let oddfunc = oddOrEven("odd");
oddfunc(43);


//////////////////////////////CALCULATOR OBJECT WHERE CAN GET SOME METHODS
const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    sub: function (a, b) {
        console.log(a - b);
    },
    mul(a, b) {   //we can also define the funtions in an obj without using "function" keyword
        console.log(a * b);//like this JS will automatically detect this as a function if we write like this
    },
    div(a, b) {
        console.log(a / b);
    },
}

calculator.add(12, 13);
calculator.sub(36, 25);
calculator.mul(5, 20);
calculator.div(10, 2);
////////////////////////////////