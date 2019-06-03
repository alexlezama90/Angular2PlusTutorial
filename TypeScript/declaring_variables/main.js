// var number = 1;
// let count = 2;
// function doSomethingVar(){
//     for (var i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log('Finally: ' + i); // since we used the VAR keyword, the variable is only 
//                                   // recognized in the function where it was declared.
// }
// i = 2;
function doSomethingLet() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i); // since we used the LET keyword, the variable is only 
    // recognized in the for() block where it was declared.
}
doSomethingLet();
// doSomethingVar();
