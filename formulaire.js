"use strict"
//  je verifie que le formulaire est rempli


let nom = document.getElementById('nom');
let nomInv = document.getElementById('nomInv');
let email = document.getElementById('email');
let emailInv = document.getElementById('emailInv');
let emailV = /^[a-zA-Z0-9\.-_]+[@]{1}[a-zA-Z0-9\.-_]+[.]{1}[a-z]{2,10}$/g;

let password = document.getElementById('password');
let passwordInv = document.getElementById('passwordInv');
let passwordV = /[a-zA-Z0-9]{6,}/;

let passwordR = document.getElementById('passwordR');
let passwordRinv = document.getElementById('passwordRinv');
let passwordRv;

// validation du nomle champ nomne doit etre vide et doit avoir au moin 3
nom.addEventListener('change', function() {
    //lorsqu'on per le focus passe la valeur saisie a  la fonction validEmail
    validname(this)
});
let validname = function(inputnom) {
    // creationde la regex
    let nomrgx = /[A-Za-z]{3,}/;
    // verificationq que les donné saisiecorenpondent à la regex
    let testnom = nomrgx.test(inputnom.value);
    console.log(testnom);
    let nomInv = document.getElementById('nomInv');
    if (testnom == false) {
        nom.style.border = '2px solid red';
        nomInv.textContent = 'votre nom doit avoir plus de 3 caracteres';
        nomInv.style.color = 'red';
        return false;

    } else {
        nom.style.border = '2px solid green'
        nomInv.textContent = '';
        return true;
    }
}

email.addEventListener('change', function() {
    //lorsqu'on per le focus passe la valeur saisie a  la fonction validEmail
    validEmail(this)
});
let validEmail = function(inputemail) {
    let emailV = /^[a-zA-Z0-9\.-_]+[@]{1}[a-zA-Z0-9\.-_]+[.]{1}[a-z]{2,10}$/g;
    // verication de l 'email saisie
    let testemail = emailV.test(inputemail.value);
    console.log(testemail);
    if (testemail == false) {
        email.style.border = '2px solid red';
        emailInv.textContent = 'format incorrect xxxxx @xxxxx.com ';
        emailInv.style.color = 'red';
        return false;

    } else {
        email.style.border = '2px solid green'
        emailInv.textContent = '';
        return true;
    }

}
password.addEventListener('change', function() {
    //lorsqu'on per le focus passe la valeur saisie a  la fonction validPassword
    validPassword(this)
});

let validPassword = function(inputPassword) {
    let passwordV = /[a-zA-Z0-9]{6,}/;
    // verication de l 'email saisie
    let testpassword = passwordV.test(inputPassword.value);
    console.log(testpassword);
    if (testpassword == false) {
        password.style.border = '2px solid red';
        passwordInv.textContent = 'mot de passe 6 caractere au moin';
        passwordInv.style.color = 'red';
        return false;

    } else {
        password.style.border = '2px solid green'
        passwordInv.textContent = '';
        return true;
    }

}

passwordR.addEventListener('change', function() {
    //lorsqu'on per le focus passe la valeur saisie a  la fonction validPassword
    validPasswordR(this)
});

let validPasswordR = function(iv) {
    let mdp1 = password.value;
    let mdp2 = passwordR.value;


    if (mdp1 != mdp2) {
        passwordR.style.border = '2px solid red';
        passwordRinv.textContent = 'les mot de passe ne sont pas identique';
        passwordRinv.style.color = 'red';

        return false;

    } else {
        passwordR.style.border = '2px solid green'
        passwordRinv.textContent = '';
        return true;
    }

}




bouton.addEventListener('click', function(e) {
    e.preventDefault();
    if (nom.validity.valueMissing) {
        // e.preventDefault();
        nom.style.border = '2px solid red';
        nomInv.textContent = 'votre nom doit avoir plus de 3 caracteres';
        nomInv.style.color = 'red';
    }
    if (email.validity.valueMissing) {
        // e.preventDefault();
        email.style.border = '2px solid red';
        emailInv.textContent = 'format incorrect xxxxx@xxxxx.com';
        emailInv.style.color = 'red';
    }
    if (password.validity.valueMissing) {
        // e.preventDefault();
        password.style.border = '2px solid red';
        passwordInv.textContent = 'mot de passe 6 caractere '
        passwordInv.style.color = 'red';
    }
    if (passwordR.validity.valueMissing) {
        // e.preventDefault();
        passwordR.style.border = '2px solid red';
        passwordRinv.textContent = 'les deux mode passe sont differents ';
        passwordRinv.style.color = 'red';
    }
});

bouton.addEventListener('click', function(e) {
    e.preventDefault();
    if (validname(nom) && validEmail(email) && validPassword(password) && validPasswordR(passwordR)) {
        form.submit();
        alert('validation');
    }


})