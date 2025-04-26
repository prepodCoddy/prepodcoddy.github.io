let x = 4
let y = 5

let boolean_1 = true // переменная логического (булевского) типа, хранит ИСТИНУ или ЛОЖЬ

boolean_1 = 6 > 10
// console.log(boolean_1)
// console.log(16 / 5) // деление
// console.log(16 % 5) // остаток от деления

let num = 11_111;
document.writeln("<h1> Вычисление суммы цифр числа</h1>")
document.writeln(num + "<br>")
// console.log(num / 10)
// запишем повторение в ЦИКЛ
let res = 0
while (num > 0) {
    let digit = num % 10 // вырезаем ПРАВУЮ цифрц
    if (digit % 2 == 0) { // проверка на четность
        console.log(digit)  // вывод четного числа
    }
    res = res + digit

    num = Math.floor(num / 10) // ОТрезаем правую цифру
    document.writeln(num + "<br>") // вывод на веб-стр
}

document.writeln("Сумма цифр числа: " + res)
