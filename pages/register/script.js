
const form = document.getElementById("registrationForm");

form.addEventListener("submit", (e)=>{

    e.preventDefault()//Evita que o navegador execute as ações padrões

    let name = document.getElementById("name").value;//Esse valor precisa ser único, validação banco de dados
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    let formValues = {
        nome : name, 
        email : email,
        senha : password
    }


    fetch("https://restaurante-backend-iu9b.onrender.com/user/add-user", {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(formValues)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

    form.reset();
    
})