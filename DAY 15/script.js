function ValidateEmail() {
    let a = document.getElementById("email").value;

    var emailRegax = /\S+@\S+\.\S+/.test(a);

    if (!emailRegax) (
        document.getElementById("p").innerHTML = "Invalid Input"
    )
    else {
        document.getElementById("p").innerHTML = "  Login successful "
    }
}

function btn() {
    let h = document.getElementById('head')

    if (h.innerText == "Day 15") {
        h.innerText = h.innerText = "Learning HTML"
    }

    else {
        h.innerText = h.innerText = "Day 15";
    }


}

