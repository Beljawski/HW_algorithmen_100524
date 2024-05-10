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

// Задача 3. На промежутке от 1 до N, показать кубы чисел, заканчивающихся на четную цифру

function showCubesWithEvenNum(N) {
    for (let i = 1; i <= N; i++) {
        if (i % 10 % 2 === 0) { 
            let cube = i ** 3;
            console.log(`${i} в кубе равно ${cube}`);
        }
    }
}

showCubesWithEvenNum(10);
