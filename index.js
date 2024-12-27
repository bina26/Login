let loginForm = document.getElementById("login");

loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    let name = document.getElementById("uname");
    let uname = name.value;

    let lname = document.getElementById("lname");
    let llname = lname.value;

    let mail = document.getElementById("email");
    let email = mail.value;

    alert("Name: " + uname + llname + "\nEmail Id: " + email);
})
