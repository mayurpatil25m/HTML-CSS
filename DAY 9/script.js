a = "Welcome Js"

console.log(a)

//FUNTION TESTING
function avg(a,b){
    console.log(a+b)
}

avg(1,2)

function validfun(name,age){
    console.log("Name = " + name + ", Age = " + age)
}

validfun("Mayur",24)

//FOR LOOP

for(i=1;i<=5;i++){
    console.log(i)
}

fruits = ["Mango", "Banana","Orange","Pineapple","Watermelon"]

for ( frt in fruits){

    let f = document.getElementById("IdOfFruit")

    let l = document.createElement("li") 

    l.textContent =  fruits[frt];  


    f.appendChild(l)



    console.log(fruits[frt])
}

cities=["Pune", "Mumbai", "Nasikh", "Delhi", "Nagpur"]

for (var city of cities){           //ECMAScript 6 Feature
    
    let f = document.getElementById("IdOfCities")

    let l = document.createElement("li") 

    l.textContent =  city;  


    f.appendChild(l)

    console.log(city)
}





















