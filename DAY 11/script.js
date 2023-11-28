//alert("This is my JS file")

//confirm("Do you want to continue")
// console.log(a)

// let a = confirm("Do you want to continue")

// if (a == true) {
//     window.location.href = "login.html"
// }
// else {
//     document.getElementById('msg').innerText = "You Cancled to continue"
// }

// let a = prompt("Enter your name")

// document.getElementById('msg').innerText = a

// console.log(a)


console.log("Switch Case")


day = prompt()

let result = day.toLowerCase();




switch (result) {
    case "monday": document.getElementById('day').innerHTML= "Monday"; break;
    case "tuesday": document.getElementById('day').innerHTML= "Tuesday"; break;
    case "wednesday": document.getElementById('day').innerHTML= "Wednesday"; break;
    case "thursdayday": document.getElementById('day').innerHTML= "Thursday"; break;
    case "friday": document.getElementById('day').innerHTML= "Friday"; break;
    case "saturday": document.getElementById('day').innerHTML= "Saturday"; break;
    case "sunday": document.getElementById('day').innerHTML= "Sunday"; break;
    default: document.getElementById('day').innerHTML= "Please enter valid choice!!";
}

console.log("Continue Statement")
for (i = 0; i < 5; i++) {
    if (i == 2) {
        continue;
    }
    else {
        console.log(i);
    }

}

console.log("Break Statement")
for (i = 0; i < 5; i++) {
    if (i == 2) {
        break;
    }
    else {
        console.log(i);
    }

}

