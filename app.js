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
// let job = prompt("Job is Government OR Private?");
// let salary = +prompt("Kamaty ktna ho?");
// let bankBalance = +prompt("Bank Balance hy? ktna hy?");
// let car = +prompt("Car kon c hy?");
// let habbit = prompt("Nasha to nhi krty?");

// if (age >= 18 && age <= 21 && job === "Government" && salary >= 85000 && bankBalance >= 3000000 && car === "Civic" && habbit === "No") {
//     console.log("Larka Acha hy.");

// } else {
//     console.log("Samajh mn nhi aaya.");
// }




// let hindsa = 27;

// if (hindsa % 3 == 0) {
//     console.log("Number is divisible by 3");

// }

// else {
//     console.log("Number is not divisible by 3");
// }



// let hindsa1 = 17;

// if (hindsa1 % 2 == 0) {
//     console.log("Number is Even.");

// }

// else {
//     console.log("Number is Odd.");
// }



// let myAge = +prompt("Enter Your Age");

// if (myAge > 18 && myAge <= 27) {
//     console.log("You Are Jawan");

//     if (myAge > 27 && myAge <= 40) {
//         console.log("You Are Mard");

//     } else {
//         console.log("You Are Buddha");
//     }

// } else {
//     console.log("tere bas ka nhi");
// }



// let myAge = +prompt("Enter Your Age");

// if (myAge >= 18 && myAge <= 27) {
//     console.log("Aa gya tu jawan ho k.");

//     if (myAge < 18) {
//         console.log("Abhi ap choty ho.");
//     }

// } else {
//     console.log("Mard Door rahen");
// }



// let force = "CID";

// let kon = prompt("Ap kon ho?");

// if (kon == force ) {
//     console.log("Bhaaaagooo!");

// } else {
//     console.log("Jao jao apna kam kro");
// }



let pehlaNumber = 12;
let dusraNumber = 23;
let operator = prompt("Enter Operator");


if (operator === "+") {
    let sum = pehlaNumber + dusraNumber;
    console.log(sum);

} else if (operator === "-") {
    let sub = pehlaNumber - dusraNumber;
    console.log(sub);

} else if (operator === "*") {
    let multiply = pehlaNumber * dusraNumber;
    console.log(multiply);

} else if (operator === "/") {
    let divi = pehlaNumber / dusraNumber;
    console.log(divi);
}

else {
    console.log("Operator sahi dalo");
}










