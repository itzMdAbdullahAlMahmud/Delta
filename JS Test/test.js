let Name = "Abdullah Al Mahmud";
// fName = Name.slice(Name.indexOf(" "), Name.length).trim();
// console.log(fName);

// let newName = Name.replace("Al", "The");
// console.log(newName);
// fullName = Name + " Shanto";
// console.log(fullName);

// let gname = "ApnaCollege";

// let newName = gname.slice(4).replace("l", 't').replace("l", 't');
// console.log(newName);



// let cars = ["Maruti", "BMW", "TOyota"];
// console.log(cars);
// cars.push("Tesla", "Ferrari");
// console.log(cars);
// console.log(typeof (cars));
// poped_car = cars.pop();
// console.log("poped car", poped_car);
// console.log("Ferrari poped: ", cars);
// cars.unshift("Ferrari");
// console.log("ferrari unshifted: ", cars);
// Shifted_cars = cars.shift();
// console.log(cars);
// console.log("Shifted cars: ", Shifted_cars);


// let months = ["January", "July", "March", "August"]; // end = [july, june, march, august]
// console.log(months);
// Method: 1
// months = [months[0] = months[1], months[1] = "june", months[2], months[3]];
// Method: 2
// months[0] = months[1];
// months[1] = "june";

// Method:3
// months.shift();
// months.shift();
// months.unshift("July", "June");
// console.log(months);
// console.log(months.indexOf("January"));
// console.log(months.indexOf("March"));
// if (months.includes("August")) {
//     console.log("index of August is: ", months.indexOf("August"));
// } else {
//     console.log("Sorry! Your search doesn't match any content");
// }


// let fruits = ["apple", "Banana", "Orange"];
// console.log(fruits);

// fruits_months = fruits.concat(months);

// console.log(fruits_months);

// fruits.reverse();
// console.log("reversed cars: ", fruits);

// console.log(fruits_months.slice());


let days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log(days);
console.log("slice(2)", days.slice(2));
console.log("slice(1, 3)", days.slice(1, 3));
console.log("slice(-3)", days.slice(-3));
console.log("days.length - 3", days.slice((days.length - 3)));