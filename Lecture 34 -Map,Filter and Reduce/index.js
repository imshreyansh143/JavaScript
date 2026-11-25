// let student = {
//     name: "Shreyansh",
//     rollNo: 70058,
//     subjects: ["VAC", "SEC", "AEC", "GE", "DSE"],

// }

// // console.log(subjects);
// // 


// //How to rename key
// let { subjects: vishay } = student
// let { ...hello } = student;
// // console.log(vishay);
// console.log(hello);

// //object merge karna hai isame

// let obj1 = {
//     name: "Shreyansh",
//     phone: 7905882057,

// }
// let obj2 = {
//     name: "Lakshya",
//     adress: "India",
//     aadharCard: 514692730963,


// }
// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3)

let arr=[1,2,3,4,5,6]
// arr.splice()
arr.splice(3,2,["replace"])
arr.splice(2,0,["add"])
console.log(arr)