// DOM Accessing

// let firstNameById = document .getElementById("first_name");

// console.log(firstNameById);  // documentin tamamindan elementi al, ne ile id ile al, id si "first_name" olan elemnti al, sonuc bize br obje dondurdu.

//--------------

// let firstNameByClassName = document.getElementsByClassName("input--style-4");

// console.log("firstNameByClassName");  // documentin tamamindan elementi al, ne ile class ile al, class lari  "input--style-4" olan elemnti al, sonuc bize br  html collaction dondurdu.   elementS = sonunda s var. anlami; bu class a sahhip olan elemnleri dondur demek. tek bir eleman dahi olsa tek elementli html collection dondurur.


// burada bize collection dondurudu, ama biz first_name e ulasmaya calisiyoruz, bu nedenle collection icinden indexleme ile ulasacagiz;

// let firstNameByClassName = document.getElementsByClassName("input--style-4")[0];

// console.log("firstNameByClassName");

//------------------

// let firstNameByName = document.getElementsByName("first_name");
// console.log(firstNameByName);  // bize node list dondurur. yine bir cok eleman dondurdugu icin bizim 'first_name' ulasmak icin yine indexleme yapmamiz gerekiyor;

// let firstNameByName = document.getElementsByName("first_name")[0];
// console.log(firstNameByName);

//------------------

// let firstNameBySelectorId = document.querySelector("#first_name");
// window.console.log(firstNameBySelectorId); aslinda hepsinin basinda bu sekilde window var.
// console.log(firstNameBySelectorId);

// let firstNameBySelectorClass = document.querySelector('.input--style-4');
// // window.console.log(firstNameBySelectorClass);
// console.log(firstNameBySelectorClass);

// !!!!!!!!!!!!!!!! document.querySelector un en buyuk ozelligi : aranan sartalara uyan ilk elemani dondurmesi. yani sadece 1 tane elemen dondurur. id den sonra en hizli calisan yontemdir.

// let fistNameBySelectorName  = document.querySelector("[name='first_name']");
// console.log(fistNameBySelectorName);

//-----------------

// let fistNameBySelectorInputName  = document.querySelector("input[name=first_name]");
// console.log(fistNameBySelectorInputName);  // css deki tum selektorleri buraya yazabliriz. ekstra bir gosterim. cok kullanilmasa da olur.

//------------------------

// let firstNameBySelectorAllClass = document.querySelectorAll('.input--style-4');
// console.log(firstNameBySelectorAllClass);  //clss na me i bu olan butun selektorleri getirir. ALL yazildigi icin. nodelist dondurur.


// let firstNameBySelectorAllClass = document.querySelectorAll('.input--style-4')[0];
// console.log(firstNameBySelectorAllClass);  //clss na me i bu olan butun selektorleri getirir. ALL yazildigi icin. nodelist dondurur. first_name i istiyorsak indexleme kullanmamiz gerekiyor.


//getElementsByClassName = html collection dondurur.
//getElementsByNamee = nodelist dondurur
//querySelectorAll = nodelist donduur


// !!!!!!!!!! NOT : col(.foreach() ile kullanabilmek icin once array haline donusturmemuz gerekiyor) > NodeList(array olarak kullanabliyourz, .foreach() ile)  > array

//-----------------------------

// property vs attribute
// birbiri yerine kullanlir. attribute= html icindeki elemnetlerin hepsi , propety=DOM objelerinde olur

// DOM ile html de ki elemenleri yakalayip manipule edecegiz.Bunun icin 2 yontemimiz var,


// let firstNameById = document .getElementById("first_name");

// console.log(firstNameById);  // burada elementi basti

// console.log(firstNameById.getAttribute("id"));  // burada attribute u basti
// console.log(firstNameById.getAttribute("class"));  // burada classi ni yakaladik. demekki class ini degistirebilirz. ID sinide yukardaki gibi.bir seyi yakalayabliyorsak bunu degistirebliriz demektir.
// // firstNameById.setAttribute("class", "redColorClass"); // inspect ten classini kontrol ettigimizde redColorClass oldugunu goruruz.
// // firstNameById.setAttribute("type", "radio");  // burada typeini kaldirmis olduk. 


//-----------------------------

// InnerHTML - innerText - textContent - value  kavramlari

//value digerlerinden farkli olarak sadece 1 html taginde kullaniliyor. digelreri hepsinde kullanilablir.  valur sadece input icerisindeki deger yakalanmak istendiginde kullaniliyor.


// let firstNameById = document .getElementById("first_name");

// let headerDiv = document.getElementById("headerId");
// console.log("innerHTML", headerDiv.innerHTML);  // icindeki elemanlari html tagiile birlikte verir. Asagidaki gibi;

// innerHTML Clarusway
// <h2 class="title">Registration Page</h2>
// <!-- <img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" /> -->

// console.log("innerText", headerDiv.innerText);  // taglarin icindeki texti verir, html taglarini gormezden gelir. Asagidaki gibi;

// innerText Clarusway
// Registration Page

// console.log("textContent", headerDiv.textContent); // aslinda tagleri aliyor ama bosluk gibi algilar. Asagidaki gibi;

// textContent Clarusway
//             Registration Page

//---------------------------

// value

// let firstNameById = document .getElementById("first_name");
// console.log(firstNameById);


// let lastNameById = document .getElementById("last_name");
// console.log(lastNameById);


// firstNameById.value = "Ella";   //sayfaya bakildigida artik first name boslugunda icinde Ella yazildigi gorulur.
// lastNameById.value = "Jhonson"  //sayfaya bakildigida artik last name boslugunda icinde Jhonson yazildigi gorulur.

//-------------------------------

// Example;

// 🔥🔥🔥🔥🔥 FULL NAME(camelcase =>RYAN DANIEL) and E-MAIL(lovercase => ryan.daniel@clarusway.com) CHALLENGE  🔥🔥🔥🔥🔥

let firstNameById = document .getElementById("first_name");
let lastNameById = document .getElementById("last_name");
let fullName = document.querySelector("#full_name");

firstNameById.value = "Ella";
lastNameById.value = "Jhonson"

fullName.value = `${firstNameById.value.toUpperCase()} ${lastNameById.value.toUpperCase()}`; 

let email = document.getElementById("email");

email.value = `${firstNameById.value.toLowerCase()}.${lastNameById.value.toLowerCase()}@cw.com`;


//-----------------------------------------

// CREATE LOGO ELEMENT

let logo = document.createElement("img") // ilk saturda elemti olustuduk
console.log(logo);

logo.setAttribute("src", "img/logo.png");  // sonra attributeleri doldurduk
logo.setAttribute("class", "headerLogo");  // sonra attributeleri doldurduk. id ve alt ta verileblir ama bunlar yeterli oldugu icin yazmadik. 

//simdi bu image i nerye ekleyecegimize karr verip ekliyoruz;

let headerDiv = document.getElementById("headerId");

//1.yol;
// headerDiv.appendChild(logo);  // logoyu child olarak headerDiv e ekle demek.

//2.yol;   html tag ini string olarak vermek
headerDiv.innerHTML += '<img src="img/logo.png" alt="Bank logo" class="nav__logo" id="logo" />';  // burada += olmasinin nedeni var olan elementi ezmesin diye. eger sadece = konulursa baslik(registration page) ezilecekti yani sayfada gorunmeyecekti. burada ki + append manasindadir.