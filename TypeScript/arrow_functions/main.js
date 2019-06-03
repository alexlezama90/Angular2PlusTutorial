var log = function (str) {
    console.log(str);
};
var doLog = function (str) { return console.log(str); };
var message = 'Hola Alejandro';
log('Desde una funcion clásica: ' + message);
doLog('Desde una arrow function: ' + message);
// let doLog = (message) => {
//     console.log(message);
// }
