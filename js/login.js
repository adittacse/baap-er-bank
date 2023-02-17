// step 1 : add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function() {
    // step 2 : get the email address inside the email input field
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    // step 3: get the password inside password field
    // 3.a : set id on the html element
    // 3.b : get the element
    // 3.c : get the value from the element
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    // step 4 : verify email and password
    // don't do this professionally
    if (email === "adittacse@gmail.com" && password === "12345") {
        window.location.href = "bank.html";
    } else {
        alert("Invalid User");
    }
});