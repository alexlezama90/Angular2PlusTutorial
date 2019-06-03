var Point = /** @class */ (function () {
    // private x: number;    
    // private y: number;
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
        // this.x = x;                    
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        // getX(){
        //     return this._x;
        // }
        // setX(value: number){
        //     this._x = value;
        // }
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(5);
// point.x = 5;
console.log(point.x);
point.draw();
point.y = 10;
point.draw();
point.x = -1;
