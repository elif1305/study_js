let nevbarpathitemtext = document.getElementsByClassName("nav__item")[0].innettext


let navbarpathitemtext3 = document.getElementsByClassName("nav__items")[0].children[0].innertext


let nevbarpathitemtext4 = document.getElementsByClassName("nav__link").[0].firstelementchild;


let navbarpathsli = document.querySelector(".nav__item")

let navbarinstructorli = document.querySelectorAll(".nav__item");


let navbarpathlis = document.querySelector(".nav__bar");

window.addEventListener("load", ()=>{
    console.log("window loaded");
} )


let navbarpathsli = document.querySelector(".nav__item");

navbarpathsli.addEventListener("click", (e )=>{
    alert(navbarpatsli.innertext + " clicked")
})

for (const key of Object.keys(person){
    console.log(key);
})

for (const key of Object.values(person){
    console.log(key);
})

for (const [key, value] of Object.entries(person){
    console.log(`${key} : --> ${value }`);
})


