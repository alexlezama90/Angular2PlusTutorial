// let drawPoint = (x, y, a, b, c, d, e, f) => { //it's better to encapsulate all
//     //...                                     //this parameters (properties) 
// }                                             //in a single object

// let drawPoint = (point) => {
//     //...
// }


// let drawPoint = (point: { x: number, y: number }) => { //inline annotations work
//     //...                                              //fine for simple cases
// }

interface IPoint { //Pascal naming convention also note that we used I to indicate
    x: number,     //that it is an interface.
    y: number,
    draw: () => void
}

let drawPoint = (point: IPoint) => {
    //...
}

let getDistance = (pointA: IPoint, pointB: IPoint) => {
    //...
}

// drawPoint({
//     x: 1,
//     y: 2
// })