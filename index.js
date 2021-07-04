let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
let newArray =[ ];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.


newArray = holdCabinet1.concat(holdCabinet2)
//a) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(newArray)
console.log(holdCabinet1)


let arr = ['a', 'b', 'c', 'd', 'e'];

arr.slice(2);

console.log(arr.slice(2));

console.log(arr);

//b) Print a slice of two elements from each array. Does slice alter the original arrays?



//c) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
holdCabinet1.reverse()
holdCabinet2.sort()
console.log(holdCabinet1)
console.log(holdCabinet2)