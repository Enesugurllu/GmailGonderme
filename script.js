const scriptURL = '<SCRIPT_URL>' 
const form = document.forms['submit-to-google-sheet'] 
const msg = document.getElementById("msg")

form.addEventListener('submit', e => { 
    e.preventDefault() 
    fetch(scriptURL, { method: 'POST', body: new FormData(form)}) 
    .then(response => {
        msg.innerHTML = "Email Gönderdiğiniz İçin Teşekkür Ederiz!!"
    }) 
    .catch(error => console.error('Error!', error.message))
}) 
