

arr = [2,3,"Mayur",5,6]

console.log(arr[2])

document.getElementById("abc").innerText= arr;

let images = ["1.jpg", "2.png","3.jpg"]
c=0;
function ChangeImage(){

    c = (c+1) % images.length;

    document.getElementById("img").innerHTML = "<img src='"  +  images[c]+ "'>";
}

