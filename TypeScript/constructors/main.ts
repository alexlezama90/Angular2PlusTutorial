class Point { 
    x: number;    
    y: number;

    constructor(x: number, y?:number){ //the question mark (?) indicates
        this.x = x;                    //that the parameter is optional
        this.y = y;
    }
    
    // constructor(){} TypeScript doesn't allow multiple constructors
                        
    draw (){
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

// let point = new Point(); 
// point.x = 1;
// point.y = 2;

// let point = new Point(1);
let point = new Point(1, 2);
point.draw();