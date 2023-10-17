// function sumNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber

// }


// const result = sumNumbers(3, 10)
// console.log(result)

// console.log(sumNumbers(-2, 2))


// const users = ['Jhon', 'Alex', 'Ann', 'Max']

// function checkForCopyItem(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item){
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return `There is no such item in the array`
// }

// // console.log(checkForCopyItem(users, `Alex`))

// console.log(checkForCopyItem(users, `123`))

// Домашнее задание

// function sayHello(name) {
//     return `Hello ${name}`;
// }


// const greeting = sayHello('Alex');
// console.log(greeting); 
// ==================================================================
// const numbersArray = [3, 2, 7, 10, 24, 46, 75, 12, 95,]

// function displayNumbersGreaterThan10(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 10) {
//             console.log(arr[i]);
//         }
//     }
// }

// displayNumbersGreaterThan10(numbersArray);

// ===========================================================================

function calculate(num1, num2, operator) {
    switch (operator) {
        case 'plus':
            return num1 + num2;
        case 'minus':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
    }
}

// Примеры использования функции
const result1 = calculate(2, 3, 'minus');
const result2 = calculate(5, 2, 'multiply');
const result3 = calculate(10, 2, 'divide'); 

console.log(result1); 
console.log(result2); 
console.log(result3);