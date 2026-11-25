

const p=new Promise(function(resolve,reject){
    // resolve("Promise resolved");
    reject("Promise rejected");
});

// console.log(typeof p);  //object
// console.log(p);
p.then(function(value){
    console.log(value);
}).catch(function(error){
    console.error(error);
});
