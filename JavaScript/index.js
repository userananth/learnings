let my_element = document.createElement('h1');
let myspan = document.createElement('span');

myspan.innerText = "sample";

my_element.appendChild(myspan);
my_element.classList.add('customclass')

document.body.appendChild(my_element);

var root = document.querySelector(':root');
var rootstyle = getComputedStyle(root);
var red = rootstyle.getPropertyValue('--pC');
console.log('pC:', red.toString());
my_element.style.color = red;



