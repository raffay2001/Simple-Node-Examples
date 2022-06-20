module.exports = (x, y, callback) => {

    if(x <= 0 || y <= 0){

        setTimeout(() => {
            // here the callback which we are specifying takes the first argument as the error class instance with error message and the second argument as the response
            callback(new Error(`Rectangle Dimensions should be greater than zero l = ${x} and b = ${y}}`), null);   
            
        }, 2000);
    }
    
    else{
        setTimeout(() => {
            // here the callback which we are specifying takes the first argument as the error class instance with error message and the second argument as the response
            callback(null, {
                perimeter: () => (2*(x+y)),
                area: () => (x*y)
            });

        }, 2000);
    }

};


