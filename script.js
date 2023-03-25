// La recupertion des elements
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// Evenements
form.addEventListener('submit', e=>{
    e.preventDefault() // je verifies d'abord avant de faire la soumission

    form_verify(); // cette fonction va verifier tout
})

// Fonctions
function form_verify() {
    //Obtenir toutes les valeurs des inputs
    const userValue = username.value.trim() // trim qui va enlever les espace du debut et de la fin de ma valeur.
    const emailValue = email.value.trim()
    const pwdValue = password.value.trim()
    const pwd2Value = password2.value.trim() 


// Username verify
if(userValue === ""){
    let message = "Username ne peut pas etre vide";
   setError(username,message); // je vais appeler une fonction qui permet de gerer les erreurs
}else if(!userValue.match(/^[a-zA-Z]/)){
    let message = "Username doit commcer par lettre";
    setError(username,message)
}else{
    let letterNum = userValue.length;
    if(letterNum < 3){
    let message = "Username doit avoir moins 3 caracteres";
    setError(username,message)
}else{
    setSuccess(username);
}
}
 // email verify
 if(emailValue === ""){
    let message = "Email ne peut pas etre vide";
    setError(email,message);
 }else if(!email_verify(emailValue)){
    let message = "Email non valide";
    setError(email,message); 
 }else{
    setSuccess(email)
 }

 // password verify
 if(pwdValue ===""){
    let message = "Le password ne peut pas etre vide";
    setError(password,message)
 }else if(!password_verify(pwdValue)){
    let message = "Le mot de passe est trop faible (8 a 12 caracteres)";
    setError(password,message)
 }else{
    setSuccess(password);
 }
 //pwd confirm
 if(pwd2Value ===""){
    let message = "Le password confirm ne peut pas etre vide";
    setError(password2,message)
}else if(pwdValue !== pwd2Value){
    let message = "Les mot de passes  ne correspondent pas";
    setError(password2,message)
}else{
    setSuccess(password2)
}
}
function setError(elem, message){
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');
    
    // ajouter du message d'erreur
    small.innerText = message 

    // Ajout de la classe error
    formControl.className = "form-control error";

}
function setSuccess(elem){
    const formControl = elem.parentElement;
    formControl.className ='form-control success'
}
function email_verify(email){
    /*
     *r_rona.22-t@gmail.com
       /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    */
   return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
function password_verify(password){
 return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(password);
  // /^(?=*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(password);
}