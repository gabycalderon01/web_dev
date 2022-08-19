function checkForm() {
   // TODO: Perform input validation 

   let formError = document.getElementById("formErrors");
   //formError.innerHTML= "";
   //formError.classList.add("hidden");
   let ul = document.createElement("ul");
   let fullNameInput = document.getElementById("fullName");
   let emailInput = document.getElementById("email");
   let passwordInput = document.getElementById("password");
   let confrimPassword = document.getElementById("passwordConfirm");
   let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  
   //Is there an error?
   if ((fullNameInput.value).length >= 1) {
      //there is no error
      handleError(false, fullNameInput);
   }
   else {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode("Missing full name."));
      ul.appendChild(li);
      handleError(true, fullNameInput);
   }

   if (re.test(emailInput.value)) {
      handleError(false, emailInput);
   }
   else {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode("Invalid or missing email address."));
      ul.appendChild(li);
      handleError(true, emailInput);
   }
   
   if ((passwordInput.value).length >= 10 && (passwordInput.value).length <= 20) {
      handleError(false, passwordInput);
   } 
   else {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode("Password must be between 10 and 20 characters."));
      ul.appendChild(li);
      handleError(true, passwordInput);
   }

   if ((/.*[a-z].*/).test(passwordInput.value)) {
      handleError(false, passwordInput);
   }
   else {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode("Password must contain at least one lowercase character."));
      ul.appendChild(li);
      handleError(true, passwordInput);
   }

   if ((/(.*[A-Z].*)/).test(passwordInput.value)) {
      handleError(false, passwordInput);
   }
   else {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode("Password must contain at least one uppercase character."));
      ul.appendChild(li);
      handleError(true, passwordInput);
   }

   if ((/[0-9]/).test(passwordInput.value)) {
      handleError(false, passwordInput);
   }
   else {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode("Password must contain at least one digit."));
      ul.appendChild(li);
      handleError(true, passwordInput);
   }

   if (passwordInput.value === confrimPassword.value) {
      handleError(false, confrimPassword);
      /*formError.classList.add("hidden");
      passwordInput.classList.remove("error");
      confrimPassword.classList.remove("error");*/
   }
   else {
      let li = document.createElement("li");
      li.appendChild(document.createTextNode("Password and confirmation password don't match."));
      ul.appendChild(li);
      handleError(true, confrimPassword);
      /*formError.classList.remove("hidden");
      passwordInput.classList.add("error");
      confrimPassword.classList.add("error");
      console.log("error");*/
   }

   formError.appendChild(ul);

}

function handleError(thereIsAnError, formInput) {
   let formError = document.getElementById("formErrors");

   if (thereIsAnError == false) {
      if (formInput === document.getElementById("passwordConfirm") && 
      (document.getElementById("password").value).length !== 0) {
         formError.classList.add("hide");
         formInput.classList.remove("error");
      }
      //formError.classList.add("hidden");
      else if (formInput !== document.getElementById("passwordConfirm")) {
         formError.classList.add("hide");
         formInput.classList.remove("error");
      }
   } 
   else if (thereIsAnError == true) {
      //formError.classList.remove("hidden");
      formError.classList.remove("hide");
      formInput.classList.add("error");
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});