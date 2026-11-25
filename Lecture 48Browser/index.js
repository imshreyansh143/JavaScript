
// let storage=localStorage.setItem("num",1);
// let storage1=localStorage.setItem("numb",1);
// let storage2=localStorage.setItem("numbe",1);
// let result=localStorage.getItem("Shreyansh");
// console.log(result);
// let result1=localStorage.key(0);
// console.log(result1);
// // let result2=localStorage.removeItem("num");
// // console.log(result2);
// document.querySelector("#btn").addEventListener("click",()=>{
//     localStorage.clear();
// });

// sessionStorage.setItem("sessionNum",1);
// document.querySelector("#btn2").addEventListener("click",()=>{
//     sessionStorage.setItem("sessionNum",1);


let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    let data = xhttp.responseText;
    console.log(data);
};
xhttp.open("GET", "https://api.github.com/users/nishantsaini2331", true);
xhttp.send();

fetch("https://api.github.com/users/nishantsaini2331").
    then(data => data.json()).
    then(data => console.log(data))


async function  getUser(username = "nishantsaini2331") {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    return data;
}


document.querySelector("#github-form").addEventListener("submit" , async (e) => {
    e.preventDefault()

    let username = document.querySelector("#github-username").value

    const data  =  await getUser(username)

    document.querySelector("#show-profile").innerHTML =    `
        <img src=${data.avatar_url} width="100px" height="100px" alt="">
        <h2>${data.name}</h2>
        <i>username : ${data.login}</i>
        <p>bio : ${data.bio}</p>
        <p>followers : ${data.followers}</p>
        <p>following :  ${data.following}</p>
        <p>Public repos : ${data.public_repos}</p>
        `  
})

function updateStatus(){
    document.querySelector("#live-status").textContent = navigator.onLine ? "Online" : "offline"
}

window.addEventListener("online"  , updateStatus)
window.addEventListener("offline" , updateStatus)