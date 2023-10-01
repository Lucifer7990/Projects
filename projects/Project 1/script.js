var close = document.querySelector('#close');
var menu = document.querySelector('#menu');
var list = document.querySelector('#list');
close.addEventListener('click',func1);
menu.addEventListener('click',func1);

function func1(){
    list.classList.toggle('toggle');
    list.classList.toggle('hide');

}