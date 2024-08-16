
function checkEmail() {
    let email = document.getElementById('email').value;
    let confirmation = document.getElementById('confirmation').value;

    if (email !== confirmation) {
        alert("Try again! Email Must Match!");
    }
    else {
        alert("Email Matches! Success!")
    }

}


  

   


