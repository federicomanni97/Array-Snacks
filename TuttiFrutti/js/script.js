//Abbiamo un frigorifero pieno di frutta:
//'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?

const frutta = [
    'banana',
    'mela',
    'pera',
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
    'limone',
    'fragola'
];


let msg;
const pesca = frutta.push('pesca');
console.log(frutta);
const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const textcheck = document.getElementById('textcheck');
btn.addEventListener('click', function(){
   let cocomero = 'cocomero'; 
   let flag = false;
   for (let i = 0; i < frutta.length; i++){
    if(cocomero === frutta[i]){
        flag = true;
    }
    else{
    }
   }
   if (flag === true){
    msg = 'Puoi preparare il cocktail!';
   } 
   else{
    msg = 'Non hai il cocomero, devi uscire a comprarlo!'
   }

   textcheck.classList.remove('d-none');
   textcheck.innerHTML = msg;

})
