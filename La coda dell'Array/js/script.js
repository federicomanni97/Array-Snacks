// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali da 1 a 100 per quanti sono gli elementi da inserire.
//Stampiamo poi gli ultimi 5 elementi dell'Array




let domanda1 = parseInt(prompt('dimmi un numero da 1 a 100'));
console.log(domanda1);

const numeri = [];
for (let i = 0; i < domanda1; i++){
    numeri.push(getRndInteger(1, 100));
    
}


console.log(numeri);

const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const textcheck = document.getElementById('textcheck');




btn.addEventListener('click', function(){

    //const numeri = [];
    //for (let i = 0; i < inputEl; i++) {
    //numeri.push(Math.floor(Math.random() * 100) + 1);
    //}
    
})
textcheck.classList.remove('d-none');


//UTILITY
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
