'use strict';
/*
--------- Функции ---------

1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их
произведение: multiply(1,2,3) = 6 (1*2*3)
Если нет ни одного аргумента, вернуть ноль: multiply() // 0
*/

function multiply(...args) {
    let abc = 1;

    if (args.length) {
        for (let arg of args){
            abc *= arg;
        }
        return abc;
    } else{
        return 0;
    }
}

console.log(multiply(1, 5, 9));

/*
2. Создать функцию, которая принимает строку и возвращает строку-перевертыш:
reverseString(‘test’) // “tset”.
*/

 function reverseString(str) {
     let res = '';

     for (let i = str.length - 1; i >= 0; i--) {
         res += str[i];
     }
     return res;
 }

console.log(reverseString('test'));


/*
3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
где каждый символ разделен пробелом и заменен на юникод-значение символа:
getCodeStringFromText(‘hello’) // “104 101 108 108 111”
подсказка: для получения кода используйте специальный метод
*/

function getCodeStringFromText(str) {
    let res = '';

    for (let i = 0; i < str.length; i++) {
        res += str.charCodeAt(i) + ' ';
    }
    return res;
}
console.log(getCodeStringFromText('hello'));


/*
4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что
число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с
переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали
ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные
числа.
*/

function guessTheNumber(number) {
    if(number > 0 && number <= 10) {
        let randomNumber = (Math.random()* 10).toFixed();

        if(number === randomNumber) {
           return 'Вы выиграли';
        } else {
            return `Вы не угадали, ваше число  ${number}  а выпало число  ${randomNumber}`;
        }
    } else {
        return `Ведите число от 1 до 10`;
    }
}

console.log(guessTheNumber(5));


/*
5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до
n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
*/

function getArray(n) {
    var newArr = [];

    for (let i = 1; i <= n; i++) {
        newArr.push(i);
    }
    return newArr;
}
getArray(10);


/*
6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными
элементами входного массива:
doubleArray([1,2,3]) // [1,2,3,1,2,3]
*/
function doubleArray(arr) {
    let arrNew = arr;
    arrNew = arrNew.concat(arr);

    return arrNew;
}
console.log(doubleArray([1,2,3]));


/*
7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого
массива первый элемент, а возвращает массив из оставшихся значений:
changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
*/


function changeCollection(...args) {
    let newCollection = [];

    args.forEach(function(el, i) {
        newCollection[i] = el.slice(1);
    });
    
    return newCollection;
}

console.log(changeCollection([1,2,3],['a','b','c']));

/*
8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и
значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый
массив с пользователями соответсвующие указанным параметрам.
funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

*/

 let arrUsers =  [
     {
         name: 'Denis',
         age: '29'
     },
     {
         name: 'Oleg',
         age: '29',
         gender: 'male'
     },
     {
         name: 'Ivan',
         age: '20',
         gender: 'male'
     },
     {
         name: 'Sofia',
         age: '26',
         gender: ''
     },
     {
         name: 'Lena',
         age: '18',
         gender: 'female'
     }
 ];
 let newArrUser = [];

 function funcGetUsers(arr, par1, par2) {
     for (let i = 0; i < arr.length; i++) {
         if (arr[i].hasOwnProperty(par1) && arr[i][par1] !== '' && arr[i][par1] === par2) {
             newArrUser = arr.filter(function (el) {
                 return el[par1] == par2;
             });
         }
     }
     return newArrUser;
 }

 console.log(funcGetUsers(arrUsers, 'gender', 'male'));


//---------- Функции высшего порядка ---------------
/*
Функции высшего порядка. Задачи.
1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой
callback)
Первая функция возвращает строку “New value: ” и результат обработки:
firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки
*/

/*
2. Написать аналог метода every. Создайте функцию every, она должна принимать первым
аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом
callback (обязательно проверьте что передана функция)
функция должна возвращать true или false в зависимости от результата вызова callback (проверить
число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь
массив.
Что такое метод every можно прочитать здесь и ниже в презентации тоже о них идет речь.
*/


/*
-------------  Перебирающие методы --------------

1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
каждый элемент которого будет хранить информацию о числе и его четности:
[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
*/

let arrNum = [1,2,3,5,8,9,10];

let arrNumNew = arrNum.map(function(el){
    if(el % 2 == 0) {
        return `{digit: ${el}, odd: false,}`;
    }else {
        return `{digit: ${el}, odd: true,}`;
    }
    return objInfo['digit'];

});
console.log(arrNumNew);
/*
2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да -
вернуть false.
*/

let arrElts = [12, 4, 50, 1, 0, 18, 40];

let arrCheckZero = arrElts.every(function (el) {
    return el > 0;
});
console.log(arrCheckZero);

/*
3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true
*/

let arrWords = ['yes', 'hello', 'no', 'easycode', 'what'];

let arrWordsLength = arrWords.some(function(el) {
    return el.length > 3;
});
console.log(arrWordsLength);

/*
4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения
в строке {буква: “a”, позиция_в_предложении: 1}:
[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
Напишите функцию, которая из элементов массива соберет и вернёт
строку, основываясь на index каждой буквы. Например:
[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
строки
*/


let arrInfo = [
   {char:"a",index:12},
   {char:"w",index:8},
   {char:"Y",index:10},
   {char:"p",index:3},
   {char:"p",index:2},
   {char:"N",index:6},
   {char:" ",index:5},
   {char:"y",index:4},
   {char:"r",index:13},
   {char:"H",index:0},
   {char:"e",index:11},
   {char:"a",index:1},
   {char:" ",index:9},
   {char:"!",index:14},
   {char:"e",index:7}
];

let sortArrInfo = arrInfo.sort(function(a, b) {
   return  a['index'] - b['index'];
});

let collectWord = sortArrInfo.reduce(function(str, current) {
   return str  + current.char;
},'');

console.log(collectWord);


/*
----------- Метод Sort -------------

1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
(размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd']
]
*/
console.log('Test sort 1')
 let arrArr = [
     [14, 45],
     [1],
     ['a', 'c', 'd']
 ];

let sortArrArr = arrArr.sort(function(a, b) {
    return a.length - b.length;
});
console.log(sortArrArr);
/*
2. Есть массив объектов:
[
{cpu: 'intel', info: {cores:2, сache: 3}},
{cpu: 'intel', info: {cores:4, сache: 4}},
{cpu: 'amd', info: {cores:1, сache: 1}},
{cpu: 'intel', info: {cores:3, сache: 2}},
{cpu: 'amd', info: {cores:4, сache: 2}}
]
Отсортировать их по возрастающему количеству ядер (cores).
*/

let arraysCore = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];

let filterArrCore = arraysCore.sort(function(a, b) {
    return a['info']['cores'] - b['info']['cores'];
});

console.log(filterArrCore);

/*
3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть
все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
let products = [
{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
{title: 'prod3', price: 15}, {title: 'prod4', price: 25},
{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
{title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];
filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
 */

let products = [
    {title: 'prod1', price: 5.2},
    {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15},
    {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9},
    {title: 'prod6', price: 8},
    {title: 'prod7', price: 19},
    {title: 'prod8', price: 63}
];
function filterCollection(arr, price1, price2) {
    let filterElts = arr.filter(function(el) {
        return el['price'] >= price1 && el['price'] <= price2;
    });
    return filterElts.sort(function(a, b) {
        return a['price'] - b['price'];
    });
}
console.log(filterCollection(products, 15, 30));