// operators

var x = 2;
var y = 5;
var z = 8;

var t = '2';

var u = t -y;

console.log(x+y); // toplama islemi yapiyor
console.log(x+t); // string + integer da ikisini yanyana yaziyor

 console.log(z  - t); // int - string islem yapar
console.log(t  - y); // str - int islem yapiyor.

console.log(typeof u, u);  // sadece toplama durumda concat yapar type string olur. diger durumlarda type number dir.

console.log(z / t); // sonuc yine number cikar


console.log(typeof (5/2));  // type number
console.log((5/2)); // sonuc 2.5
console.log((5%2)); // sonuc 1


var a = 5;
var b = 0;

console.log(a/b);  // inf number olarak gecer, yani tipi numberdir

console.log(typeof Infinity); //sonuc number dir
 


// islem sirasi icin tablo(operatorlerin hangi yone dogru calistigi da yaziyor):   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

var c = 100+50*3  

console.log(c); // sonuc 250 cikar. carpmanin ocleigi vardir.


// Increment decrement

//Increment
var a = 10;

console.log(a++); // artilar a dan sonra ise : once console.log a nin degerini ver sonra a nin degerini arttir demek. burda a nin degeri 10 dur.
console.log(a); // burda a nin degerini tekrar soruldugunde degeri 11 oluyor.

var b = 5;
console.log(b);
console.log(++b); // artilar b den one geldigi icin once b nin degerini artiriyor , sonuc 6 dir
console.log(++b); // degeri 1 kez daha artar sonuc 7 dir.

// decrement

var c = 8;

// console.log(c--); // sonuc 8 dir
// console.log(c); // sonuc 7 dir


// kohootdaki soru:
// var d = c++

// console.log({d},{c}); // artilar c den sonra oldugu icin , d burada 8 olur , fakat bu islemden sonra cnin degeri artik 9dur.

// var d = ++c // burada artilari once yazdigimiz icin, yani atama islemi once yapildigi icin, c yi 1 arttiriyor d ye atiyor ,
// console.log({d},{c});

console.log(c++ + ++c); // c++ = c burada 8 dir fakat islem sonunda degeri 9 olur , ++c=burada c nin degeri yine 1 artiyor ve 10 oluyor , toplamda  18 oluyor.

//---------------

// var input = prompt("Enter age"); // kullanicidan input alma, burada sonuc stringttir, bunu number yapmak icin promptun basina + koyuyoruz :
// var input = +prompt("Enter age"); // kullanicidan input alma

// console.log(input, typeof input);

// ----------------

var c = '8';

console.log(-c);

// ---------------

// comparison operators
// sonuclari her zman boolean deger donduurur.

// var a = 4;
// var b = '4';

// var c = a === b;

// console.log(a == b);
// console.log(c);

// -------

console.log(a !== b);

var a = 'a';
var b = 'A';   // str int karsilastirilsa ascii ye gore bakar

console.log(a.charCodeAt());  // charcode ascii kod karsiligini verir.
console.log(b.charCodeAt());
console.log('A' > 'a');
console.log(50>97);

// ---------------------

console.log('FullStack' <= 'FullSt'); // sirayla harfleri karsilatiriyor.

// logical operrators

// and  &&  ikiside true ise true dondurur
// or  ||  bir tanesi true ise true dondurur
// not !    true yu false , false u true ya cevirir.
// oncelik sirasi not - and - or

var a = (2 || 3)
var a = (0 || 3)


console.log(a);

// ------------------

// var b = (0 && false)
var b = (2 && 3)
console.log(b);

// ------------------

console.log(null && NaN);

// ------------------
// ornek:
var capitalLetter = false;
var symbol = true;
var passLength = true;

var result = capitalLetter && (symbol || passLength);

console.log(!result || 'Try again');

// ------------------


// null ve indefined i ayirt etmek icin ?? nullsish coalescing operartor kullaniliyor.
// ilk deger null veya indefined ise ikinci degeri dondurur, bunun disinda ilk deger null veyaindefined degilse 1. degeri dondurur.


var z;
console.log(z);

console.log(z ?? 'Null veya undefined');

var w = null;

console.log(w ?? z);

var p = 1;

console.log(p ?? 'Null veya undefined');
