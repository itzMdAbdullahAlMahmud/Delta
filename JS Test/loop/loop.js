let movie = [["avengers", "Thor", "Hulk"], ["Superman", "Flash", "Aquaman"]]
for (let i = 0; i < movie.length; i++) {
    console.log(`arr ${k = i + 1}: `);
    for (let j = 0; j < movie[i].length; j++) {
        console.log(movie[i][j]);
    }
}
let fruits = ["mango", "apple", "Banana", "grapes", "Guava", "Jackfruits"];
console.log(`List of Fol Fruits: `);
for (fol of fruits) {
    console.log(fol);
}

for (heroes of movie) {
    for (nm of heroes) {
        console.log(nm)
    }
}