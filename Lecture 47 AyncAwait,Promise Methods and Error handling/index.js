async function fun2(){
    return 11;
}
function fun1(){
    return 10

}
fun2().then(data => {
    console.log(data);
});
console.log(fun1());