// function fun1(callback) {
//     console.log("Hii");
//     callback();
// }
// function cb() {
//     console.log("This is called Callback function ");
// }
// fun1(cb);


//synchronous call back function
// let arr = ["a", "b", "c", "d", "e"];
// arr.forEach((element) => {
//     console.log(element);
// });
// arr.map((element) => {
//     console.log(element);
// });

// //Asynchronous callback function
// setTimeout(() => {
//     console.log("This is called after 2 seconds");
// }, 2000);



// function searchPizza(cb1){
//     console.log("Searching for pizza...");
//     setTimeout(() => {
//         console.log("Here is the Pizza Menu");
//         cb1();
//     }, 2000);
// }
// function addToCart(){
//     console.log("Pizza added to cart");

// }
//  searchPizza(addToCart);


function searchPizza(cb1) {
    console.log("Searching for pizza...");
    setTimeout(() => {
        console.log("Here is the Pizza Menu");
        let price = 500;
        cb1(price);
    }, 2000);
}
function addToCart(cb2) {
    console.log("Pizza adding to cart...");
    setTimeout(() => {
        console.log("Pizza added to cart");
        cb2();
    }, 3000);

}
function payment(price, cb3) {
    console.log(`Payment Initiated,Amount:₹${price}`);
    setTimeout(() => {
        console.log(`Payment completed,Amount:₹${price}`);
        cb3();
    }, 5000);
}
searchPizza(function(price) {
    addToCart(function() {
        payment(price, function () {
            console.log("Order Placed");


        })
    })
}) 
