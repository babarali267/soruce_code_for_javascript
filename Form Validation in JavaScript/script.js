// Dom Element 
let form = document.querySelector("form");
let userName = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#cpassword")


// event listner to submit form

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    handleInput()
})


function handleInput(){
   
   let userNameValue = userName.value.trim()
   let emailValue = email.value.trim()
   let passwordValue = password.value.trim()
   let confirmPasswordValue = confirmPassword.value.trim()

   //  username 
   if(userNameValue === ""){
      serErorFor(userName,"User name cannot be blank")
   }else{
      setSuccessForm(userName)
   }
   // email 
      if(emailValue === ""){
         serErorFor(email,"Email name cannot be blank")
      }else{
         setSuccessForm(email)
      }
   // password 
   if(passwordValue ===""){
      serErorFor(password,"Password cannot be blank")
   }else if(passwordValue.length < 6 || password.length > 30){
      serErorFor(password,"Password length should be between 6 and 30")
   }else{
      setSuccessForm(password)
   }
   // confirm password
  
   if(confirmPasswordValue === ""){
      serErorFor(confirmPassword,"Confirm Password cannot bhi blank")
     
   } else if (confirmPasswordValue !== passwordValue){
      serErorFor(confirmPassword,"Confirm password not matched with password")
   }else{
      setSuccessForm(confirmPassword)
   }

}

// serErorFor 
 function serErorFor (input,message){
   let formControl = input.parentElement;
   formControl.className = "form-control error";
   let small = formControl.querySelector("small")
   small.innerText = message

 }
//  setSuccessForm 
function setSuccessForm(input){
   let formControl = input.parentElement;
   formControl.className = "form-control success";
}