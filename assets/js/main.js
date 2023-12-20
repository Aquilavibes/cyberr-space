let btn1 = document.querySelector('#menu');
let btn2 = document.querySelector('#close');
let menu = document.querySelector('.sidebar');
let backdrop = document.querySelector('.backdrop');


/*=============== SHOW MENU ===============*/
btn1.addEventListener('click',function(){
    menu.style.visibility = 'visible';
    backdrop.style.visibility = 'visible';
    btn2.style.visibility = 'visible';
    btn1.style.visibility = 'hidden';
    

})
/*=============== REMOVE MENU MOBILE ===============*/
btn2.addEventListener('click',function(){
    menu.style.visibility = 'hidden';
    backdrop.style.visibility = 'hidden';
    btn1.style.visibility = 'visible';
    btn2.style.visibility = 'hidden';
   

})

backdrop.addEventListener('click',function(){
    menu.style.visibility = 'hidden';
    backdrop.style.visibility = 'hidden';
    btn1.style.visibility = 'visible';
    btn2.style.visibility = 'hidden';
   

})


