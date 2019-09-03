'use strict';

/*
 Свойства.

 <div>
 <article>
 <p>Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. At detracto menandri eos.
 Duo in causae viderer, graeci <a href="#">reprehendunt</a> has in. Decore <mark>nemore</mark>
 philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. Vix nostro deserunt explicari
 eu.</p>
 </article>
 </div>
 <ul>
 <li><a href="#">Link1</a></li>
 <li><a href="#">Link2</a></li>
 <li><a href="#">Link3</a></li>
 <li><a href="#">Link4</a></li>
 </ul><span></span>
 <a href="#">Some link</a>


 /*
 1. Найти параграф и получить его текстовое содержимое (только текст!)
 */
console.log('------- 1 ----------');
let text = document.querySelector('p').textContent;
console.log(text);

/*
 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию
 (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
 */
console.log('------- 2 ---------');

function defineNode(param) {
 let el = document.querySelector(param);
 let obj = {};

 return obj = {
  'type': el.nodeType,
  'name': el.nodeName,
  'children': el.childElementCount
 };
}
console.log(defineNode('article'));


/*
 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка:
 getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
 */

console.log('------- 3 ---------');

function getTextFromUl(param){
 let args = document.querySelector(param).children;
 let arrUl = [];

 for (let i = 0; i < args.length; i++){
  arrUl.push(args[i].innerText);
 }
 return arrUl;
}

console.log(getTextFromUl('ul'));

/*
 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны
 остаться). Конечный результат:
 -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text
 */

let textNodes = document.getElementsByTagName('p')[0].childNodes;

textNodes.forEach(function(el){
 if(el.nodeType === 3){
  el.data = '-text-';
 }
});

/*
 1. Найти в коде список ul и добавить класс “list”
 */

let ul = document.querySelector('ul').setAttribute('id', 'list');

/*
 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
 */

let link = document.querySelector('ul').nextElementSibling.nextElementSibling.classList.add('link');

/*
 3. На li через один (начиная с самого первого) установить класс “item”
 */

let linkOdd = Array.from(document.querySelector('ul').children);

linkOdd.forEach(function(el, i){
 if(i % 2 === 0){
  el.classList.add('item');
 }
});

/*
 4. На все ссылки в примере установить класс “custom-link”
 Код для задач брать со слайда 5.
 */
let allLink = Array.from(document.links);

allLink.forEach(function(el){
  el.classList.add('custom-link');
});


/*
 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ +
 номер li:
 <ul>
 <li><a href="#">Link1</a></li>
 ...
 <li class=”new-item”>item 5</li>
 <li class=”new-item”>item 6</li>
 </ul>
 Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
 Код для задач брать со слайда 5.
 */

let links = document.querySelector('ul');
let newLink;

for (let i = 1; i <= 5; i++){
 newLink = document.createElement('li');
 newLink.classList.add('new-item');
 newLink.insertAdjacentText('beforeend', `item ${i}`);
 links.lastElementChild.after(newLink);
}

 /*
 2. В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку
 один - strong).
 */

let newUl = document.links;
let textIntoLi;
let strong;

for(let val of newUl){
 if(val.closest('ul')){
  textIntoLi = val.textContent;
  strong = document.createElement('strong');
  val.append(strong);
  val.querySelector('strong').append(val.textContent);
  val.firstChild.remove();
 }
}

/*
 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте
 сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
 */

let img = document.createElement('img');
img.setAttribute('src', 'https://img0.liveinternet.ru/images/attach/c/1//49/798/49798836_3.jpg');
img.setAttribute('alt', 'cat');

document.body.prepend(img);

/*
 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент
 установить класс green
 */

let mark = document.getElementsByTagName('mark');

mark[0].innerText += ' green';
mark[0].className = 'green';


/*
 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
*/

/*
 6. Дан массив пользователей, создать таблицу
 const map = ["_id", "name", "isActive", "balance"];
 const users = [
 {
 "_id": "5d220b10e8265cc978e2586b",
 "isActive": true,
 "balance": 2853.33,
 "age": 20,
 "name": "Buckner Osborne",
 "gender": "male",
 "company": "EMPIRICA",
 "email": "bucknerosborne@empirica.com",
 "phone": "+1 (850) 411-2997",
 "registered": "2018-08-13T04:28:45 -03:00",
 "nestedField": { total: 300 }
 },
 {
 "_id": "5d220b10144ef972f6c2b332",
 "isActive": true,
 "balance": 1464.63,
 "age": 38,
 "name": "Rosalie Smith",
 "gender": "female",
 "company": "KATAKANA",
 "email": "rosaliesmith@katakana.com",
 "phone": "+1 (943) 463-2496",
 "registered": "2016-12-09T05:15:34 -02:00",
 "nestedField": { total: 400 }
 },
 {
 "_id": "5d220b1083a0494655cdecf6",
 "isActive": false,
 "balance": 2823.39,
 "age": 40,
 "name": "Estrada Davenport",
 "gender": "male",
 "company": "EBIDCO",
 "email": "estradadavenport@ebidco.com",
 "phone": "+1 (890) 461-2088",
 "registered": "2016-03-04T03:36:38 -02:00",
 "nestedField": { total: 200 }
 }
 ];

 Условия:
 - В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при
 этом он должен быть всегда выровнен по правому краю.
 - Количество пользователей может быть любым.
 - Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой
 то.
 - В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th
 которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта
 это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.

 */

const map = ["_id", "name", "isActive", "balance"];
const users = [
 {
  "_id": "5d220b10e8265cc978e2586b",
  "name": "Buckner Osborne",
  "email": "bucknerosborne@empirica.com",
  "isActive": true,
  "balance": 2853.33,
  "age": 20,
  "gender": "male",
  "company": "EMPIRICA",
  "phone": "+1 (850) 411-2997",
  "registered": "2018-08-13T04:28:45 -03:00",
  "nestedField": { total: 300 }
 },
 {
  "_id": "5d220b10144ef972f6c2b332",
  "name": "Rosalie Smith",
  "email": "rosaliesmith@katakana.com",
  "isActive": true,
  "balance": 1464.63,
  "age": 38,
  "gender": "female",
  "company": "KATAKANA",
  "phone": "+1 (943) 463-2496",
  "registered": "2016-12-09T05:15:34 -02:00",
  "nestedField": { total: 400 }
 },
 {
  "_id": "5d220b1083a0494655cdecf6",
  "name": "Estrada Davenport",
  "email": "estradadavenport@ebidco.com",
  "isActive": false,
  "balance": 2823.39,
  "age": 40,
  "gender": "male",
  "company": "EBIDCO",
  "phone": "+1 (890) 461-2088",
  "registered": "2016-03-04T03:36:38 -02:00",
  "nestedField": { total: 200 }
 }
];
let thData = {
 'id': 'id',
 'name': 'name',
 'email': 'email',
 'balance': 'balance'
};

let tableData = document.getElementById('tableData');
let table = document.createElement('table');
let tb = document.createElement('tbody');
let tr = document.createElement('tr');
let th;
let td;
let total;
let balance = 0;

tableData = tableData.appendChild(table).appendChild(tb);

for(let key in thData){
 th = document.createElement('th');
 tr.append(th);
 th.innerHTML = thData[key];
}
tableData.appendChild(tr);


users.forEach(function (el) {
 tr = document.createElement('tr');
 tableData.appendChild(tr);

 for(let key in el){
  if(el[key] !== el._id && el[key] !== el.name && el[key] !== el.email && el[key] !== el.balance){
   continue;
  } else {
   td = document.createElement('td');
   tr.append(td);
   td.innerHTML = el[key];
  }
 }
});

total = tableData.querySelectorAll('tr td:last-child');

total.forEach(function(el){
 balance = balance + +el.innerText;
});

tr = document.createElement('tr');

for(let key in thData){
 td = document.createElement('td');
 tr.append(td);
}

tableData.appendChild(tr);

let result = tableData.querySelector('tr:last-child > td:last-child');
result.innerHTML = balance;

