"use strict";

// 1
{
    let email = 'aaa@bbb@ccc';
    console.log(email.replace(/@/gi, '!'));
}

// 2
{
    let date0 = '2025-12-31';
    console.log(date0.replace(/(2025)(-)(12)(-)(31)/, '$5/$3/$1'));
}

// 3
{
    let str = 'Я учу javascript';
    console.log(str.substring(2, 16));
    console.log(str.substr(2, 16));
    console.log(str.slice(2, 16));
}

// 4
let array = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += Math.pow(array[i], 3)
}
console.log(Math.sqrt(sum));

// 5
{
    function result(a, b) {
        let c = Math.abs(a - b);
        console.log(c);
    }
    result(3, 5);
    result(6, 1);
}

// 6
{
    let date = new Date();
    function outputTime(num) {
        if (num > 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }
    console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + outputTime(date.getDate()) + '.' + outputTime(date.getMonth() + 1) + '.' + date.getFullYear());
}

// 7
{
    let str = 'aa aba abba abbba abca abea';
    console.log(str.match(/a+b{1,}a/g));
}

// 8
{
    let telNumber = `+375 29 7543589`;
    let telephoneTest = /^\+[0-9]{3} [0-9]{2} [0-9]{7}$/g;
    console.log(telephoneTest.test(telNumber))
}

// 9
{
    function mail(email) {
        let m = /^[\w]{2}[\w-\.]*@[\w-]+\.[a-z]{2,11}$/i;
        let check = m.test(email);
        console.log(check);
    }
    mail(prompt('Введите электронный адрес'));
}

// 10