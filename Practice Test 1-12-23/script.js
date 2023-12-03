function sum(a, b) {
    sum = a + b;
    document.getElementById("sum").innerText = sum
}

sum(10, 20)

function Click() {
    document.getElementById("clickbtn").style.backgroundColor = "yellow";


}

function pictureChange() {
    document.getElementById(image).src = "https://images.app.goo.gl/ZJTifnxu6nNx8MD5A";
}

var image = document.querySelector('#image');

function pictureChange() {
    image.src = "IMG/2.png";
}