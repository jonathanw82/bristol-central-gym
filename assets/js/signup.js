"use strict"

function validateForm()
{
    let warning = document.getElementById('valid-warning');
    var isValid = true;
    if($("#select").val() < 1){
        isValid = false;
    }
    if($("#fname").val() == ""){
        isValid = false;
    }
    if($("#lname").val() == ""){
        isValid = false;
    }
    if($("#email").val() == ""){
        isValid = false;
    }
    if($("#phone").val() == ""){
        isValid = false;
    }
    if($("#password").val() == ""){
        isValid = false;
    }
    if($("#tc").prop('checked') == false){
        isValid = false;
    }
    if (isValid == false){
        warning.innerHTML = `Form is not valid please check and try again`;
    }else{
        warning.innerHTML = ``;
    }
    return isValid;
}

$(document).on('click', '#submit', function(e){;
    e.preventDefault();
    console.log(validateForm());
    let Valid = validateForm();
    if(Valid){
        console.log('form true');
        $('#ThankyouModal').modal('show');
        resetForm();
    }
});
let resetForm = () => document.getElementById("signup-form").reset();