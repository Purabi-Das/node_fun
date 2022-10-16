let arr = [1, 
    true,
     "string", 
     null, 
     [1, 2, 3, 4, 5], 
    function fn() {
        console.log("Hello i am a function");
        return 30;
    }];
// console.log(arr[3]);
// console.log(arr[4]);
console.log(arr[arr.length - 1]);
console.log(arr[arr.length - 1]()); //call the function
// console.log(arr);


// function defination
// function fn() {
//     console.log("Hello i am a function");
//     return 10;
// }

// funtion invocation
// console.log(fn);
// let returnValue = fn();
// console.log(returnValue);