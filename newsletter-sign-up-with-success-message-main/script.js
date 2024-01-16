
let main = document.querySelector('.signup')
let form = document.querySelector('.signup__form--form');
let input =  form.querySelector('#email');
let error = document.querySelector(".error");
let destinatary =  document.querySelector('.destinatary');
let success =  document.querySelector('.success');


const valid_email = (email) => {
    const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return email_pattern.test(email)
}



 form.addEventListener('submit', (e)=>{
     e.preventDefault()
     if(!valid_email(input.value)){
         error.classList.remove('hidden');
         error.textContent = 'Valid email required'
         input.style.background =  "hsl(7, 55%, 80%)"
         input.style.color =  "hsl(4, 100%, 45%)"
         e.preventDefault();
     } else {
         main.style.display = "none";
         success.style.display = "block";
         destinatary.textContent = input.value;
     }
 })