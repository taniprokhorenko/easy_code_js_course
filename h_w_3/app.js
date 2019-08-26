'use strict';

/*======DOM========*/

/* -------- 1 ------------
 <html>
 <head></head>
 <body>
 <div>
 <p>Text</p>
 <p>Other</p>
 <p>Next</p>
 <p>Last</p>
 </div>
 <div></div>
 <div></div>
 </body>
 </html>

Зная структуру html, с помощью изученных методов получить (в консоль):

 1. head
 */
console.log('----------- 1.1 -------------');
console.log(document.head);

/*
 2. body
 */
console.log('----------- 1.2 -------------');
console.log(document.body);

/*
 3. все дочерние элементы body и вывести их в консоль
 */
console.log('----------- 1.3 -------------');
console.log(document.body.children);

/*
 4. первый div и все его дочерние узлы
 а) вывести все дочерние узлы в консоль
 */
console.log('---------- 1.4a --------------');

let elements = document.body.firstElementChild.children;
for (let el of elements){
  console.log(el);
}
 /*
б) вывести в консоль все дочерние узлы, кроме первого и последнего
Для навигации по DOM использовать методыб которые возвращают только элементы
 */

console.log('----------- 1.4b -------------');
let firstElem = elements[0];
let lastElem = elements[elements.length - 1];

for (let el of elements){
 if (el === firstElem || el === lastElem){
  continue;
 } else {
  console.log(el);
 }
}

/*
------------ 2 ---------------

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
 */

/*
1. Создать функцию, которая принимает два элемента. Функция проверяет,
является ли первый элемент родителем для второго:
 isParent(parent, child);
 isParent(document.body.children[0], document.querySelector('mark'));
 // true так как первый див является родительским элементом для mark
 isParent(document.querySelector('ul'), document.querySelector('mark'));
 // false так как ul НЕ является родительским элементом для mark
 Функция принимает только DOM объекты.
 */
console.log('---------2.1 function ---------------');

function checkIsParent (parent, child){
 return console.log(parent.contains(child));
}

checkIsParent (document.body.children[3], document.querySelector('mark'));
checkIsParent (document.querySelector('ul'), document.querySelector('mark'));

console.log('---------2.1 function 2 ---------------');

function checkIsParent2 (parent, child){
  let parentEl = parent.tagName;
  child.closest(parentEl) ? console.log(true): console.log(false);
}

checkIsParent2 (document.body.children[3], document.querySelector('mark'));
checkIsParent2 (document.querySelector('ul'), document.querySelector('mark'));

/*
2. Получить список всех ссылок, которые не находятся внутри списка ul
*/

console.log('------------ 2.2 ------------');

let links = Array.from(document.links);

let linksNotInUl = links.filter(function(el){
 return !el.closest('ul');
});

console.log(linksNotInUl);

/*
3. Найти элемент, который находится перед и после списка ul

*/

console.log('------------ 2.3 ------------');

console.log(document.querySelector('ul').previousElementSibling);
console.log(document.querySelector('ul').nextElementSibling);

