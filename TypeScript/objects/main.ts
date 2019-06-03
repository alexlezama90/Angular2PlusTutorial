//This is a class (Point)
class Point { //Pascal naming convention
    x: number;    
    y: number;
    
    draw (){
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }

    getDistance(pointA: Point, pointB: Point){
        //...
    }
}

//point is an object.
let point = new Point(); // let point: Point = new Point();
point.x = 1;
point.y = 2;
point.draw();