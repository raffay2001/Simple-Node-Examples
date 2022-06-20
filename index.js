// making an obj rectangle for holding functions for its perimeter and area; 
let rect = {
    perimeter: (x, y) => (2*(x+y)),
    area: (x, y) => (x*y)
};

function solveRect(l, b){
    console.log(`Solving for Rectangle with Length: ${l} and Breadth: ${b}`);

    if ( l <= 0 || b <= 0){
        console.log(`Rectangle Dimensions should be greater than zero !!`)
    }
    else{
        console.log(`Area of the Rectangle is: ${rect.area(l, b)}\nPerimeter of the Rectangle is: ${rect.perimeter(l, b)}`);
    };

};

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);

