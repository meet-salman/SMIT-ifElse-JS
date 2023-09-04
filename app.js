// var checkNum = 10 > 8 || 8 > 10 && 15 < 10;
// console.log(checkNum);




// var num = 10;

// if (num > 20 || num < 5 && num > 5) {
//     console.log("If Chal Raha Hy");

//     if (num < 11) {
//         console.log("If Ka If Chal Raha Hy");
//     }
//     else {
//         console.log("If Ke Andar Wale If Ka Else");
//     }
// }

// else {
//     console.log("Else Chal Raha Hy");

//     if (num < 15) {
//         console.log("Else Ka If Chal Raha Hy");
//     }
//     else {
//         console.log("Else Ke If Ka Else");
//     }
// }



// let trues = 10;
// let falses = 20;

// if (trues > falses || falses < trues || trues < falses) {
//     console.log("If chal rha hy");

// } else {
//     console.log("Khatam...Tata Bye bye");
// }



// let names = prompt("Name batao");
// let age = +prompt("Ktny saal ke ho?");
// let job = prompt("Job Government hy?");
// let salary = +prompt("Kamaty ktna ho?");
// let bankBalance = +prompt("Bank Balance hy? ktna hy?");
// let car = prompt("Car kon c hy?");
// let habbit = prompt("Nasha to nhi krty?");

// if (age >= 18 && age <= 21 && job == "Yes" && salary > 850 && bankBalance > 300 && car == "Civic" && habbit == "No") {
//     console.log("Larka acha hy.");
// }

// else {
//     console.log("Samajh mn nhi aaya.");
// }




// let hindsa = 27;

// if (hindsa % 3 == 0) {
//     console.log("Number is divisible by 3");

// }

// else {
//     console.log("Number is not divisible by 3");
// }



// let hindsa1 = +prompt("Enter Number");

// if (hindsa1 % 2 == 0) {
//     console.log("Number is Even.");

// }

// else {
//     console.log("Number is Odd.");
// }




// let force = "CID".toLowerCase();

// let kon = prompt("Ap kon ho?").toLowerCase();

// if (kon == force) {
//     console.log("Bhaaaagooo!");

// } else {
//     console.log("Jao jao apna kam kro");
// }




// let pehlaNumber = +prompt("ENter First Number");
// let dusraNumber = +prompt("ENter Second Number");
// let operator = prompt("Enter Operator");




// if (operator === "+") {
//     let sum = pehlaNumber + dusraNumber;
//     console.log(sum);

// } else if (operator === "-") {
//     let sub = pehlaNumber - dusraNumber;
//     console.log(sub);

// } else if (operator === "*") {
//     let multiply = pehlaNumber * dusraNumber;
//     console.log(multiply);

// } else if (operator === "/") {
//     let divi = pehlaNumber / dusraNumber;
//     console.log(divi);
// }

// else {
//     console.log("Operator sahi dalo");
// }




// let myAge = +prompt("Enter Your Age");

// if (myAge <= 17) {
//     console.log("Abhi Bache ho");

// } else if (myAge >= 18 && myAge <= 27) {
//     console.log("Aa gya tu jawan ho ke");

// } else if (myAge > 27 && myAge <= 40) {
//     console.log("Shaadi kr le bhai");

// } else if (myAge > 40) {
//     console.log("Baba g Allah Allah kro");
// }

// else {
//     console.log("tere bas ka nhi");
// }




// Take 2 numbers input by user & show the result which number is greater OR both numbers are equal

// const num1 = +prompt("Enter First Number");
// const num2 = +prompt("Enter Second Number");
// // const num3 = +prompt("Enter Third Number");


// if (num1 > num2) {
//     console.log(`${num1} is greater than ${num2}`);

// }

// else if (num2 > num1) {
//     console.log(`${num2} is greater than ${num1}`);
// }

// else {
//     console.log('Both numbers are equal');
// }






// Take 3 numbers input by user & show the result which number is greater


// if (num1 > num2 && num1 > num3) {
//     console.log(`${num1} is greater than ${num2} & ${num3}`);
// }

// else if (num2 > num1 && num2 > num3)
//     console.log(`${num2} is greater than ${num1} & ${num3}`);

// else {
//     console.log(`${num3} is greater than ${num1} & ${num2}`);
// }





// Check the number is odd or even


// if (num1 % 2 === 0) {
//     console.log(`${num1} is Even`);
// }

// else {
//     console.log(`${num1} is Odd`);
// }



// function isEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         console.log("Number Is Even");
//     } else {
//         console.log("Number Is Odd");
//     }
// }

// isEvenOrOdd(56);
// isEvenOrOdd(107);





// Check if a triangle is equilateral, scalene, or isosceles

// const base = +prompt("Enter the vaue of Base");
// const perp = +prompt("Enter the vaue of Perpendicular");
// const hyp = +prompt("Enter the vaue of Hypotenuse");

// if ((base == perp) && (base == hyp)) {
//     console.log("Equilateral Triangle");
// }

// else if ((base == perp) || (perp == hyp)) {
//     console.log("Isosceles Triangle");
// }

// else {
//     console.log("Scalene Triangle");
// }






// Find the a number is present in given range


// function checkInRange(num, start, end) {

//     if (num >= start && num <= end) {
//         console.log(`${num} lies in between ${start} & ${end}`);
//     } else {
//         console.log(`${num} is not in between ${start} & ${end}`);
//     }
// }

// checkInRange(+prompt("Enter a number is present in given range"), +prompt("Enter starting number"), +prompt("Enter Ending number"))



// const input = prompt('Enter value');

// if ((input >= "a" && input <= "z") || (input >= "A" && input <= "Z")) {
//     console.log(`${input} is an Alphabet`)
// }

// else if (input >= 0 || input <= 0) {
//     console.log(`${input} is a number`);
// }

// else {
//     console.log("Invalid Value");
// }





// if (input == "A" || input == "a" || input == "E" || input == "e" || input == "I" || input == "i" || input == "O" || input == "o" || input == "U" || input == "u") {

//     console.log(`${input} is Vovel`);
// }

// else{
//     console.log(`${input} is Consonant`);
// }





// if (input >= "A" && input <= "Z") {
//     console.log(`${input} is in Upper Case`);
// }

// else if (input >= "a" && input <= "z"){
//     console.log(`${input} is in Lower Case`);
// }

// else{
//     console.log(`${input} is not an alphabet`);
// }

    



































