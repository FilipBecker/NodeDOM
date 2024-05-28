console.log(":=)");

console.log('getElementById:');
const idElement = document.getElementById('men');
console.log(idElement);

console.log('getElementsByName:')
const nameElements = document.getElementsByName('rubrik');
console.log(nameElements);

console.log('getElementsByTagName:');
const tagNemeElements = document.getElementsByTagName('p');
console.log(tagNemeElements);

console.log('getElementsByClassName:');
const classNameElements = document.getElementsByClassName('example');
console.log(classNameElements)

console.log('querySelektor');
const pN = document.getElementById('parentNode');
let QSelement = pN.querySelector('[style]');
console.log(QSelement);

console.log('querySelectorAll');
const AllElements = document.querySelectorAll('*');
console.log(AllElements);