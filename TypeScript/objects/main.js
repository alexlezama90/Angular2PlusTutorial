//This is a class (Point)
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (pointA, pointB) {
        //...
    };
    return Point;
}());
//point is an object.
var point = new Point(); // let point: Point = new Point();
point.x = 1;
point.y = 2;
point.draw();
