function handleSubmit(e) {
    e.preventDefault();
    const fullName = document.getElementById("fname").value;
    const fullNameError = document.getElementById("fullNameError");

    const phone = document.getElementById("phone").value;
    const phoneError =document.getElementById("phoneError");

    const email = document.getElementById("email").value;
    const emailError =document.getElementById("emailError");

    let name_regex = /^[a-zA-Z]+$/;
    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if(fullName.length < 3){
        fullNameError.style.display = 'block';
        fullNameError.style.color = 'red';
        fullNameError.innerHTML = '<b>Full name should contain minimum 3 charactors';
    }
    //console.log(name_regex.test(fullName));
    //console.log(name_regex.test(fullName));
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


    console.log("Form Submitted");
}