
 
window.addEventListener('scroll', function() {
console.log(window.pageYOffset + 'px');
let numeroPxSoglia = 350;
    let button = document.querySelector('#btn1');
   let myHeader = document.querySelector('.header');
 
   if (myHeader.style.backgroundColor === 'white' && window.pageYOffset < numeroPxSoglia) {
        myHeader.style.backgroundColor = '#FFC017';
        button.style.backgroundColor = 'black';
    } else if (window.pageYOffset >= numeroPxSoglia){
        myHeader.style.backgroundColor = 'white'; 
        button.style.backgroundColor = 'green';
    }
});


/*function disappear (){
    let animazione = document.querySelector('#animation').ariaLabel;
    console.log(animazione);
    let arrayM = animazione.split('');
    console.log(arrayM.length);
    console.log(arrayM[0]);

   let carattere = document.querySelector('#animation').ariaLabel[0];
   console.log(carattere);
   document.querySelector('#animation').classList.add('disappear');

}*/