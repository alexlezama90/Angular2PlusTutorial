class Point { 
    constructor(private _x: number, private _y?:number){ 
    }
                           
    draw (){
        console.log('X: ' + this._x + ', Y: ' + this._y)
    }

    // getX(){
    //     return this._x;
    // }

    // setX(value: number){
    //     this._x = value;
    // }

    get x(){
        return this._x
    }

    set x(value: number){
        if (value < 0)
            throw new Error('value cannot be less than 0.');

        this._x = value;
    }

    get y(){
        return this._y
    }

    set y(value: number){
        if (value < 0)
            throw new Error('value cannot be less than 0.');

        this._y = value;
    }

}

let point = new Point(5);
console.log(point.x);
point.draw();
point.y = 10;
point.draw();
point.x = -1;
