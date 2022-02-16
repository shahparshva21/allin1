// this is for scrolling text
let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');

window.onscroll = () =>{
    let pos = window.scrollY -1000;
    line1.style.left = `${pos}px`
    line2.style.right = `${pos}px` 
}
