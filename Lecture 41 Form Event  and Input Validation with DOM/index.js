
const form=document.querySelector("#form")
const btn=document.querySelector("#btn")
const username=document.querySelector("#username")
const bio=document.querySelector("#bio")
const charcount=document.querySelector("#charcount")
const checkbox=document.querySelector("#checkbox")
const country=document.querySelector("#country")
const passwordHint=document.querySelector("#password-hint")
const password=document.querySelector("#password")

const LIMIT=15


charcount.textContent=`${LIMIT} characters remaining`;
    
function validaUsername(){
if(username.value.trim().length==0){
      
      return false;
   }
return true;
}


form.addEventListener("submit" ,(e)=>{
    e.preventDefault();
   
   //  const password=document.querySelector("#password").value

   
    const email=document.querySelector("#email").value

    const is = isValidateUsername(username.value)
    if(username.value.trim().length==0){
      console.log("Ener Your Name");
      alert("Please Enter Your Name")
      return;
   }
    console.log({username:username.value,email,password:password.value})

})


bio.addEventListener("input",(e)=>{
    const remaining=LIMIT-bio.value.length;
    charcount.textContent=`${remaining} characters remaining`;
    
})
// username.addEventListener("change",(e)=>{
//    console.log("change event ,username.value");
    
// })
checkbox.addEventListener("input",(e)=>{
   console.log(checkbox.checked);
    
})
country.addEventListener("input",(e)=>{
   console.log(country.value);
    
})
username.addEventListener("focus",(e)=>{
   console.log("focus");
    
})
username.addEventListener("blur",(e)=>{
   console.log("blur");
    
})
password.addEventListener("focus",(e)=>{
   passwordHint.classList.remove("hidden")
    
})
password.addEventListener("blur",(e)=>{
   passwordHint.classList.add("hidden")
    
})

