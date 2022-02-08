// DOM recap, DOM traversing

// let navbarPathItemText = document.getElementsByClassName("nav__item")[0].innerText;
// console.log(navbarPathItemText); // path yazisini cikardik

// let navbarPathItemText2 = document.getElementsByClassName("nav__link")[0].innerText;
// console.log(navbarPathItemText2);  // path yazisini cikardik,bir tane eleman dondursade o elemana ulasmak icin index vermek zorundayiz


// let navbarPathItemText3 = document.getElementsByClassName("nav__links")[0].children[0].innerText;  // ul lerin icindeki li lere , bunlarin cocuklari oldugu icin children yazilarakta ulasilablir, ilk elemani istedigimiz icin yine indexleme yapiyoruz
// console.log(navbarPathItemText3); // path yazisini cikardik, 

// let navbarPathItemText4 = document.getElementsByClassName("nav__links")[0].firstElementChild.innerText;   // 1 tane elemani olsada html col. donduruyor. ve bu elemana ulasmak icin yine indexleme yapmamiz gerekiyor.
// console.log(navbarPathItemText4); // sadece id ve query selectorde bunu yapmiyoruz?? neyi yapmadimgiiz soylemedi!

// buraya kadar 4 farkli yontem ile ayni degere ulasmis olduk.
//classname = collection doner
//queryselectorall ve getelementsbyname = nodelist doner

//-------------------------------------

// path in li sone ve instructors in li sine ulasma yollari;
//not: queryselector ve queryselectorall da class larda . nokta, id lerde # kullanilma zorunlulugu vardir.

// let navbarPathsLi = document.querySelector(".nav__item"); // burada ilk eleman icin index yapmaya [0] yazmaya gerek yok, 2. yontem olarak firstElemanChild ta yazilablir.
// console.log(navbarPathsLi);

// let nevbarInstructorsLi = document.querySelectorAll(".nav__item")[1]
// console.log(nevbarInstructorsLi);  // nodelist dondurur

// let nevbarStudentsLi = document.querySelectorAll(".nav__item")[2]
// console.log(nevbarStudentsLi); 

//----------------------------------------------------

//EVENTS

// Event icin 1- elemani yakala

// 1-
// let navbarPathsLi = document.querySelector(".nav__item");
// console.log(navbarPathsLi);


// // LOAD EVENT i
// // window.addEventListener("event", func()); anlami= event tetiklendigin calisacak olan fun() i yaziyoruz.
// window.addEventListener("load", ()=>{  // load eventi sayfanin yuklanmesi olarak tanimlayablirz. yani sayfa her yeniden yuklandiginde bu func i calistir demek
//     console.log("window loaded");
// });

// yukaridaki ornegi onload ile tnaimlama;

// // window.onload = func()
// window.onload = () => {
//     console.log("window onloaded")
// }

//CLICK EVENT i


// let navbarPathsLi = document.querySelector(".nav__item");
// console.log(navbarPathsLi);

// navbarPathsLi.addEventListener("click", (e)=>{  // burada parantez icine genelde events in e si de yazilir. cunku istersek events i fonksiyonun icine de yazablirz.
//     alert(navbarPathsLi.innerText + " clicked"); // buradaki ornekte yazilan kodun anlami ; ilk basta yakaladigiiz eleman olan paths e tiklandiginda alert ver demek.
// });

// 3. ve 4. eventlistener ekleme şekli ödev

//----------------------------------------------------------------

// asagidaki ornekte instruxtorsa mause geldiginde over me yazmasini istiyruz,


// 1- ilk olarak elemani yakala!
// let navbarInstructorsLi = document.querySelectorAll(".nav__item")[1];
// console.log(navbarInstructorsLi);

// navbarInstructorsLi.addEventListener("mouseover", ()=>{
//     navbarInstructorsLi.innerText = "Over Me!";  // ilk yaziyi degistirdik
//     navbarInstructorsLi.style.color = "green";  // sonra rengini degistirdik
//     navbarInstructorsLi.style.fontSize = "1.7rem"; //sonra da boyutunu degistirdik, digerleri ile yani boy olsun diye
// });

// // burada da mause u cektigimizde tekrar duzelmesi icin;

// navbarInstructorsLi.addEventListener("mouseout", ()=>{
//     navbarInstructorsLi.innerText = "Instructors";
//     navbarInstructorsLi.style.color = "#444444";
//     navbarInstructorsLi.style.fontSize = "1.7rem";
// });

//----------------------------------------------------------------


// // // 🔥🔥🔥🔥🔥  rgb random color(rgb(255,255,255) onclick of Students Navbar (CODE CHALLENGE)  🔥🔥🔥🔥🔥 
//istenilen ; students navbarina tiklandikca random olarak renginin degstirilmesi isteniyor.

// 1- ilk olarak her zaman elemani yakala,
// let navbarStudentsLi = document.querySelectorAll(".nav__item")[2];
// console.log(navbarStudentsLi);

// once random sayilari olusturmamiz , sonra bu sayilari random color olusturmamiz  gerekiyor.
//math.random = 0-1 arasi (ondalikli) random sayi uretir
// math.floor = asagiya yuvarlar
//math.round = en yakin nereye ise oraya yuvarlar
//math.seal = yukari yuvarlar

// const randomNumber = () => Math.round(Math.random() * 255);
// const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

// buraya kadar kod tamam, fakat tiklandiginda degismesi icin asagidaki kisminda yazilmasi gerekiyor,  fakat burada bubbling mevcut. yani link e tiklandiginde ul ve header da etkileniyor bunu engellemke icin , istenilen dom elementine event.stopPropagation(); ekleniyor. bublingin tersi cepturing denir.

//li ye tanimlamak icin
// navbarStudentsLi.addEventListener("click", (event)=>{
//     //stop bubbling
//     event.stopPropagation();
//     navbarStudentsLi.style.backgroundColor = randomColor();
// });

// //ul ye tanimlamak icin
// navbarStudentsLi.parentElement.addEventListener("click", (event)=>{
//     event.stopPropagation();
//     navbarStudentsLi.parentElement.style.backgroundColor = randomColor();
// });

// //header a da tanimlamak icin
// navbarStudentsLi.parentElement.parentElement.addEventListener("click", (event)=>{
//     navbarStudentsLi.parentElement.parentElement.style.backgroundColor = randomColor();
// });

//---------------------------------------------

// last name de 40 karakter sinirlamasi yapmak istiyoruz.

// 1- elementleri yakala;
let lastName = document.querySelector("input[name = last_name]");
let charSpan = document.getElementById("charCount"); // yazilacagi yeri span ile html de belirledik

// keyup ; elimi basip kaldirdigimde
//keypress ; basildigide
// keydown ; ilk basildiginda, tiklar tiklamaz

lastName.addEventListener("keyup", ()=>{
    charSpan.innerText = lastName.value.length + "/40";
});

// last name input value 0 olduğunda span gözükmesin!! --> Homework <--

//-------------------------------------------------------------


//dogum tarihini sectigi zaman yasi ekrana basmanisin istiyouz

let birthdayPicker = document.querySelector('[name=birthday]');

birthdayPicker.addEventListener("change", () =>{
    console.log(birthdayPicker.value);
    console.log(new Date());
    let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
    alert("You are " + year + "years old.");
});

birthdayPicker.onchange = () =>{   // eskki bir event, kullanim olarak yukardakinin tercih edilmesi tavsiye ediliyor
    console.log(birthdayPicker.value);
    console.log(new Date());
    let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
    alert("You are " + year + "years old.");
}










