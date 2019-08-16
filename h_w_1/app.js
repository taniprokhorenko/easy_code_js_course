/*
let string = ‘some test string’;
ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ
1. Получить первую и последнюю буквы строки
2. Сделать первую и последнюю буквы в верхнем регистре
3. Найти положение слова ‘string’ в строке
4. Найти положение второго пробела (“вручную” ничего не считать)
5. Получить строку с 5-го символа длиной 4 буквы
6. Получить строку с 5-го по 9-й символы
7. Получить новую строку из исходной путем удаления последних 6-и символов
(то есть исходная строка без последних 6и символов)
8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
содержаться текст “2016”
 */

let string = "some test string";

//1. Получить первую и последнюю буквы строки
let firstLetter = 'first letter:' + string[0];
let lastLetter = 'last letter:' + string[string.length - 1];

//2. Сделать первую и последнюю буквы в верхнем регистре
let firstLetterUpperCase = string[0].toUpperCase();
let lasttLetterUpperCase = string[string.length- 1].toUpperCase();

//3. Найти положение слова ‘string’ в строке
let posString = string.indexOf('string');

//4. Найти положение второго пробела (“вручную” ничего не считать)
let posSecondSpace = string.lastIndexOf(' ');

//5. Получить строку с 5-го символа длиной 4 буквы
let newStr = string.substr(5, 4);

//6. Получить строку с 5-го по 9-й символы
let newStr2 = string.slice(5, 9);

/*7.Получить новую строку из исходной путем удаления последних 6-и символов
(то есть исходная строка без последних 6и символов)*/
let newString = string.slice(0, -6);

/*8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
содержаться текст “2016”*/
let a = 20,
    b = 16;

let string2 = `${a}${b}`;
let string3 = String(a) + String(b);

//----------------------------------------
/*
1. Получить число pi из Math и округлить его до 2-х знаков после точки
2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12,
51, 12, 13, 51
3. Работа с Math.random:
a. Получить случайное число и округлить его до двух цифр после запятой
b. Получить случайное целое число от 0 до X. X - любое произвольное число.
4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
5. Получить число из строки ‘100$’
 */

//1. Получить число pi из Math и округлить его до 2-х знаков после точки
let number = Math.PI.toFixed(2);

//2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
let maxNum = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

/*
3. Работа с Math.random:
a. Получить случайное число и округлить его до двух цифр после запятой
b. Получить случайное целое число от 0 до X. X - любое произвольное число.
 */

let random = Math.random().toFixed(2);
let random2 = Math.round(Math.random() * 10);


//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let result = (0.6*10 + 0.7*10)/10;


//5. Получить число из строки ‘100$’
let numFromStr = parseInt('100$');




// Чему равно а, почему?

//    a = 0 || 'string';      => 'string'
//    a = 1 && 'string';      => 'string'
//    a = null || 25;         => 25
//    a = null && 25;         => null
//    a = null || 0 || 35;    => 35
//    a = null && 0 && 35;    => null

//Что отобразится в консоли. Почему?

//    a = 12 + 14 + '12'             => 2612
//    a = 3 + 2 - '1'                => 4
//    a = '3' + 2 - 1                => 31
//    a = true + 2                   => 3
//    a = +'10' + 1                  => 11
//    a = undefined + 2              => NaN
//    a = null + 5                   => 5
//    a = true + undefined           => NaN




/*
2. Используя if, записать условие:
a. если переменная равна нулю, присвоить ей 1;
b. если меньше нуля - строку “less then zero”;
c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10
(использовать краткую запись).*/

let abc = 0;

if(abc == 0){
    abc = 1;
}else if(abc < 0) {
    abc = 'less then zero';
}else if(abc > 0) {
    abc *= 10;
}



/*
3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need
Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.*/

let car = {
    name: 'Lexus',
    age: 2,
    create: 2008,
    needRepair: false
};

if(car.age > 5){
    console.log('Need Repair');
    car.needRepair = true;
}else {
    car.needRepair = false;
}
console.log(car.needRepair);



/*
4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение то в объекте item создать
поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите
внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить
расчет. иначе если поля discount нет то вывести просто поле price в консоль.
*/
let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
}

if(item.discount){
    item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price) * parseInt(item.discount) / 100);
    console.log(item.priceWithDiscount);
}else {
    console.log(item.price);
}


/*
5. Дан следующий код:
let product = {
name: “Яблоко”,
price: “10$”
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной
цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
 */
let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10;
let max = 20;

if(parseInt(product.price) >= min && parseInt(product.price) <= max){
    console.log(product.name);
}

/*
1. Создать объект с полем product, равным ‘iphone’
2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
3. Добавить поле details, которое будет содержать объект с полями model и color
Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.
 */
let obj = {
    product: 'iphone'
};
obj.price = 1000;
obj.currency = 'dollar';
obj.details = {};
obj.details.model = '';
obj.details.color = '';


/*
1. Записать в виде switch case следующее условие:
if (a === ‘block’) {
console.log(‘block’)
} else if (a === ‘none’) {
console.log(‘none’)
} else if (a === ‘inline’) {
console.log(‘inline’)
} else {
console.log(‘other’)
}
 */

let x = 'block';

switch(x) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
        break;
}


/*
2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного
оператора.
 */

let res = (x === 'block') ? console.log('block') : console.log('other');
let res2 = (x === 'none') ? console.log('none') : console.log('other');
let res3 = (x === 'inline') ? console.log('inline') : console.log('other');



//1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.

let stringNew = 'i am in the easycode',
    strRes = stringNew.slice().split(' '),
    strRes2 = [],
    strRes3 = [],
    strRes4 = [];

for(let i = strRes.length - 1; i >= 0; i--) {
    strRes2[i] = strRes[i][0].toUpperCase();
    strRes3[i] = strRes[i].slice(1);
    strRes4[i] = strRes2[i].concat(strRes3[i]);
}

console.log(strRes4.join(' '));


//2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква
//становится первой, предпоследняя - второй итд).

let strExample = 'tseb eht ma i',
    strRevers = '';

for(let i = strExample.length - 1; i >= 0; i--){
    strRevers += strExample[i];
}
console.log(strRevers);


/*
 3. Факториал числа - произведение всех натуральных чисел от 1 до n
 включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10.
 Использовать for.
 */

let f = 10,
    resF = 1;

for (let i = f; i > 0; i--) {
    resF *= f--;
}

console.log(resF);


/*
 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
 где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
 */

let word = 'JavaScript is a pretty good language',
    wordNew = '';

for (let i = 0; i < word.length; i++) {
    if(word[i - 1] === ' ') {
        wordNew += word[i].toUpperCase();
    }
    else if (word[i] === ' ') {
        continue;
    }
    else {
        wordNew += word[i];
    }
}
console.log(wordNew);


/*
 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2,
 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of arr) {
    if(arr[value] % 2 === 1) {
        console.log(arr[value]);
    }
}

/*6. Дан объект:
 let list = {
 name: ‘denis’,
 work: ‘easycode’,
 age: 29
 }
 Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.
 Использовать for in.
 */

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}

for (var key in list) {
    if(typeof list[key] ===  'string' ){
        list[key] = list[key].toUpperCase();
        console.log("obj." + key + " = " + list[key]);
    }
}