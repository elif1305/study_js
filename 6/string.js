// strings

// let str1 = 'Hello '
// let str2 = "World"
// let str3 = `${str1+str2}`

// console.log(typeof str1, str1);
// console.log(typeof str2, str2);
// console.log(typeof str3, str3); 

//----------------------

//  let str2 = "World"
// let str4 = new String("A string object")

// // console.log(typeof str4); //object
// console.log(str4);
// console.log(str2); 

//-------------------------

// concat()

// var s1 = "Hello ";
// var s2 = "World!";
// var s3 = s1.concat(s2);   // s1 e s2 ekleneecek diyor.
// console.log(s3);
// console.log(s3.concat(' 2022 ', s1));
// console.log({s1},{s2}); 

//---------------------------------

//charAt

//  var a = 'primitive.\nlerin properti veya metodu olmaz.'

// console.log(a);
// //console.log(a.charAt()) //boş girilirse ilk indexi getirir
// console.log(a.charAt(9));
// // console.log(a.charAt(10));  // \n yi tek karakter olarak sayiyor ve bos ceviriyor.
// // console.log(a.charAt(11));
// // console.log(a.length);
// // console.log(a.charAt(43));
// console.log(a.charAt(a.length-1));   // son indekse ulasmak icin

// console.log(a[a.length-1]);  

//=================================


var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

//includes

//  var n = str.includes("simply");
// var n1 = str.includes("Simply");
// console.log(n);
// console.log(n1);

//---------------------------

//indexof 


/* var n = str.indexOf("simply");
console.log(n);

console.log(str.indexOf('xa')); // -1 burda icersinde xa gecmiyor demek.
console.log(str.indexOf("Simply")); // -1

console.log(str.indexOf('m')); // ilk bulduğu sonucu döndürür

console.log(str.lastIndexOf('m')); // sondan başlar ilk bulduğu sonucu döndürür
 */


//replace

//  var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

// console.log(s.replace('dummy', 'hello'));   // dummy i al hello yaz
// var str = s.replace('dummy', 'hello')    
// // console.log(s.replace('uuuuuu', 'hello'));   // icinde olmayan bise yaptigimizda hic bise degiistirmez.

// console.log(s);  // orjinal stringi degistirmez/ degskene atanirsa degisir.
// console.log(str); 

//console.log(s.replace(/Dummy/i,'Hello')); //regex ile case sensitive kaldirilir ve degisiklik yapar.  /Dummy/i seklinde regex yazilisi

//console.log(s.replace(/e/g, '--')); //regex tümünü değiştir. 

//search

// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry. text";


// console.log(s.indexOf('text'));  // ilk text i getiri, t nin baslagini indexi getirir
// console.log(s.indexOf('text', 30)); // index numarasi 30dan sonrasina bak demek . indexof ta regex kullanilmiyor
// console.log(s.search('Text')); //-1 dondurur casesensitive
// console.log(s.search(/Text/i));  // regex ile casesensitivve ozellingi kaldirma


// slice  // stringi istedigimiz araliklarda boluyor.

// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

// // console.log(s.slice(0,5));   // son rakam dahil edilmez/
// // console.log(s.slice(6)); // tek rakam verilirse verilen yerden itibaren sonuna kadar alir.
// console.log(s.slice(-31, -10));
// console.log(s.slice(-31, 76)); // yazma yonu hep bastan sonadi, - index numarrasi verilsede soldan saga dogru dondurur.
// console.log(s.slice(54, 76));
// yanlis index verilrise bos dondurur.


//split
// verdigimiz araliga gore stringi aliyor ve array olarak donduruyor.

// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

// // console.log(s.split (' ')); // kelime kelime
// console.log(s.split ('')); //harf harf
// console.log(s.split ()); // komple tek array yapar


//substr
/* 
var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

console.log(s.substr(22,10));  // index numarasi 22 den 10 taneisni yazdir
console.log(s.substr(22));
 */

//substring

// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

// console.log(s.substring(22,33));   // slice dan farkli olarak negatif index kullanimiyor. 
// console.log(s.substring(33,22)); // terste verilse solsan saga dondurur
// console.log(s.substring(6,-202));  // verilen negatif sayi 0 olarak kabul eder

// toLowercase touppercase

/* var pangram = "pijamalı hasta yağız şoföre çabucak güvendi"

// console.log(pangram.toUpperCase());
// console.log(pangram.toLocaleUpperCase('tr-TR'));

var Pangram = pangram.toLocaleUpperCase('tr-TR');

console.log(Pangram.toLowerCase());
console.log(Pangram.toLocaleLowerCase()); */

// trim
var s = "                 <-Welcome \t to Clarus\tway->                 "

console.log(s);

console.log(s.trim());
console.log(s.trimLeft());
console.log(s.trimRight());







