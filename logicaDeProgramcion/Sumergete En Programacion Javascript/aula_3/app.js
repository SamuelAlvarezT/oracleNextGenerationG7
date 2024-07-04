//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraveces = 'vez' 

while(numeroSecreto != numeroUsuario){
    let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:"); 
    
    console.log(numeroUsuario);
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. lo hiciste en ${intentos} ${palabraveces}.`);
    } else {
            
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        }else { 
            alert('El número secreto  es mayor');
        }
        //el contador incrementa cuando no acierte 
        intentos = intentos + 1; 
        palabraveces = 'veces';

        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }

}