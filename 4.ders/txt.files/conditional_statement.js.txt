// Conditional statement 

//  1- id statement
//  2-else
//  3-else if
//  4-switch

// ------------------

// let score = 51
// if (score >= 50) {
//     console.log("tebrikler, gectiniz");
// }

// ------------------

// let score = 49
// if (score >= 50) {
//     console.log("tebrikler, gectiniz"); // herhangi bir else blogu tanimlamadigimiz icin hic bir sey dondurmeycek. hata verdirmez.
// }

// console.log('kod sonu') // if blogundaki kod calismazsa bir sonraki koda gecer.

// ------------------

// let score = 52
// if (score >= 50) console.log("tebrikler, gectiniz"); 
//    // eger tek cimlelik if blogu yaziyorsak parantezleri kaldirablirz.

// console.log('kod sonu') 

// ----------------------

// let score = 52

// let grade = score >= 50  // burada bir atama yapip , atanan degeri if in icine yazarakta yapabliriz.bu deger ya true ya false bir deger gonderir.

// if (grade) console.log("tebrikler, gectiniz"); 
 
// ---------------------

//diger bir ornek :
// let score = 52

// let grade = score >= 50  

// if (grade) console.log(`tebrikler, notunuz ${score} gectiniz`); 

// -----------------------

// let score = prompt('notunuzu giriniz')  // input alarakta yapabliriz.Burada prompt un onune + koymamiza gerek yok cunku js icin 51 = "51" dir.

// let grade = score >= 50  

// if (grade) console.log(`tebrikler, notunuz ${score} gectiniz`); 

// --------------------

// let score = 52  // burde 49 ile dene

// let grade = score >= 50  

// if (grade) {
//     console.log(`tebrikler, notunuz ${score} gectiniz`)
    
// } else {
//     console.log('uzgunum kaldiniz')
    
// }

// --------------------

// let score = 90  // 48, ve 75 i de dene.

// if (score>80) {
//     console.log("tebrikler cok basarili bir ogrencisniz")

// } else if (score >=50){
//     console.log(`tebrikler, notunuz ${score} gectiniz`)

// } else {
//     console.log('uzgunum kaldiniz')
// }

//----------------------

// ic ice if else yapisi
// let score = 75  // 81 i 49 u dene

// if (score>=50) {
//     if (score> 80) {
//         console.log("tebrikler cok basarili bir ogrencisniz")

//     } else
//      console.log("tebrikler gectiniz")

// } else {
//     console.log('uzgunum kaldiniz')
// }

//----------------------

// Ternary if  : js de cok kullanilir

// let score = 49;

// score >= 50 ?  console.log("tebrikler gectiniz") : console.log('uzgunum kaldiniz') ;

// < sart > ? <if statement :sarti sagliyorsa bunu calistir> : <else statement :sarti saglamiyorsa bunu calistir > 

// ----------------------

// nasted (icice) ternary : okumasi zor oldugu icin  kullanimi tavsiye edilmez

// let score = 49; // 81 -79  dene


// score >= 80 ?   console.log("tebrikler cok basarili bir ogrencisniz") : (score >= 50 ?  console.log("tebrikler gectiniz") : console.log('uzgunum kaldiniz'))


// ----------------------

// SWITCh STATEMENT

// bir degeri baska bir deger icinde aramak

// birebir arana degeri gordgu zaman calisir. yani Pensil ile pensil ayni degildir. 

// let text;
// let fruits;  // herhangi bir sey girilmezse default deger calisir.

// switch (fruits) {
//     case "Banana":   // burada banana yazilirsa bu calismaz.
//         text = "Banana is good"
//         break;

//     case "Orange":
//             text = "i am not a fan of orange"
//         break;

//     case "Apple":
//             text = "How you like them apples?"
//         break;


//     default:
//         text = "i have never heard of that fruit..."
//         break;
// }

// console.log(text);

// ---------------

// let text;
// let fruits = "banana"   // burada banana yazildigi icin bu calismaz. default deger calisir.

// switch (fruits) {
//     case "Banana":   
//         text = "Banana is good"
//         break;  // burada break konulmaz bir alttaki degere gecer. yani orange calisir.

//     case "Orange":
//             text = "i am not a fan of orange"
//         break;

//     case "Apple":
//             text = "How you like them apples?"
//         break;


//     default:
//         text = "i have never heard of that fruit..."
//         break;
// }

// console.log(text);

// -------------------

// let text;
// let fruits = "BanAna"   // burada banana yazilirsa bu calismaz. default deger calisir. bu sorunu asmak icin:; toLowerCase .
// // eger "BaN-ana" yazilirsa buna bise yapamaz, default deger calisir.

// switch (fruits.toLowerCase()) { // burada yazilani herturlu kucuk harfe cevirecegi icin asagidaki degerleri de kucuk harfle yazmak gerekiyor.

//     case "banana":   
//         text = "Banana is good"
//         break; 

//     case "orange":
//             text = "i am not a fan of orange"
//         break;

//     case "apple":
//             text = "How you like them apples?"
//         break;


//     default:
//         text = "i have never heard of that fruit..."
//         break;
// }

// console.log(text);

//-------------------

// let text;
// // let fruits = "Lemon"  
// let fruits = prompt('enter your favorite fruit :')  // kullanican almak icin

// switch (fruits.toLowerCase()) { 

//     case "banana":   
//         text = "Banana is good"
//         break; 
    
//     case "Lime":
//     case "lemon":   // eger ayni sonuc cikmasi isteniyorsa birden fazla case ekleneblir.
//     case "orange":
//             text = `i am not a fan of ${fruits.toLowerCase()}`
//         break;

//     case "apple":
//             text = "How you like them apples?"
//         break;


//     default:
//         text = "i have never heard of that fruit..."
//         break;
// }

// console.log(text);

//------------------------------------

// let days = prompt("gunu giriniz")

// switch (days) {
//     case "pazartesi":
//     case "carsamba":
//     case "cumartesi":
//     case "persembe":
//         text = "in class var";
//         break;

//     case "sali":
//     case "cuma":
//         text = "teamwork var";
//         break;

//     case "pazar":
//         text = "tatil";
//         break;

//     default:
//         text = ("yanlis gun girdiniz");
// }

// console.log(text);

