//Variables
let numeroSecreto = Math.floor((Math.random())* 10)+1;
let numeroUsuario = 0;
let intentos = 1;
/* let palabraveces = 'vez'  */
let maximosIntentos = 3;

while(numeroSecreto != numeroUsuario){
    let numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:")); 
    
    console.log(numeroUsuario);
    /*
    Este código realiza
    la comparación
    */

    console.log(typeof(numeroSecreto));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }.`);
    } else {
            
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        }else { 
            alert('El número secreto  es mayor');
        }
        //el contador incrementa cuando no acierte 
        /* intentos = intentos +1;  */
        /* intentos += 1; */
        intentos++; 

        /* palabraveces = 'veces'; */
        if (intentos > maximosIntentos){
            alert(`llegaste al nuemro maximo de ${maximosIntentos} intentos`);
            break;
        }

        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }

}