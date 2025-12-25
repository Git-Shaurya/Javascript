// strings, boolean, number, null, undefined,symbol

//numbers

let balance = 120
let anotherbalance = new Number(120)// here it is primitive but in line 13 it becomes object and becomes non primitive

console.log(balance);
// console.log(anotherbalance.valueOf());
 

console.log(typeof balance );// here typeof will give the data type of balance 
console.log(typeof anotherbalance);

//boolean
let isactive = true
let isreallyactive = new Boolean(true)

///null and undefined
let firstname;
console.log(firstname); // it is undefined as of now

// console.log(lastname);  //now this is null because lastname was never decalred.

let myString = "Hello"
let mystrongone = "hola"

let oldgreet = myString + "Shaurya"

console.log(oldgreet);

// let greetmessage = `Hello ${username} !`;
// console.log(greetmessage);


// let demoOne = ` Value is ${2 * 2 } ` ;
// console.log(demoOne);

let sm1 = Symbol("Shaurya")
let sm2 = Symbol("Patil")

console.log(sm1 == sm2);// checks if they are the same value.

