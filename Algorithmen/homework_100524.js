// Задача 1. Найти сумму трёх чисел

function sum(a,b,c) {
    let sum = a + b + c;
    return sum;
}
console.log(sum(a,b,c));

// Задача 2. По двум заданным числам проверять является ли одно квадратом другого
function checkSquareNum(a, b) {
    let minNum = a;
    let maxNum = b;
    if (a > b) {
        minNum = b;
        maxNum = a;
    }
    if (maxNum / minNum === minNum) {
        console.log(maxNum + " является квадратом " + minNum);
    } else {
        console.log(maxNum + " не является квадратом " + minNum);
    }
}
checkSquareNum(2, 5);
