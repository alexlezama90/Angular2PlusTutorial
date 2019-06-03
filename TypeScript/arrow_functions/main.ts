let log = function(str){
    console.log(str);
}

let doLog = (str) => console.log(str);

let message = 'Hola Alejandro';

log('Desde una funcion clásica: ' + message);
doLog('Desde una arrow function: ' + message);
// let doLog = (message) => {
//     console.log(message);
// }
