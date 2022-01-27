// LOOPS

// 1- while
// 2- for
// 3-loop
// 4- do....while


//--------------------------

// 1- while

// let i = 0;   // burada i = 10 girilise sum=0 cikar. cunku while loop calismaz.
// let sum = 0;

// while (i < 6) {
//     sum += i
//     i++      // condition i kontrol etmek onemli. buraya i-- yazilirsa sonsuz donguye girer.
// }

// console.log(sum);


//---------------------------------------

// 2- do while
// while dan tek farki do burada mutlaka calisir, sonra while yapisinia gecer.

// let i = 10;   
// let sum = 0;

// do {
//     sum += i  // i burada 10 , sum 11 oldu
//     i++   
// } while (i < 6);  // i = 11 olduug icin calismadi. sum=10 i =11 degerini aldi.
// console.log({sum},{i});

//-------------------


// let i = +prompt('Bir sayı giriniz : ')


// isNaN(i)  // burada kullanicidan alinan deger isnan ise true cikti veriyor. isnan = numara degildir demek.


// console.log(isNaN(i), {i});  // burada i ye 5 (sayi) girilirse sonuc = false , 5 cikar. cunku 5 isNan degil.


//-------------------------------

// let i = +prompt('Bir sayı giriniz : ')

// while (isNaN(i)) {
//     i = +prompt('Bir sayı giriniz : ')
    
// }
// console.log("bir sayi girdiniz");

//----------------------------


// let i;
// do {
//     i = +prompt('Bir sayı giriniz : ')
// } while (isNaN(i));

// console.log(`Girilen değer ${i}`);


//------------------------------

//sonsuz dongu yapisi

// let i = 0;

// while (i<6) {
//     console.log(i);
//     i++                       // i burda unutulursa sonsuz donguye girer.
//                 
// }


//sonsuz dongu yapisi

// let i = 0;

// while (true) {
//     console.log(i);
//     i++                      
//     if (i == 6) break;             // burda unutulursa sonsuz donguye girer.
// }

//--------------------------------------

// FOR 

// let i = 0;

// for (i; i < 10; i++) {  // en bastaki i yi , yani noktali virgulden onceki i yi yazmak zorunda degiliz, fakat noktali virgulu yazmak zorundayiz.    i+= yi buraya yazmak zorunda degiliz, clg nin altina yazabliriz.
    
//     console.log(i);

// }
// console.log({i});

// yukardakini i siz ve i++ nin clg altina yazilmis ornegi;

// for (; i < 10;) {
//     console.log(i);
//     i++
// }

// console.log({i});