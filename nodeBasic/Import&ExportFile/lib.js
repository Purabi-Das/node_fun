let a = 10;

function fn() {
    console.log("Hello i am function fn");
    return "executed";
}

function notToBeExported() {
    console.log("not to be exported");
}

//code export
// this export code must be in the form of object
module.exports = {
    varName : a, 
    fxn : fn
}