document.getElementById("pizza-form").onsubmit = () => {

    let isValid = true;

    //Clear all errors
    clearErrors();

    //Validates first name
    let fname = document.getElementById("fname").value.trim();
    if(fname === "") {
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }

    //Validates last name
    let lname = document.getElementById("lname").value.trim();
    if(lname === "") {
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }

    //Do not submit the form if data is in-valid
    return isValid;
};

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i=0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}