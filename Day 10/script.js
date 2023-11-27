function validate() {
    
    u = document.getElementById("user").value
    p = document.getElementById("password").value

    if (u == "jbk" && p == "123") {

        window.location.href = "Login.html"

    } else {

        document.querySelector('#errormsg').innerText = "Invalid Username or Passowrd"

    }
}