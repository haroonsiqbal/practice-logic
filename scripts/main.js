//coins to cash

const piggyBank = {
    quarters: 6,
    nickels: 27,
    dimes: 11,
    pennies: 103
}

const calculate = (object) => {
    const hundreds = (((object.quarters * 25) + (object.nickels * 5) + (object.dimes * 10) + (object.pennies * 1))/100)
    return `$${hundreds}`
}

const dollarAmount = calculate(piggyBank);

console.log(dollarAmount);

//cash to coins

const newAmount = 3.42
const piggyBank2 = {}

// 1. take new amount and multiply times 100
// 2. divide that number by 25 and round down = quarters
// 3. subtract from original, divide remainder by 10 and round down = dimes
// 4. subtract from original, divide remainder by 5 and round down = nickels
// 5. subtract from original, number = pennies


const assort = (amount, bank) => {
    const hundreds2 = (amount * 100) //342
        console.log(hundreds2);
    const quarters = Math.floor(hundreds2 / 25); //13 quarters
        console.log(quarters);
    const remainder1 = hundreds2 - (quarters * 25) // 17
        console.log(remainder1);
    const dimes = Math.floor(remainder1 / 10); // 1 dime
        console.log(dimes);
    const remainder2 = remainder1 - (dimes * 10) // 7
        console.log(remainder2);
    const nickels = Math.floor(remainder2 / 5) // 1 nickel
        console.log(nickels);
    const remainder3 = remainder2 - (nickels * 5) // 2
        console.log(remainder3);
    
    bank.quarters = quarters
    bank.dimes = dimes
    bank.nickels = nickels
    bank.pennies = remainder3

}

assort(newAmount, piggyBank2);
console.log(piggyBank2);

// student grades

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {}
const arrayA = []
const arrayB = []
const arrayC = []
const arrayD = []
const arrayF = []

const groupGrades = () => {
    for (score of scores) {
    if (score >= 50 && score < 61) {
        arrayF.push(score);
    }
    if (score > 60 && score < 71) {
        arrayD.push(score);
    }
    if (score > 70 && score < 81) {
        arrayC.push(score);
    }
    if (score > 80 && score < 91) {
        arrayB.push(score);
    }
    if (score > 90 && score <= 100) {
        arrayA.push(score);
    }
  }

  grades.A = arrayA
  grades.B = arrayB
  grades.C = arrayC
  grades.D = arrayD
  grades.F = arrayF

}

groupGrades();
console.log(arrayF);
console.log(arrayD);
console.log(arrayC);
console.log(arrayB);
console.log(arrayA);

console.log(grades);


//how many in each grade
console.log(grades.A.length, grades.B.length, grades.C.length, grades.D.length, grades.F.length);

//lowest score in array
console.log(Math.min(...scores))

//highest score in array
console.log(Math.max(...scores))