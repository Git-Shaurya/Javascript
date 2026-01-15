//check if the number is greater than other.

let num1= 5
let num2 = 10

if (num1 < num2) {
    console.log("num 1 is greater than num 2.");
    
}
else {
 console.log("num 2 is greater than num 1.");
}


//check if the string is quesal to other

let username = "Shaurya"
let anotherUsername = "Shaurya"

if (username == anotherUsername){
 console.log("Pick another username");
 }
else { 
    console.log("You can choose this username");
    
}

//check if the variable is a number or not

let score = 100

if (typeof score === "number")
{
    console.log("This is a Number");
} else
{
    console.log("This is not an number.");
    
}


let items = [];
 
if (items.length == 0)//gives us the lenght of items array 
{
    console.log("Array is empty");
    
} else console.log("Array is not empty");
