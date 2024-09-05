//data types
//string 

let name = "Dwighty";
console.log("your name:" + name);
let age = 19;
console.log("your age:" + age);

//Arithmetic and Logical Operators

let a = 2;
let b = 75;
let product = a * b;
console.log("akong balon:" + product);

//conditional statement

if(age>=60){
    console.log("senior kana");
}else;
    console.log("bata ka pa");


    let edad = 30; 
let category;

switch (true) {
    case (edad >= 60):
        category = "senior kana";
        break;
    default:
        category = "bata ka pa";
        break;}

    console.log("buhi ka pa");

//Loops

const activities = ["eat", "sleep", "play"];
for (let i = 0; i < activities.length; i++) {
    console.log(`Activity ${i + 1}: ${activities[i]}`);
}

//Funtional Programming
//determine odd or even

function checkOddOrEven(number) {
    const numberToCheck = 7;
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}
console.log(" the number is even")

//prime or even

function checkNumber(number) {
    const numberToCheck = 29;
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else if (isPrime(number)) {
        console.log(`${number} is prime.`);
    } else {
        console.log(`${number} is neither even nor prime.`);
    }
} 
console.log("the number is prime");

