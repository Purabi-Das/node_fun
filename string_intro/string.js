// let a = 20;
// let str = "I am  a string";
// console.log(str);

// str = "I am a string  " + a;
// console.log(str);

// str = 'I am a string  ' + a;
// console.log(str);

// template string
// it's enclosed inside backtick
// str = `Hello I am a template string ${a}`;
// console.log(str);

// let charAt4 = str.charAt(4);
// console.log(charAt4);

// return string 4 - 10 included space
// starting index to ending index - 1
// let slicedString = str.slice(4, 10);
// console.log(slicedString);

// toLowerCase, toUpperCase

// split --- String converts into array of strings on the basis of delimeter
// let arrStr = str.split("a");
// console.log(arrStr);
// let arrStr2 = str.split(" ");
// console.log(arrStr2);

// get length
// let getLength = str.length;
// console.log(getLength);


// trim ---- remove widespaces from the string
// let str = "   I am string   ";
// let trimmedStr = str.trim();
// console.log(trimmedStr);


// trimmed first and then split
// let arrStr = trimmedStr.split(" ");
// console.log(arrStr);

// Join --- jon the strings on the basis of delimeter
// let joinedStr = arrStr.join("+");
// console.log("joinedStr " , joinedStr);


// typeof
// console.log(typeof "Hello");
// console.log(typeof 10);
// console.log(typeof true);
// console.log(typeof null)   //null is an object




let arr = [1, 5, 8, 34, 90, 43];

// pop, push ---- add / remove last
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.push(23);
// console.log(arr);



// shift, unshift ---- add / remove first
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(23);
// console.log(arr);







// slice --- gives copy of a subarray
// starting idx to end idx - 1
// // it doesnot modify the original array
let slicedArr = arr.slice(1, 3);
console.log(slicedArr);
console.log(arr);



// splice ----- delete any number of elements
// it changes the original array
// // syntax ---- arr/splice(idx, how many elements to delete from idx)
// let removedElements = arr.splice(2, 2);
// console.log(removedElements);
// console.log(arr);




// indexOf = gives idx of an element else -1
let idx = arr.indexOf(34);
console.log(idx);