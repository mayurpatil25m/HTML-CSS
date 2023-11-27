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
day = "Wednesday"


switch (day) {
    case "Monday": console.log("Monday"); break;
    case "Tuesday": console.log("Tuesday"); break;
    case "Wednesday": console.log("Wednesday"); break;
    case "Thursdayday": console.log("Thursday"); break;
    case "Friday": console.log("Friday"); break;
    case "Saturday": console.log("Saturday"); break;
    case "Sunday": console.log("Sunday"); break;
    default: console.log("Entered the correct choice");
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

