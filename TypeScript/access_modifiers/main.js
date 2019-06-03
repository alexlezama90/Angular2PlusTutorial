var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x; //that the parameter is optional
        this.y = y;
    }
    // constructor(){} TypeScript doesn't allow multiple constructors
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
// let point = new Point(); 
// point.x = 1;
// point.y = 2;
// let point = new Point(1);
var point = new Point(1, 2);
point.x = 5;
point.draw();
