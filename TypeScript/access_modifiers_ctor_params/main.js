var Point = /** @class */ (function () {
    // private x: number;    
    // private y: number;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // this.x = x;                    
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
var point = new Point(1);
point.x = 5;
point.draw();
