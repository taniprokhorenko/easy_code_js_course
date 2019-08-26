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

���� ��������� html, � ������� ��������� ������� �������� (� �������):

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
 3. ��� �������� �������� body � ������� �� � �������
 */
console.log('----------- 1.3 -------------');
console.log(document.body.children);

/*
 4. ������ div � ��� ��� �������� ����
 �) ������� ��� �������� ���� � �������
 */
console.log('---------- 1.4a --------------');

let elements = document.body.firstElementChild.children;
for (let el of elements){
  console.log(el);
}
 /*
�) ������� � ������� ��� �������� ����, ����� ������� � ����������
��� ��������� �� DOM ������������ ������� ������� ���������� ������ ��������
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
1. ������� �������, ������� ��������� ��� ��������. ������� ���������,
�������� �� ������ ������� ��������� ��� �������:
 isParent(parent, child);
 isParent(document.body.children[0], document.querySelector('mark'));
 // true ��� ��� ������ ��� �������� ������������ ��������� ��� mark
 isParent(document.querySelector('ul'), document.querySelector('mark'));
 // false ��� ��� ul �� �������� ������������ ��������� ��� mark
 ������� ��������� ������ DOM �������.
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
2. �������� ������ ���� ������, ������� �� ��������� ������ ������ ul
*/

console.log('------------ 2.2 ------------');

let links = Array.from(document.links);

let linksNotInUl = links.filter(function(el){
 return !el.closest('ul');
});

console.log(linksNotInUl);

/*
3. ����� �������, ������� ��������� ����� � ����� ������ ul

*/

console.log('------------ 2.3 ------------');

console.log(document.querySelector('ul').previousElementSibling);
console.log(document.querySelector('ul').nextElementSibling);

