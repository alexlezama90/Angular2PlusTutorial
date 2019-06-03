class Point { 
    // private x: number;    
    // private y: number;
    constructor(public x: number, private y?:number){ 
        // this.x = x;                    
        // this.y = y;
    }
                           
    draw (){
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

let point = new Point(1);
point.x = 5;
point.draw();