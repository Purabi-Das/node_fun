let obj = {};

let cap = {
    name: "steve",
    lastName: "Rogers", 
    age: "20",
    friends: ["a", "b", "c"], 
    sayHi: function fn() {
        console.log("Hello steve!");
    },
    address:{
        state: "WB",
        city : "kolkata",
    }
}

// console.log(cap);
// console.log("--------------------");
// console.log(cap.name);
// console.log(cap.lastName);
// console.log(cap.friends[1]);
// console.log(cap.sayHi);
// console.log(cap.movies);
// cap.sayHi();

// let varName = "address";
// console.log(cap[varName]);



// loop
for(let key in cap) {
    console.log(cap[key]);
}



// new key add
console.log(cap);
cap.movies = ["avengers", "civil war"];

// update 
cap.age = 45;

// delete
delete cap.address.city;

console.log("``````````````````````````");
console.log(cap);
