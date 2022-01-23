
var f;  //(1) f ye ilk basta birdeger atanmadigi icin undefined verdi.
console.log(typeof f);

f = 5
console.log(typeof f); // (2) tanimlama yapildigi icin tipi number oldu.

f = "merhaba ben string"
console.log(typeof f); // (3) yukarda var ile tanimlama yapildigi icin yeniden bir deger verebliriz. bu sefer tipi string oldu.

console.log(typeof 8); // (4) tipi number
console.log(typeof 8.76); // (5) tipi number
console.log(typeof -74); // (6) tipi number
console.log(typeof 0); // (7) tipi number
console.log(typeof (1/0)); // (8) tipi Number
console.log(typeof (0/1)); // (9) tipi number, islem yapilacagi zaman parantaez icine alinir.
console.log(typeof NaN); // (10) tipi NUMBERDIR
console.log(typeof typeof 5); // (11) sondaki typeof 5 in tipi number cikar, bunu tekrar typeof dersek number i gorecegi icin sonuc string cikar.
console.log((1/0)) // (12) sonucu infinity dir yani number dir.  yukarda(8)de bunun tipine baktigimiz icin sonuc numberdir.
console.log(typeof Infinity) // (13) numberdir.


// STRINGS

var merhaba = 'merhaba'   // (14) 
var selam = "sanada selam"

var bir = "sanada selam\"Mark" // (15) tirnak hatasi yapildigi icin hata veriyor. bu hatayi gidermek icin markin onundeki cift tirnagin onune \ bundan koyuyoruz.

var iki = 'sa"""na"d""""a """sel""am""""\"Mark' //(16) tek tirnak ile baslayip tek tirnak ile bitiridigimiz icin araya istedigimiz kadar cift tirnak koyabliriz.

console.log(bir);
console.log(iki);  //(17) goruldugu gibi hata vermeden yazdirdi.

// (18) string olusturmak icin diger bir tip tirnakta `` budur.

var w = `merhaba """ '''' "" ' dun "'ya ` // (19)
console.log(w);

//(20)
var instructor = 'bella'
var v = `merhaba ${instructor}`  //(21) bu islem ($) sadece `` bu tirnak ile yapilir. yani tek tirnak ve cift tirnak ile yapildiginda olmaz.asagidaki ornek gibi.

console.log(v); // (22)

var teacher = 'john'
var g = 'merhaba ${instructor}'  // (23) tek tirnak kullanildigi zaman bu islem olmaz.

console.log(g);   // (24)  merhaba ${instructor} seklinde cikti verir.

//(25) ayni islemi console.log un icinde de yapabliriz.
console.log(`${instructor}`); //(26) cikti bella olur.

// booleans:

console.log(Boolean("")); //(27) false dondurur
console.log(Boolean(3<5)); //(27) true dondurur
console.log(Boolean(3>5)); //(27) false dondurur
console.log(Boolean(3==5)); //(27) false dondurur
console.log(Boolean(0)); //(27) false dondurur
console.log(Boolean("0")); //(27) true dondurur

var j ;
console.log(Boolean(j)); //(27)false dondurur. j ye henuz bir deger atanmadigi icin
console.log(Boolean(null)); //(27) false dondurur

console.log(typeof j); //(27) udefined verir
console.log(typeof null); //(27) null n type i objecttir. js nin bug i.

console.log(null==false); //(27) false verdi
console.log(null==true); //(27) false verdi

console.log(null==undefined); //(27) true verdi
console.log(null===undefined); //(27) false verdi

//(28) === bu islem her seyi ile ayni mi anlaminda sorgular. Sadece degere degil ayni zamanda tipine de bakar.

console.log(2 == '2'); //(29) true
console.log(2 === '2'); //(29) false,cunku degerleri ayni fakat tipleri farkli. 

console.log(2  + '2'); //(30) 22 verir
console.log(2  + +'2'); //(30) 4 verir. string 2 nin onune konan + bunu number yapar.
