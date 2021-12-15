// Task 1
// let person = { name: "Sarah", country: "Nigeria", job: "Developer" };
// let name, country, job;
// const { name, country, job } = person;
// console.log(name);


// Task 3
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
let arr3 = [...arr1, ...arr2]
console.log(arr3);

// Task 4
function sum(...args) {
    return args.reduce((sum, current) => {
    return sum + current;
    });
    }
    console.log(sum(1, 2, 3));
     console.log(sum(1, 2));

// Task 5     
function sum(x, y, z) {
    return x + y + z;
    }
    const numbers = [1, 2, 3];
console.log(sum(...numbers));

// Task 6
let a = 3;
let b = 6;
[a, b] = [b, a]
console.log(a); 
console.log(b);

// Task 7
let person = { name: "Sarah", country: "Armenia", job: "Developer" };
let { name: name }= person
let country = person.country
let job = person.job
console.log(name);
console.log(country);
console.log(job);