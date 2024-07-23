function handleSubmit(e) {
    e.preventDefault();
    const fullName = document.getElementById("fname").value;
    const fullNameError = document.getElementById("fullNameError");

    const phone = document.getElementById("phone").value;
    const phoneError =document.getElementById("phoneError");

    const email = document.getElementById("email").value;
    const emailError =document.getElementById("emailError");

    const password = document.getElementById("password").value;
    const passwordError =document.getElementById("passwordError");

    const confirmpassword = document.getElementById("confirmpassword").value;
    const confirmpasswordError =document.getElementById("confirmpasswordError");


    let name_regex = /^[a-zA-Z]+$/;
    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let password_regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;


    if(fullName.length < 3){
        fullNameError.style.display = 'block';
        fullNameError.style.color = 'red';
        fullNameError.innerHTML = '<b>Name should contain minimum 3 charactors';
    }

    let name_val = name_regex.test(fullName);
    console.log(name_val);
    if(!name_val)
    {
        fullNameError.style.display = 'block';
        fullNameError.style.color = 'red';
        fullNameError.innerHTML = '<b>Full name should not contain numbers';
    }
    else{
        fullNameError.style.display = 'none';
    }


    if(phone.length != 10){
        phoneError.style.display = 'block';
        phoneError.style.color = 'red';
        phoneError.innerHTML = '<b>Phone number must contain 10 numbers';
    }

    if(isNaN(phone)){
        phoneError.style.display = 'block';
        phoneError.style.color = 'red';
        phoneError.innerHTML = '<b>Phone number should only contain numeric values';
    }

    let email_val = email_regex.test(email);

    if(!email_val){
        emailError.style.display = 'block';
        emailError.style.color = 'red';
        emailError.innerHTML = '<b>Please enter a valid email address';
    }
    else{
        emailError.style.display = 'none';
    }

    let password_val = password_regex.test(password);

    if(!password_val){
        passwordError.style.display = 'block';
        passwordError.style.color = 'red';
        passwordError.innerHTML = '<b>Password must contain min 1 uppercase,lowercase,special charactor and must contain minimum 8 charactors length';
    }
    else{
        passwordError.style.display = 'none';
    }

    if(confirmpassword != password){
        confirmpasswordError.style.display = 'block';
        confirmpasswordError.style.color = 'red';
        confirmpasswordError.innerHTML = '<b>Password and confirm password must be same';
    }

    console.log("Form Submitted");
}